import { Injectable } from '@angular/core';
import { GeoPackageAPI, setSqljsWasmLocateFile, GeoPackage } from '@ngageoint/geopackage/dist/geopackage.min';
import { FeatureDao } from '@ngageoint/geopackage/dist/lib/features/user/featureDao';
import { FeatureRow } from '@ngageoint/geopackage/dist/lib/features/user/featureRow';
import { Subject } from 'rxjs';

export interface GeoPackageEvent {
  geopackage: GeoPackage
}

export interface GeoPackageTableEvent {
  tableNames: [string]
}

@Injectable({
  providedIn: 'root'
})
export class GeopackageService {

  private geopackage: GeoPackage | undefined;

  private geopackageOpenedSource = new Subject<GeoPackageEvent>();
  private geopackageTablesUpdatedSource = new Subject<GeoPackageTableEvent>();

  geopackageOpened$ = this.geopackageOpenedSource.asObservable();
  geopackageTablesUpdated$ = this.geopackageTablesUpdatedSource.asObservable();

  // method to call when the geopackage is opened
  geopackageOpened(geopackage: GeoPackage): void {
    // trigger all listeners
    this.geopackageOpenedSource.next({
      geopackage: geopackage
    });
  }

  getGeoPackageFeatureDao(tableName: string): FeatureDao<FeatureRow> | undefined {
    // https://ngageoint.github.io/geopackage-js/classes/geopackage.html#getfeaturedao
    console.log('getting the feature dao', tableName)
    return this.geopackage?.getFeatureDao(tableName)
  }

  async setGeoPackageArray(bytes: ArrayBuffer) {
  
    console.log("bytes are", bytes as Buffer)
    try {
      // got the bytes, open the GeoPackage with the library
      // https://ngageoint.github.io/geopackage-js/classes/geopackageapi.html#open
      this.geopackage = await GeoPackageAPI.open(bytes as Buffer)
      // trigger this even for any listeners
      this.geopackageOpened(this.geopackage)
      console.log(this.geopackage)
    } catch (e) {
      console.error("e", e)
    }
  
  }

  constructor() { 
    setSqljsWasmLocateFile(filename => {
      // leave this for now.  We will update it to the geopackage wasm after we publish
      return `https://unpkg.com/rtree-sql.js@1.7.0/dist/${filename}`
      // return `https://unpkg.com/@ngageoint/geopackage@4.1.0/dist/${filename}`;
    })
  }
}
