//>>built
define("dojox/math/random/Secure",["dojo"],function(a){a.declare("dojox.math.random.Secure",null,{constructor:function(b,e){this.prng=b;var c=this.pool=Array(b.size),d=this.pptr=0;for(b=b.size;d<b;){var f=Math.floor(65536*Math.random());c[d++]=f>>>8;c[d++]=f&255}this.seedTime();e||(this.h=[a.connect(a.body(),"onclick",this,"seedTime"),a.connect(a.body(),"onkeypress",this,"seedTime")])},destroy:function(){this.h&&a.forEach(this.h,a.disconnect)},nextBytes:function(b){var e=this.state;if(!e){this.seedTime();
e=this.state=this.prng();e.init(this.pool);for(var c=this.pool,d=0,a=c.length;d<a;c[d++]=0);this.pptr=0}d=0;for(a=b.length;d<a;++d)b[d]=e.next()},seedTime:function(){this._seed_int((new Date).getTime())},_seed_int:function(b){var a=this.pool,c=this.pptr;a[c++]^=b&255;a[c++]^=b>>8&255;a[c++]^=b>>16&255;a[c++]^=b>>24&255;c>=this.prng.size&&(c-=this.prng.size);this.pptr=c}});return dojox.math.random.Secure});