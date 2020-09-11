// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/surfaceUtils",["dojo/_base/lang"],function(H){return{hillshade:function(p,a){if(null!==p&&null!==p.pixelBlock&&null!==p.pixelBlock.pixels){var g=this._clonePixelBlock(p.pixelBlock),n=a.altitude,b=a.azimuth,c=a.zFactor,A=a.psPower,r=a.psFactor,B=a.hillshadeType,k=a.slopeType,h=a.isGCS;1===B&&(c*=2);a=g.width;var f=g.height,d=g.pixels[0],l=g.mask,t=new Uint8Array(a*f);l&&t.set(l);var u=new Uint8Array(a*f),e=(p.extent.xmax-p.extent.xmin)/a,v=(p.extent.ymax-p.extent.ymin)/
f,w=c/(8*e),x=c/(8*v);.001<c&&h&&(w/=111E3,x/=111E3);3===k&&(h?(w=111E3*e,x=111E3*v,w=(c+Math.pow(w,A)*r)/(8*w),x=(c+Math.pow(x,A)*r)/(8*x)):(w=(c+Math.pow(e,A)*r)/(8*e),x=(c+Math.pow(v,A)*r)/(8*v)));var h=(90-n)*Math.PI/180,n=Math.cos(h),q=(360-b+90)*Math.PI/180,b=Math.sin(h)*Math.cos(q),h=Math.sin(h)*Math.sin(q),y,m,C,E,F,D,z,G,c=[],A=[],r=[],I,e=[315,270,225,360,180,0];m=[60,60,60,60,60,90];var k=[3,5,3,2,1,4],H=k.reduce(function(a,b){return a+b}),v=k.map(function(a){return a/H});if(1===B)for(I=
e.length,k=0;k<I;k++)n=m[k],b=e[k],h=(90-n)*Math.PI/180,n=Math.cos(h),q=(360-b+90)*Math.PI/180,b=Math.sin(h)*Math.cos(q),h=Math.sin(h)*Math.sin(q),c.push(n),A.push(b),r.push(h);D=0;for(k=1;k<f-1;k++)for(m=k*a,e=1;e<a-1;e++)if(l&&!l[m+e])u[m+e]=0;else{q=0;if(l&&(q=l[m-a+e-1]+l[m-a+e]+l[m-a+e+1]+l[m+e-1]+l[m+e+1]+l[m+a+e-1]+l[m+a+e]+l[m+a+e+1],7>q)){u[m+e]=0;t[m+e]=0;continue}7===q?(y=l[m-a+e-1]?d[m-a+e-1]:d[m+e],C=l[m-a+e]?d[m-a+e]:d[m+e],E=l[m-a+e+1]?d[m-a+e+1]:d[m+e],q=l[m+e-1]?d[m+e-1]:d[m+e],F=
l[m+e+1]?d[m+e+1]:d[m+e],D=l[m+a+e-1]?d[m+a+e-1]:d[m+e],z=l[m+a+e]?d[m+a+e]:d[m+e],G=l[m+a+e+1]?d[m+a+e+1]:d[m+e]):(y=d[m-a+e-1],C=d[m-a+e],E=d[m-a+e+1],q=d[m+e-1],F=d[m+e+1],D=d[m+a+e-1],z=d[m+a+e],G=d[m+a+e+1]);q=(E+F+F+G-(y+q+q+D))*w;C=(D+z+z+G-(y+C+C+E))*x;E=Math.sqrt(1+q*q+C*C);D=0;if(0===B)z=h*C-b*q,z=255*(n+z)/E,0>z&&(z=0),D=z;else if(1===B)for(y=0;y<I;y++)z=r[y]*C-A[y]*q,z=255*(c[y]+z)/E,0>z&&(z=0),D+=z*v[y];u[m+e]=D}for(k=0;k<f;k++)u[k*a]=u[k*a+1],u[(k+1)*a-1]=u[(k+1)*a-2];for(k=1;k<a-1;k++)u[k]=
u[k+a],u[k+(f-1)*a]=u[k+(f-2)*a];g.pixelType="U8";g.pixels=[u];g.statistics=[{minValue:0,maxValue:255}];l&&(g.mask=t);return{extent:p.extent,pixelBlock:g}}},slope:function(p,a){if(null!==p&&null!==p.pixelBlock&&null!==p.pixelBlock.pixels){var g=this._clonePixelBlock(p.pixelBlock),n=a.zFactor,b=a.psPower,c=a.psFactor,A=a.slopeType,r=a.isGCS;a=g.width;var B=g.height,k=g.pixels[0],h=g.mask,f=new Uint8Array(a*B);h&&f.set(h);var d=new Float32Array(a*B),l=(p.extent.xmax-p.extent.xmin)/a,t=(p.extent.ymax-
p.extent.ymin)/B,u=n/(8*l),e=n/(8*t);1E-4>Math.abs(n-1)&&r&&(u/=111E3,e/=111E3);3===A&&(r?(u=111E3*l,e=111E3*t,u=(n+Math.pow(u,b)*c)/(8*u),e=(n+Math.pow(e,b)*c)/(8*e)):(u=(n+Math.pow(l,b)*c)/(8*l),e=(n+Math.pow(t,b)*c)/(8*t)));for(var v,w,x,q,y,n=1;n<B-1;n++)for(c=n*a,b=1;b<a-1;b++)if(h&&!h[c+b])d[c+b]=0;else{t=0;if(h&&(t=h[c-a+b-1]+h[c-a+b]+h[c-a+b+1]+h[c+b-1]+h[c+b+1]+h[c+a+b-1]+h[c+a+b]+h[c+a+b+1],7>t)){d[c+b]=0;f[c+b]=0;continue}7===t?(t=h[c-a+b-1]?k[c-a+b-1]:k[c+b],r=h[c-a+b]?k[c-a+b]:k[c+b],
l=h[c-a+b+1]?k[c-a+b+1]:k[c+b],v=h[c+b-1]?k[c+b-1]:k[c+b],w=h[c+b+1]?k[c+b+1]:k[c+b],x=h[c+a+b-1]?k[c+a+b-1]:k[c+b],q=h[c+a+b]?k[c+a+b]:k[c+b],y=h[c+a+b+1]?k[c+a+b+1]:k[c+b]):(t=k[c-a+b-1],r=k[c-a+b],l=k[c-a+b+1],v=k[c+b-1],w=k[c+b+1],x=k[c+a+b-1],q=k[c+a+b],y=k[c+a+b+1]);v=(l+w+w+y-(t+v+v+x))*u;t=(x+q+q+y-(t+r+r+l))*e;t=Math.sqrt(v*v+t*t);d[c+b]=1===A||3===A?57.2957795*Math.atan(t):100*t}for(n=0;n<B;n++)d[n*a]=d[n*a+1],d[(n+1)*a-1]=d[(n+1)*a-2];for(n=1;n<a-1;n++)d[n]=d[n+a],d[n+(B-1)*a]=d[n+(B-2)*
a];g.pixelType="F32";g.pixels=[d];g.statistics=[{minValue:0,maxValue:255}];h&&(g.mask=f);return{extent:p.extent,pixelBlock:g}}},aspect:function(p){if(null!==p&&null!==p.pixelBlock&&null!==p.pixelBlock.pixels){var a=this._clonePixelBlock(p.pixelBlock),g=a.width,n=a.height,b=a.pixels[0],c=a.mask,A=new Uint8Array(g*n);c&&A.set(c);var r=new Float32Array(g*n),B=1/((p.extent.xmax-p.extent.xmin)/g),k=1/((p.extent.ymax-p.extent.ymin)/n),h,f,d,l,t,u,e,v,w,x,q;for(h=1;h<n-1;h++)for(d=h*g,f=1;f<g-1;f++)if(c&&
!c[d+f])r[d+f]=0;else{l=0;if(c&&(l=c[d-g+f-1]+c[d-g+f]+c[d-g+f+1]+c[d+f-1]+c[d+f+1]+c[d+g+f-1]+c[d+g+f]+c[d+g+f+1],7>l)){r[d+f]=0;A[d+f]=0;continue}7===l?(l=c[d-g+f-1]?b[d-g+f-1]:b[d+f],t=c[d-g+f]?b[d-g+f]:b[d+f],u=c[d-g+f+1]?b[d-g+f+1]:b[d+f],e=c[d+f-1]?b[d+f-1]:b[d+f],v=c[d+f+1]?b[d+f+1]:b[d+f],w=c[d+g+f-1]?b[d+g+f-1]:b[d+f],x=c[d+g+f]?b[d+g+f]:b[d+f],q=c[d+g+f+1]?b[d+g+f+1]:b[d+f]):(l=b[d-g+f-1],t=b[d-g+f],u=b[d-g+f+1],e=b[d+f-1],v=b[d+f+1],w=b[d+g+f-1],x=b[d+g+f],q=b[d+g+f+1]);e=(u+v+v+q-(l+e+
e+w))*B;l=(w+x+x+q-(l+t+t+u))*k;0===e&&0===l?l=-1:(l=90-57.29578*Math.atan2(l,-e),0>l&&(l+=360),360===l?l=0:360<l&&(l%=360));r[d+f]=l}for(h=0;h<n;h++)r[h*g]=r[h*g+1],r[(h+1)*g-1]=r[(h+1)*g-2];for(h=1;h<g-1;h++)r[h]=r[h+g],r[h+(n-1)*g]=r[h+(n-2)*g];a.pixelType="F32";a.pixels=[r];a.statistics={minValue:0,maxValue:360};c&&(a.mask=A);return{extent:p.extent,pixelBlock:a}}},_clonePixelBlock:function(p){return p.clone?p.clone():H.clone(p)}}});