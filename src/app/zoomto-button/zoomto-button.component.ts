import { Component, Inject, Input, OnInit } from '@angular/core';
import { GeopackageService } from '../geopackage.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-zoomto-button',
  templateUrl: './zoomto-button.component.html',
  styleUrls: ['./zoomto-button.component.css']
})
export class ZoomtoButtonComponent implements OnInit {
  @Input() minLongitude: any
  @Input() minLatitude: any
  @Input() maxLongitude: any
  @Input() maxLatitude: any
  @Input() zoom: any


  toggleZoomTo() {
    this.mapService.centerMap([[this.minLongitude,this.minLatitude], [this.maxLongitude,this.maxLatitude]])
  }



  constructor(
    @Inject(MapService) private mapService: MapService,
    @Inject(GeopackageService) private geopackageService: GeopackageService

  ) { }

  ngOnInit(): void {
  
  // this.mapService.centerMap([[45,-45], [0,0]])
    



  }

  



}
