import { Component, Inject, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-zoomto-button',
  templateUrl: './zoomto-button.component.html',
  styleUrls: ['./zoomto-button.component.css']
})
export class ZoomtoButtonComponent implements OnInit {

  constructor(
    @Inject(MapService) private mapService: MapService

  ) { }

  ngOnInit(): void {
  
  this.mapService.centerMap([[45,-45], [0,0]])
    



  }

  



}
