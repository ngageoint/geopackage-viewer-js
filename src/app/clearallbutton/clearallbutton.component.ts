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
import { BoundingBox } from '@ngageoint/geopackage';
import { bounds } from 'leaflet';

@Component({
  selector: 'app-clearallbutton',
  templateUrl: './clearallbutton.component.html',
  styleUrls: ['./clearallbutton.component.css']
})
export class ClearallbuttonComponent implements OnInit {

  constructor(
    @Inject(GeopackageService) private geopackageService: GeopackageService,
    @Inject(MapService) private mapService: MapService,
  ) { }

  ngOnInit(): void {
  }

  clearAll() {
    this.mapService.clearHighights()
    this.mapService.clearLayer()
    this.mapService.clearTileLayer()
  }



}
