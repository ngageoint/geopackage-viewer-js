import { AfterViewInit, Component, Inject } from '@angular/core';
import * as L from 'leaflet';
import { GeoPackageAPI, NumberFeaturesTile, setSqljsWasmLocateFile } from '@ngageoint/geopackage';
import { GeopackageService } from '../geopackage.service';
import '@ngageoint/leaflet-geopackage';
import { ignoreElements } from 'rxjs';

const geoPackageCache = {};



@Component({
  selector: 'app-map',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map : any;
  private layers: { [key: string]: any } = {};

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

    tiles.addTo(this.map);


  
  }

    
  
  
  constructor(
    @Inject(GeopackageService) private geopackageService: GeopackageService
  ) { }


  ngAfterViewInit(): void {
    this.initMap();
      // When this component is initialized, subscribe to geopackage opened events
      this.geopackageService.activateFeatureLayer$.subscribe(event => {
        console.log(`activate feature layer`, event)
        // this.name = event.geopackage.name
        // this.tables = event.geopackage.getTables()
 
        const tableLayer = new L.GridLayer({ noWrap: true, pane: 'overlayPane' });

        const ft = this.geopackageService.getFeatureTiles(event.tableNames[0]);
        ft.maxFeaturesPerTile = 10000;
        ft.maxFeaturesTileDraw = new NumberFeaturesTile();

        // @ts-ignore
        tableLayer.createTile = function(tilePoint, done): HTMLElement {
          const canvas = L.DomUtil.create('canvas', 'leaflet-tile');
          canvas.width = 256;
          canvas.height = 256;
          ft.drawTile(tilePoint.x, tilePoint.y, tilePoint.z, canvas).then(() => {
            done(undefined, canvas);
          });


          return canvas;
        };
        console.log(`adding feature layer ${event.tableNames[0]}`, tableLayer)
        this.layers[event.tableNames[0]] = tableLayer
        console.log(`this.layers is now`, this.layers)
        this.map.addLayer(tableLayer);
      })

      this.geopackageService.activateTileLayer$.subscribe(event => {
        
        // these are not the correct zooms for the map.  Need to convert the GP zooms to leaflet zooms
        // const maxZoom = tileDao.maxWebMapZoom;
        // const minZoom = tileDao.minWebMapZoom;
        const tableLayer = new L.GridLayer({ noWrap: true, pane: 'tilePane' });
        const gp = this.geopackageService;
        // @ts-ignore
        tableLayer.createTile = function(tilePoint) {
          const canvas = L.DomUtil.create('canvas');
          const size = this.getTileSize();
          canvas.width = size.x;
          canvas.height = size.y;


          const div = L.DomUtil.create('div', 'leaflet-tile');
          const progressDiv = L.DomUtil.create('div', 'progress-grid-positioner');
          progressDiv.innerHTML =
            '<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
          div.appendChild(canvas);


          div.appendChild(progressDiv);


          console.time('Draw tile ' + tilePoint.x + ', ' + tilePoint.y + ' zoom: ' + tilePoint.z);
          gp     
            .xyzTileScaled(event.tableNames[0], tilePoint.x, tilePoint.y, tilePoint.z, size.x, size.y, canvas, 2, 2)
            .then(function() {
              console.timeEnd('Draw tile ' + tilePoint.x + ', ' + tilePoint.y + ' zoom: ' + tilePoint.z);
              div.removeChild(progressDiv);
              // done(null, canvas);
            });
          return div;
        };
        this.layers[event.tableNames[0]] = tableLayer;
        console.log('this.layers is', this.layers)
        this.map.addLayer(tableLayer);
      })


      this.geopackageService.deactivateFeatureLayer$.subscribe(event => {
        this.map.removeLayer(this.layers[event.tableNames[0]])
      })

      
    
  }
  


  

}

// L.GridLayer.DebugCoords = L.GridLayer.extend({
//   createTile: function (coords) {
//       var tile = document.createElement('div');
//       tile.innerHTML = [coords.x, coords.y, coords.z].join(', ');
//       tile.style.outline = '1px solid red';
//       return tile;
//   }
// });

// L.gridLayer.debugCoords = function(opts) {
//   return new L.GridLayer.DebugCoords(opts);
// };
