import { Component, Inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { FeatureDao } from '@ngageoint/geopackage/dist/lib/features/user/featureDao';
import { FeatureRow } from '@ngageoint/geopackage/dist/lib/features/user/featureRow';
import { TileDao } from '@ngageoint/geopackage/dist/lib/tiles/user/tileDao';
import { TileRow } from '@ngageoint/geopackage/dist/lib/tiles/user/tileRow';
import { table } from 'console';
import * as L from 'leaflet';
import { GeopackageService } from '../geopackage.service';

@Component({
  selector: 'app-geopackage-tile-table',
  templateUrl: './geopackage-tile-table.component.html',
  styleUrls: ['./geopackage-tile-table.component.css']
})
export class GeopackageTileTableComponent implements OnInit {

  @Input() tableName: string = ""
  @Input() tileDao: TileDao<TileRow> | undefined

  count: number = 0

  constructor(
    @Inject(GeopackageService) private geopackageService: GeopackageService
  ) { }
  
  ngOnInit(): void {
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.tileDao = this.geopackageService.getGeoPackageTileDao(this.tableName)
    this.count = this.tileDao?.getCount() ?? 0
    this.geopackageService.activateTileLayer(this.tableName)
  }

  



}
