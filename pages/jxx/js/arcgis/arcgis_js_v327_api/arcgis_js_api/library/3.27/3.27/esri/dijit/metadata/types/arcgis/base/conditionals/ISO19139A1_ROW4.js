// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/ISO19139A1_ROW4","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional ../../../../base/etc/docUtil".split(" "),function(e,h,g,f,k,l,m,n,p){e=e(n,{key:"ISO19139A1_ROW4",postCreate:function(){this.inherited(arguments);var b=this;this.own(f.subscribe("gxe/interaction-occurred",function(a){try{b.parentXNode&&a&&a.inputWidget&&a.inputWidget.parentXNode&&
"/metadata/mdHrLv/ScopeCd/@value"===a.inputWidget.parentXNode.gxePath&&b.emitInteractionOccurred()}catch(c){console.error(c)}}));this.own(f.subscribe("gxe/optional-content-toggled",function(a){try{if(b.parentXNode&&a&&a.src&&a.src.target){var c=a.src.target;"dataExt"!==c&&"geoEle"!==c||b.emitInteractionOccurred()}}catch(d){console.error(d)}}));this.own(f.subscribe("gxe/after-xnode-destroyed",function(a){try{if(b.parentXNode&&a&&a.xnode){var c=a.xnode.gxePath;"/metadata/mdHrLv/ScopeCd/@value"===c?
b.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt/geoEle"===c&&b.emitInteractionOccurred()}}catch(d){console.error(d)}}))},ensureFocus:function(){p.ensureVisibility(this.parentXNode);g.some(this.parentXNode.getChildren(),function(b){if(b._isGxeTabs)return g.some(b.getChildren(),function(a){if(a.isExtentSection)return b.ensureActiveTab(a),!0}),!0})},validateConditionals:function(b){var a=this.newStatus({message:m.conditionals[this.key]}),
c=!0,d=this.parentXNode.domNode;this.forActiveXNodes("/metadata/mdHrLv/ScopeCd/@value",this.getRootDomNode(),function(a){"005"===a.inputWidget.getInputValue()&&(c=!1)});c||this.forActiveXNodes("/metadata/dataIdInfo/dataExt/geoEle",d,function(a){c=!0});a.isValid=c;this.track(a,b);return a}});k("extend-esri")&&h.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW4",e,l);return e});