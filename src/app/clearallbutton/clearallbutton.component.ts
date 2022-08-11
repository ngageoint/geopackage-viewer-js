import { Component, Inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { GeopackageService } from '../geopackage.service';
import { MapService } from '../map.service';


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
