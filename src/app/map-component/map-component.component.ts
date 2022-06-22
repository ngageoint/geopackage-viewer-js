import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { GeoPackageAPI, setSqljsWasmLocateFile } from '@ngageoint/geopackage';
import { GeopackageService } from '../geopackage.service';
const geoPackageCache = {};


@Component({
  selector: 'app-map',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map : any;
  private geopackageservice: GeopackageService = new GeopackageService;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 25,-25 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    L.geoPackageTileLayer({
      geoPackageUrl: 'http://ngageoint.github.io/GeoPackage/examples/rivers.gpkg',
      layerName: 'rivers_tiles'
    }).addTo(this.map);
    
    tiles.addTo(this.map);
  
    // const r = new FileReader()
    // r.onload = () => {
    //   const array = new Uint8Array(r.result as ArrayBuffer);
    //   console.log("AAAAAAAAAAAAAAAAAAAAAAAA") 
    //   // set the array of bytes on the geopackage service
    //   this.geopackageservice.setGeoPackageArray(array);

    // }
  
  
  }

    
  
  
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
  
  
  

}