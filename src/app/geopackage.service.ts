import { Injectable } from '@angular/core';
import { GeoPackageAPI, setSqljsWasmLocateFile, GeoPackage, FeatureTiles, BoundingBox } from '@ngageoint/geopackage/dist/geopackage.min';
import { FeatureDao } from '@ngageoint/geopackage/dist/lib/features/user/featureDao';
import { FeatureRow } from '@ngageoint/geopackage/dist/lib/features/user/featureRow';
import { TileDao } from '@ngageoint/geopackage/dist/lib/tiles/user/tileDao';
import { TileRow } from '@ngageoint/geopackage/dist/lib/tiles/user/tileRow';
import { table } from 'console';
import { map, Subject } from 'rxjs';
import { Feature } from 'geojson';
import * as L from 'leaflet';
import { imageOverlay } from 'leaflet';
import {  } from "module";

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
  private activateFeatureLayerSource = new Subject<GeoPackageTableEvent>();
  private deactivateFeatureLayerSource = new Subject<GeoPackageTableEvent>();

  private activateTileLayerSource = new Subject<GeoPackageTableEvent>();
  private deactivateTileLayerSource = new Subject<GeoPackageTableEvent>();

  private geopackageOpenedSource = new Subject<GeoPackageEvent>();
  private geopackageTablesUpdatedSource = new Subject<GeoPackageTableEvent>();

  geopackageOpened$ = this.geopackageOpenedSource.asObservable();
  geopackageTablesUpdated$ = this.geopackageTablesUpdatedSource.asObservable();
  activateFeatureLayer$ = this.activateFeatureLayerSource.asObservable();
  deactivateFeatureLayer$ = this.deactivateFeatureLayerSource.asObservable();

  activateTileLayer$ = this.activateTileLayerSource.asObservable();
  deactivateTileLayer$ = this.deactivateTileLayerSource.asObservable();

  // method to call when the geopackage is opened
  geopackageOpened(geopackage: GeoPackage): void {
    // trigger all listeners
    this.geopackageOpenedSource.next({
      geopackage: geopackage
    });
  }

  activateFeatureLayer(tablename: string): void {
    console.log("activated layer" + tablename)
    this.activateFeatureLayerSource.next({
      tableNames: [tablename]
    })
  }

  deactivateFeatureLayer(tablename: string): void {
    console.log("DEactivated layer" + tablename)
    this.deactivateFeatureLayerSource.next({
      tableNames: [tablename]
    })
  }

  getFeatureTiles(tablename: string): FeatureTiles {
    const featureDao = this.getGeoPackageFeatureDao(tablename)
    return new FeatureTiles(featureDao!, 256, 256)
  }

  activateTileLayer(tablename: string): void {
    console.log("activated tile" + tablename)
    this.activateTileLayerSource.next({
      tableNames: [tablename]
    })
  }

  deactivateTileLayer(tablename: string): void {
    console.log("DEactivated tile" + tablename)
    this.deactivateTileLayerSource.next({
      tableNames: [tablename]
    })
  }



 populateTiles(bounds: any, tableName: any, zoom: any) {
  const mapBounds = bounds
  const tiles = this.geopackage!.getTilesInBoundingBoxWebZoom(
      tableName,
      zoom,
      Math.max(-180, mapBounds.west),
      Math.min(mapBounds.east, 180),
      mapBounds.south,
      mapBounds.north,
    );
    console.log(JSON.stringify(tiles, null, 2))
    return tiles;
 }

  currentTile = {};
  tileImage(
    tileColumn: any,
    tileRow: any,
    zoom: any,
    minLongitude: any,
    minLatitude: any,
    maxLongitude: any,
    maxLatitude: any,
    projection: any,
    tableName: any,
   ) {
    
  }

  iterateGeoJSONFeatures(tableName: string, boundingBox?: BoundingBox): IterableIterator<Feature> & object {
    return this.geopackage!.iterateGeoJSONFeatures(tableName, boundingBox)
  }

  getGeoPackageFeatureDao(tableName: string): FeatureDao<FeatureRow> | undefined {
    // https://ngageoint.github.io/geopackage-js/classes/geopackage.html#getfeaturedao
    console.log('getting the feature dao', tableName)
    return this.geopackage?.getFeatureDao(tableName)
  }

  getGeoPackageTileDao(tableName: string): TileDao<TileRow> | undefined {
    // https://ngageoint.github.io/geopackage-js/classes/geopackage.html#getfeaturedao
    console.log('getting the feature dao', tableName)
    return this.geopackage?.getTileDao(tableName)
  }

  xyzTileScaled(table: string, x: number, y: number, z: number, width?: number, height?: number, canvas?: any, zoomIn?: 2, zoomOut?: 2): Promise<any> {
    return this.geopackage?.xyzTileScaled(table, x, y, z, width, height, canvas, zoomIn, zoomOut)!
  }

  getInfoForFeatureTable(tableName: string): any {
    var featureDao = this.getGeoPackageFeatureDao(tableName)
    return this.geopackage?.getInfoForTable(featureDao!)
  }

  getInfoForTileTable(tableName: string): any {
    var tileDao = this.getGeoPackageTileDao(tableName)
    return this.geopackage?.getInfoForTable(tileDao!)
  }

  getTileFromTable(tableName: any, zoom: any, tileRow: any, tileColumn: any): any {
    const tile = this.geopackage?.getTileFromTable(tableName, zoom, tileRow, tileColumn)
    if (tile == null) {
      return
    }
    const tileData = tile.tileData;
    const type = "image/png"
    let binary = '';
    const bytes = tileData;
    const len = bytes?.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64Data = btoa(binary);
    const url = 'data:' + type + ';base64,' + base64Data;
    return url
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
