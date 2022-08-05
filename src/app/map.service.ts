import { Inject, Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Subject } from 'rxjs';
import { GeopackageService, GeoPackageTableEvent } from './geopackage.service';
import { MapComponent } from './map-component/map-component.component';

export interface MapEvent {
  center?: [number[], number[]], geoJSON?: any, bounds?:{ north: number, south: number, west: number, east: number, zoom: number}
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
  private drawFeatureNoZoomSource = new Subject<MapEvent>();
  private setBoundsSource = new Subject<MapEvent>();
  private drawTileNoZoomSource = new Subject<MapEvent>();
  private getImageSource = new Subject<MapEvent>();







  private zoomToSource = new Subject<MapEvent>();
  
  zoomToSource$ = this.zoomToSource.asObservable();
  drawFeatureSource$ = this.drawFeatureSource.asObservable();
  eraseFeatureSource$ = this.eraseFeatureSource.asObservable();
  clearHighightsSource$ = this.clearHighlightsSource.asObservable();
  featureLayerSource$ = this.featureLayerSource.asObservable();
  clearLayerSource$ = this.clearLayerSource.asObservable();
  drawFeatureNoZoom$ = this.drawFeatureNoZoomSource.asObservable();
  setBoundsSource$ = this.setBoundsSource.asObservable();
  drawTileNoZoomSource$ = this.drawTileNoZoomSource.asObservable();
  getImageSource$ = this.getImageSource.asObservable();






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

  noZoom(geoJSON: any): void {
    this.drawFeatureNoZoomSource.next({
      geoJSON: geoJSON
    })
  }


  clearLayer(): void {
    this.clearLayerSource.next({})
  }


  setBounds(north: any, south: any, east: any, west: any, zoom: any): void {
    this.setBoundsSource.next({
      bounds: {north: north, south: south, east: east, west: west, zoom: zoom}
    })
  }

  drawTileNoZoom(geoJSON: any): void {
    this.drawTileNoZoomSource.next({
      geoJSON: geoJSON
    }) 
  }

  getTileImage(geoJSON: any): void {
    this.getImageSource.next({
      geoJSON: geoJSON
    }) 
  }


  


}
