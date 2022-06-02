import { Injectable } from '@angular/core';
import { GeoPackageAPI } from '@ngageoint/geopackage';

@Injectable({
  providedIn: 'root'
})
export class GeopackageService {

  async setGeoPackageArray(bytes: ArrayBuffer) {
  
    console.log("bytes are", bytes)
    let geopackage = await GeoPackageAPI.open(bytes as Buffer)
    console.log(geopackage)
  
  }

  constructor() { }
}
