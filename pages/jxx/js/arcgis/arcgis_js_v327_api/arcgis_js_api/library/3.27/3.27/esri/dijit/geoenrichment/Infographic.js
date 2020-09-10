// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/Infographic","require module ../../declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/Deferred ../_EventedWidget ./DataProvider ./Geoenrichment ./config dojo/on ../../tasks/geoenrichment/GeoenrichmentTask ../../tasks/geoenrichment/RingBuffer dojo/dom-class ./_Invoke ./utils".split(" "),function(d,h,g,c,k,l,m,n,p,q,f,r,t,u,e,v,w){function x(a,b){var c=new m,d=new t(f.server);d.token=f.token;var e=b[0].split(".");d.getDataCollections(null,e[0]).then(function(b){if("OneVar"==
a)if("*"==e[1])c.resolve(b[0].variables[0].alias);else{b=b[0].variables;for(var d=0;d<b.length;d++)if(b[d].id==e[1]){c.resolve(b[d].alias);return}c.reject(Error("Variable was not found within the data collection: "+b[0]))}else c.resolve(b[0].metadata.title)},function(a){c.reject(a)});return c.promise}var y=g(p,{_data:null,constructor:function(a,b){this._data=a;c.mixin(this.metadata,b)},getData:function(){return this._data}});return g("esri.dijit.geoenrichment.Infographic",[n,v],{countryID:null,levels:f.levels,
highestLevel:f.highestLevel,title:null,subtitle:"\x3cdiv\x3e${address}\x3c/div\x3e\x3cdiv\x3e${name}\x3c/div\x3e",type:null,variables:null,studyArea:null,studyAreaOptions:null,outSR:null,expanded:!0,returnGeometry:!1,dataProvider:null,autoTitle:!0,_data:null,_ge:null,_autoTitle:null,_autoTitlePromise:null,_eventMap:{resize:["size"],"data-request":!0,"data-ready":["provider"],"data-load":!0,"data-error":["error"]},constructor:function(){this.studyAreaOptions=new u},postMixInProperties:function(){this.type&&
(this.invoke("_updateAutoTitle"),this._updateReport())},_provideGeoenrichment:function(a){if(!this._ge||a)a=a||new q,this._removeEventHandlers(),this.dataProvider=this._ge=a,this._eventHandlers=[a.on("start",c.hitch(this,this._onDataRequest)),a.on("data",c.hitch(this,this._onDataReady)),a.on("end",c.hitch(this,this._onDataLoad)),a.on("error",c.hitch(this,this._onDataError))]},_removeEventHandlers:function(){this._eventHandlers&&k.forEach(this._eventHandlers,function(a){a.remove()})},setGeoenrichment:function(a){this._provideGeoenrichment(a)},
buildRendering:function(){this.inherited(arguments);this.domNode=l.create("div");this.expanded||e.add(this.domNode,"Collapsed")},destroy:function(){this._destroyReportWidget();this._ge&&this._ge.stop();this._removeEventHandlers();this.inherited(arguments)},_setReturnGeometryAttr:function(a){this._provideGeoenrichment();this._set("returnGeometry",a);this._ge.returnGeometry=a},_setTitleAttr:function(a){this._set("title",a);this._widget&&(this._widget.title=a)},_setSubtitleAttr:function(a){this._provideGeoenrichment();
this._set("subtitle",a);this._ge.setReturnAddress&&this._ge.setReturnAddress(/\$\{address\}/.test(a));this._widget&&(this._widget.subtitle=a)},_setTypeAttr:function(a){this._set("type",a);this._widget&&(this._widget.setDataProvider(null),this._destroyReportWidget());this.invoke("_updateAutoTitle");this._updateReport()},_updateReport:function(){this._updateLevels();this.invoke("_requireReport")},_getAbsMid:function(a){return d.toAbsMid?d.toAbsMid(a):h.id.replace(/\/[^\/]*$/ig,"/")+a},_requireReport:function(){this.type&&
d([this._getAbsMid("./"+this.type)],c.hitch(this,this._createReportWidget,this.type))},_updateAutoTitle:function(){if("string"!=typeof this.title&&this.autoTitle&&this.type&&this.variables){var a=this;this._autoTitlePromise=x(this.type,this.variables);this._autoTitlePromise.then(function(b){a._autoTitle=b},function(b){a._onDataError(b)});this._autoTitlePromise.always(function(){a._autoTitlePromise=null})}},_setCountryIDAttr:function(a){this._provideGeoenrichment();this._set("countryID",a);this._ge.country=
a},_setVariablesAttr:function(a){var b=!0;if(c.isArray(a))for(var d=0;d<a.length;d++){if(0>=a[d].indexOf(".")){b=!1;break}}else null!=a&&(b=!1);if(!b)throw Error("Invalid value for variables");this._provideGeoenrichment();this._set("variables",a);this._ge.setVariables(a);this.invoke("_updateAutoTitle")},_setStudyAreaAttr:function(a){this._provideGeoenrichment();this._set("studyArea",a);this._ge.setStudyArea(a)},_setOutSRAttr:function(a){this._set("outSR",a);this._ge.outSR=a},_setStudyAreaOptionsAttr:function(a){this._provideGeoenrichment();
this._set("studyAreaOptions",a);this._ge.setBuffer&&this._ge.setBuffer(a)},_setExpandedAttr:function(a){this.expanded!=a&&(this._destroyReportWidget(),this._set("expanded",a),a?e.remove(this.domNode,"Collapsed"):e.add(this.domNode,"Collapsed"),this._updateReport())},_setCacheLimitAttr:function(a){this._provideGeoenrichment();this._ge.setCacheLimit&&this._ge.setCacheLimit(a)},setData:function(a,b){this.set("dataProvider",new y(a,b))},_setDataProviderAttr:function(a){this.dataProvider!==a&&(this._set("dataProvider",
a),this._ge&&(this._ge.stop(),this._ge=null),this._widget&&this._widget.setDataProvider(a))},_updateLevels:function(){this._provideGeoenrichment();w.supportsComparison(this.type,this.expanded)?this._ge.setGeoLevels(this.levels,this.highestLevel):this._ge.setGeoLevels(null,null)},_widget:null,_createReportWidget:function(a,b){if(!this._destroyed&&this.type==a)if(this._ge&&this._ge.isBusy())r.once(this._ge,"end",c.hitch(this,this._createReportWidget,this.type,b));else this._autoTitlePromise?this._autoTitlePromise.then(c.hitch(this,
this._createReportWidget,this.type,b)):this.type&&(a=this._widget=new b(this.domNode),a.title="string"==typeof this.title?this.title:this._autoTitle,a.subtitle=this.subtitle,a.expanded=this.expanded,a.on("resize",c.hitch(this,this._onResize)),isNaN(this._lastSelectedComparison)||a.setState({selectedComparison:this._lastSelectedComparison}),a.setDataProvider(this.dataProvider))},resize:function(){this._widget&&this._widget.resize()},_destroyReportWidget:function(){this._widget&&(this._lastSelectedComparison=
this._widget.getState("selectedComparison"),this._widget.destroy(),this._widget=null)},_onResize:function(a){this.onResize(a)},onResize:function(a){},_onDataRequest:function(){this.onDataRequest()},onDataRequest:function(){},_onDataReady:function(){this.onDataReady(this._ge)},onDataReady:function(a){},_onDataLoad:function(){this.onDataLoad()},onDataLoad:function(){},_onDataError:function(a){this.onDataError(a)},onDataError:function(a){}})});