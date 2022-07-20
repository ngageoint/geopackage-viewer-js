import { Component, Inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { FeatureDao } from '@ngageoint/geopackage/dist/lib/features/user/featureDao';
import { FeatureRow } from '@ngageoint/geopackage/dist/lib/features/user/featureRow';
import { GeopackageService } from '../geopackage.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MapService } from '../map.service';
import { MapComponent } from '../map-component/map-component.component';
import { TileDao } from '@ngageoint/geopackage/dist/lib/tiles/user/tileDao';
import { TileRow } from '@ngageoint/geopackage/dist/lib/tiles/user/tileRow';

export interface TileTableRow {
  fid: any;
  type: any;
  geoJSON: any;
}



@Component({
  selector: 'app-tilestab',
  templateUrl: './tilestab.component.html',
  styleUrls: ['./tilestab.component.css']
})
export class TilestabComponent implements OnInit {

  @Input() tab: any = {}
  @Input() tableName: string = ""
  @Input() tileDao: TileDao<TileRow> | undefined
  @Input() columns: Array<any> = [];
  //  @Input() columns: any = {}
  @Input() tableInfo: any;
  @Input() tileInfo: any;
  @Input() minLongitude: any
  @Input() minLatitude: any
  @Input() maxLongitude: any
  @Input() maxLatitude: any

  north: any
  south: any
  east: any
  west: any
  zoom: any
  count: number = 0
  
  tiles: Array<any> = [];
  displayedColumns: Array<string> = ['select'];
  
  constructor(
    @Inject(GeopackageService) private geopackageService: GeopackageService,
    @Inject(MapService) private mapService: MapService,

  ) { }

  ngOnInit(): void {
    this.mapService.setBoundsSource$.subscribe(event => {
      var bounds = event.bounds
      this.north = bounds?.north.toFixed(3)
      this.south = bounds?.south.toFixed(3)
      this.east = bounds?.east.toFixed(3)
      this.west = bounds?.west.toFixed(3)
      this.zoom = bounds?.zoom
      
      this.tiles.push(this.geopackageService.populateTiles(bounds, this.tableName, this.zoom).tiles)
      

    })

    for (const column of this.columns) {
      this.displayedColumns.push(column.name)
    }


    


    // loadTiles = function(tableName, zoom, tilesElement) {
    //   const mapBounds = map.getBounds();
    //   if (imageOverlay) map.removeLayer(imageOverlay);
    //   currentTile = {};
    
    //   const tilesTableTemplate = $('#all-tiles-template').html();
    //   Mustache.parse(tilesTableTemplate);
    
    //   const tiles = geoPackage.getTilesInBoundingBoxWebZoom(
    //     tableName,
    //     zoom,
    //     Math.max(-180, mapBounds.getWest()),
    //     Math.min(mapBounds.getEast(), 180),
    //     mapBounds.getSouth(),
    //     mapBounds.getNorth(),
    //   );
    //   if (!tiles || !tiles.tiles || !tiles.tiles.length) {
    //     tilesElement.empty();
    //     tilesElement.html(
    //       '<div class="section-title">No tiles exist in the GeoPackage for the current bounds and zoom level</div>',
    //     );
    //     return;
    //   }
    //   const rendered = Mustache.render(tilesTableTemplate, tiles);
    //   tilesElement.empty();
    //   tilesElement.append(rendered);
    // };
    
    //     // this.features = this.geopackageService.iterateGeoJSONFeatures(this.tableName);
    // const each = this.geopackageService.iterateGeoJSONFeatures(this.tableName);
    // const promise = Promise.resolve();
    // for (const row of each) {
    //   var feature: any = {};
    //   feature.tableName = this.tableName; //tableName.replace(/\s/g, '_');
    //   feature.values = [];
    //   feature.row = row;
    //   console.log(JSON.stringify(feature, null, 2))
    //   // this.features.push({
    //   //   fid: row.properties!['fid'], 
    //   //   type: row.geometry.type
    //   // });
    //   row.properties!['geoJSON'] = row.geometry;
    //   row.properties!['geom'] = row.geometry.type
    //   this.tiles.push(row.properties)
          
    // }
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.tileDao = this.geopackageService.getGeoPackageTileDao(this.tableName)
    this.count = this.tileDao?.getCount() ?? 0
    this.tableInfo = this.geopackageService.getGeoPackageTileDao(this.tableName)
  }

  toggleTile(row?: TileTableRow) {
    this.mapService.clearLayer()
    this.mapService.drawTileNoZoom(row!.geoJSON)
  }
  
  
  selectedRow: any;



  zoomTo(row?: TileTableRow) {
    console.log("doubleclick is working")
    this.mapService.clearLayer();
    this.mapService.dblClickZoom(row?.geoJSON);
  }

  hoverOver(row?: TileTableRow) {
    console.log("hover over works")
    this.mapService.clearHighights();
    this.mapService.drawTileNoZoom(row?.geoJSON);
  }

  dataSource = new MatTableDataSource<TileTableRow>(this.tiles);
  selection = new SelectionModel<TileTableRow>(true, []);

}

