import { Inject, Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Subject } from 'rxjs';
import { GeopackageService } from './geopackage.service';

export interface MapEvent {
  center: [number[], number[]]
}

@Injectable({
  providedIn: 'root'
})


export class MapService {


  private zoomToSource = new Subject<MapEvent>();
  
  zoomToSource$ = this.zoomToSource.asObservable();

  // method to call from zoomto component
  centerMap(center: [number[], number[]]): void {
    // trigger all listeners
    this.zoomToSource.next({
      center: center
    });
  }




}
