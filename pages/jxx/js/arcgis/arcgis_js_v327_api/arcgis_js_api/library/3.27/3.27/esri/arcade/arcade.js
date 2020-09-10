// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/arcade/arcade","require exports ./arcadeCompiler ./arcadeRuntime ./parser ./treeAnalysis dojo/has ./polyfill/promiseUtils".split(" "),function(r,b,e,k,l,p,B,m){function K(a,c){if(null===f)throw Error("Async Arcade must be enabled for this script");return B("csp-restrictions")||!1===L?function(c,b){return f.executeScript(a,c,b)}:e.compileScript(a,c,!0)}function C(a,c){void 0===c&&(c=[]);return l.parseScript(a,c)}function D(a,c,g){if(!0===c.useAsync||!0===a.isAsync){if(null===f)throw Error("Async Arcade must be enabled for this script");
return f.executeScript(a,c,g)}return k.executeScript(a,c,g)}function E(a,c){return k.referencesMember(a,c)}function t(a){void 0===a.usesGeometry&&p.findScriptDependencies(a);return!0===a.usesGeometry}function F(){return u?u:u=m.create(function(a,c){r(["../geometry/geometryEngine","./functions/geomsync"],function(c,b){v=!0;b.setGeometryEngine(c);a(!0)},function(a){c(a)})})}function w(){return null!==x?x:x=e.enableAsyncSupport().then(function(){return m.create(function(a,c){r(["./arcadeAsyncRuntime"],
function(g){try{f=g;g=0;for(var b=y;g<b.length;g++){var n=b[g];f.extend(n);e.extend(n,"async")}y=null;a(!0)}catch(q){c(q)}},c)})})}function G(){return f?!0:!1}function H(){return z?z:z=w().then(function(){return m.create(function(a,c){r(["./featureSetUtils","./functions/featuresetbase","./functions/featuresetgeom","./functions/featuresetstats","./functions/featuresetstring"],function(b,d,n,q,h){try{I=b,f.extend([d,n,q,h]),e.extend([d,n,q,h],"async"),A=!0,a(!0)}catch(M){c(M)}},c)})})}function J(a){void 0===
a.usesFeatureSet&&p.findScriptDependencies(a);return!0===a.usesFeatureSet}function N(a,c){if(c)for(var b=0;b<c.length;b++)if(E(a,c[b]))return!0;return!1}Object.defineProperty(b,"__esModule",{value:!0});var L=function(a){try{return eval(a),!0}catch(c){return!1}}("function* test() {}"),A=!1,v=!1,f=null,y=[];b.compileScript=function(a,c){return!0===c.useAsync||!0===a.isAsync?K(a,c):B("csp-restrictions")?function(c,b){return k.executeScript(a,c,b)}:e.compileScript(a,c)};b.extend=function(a){k.extend(a);
e.extend(a,"sync");null===f?y.push(a):(e.extend(a,"async"),f.extend(a))};b.parseScript=C;b.validateScript=function(a,c,b){void 0===b&&(b="");return l.validateScript(a,c,b)};b.scriptCheck=function(a,c,b,d){void 0===d&&(d="");return l.scriptCheck(a,c,b,d)};b.parseAndExecuteScript=function(a,c,b,d){void 0===d&&(d=[]);a=l.parseScript(a,d);return D(a,c,b)};b.executeScript=D;b.referencesMember=E;b.referencesFunction=function(a,c){return k.referencesFunction(a,c)};b.extractFieldLiterals=function(a,c){void 0===
c&&(c=!1);return l.extractFieldLiterals(a,c)};b.scriptUsesGeometryEngine=t;var u=null;b.enableGeometrySupport=F;var x=null;b.enableAsyncSupport=w;b.isFeatureSetSupportEnabled=function(){return A};b.isAsyncEnabled=G;b.isGeometryEnabled=function(){return v};var z=null;b.enableFeatureSetSupport=H;b.scriptUsesFeatureSet=J;b.scriptIsAsync=function(a){void 0===a.isAsync&&p.findScriptDependencies(a);return!0===a.isAsync};b.loadScriptDependencies=function(a,c,b,d){void 0===b&&(b=[]);void 0===d&&(d=!1);return m.create(function(f,
g){var h="string"===typeof a?C(a):a,e=[];h&&(!1===v&&(t(h)||d)&&e.push(F()),!1===G()&&(!0===h.isAsync||c)&&e.push(w()),!1===A&&(J(h)||N(h,b))&&e.push(H()));e?m.all(e).then(function(){f(!0)},g):f(!0)})};b.scriptTouchesGeometry=function(a){if(t(a))return!0;a=p.findFunctionCalls(a,!0);return-1<a.indexOf("geometry")||-1<a.indexOf("feature")?!0:!1};var I=null;b.featureSetUtils=function(){return I}});