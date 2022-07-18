import { Inject, Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Subject } from 'rxjs';
import { GeopackageService, GeoPackageTableEvent } from './geopackage.service';

export interface MapEvent {
  center?: [number[], number[]], geoJSON?: any
}

@Injectable({
  providedIn: 'root'
})


export class MapService {

  private drawFeatureSource = new Subject<MapEvent>();
  private eraseFeatureSource = new Subject<MapEvent>();
  private clearHighlightsSource = new Subject<MapEvent>();
  private featureLayerSource = new Subject<MapEvent>();
  private clearLayerSource = new Subject<MapEvent>();



  private zoomToSource = new Subject<MapEvent>();
  
  zoomToSource$ = this.zoomToSource.asObservable();
  drawFeatureSource$ = this.drawFeatureSource.asObservable();
  eraseFeatureSource$ = this.eraseFeatureSource.asObservable();
  clearHighightsSource$ = this.clearHighlightsSource.asObservable();
  featureLayerSource$ = this.featureLayerSource.asObservable();
  clearLayerSource$ = this.featureLayerSource.asObservable();



  // method to call from zoomto component
  centerMap(center: [number[], number[]]): void {
    // trigger all listeners
    this.zoomToSource.next({
      center: center
    });
  }


  drawFeature(geoJSON: any): void {
    this.drawFeatureSource.next({
      geoJSON: geoJSON
    })
  }

  eraseFeature(geoJSON: any): void {
    if (geoJSON == null) {
      this.eraseFeatureSource.next({
        geoJSON: geoJSON
      })
    }
  }

  clearHighights(): void {
    this.clearHighlightsSource.next({})
  }


  dblClickZoom(geoJSON: any): void {
    this.featureLayerSource.next({
      geoJSON: geoJSON
    })
  }


  clearLayer(): void {
    this.clearLayerSource.next({})
  }

}
