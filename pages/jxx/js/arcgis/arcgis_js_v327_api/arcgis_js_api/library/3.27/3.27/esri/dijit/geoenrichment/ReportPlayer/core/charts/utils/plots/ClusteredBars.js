// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/ClusteredBars",["dojo/_base/declare","./_ClusteredBarsBase"],function(k,l){return k(l,{_drawBar:function(b,a,c,e,h,d,f,g){this._drawBarBackground(b,a,c,e,h,d,f,g);a=this._plotFill(e.series.fill,h,d);a=this._shapeFill(a,c);b=this.createRect(f,b,c).setFill(a).setStroke(e.series.stroke);f.dyn.fill=b.getFill();f.dyn.stroke=b.getStroke();return{shape:b,rect:c}},_drawBarBackground:function(b,a,c,e,h,d,f,g){e.series.showColumnBarBackground&&
(a=a[a.valueProp],this.createRect(f,b,{x:0>a?d.l:d.l+g,y:c.y,width:0>a?g:h.width-d.l-g-d.r,height:c.height}).setFill(e.series.columnBarBackgroundColor))}})});