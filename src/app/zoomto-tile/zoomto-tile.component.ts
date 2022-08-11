import { Component, Inject, Input, OnInit } from '@angular/core';
import { GeopackageService } from '../geopackage.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-zoomto-tile',
  templateUrl: './zoomto-tile.component.html',
  styleUrls: ['./zoomto-tile.component.css']
})
export class ZoomtoTileComponent implements OnInit {
  @Input() minLongitude: any
  @Input() minLatitude: any
  @Input() maxLongitude: any
  @Input() maxLatitude: any
  @Input() zoom: any


  toggleZoomTo() {
    this.mapService.centerMap([[this.minLatitude, this.minLongitude], [this.maxLatitude, this.maxLongitude]])
    }



  constructor(
    @Inject(MapService) private mapService: MapService,
    @Inject(GeopackageService) private geopackageService: GeopackageService

  ) { }

  ngOnInit(): void {
  
  // this.mapService.centerMap([[45,-45], [0,0]])
    



  }

}
