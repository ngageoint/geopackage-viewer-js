const css = require('./includes.css');
const Promise = require('promise-polyfill');
if (!window.Promise) {
  window.Promise = Promise;
}
const async = require('async'),
  reproject = require('reproject'),
  L = require('leaflet'),
  $ = require('jquery'),
  proj4 = require('proj4'),
  Mustache = require('mustache'),
  fileType = require('file-type'),
  FileSaver = require('file-saver'),
  path = require('path'),
  fs = require('fs'),
  _ = require('lodash'),
  jszip = require('jszip');

window.proj4 = proj4;
window.async = async;
window.$ = $;
window.L = L;
window.fileType = fileType;
window.reproject = reproject;
window.Mustache = Mustache;
window.FileSaver = FileSaver;
window.path = path;
window.fs = fs;
window._ = _;
window.jszip = jszip;

require('leaflet-mapkey-icon');
require('leaflet-basemaps');

const gp = require('@ngageoint/geopackage/dist/geopackage.min');
gp.setSqljsWasmLocateFile(filename => `https://unpkg.com/@ngageoint/geopackage@4.1.0/dist/` + filename);

window.GeoPackage = gp;
window.GeoJSONToGeoPackage = require('@ngageoint/geopackage-geojson-js').GeoJSONToGeoPackage;
window.KMLToGeoPackage = require('@ngageoint/geopackage-kml-js').KMLToGeoPackage;
window.ShapefileToGeoPackage = require('@ngageoint/geopackage-shapefile-js').ShapefileToGeoPackage;
window.CSVToGeoPackage = require('@ngageoint/geopackage-csv-js').CSVToGeoPackage;
window.PBFToGeoPackage = require('@ngageoint/geopackage-pbf-js').PBFToGeoPackage;
window.XYZToGeoPackage = require('@ngageoint/geopackage-xyz-js').XYZToGeoPackage;
window.MBTilesToGeoPackage = require('@ngageoint/geopackage-mbtiles-js').MBTilesToGeoPackage;
