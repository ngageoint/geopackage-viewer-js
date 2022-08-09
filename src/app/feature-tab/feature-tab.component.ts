import { Component, Inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { FeatureDao } from '@ngageoint/geopackage/dist/lib/features/user/featureDao';
import { FeatureRow } from '@ngageoint/geopackage/dist/lib/features/user/featureRow';
import { GeopackageService } from '../geopackage.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MapService } from '../map.service';

export interface FeatueTableRow {
  fid: any;
  type: any;
  geoJSON: any;
}



@Component({
  selector: 'app-feature-tab',
  templateUrl: './feature-tab.component.html',
  styleUrls: ['./feature-tab.component.css']
})


export class FeatureTabComponent implements OnInit {
  @Input() tab: any = {}
  @Input() tableName: string = ""
  @Input() featureDao: FeatureDao<FeatureRow> | undefined
  @Input() columns: Array<any> = [];

  @Input() minLongitude: any
  @Input() minLatitude: any
  @Input() maxLongitude: any
  @Input() maxLatitude: any
  @Input() zoom: any

  count: number = 0
  tableInfo: any;
  features: Array<any> = [];
  displayedColumns: Array<string> = ['select'];
  
  constructor(
    @Inject(GeopackageService) private geopackageService: GeopackageService,
    @Inject(MapService) private mapService: MapService,

  ) { }





  ngOnInit(): void {
    
    // this.features = this.geopackageService.iterateGeoJSONFeatures(this.tableName);
    const each = this.geopackageService.iterateGeoJSONFeatures(this.tableName);
    const promise = Promise.resolve();
    for (const row of each) {
      var feature: any = {};
      feature.tableName = this.tableName; //tableName.replace(/\s/g, '_');
      feature.values = [];
      feature.row = row;
      // console.log(JSON.stringify(feature, null, 2))
      // this.features.push({
      //   fid: row.properties!['fid'], 
      //   type: row.geometry.type
      // });
      row.properties!['geoJSON'] = row.geometry;
      row.properties!['geom'] = row.geometry.type
      this.features.push(row.properties)
          
    }
    console.log(JSON.stringify(this.columns, null, 2))
    
    
    
    for (const column of this.columns) {
      this.displayedColumns.push(column.name)
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.featureDao = this.geopackageService.getGeoPackageFeatureDao(this.tableName)
    this.count = this.featureDao?.getCount() ?? 0
    this.tableInfo = this.geopackageService.getInfoForFeatureTable(this.tableName)
  }


  dataSource = new MatTableDataSource<FeatueTableRow>(this.features);
  selection = new SelectionModel<FeatueTableRow>(true, []);



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }




  toggleFeature(row?: FeatueTableRow) {
    this.mapService.clearLayer()
    this.mapService.noZoom(row!.geoJSON)
  }
  selectedRow: any;



  zoomTo(row?: FeatueTableRow) {
    console.log("doubleclick is working")
    this.mapService.clearLayer();
    this.mapService.dblClickZoom(row?.geoJSON);
  }

  hoverOver(row?: FeatueTableRow) {
    console.log("hover over works")
    this.mapService.clearHighights();
    this.mapService.drawFeature(row?.geoJSON);
  }
  
  // const geoJson = geoPackage.getFeature(tableName, featureId);
  // geoJson.properties.tableName = tableName;
  // featureLayer.addData(geoJson);
  // featureLayer.bringToFront();
  // if (zoom) {
  //   map.fitBounds(featureLayer.getBounds());
  // }


}
