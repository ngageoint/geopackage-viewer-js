import { Injectable } from '@angular/core';
import { GeoPackageAPI, setSqljsWasmLocateFile } from '@ngageoint/geopackage/dist/geopackage.min';

@Injectable({
  providedIn: 'root'
})
export class GeopackageService {

  async setGeoPackageArray(bytes: ArrayBuffer) {
  
    console.log("bytes are", bytes as Buffer)
    try {
    let geopackage = await GeoPackageAPI.open(bytes as Buffer)
    console.log(geopackage)
    } catch (e) {
      console.error("e", e)
    }
  
  }

  constructor() { 
    setSqljsWasmLocateFile(filename => `https://unpkg.com/@ngageoint/geopackage@4.1.0/dist/` + filename);
  }
}
