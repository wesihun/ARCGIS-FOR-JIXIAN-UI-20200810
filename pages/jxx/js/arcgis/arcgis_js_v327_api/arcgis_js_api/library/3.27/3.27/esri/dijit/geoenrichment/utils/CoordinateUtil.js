// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/CoordinateUtil",["esri/geometry/webMercatorUtils","esri/geometry/jsonUtils"],function(e,f){var b={},d=[4326,102100,102113,3857];b.WGS_84_WKID=4326;b.WEB_MERCATOR_WKID=102100;b.getSupportedWKIDs=function(){return d.slice()};b.testSpatialReferenceWKID=function(a){a=d.indexOf(Number(a&&"object"===typeof a?a.wkid:a));return 0<=a?d[0===a?0:1]:0};b.isWebMercator=function(a){return 102100===b.testSpatialReferenceWKID(a)};b.isWGS84=function(a){return 4326===b.testSpatialReferenceWKID(a)};
b.getGeometryConverter=function(a,c){a=b.testSpatialReferenceWKID(a);c=b.testSpatialReferenceWKID(c);return a&&c&&a!==c?4326===a?e.geographicToWebMercator:e.webMercatorToGeographic:null};b.toWGS84=function(a){return b.toSpatialReference(a,4326)};b.toWebMercator=function(a){return b.toSpatialReference(a,102100)};b.toSpatialReference=function(a,c){a&&!a.toJson&&(a=f.fromJson(a));c=b.getGeometryConverter(a&&a.spatialReference,c);return null!=c?c(a):a};return b});