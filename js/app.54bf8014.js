(function(t){function e(e){for(var a,o,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-133a5acf":"a1ba7d8d","chunk-2d47e5b6":"c642f259","chunk-4105aee6":"30fe8444","chunk-aeca283a":"4c29f307","chunk-09063050":"c9c35f8e","chunk-72188099":"9c8cba0a","chunk-762abf67":"1fae0f8f"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-133a5acf":1,"chunk-2d47e5b6":1,"chunk-4105aee6":1,"chunk-aeca283a":1,"chunk-09063050":1,"chunk-72188099":1,"chunk-762abf67":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-133a5acf":"06a8ecd1","chunk-2d47e5b6":"56696138","chunk-4105aee6":"98da9d45","chunk-aeca283a":"4b6ee4ef","chunk-09063050":"83390bf2","chunk-72188099":"19b58ba9","chunk-762abf67":"b1a5611f"}[t]+".css",r=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[t],p.parentNode.removeChild(p),n(c)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0aa6":function(t,e,n){"use strict";var a=n("8b69"),o=n.n(a);o.a},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"g-view-container"},[n("keep-alive",{attrs:{exclude:"PageDetail"}},[n("router-view")],1)],1),n("foot-but",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.tabBarShow,expression:"$store.getters.tabBarShow"}]})],1)},r=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot-but"},[a("div",{staticClass:"foot-but-end"},[a("foot-menu",{attrs:{path:"/home"}},[a("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),a("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),a("foot-menu",{attrs:{path:"/sort"}},[a("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),a("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),a("foot-menu",{attrs:{path:"/cart"}},[a("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),a("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),a("foot-menu",[a("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),a("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"foot-menu",on:{click:t.itemClick}},[t.isActive?t._t("item-icon-active"):t._t("item-icon"),n("div",{class:t.activeStyle},[t._t("item-text")],2)],2)},u=[],l=(n("c975"),n("ac1f"),n("5319"),{name:"FootMenu",props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{activeColor:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),f=l,p=(n("98d1"),n("2877")),d=Object(p["a"])(f,s,u,!1,null,"b3c70ab4",null),m=d.exports,h={name:"FootBut",components:{FootMenu:m}},v=h,b=(n("0aa6"),Object(p["a"])(v,c,i,!1,null,"2a61bb5e",null)),g=b.exports,k={name:"App",components:{FootBut:g}},y=k,x=(n("5c0b"),Object(p["a"])(y,o,r,!1,null,null,null)),w=x.exports,_=(n("d3b7"),n("8c4f"));a["a"].use(_["a"]);var S=function(){return Promise.all([n.e("chunk-aeca283a"),n.e("chunk-2d47e5b6"),n.e("chunk-72188099")]).then(n.bind(null,"8e2f"))},C=function(){return Promise.all([n.e("chunk-2d47e5b6"),n.e("chunk-4105aee6")]).then(n.bind(null,"3424"))},P=function(){return Promise.all([n.e("chunk-aeca283a"),n.e("chunk-2d47e5b6"),n.e("chunk-09063050")]).then(n.bind(null,"d14a"))},O=function(){return n.e("chunk-133a5acf").then(n.bind(null,"d79d"))},j=function(){return Promise.all([n.e("chunk-aeca283a"),n.e("chunk-762abf67")]).then(n.bind(null,"d769"))},B=[{path:"/",redirect:"/home"},{path:"/home",name:"MyHome",component:S},{path:"/sort",name:"MySort",component:C},{path:"/cart",name:"MyCart",component:O},{path:"/page/:iid",name:"PageDetail",component:P},{path:"/search",name:"FindPage",component:j}],E=new _["a"]({mode:"history",base:"./",routes:B}),A=E,T=n("2f62"),M={addCartLength:function(t){return t.cartlist.length},tabBarShow:function(t){return t.tabBarShow},cartlistdata:function(t){return t.cartlist}},$={setTabBarShow:function(t,e){t.tabBarShow=e},addcounter:function(t,e){e.count++},addtocounter:function(t,e){e.checked=!0,t.cartlist.push(e)}},L=(n("7db0"),{setCartToData:function(t,e){var n=t.state.cartlist.find((function(t){return t.id===e.id}));n?t.commit("addcounter",n):(e.count=1,t.commit("addtocounter",e))}});a["a"].use(T["a"]);var F={tabBarShow:!0,cartlist:[]},N=new T["a"].Store({state:F,mutations:$,actions:L,getters:M}),D=(n("a41b"),n("dfa4"),n("caf9"));a["a"].use(D["a"],{preLoad:1,error:n("b948"),loading:n("f8b2"),attempt:1}),a["a"].config.productionTip=!1,a["a"].prototype.$bus=new a["a"],new a["a"]({router:A,store:N,render:function(t){return t(w)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"8b69":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},"98d1":function(t,e,n){"use strict";var a=n("fc47"),o=n.n(a);o.a},"9c0c":function(t,e,n){},a41b:function(t,e,n){},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},b948:function(t,e,n){t.exports=n.p+"img/error.d44fdc0d.png"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},f8b2:function(t,e,n){t.exports=n.p+"img/loading.5c9b3522.gif"},fc47:function(t,e,n){}});
//# sourceMappingURL=app.54bf8014.js.map