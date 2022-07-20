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
      
      var newlocalvariable = this.geopackageService.populateTiles(bounds, this.tableName, this.zoom)
      console.log(JSON.stringify(newlocalvariable.tiles, null, 2))

      this.tiles = newlocalvariable.tiles
      console.log(JSON.stringify(this.tiles, null, 2))

    })

    for (const column of this.columns) {
      this.displayedColumns.push(column.name)
    }

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
    console.log(row)
    this.mapService.clearHighights();
    this.mapService.noZoom(row?.geoJSON);
  }

  dataSource = new MatTableDataSource<TileTableRow>(this.tiles);
  selection = new SelectionModel<TileTableRow>(true, []);

}

