(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-543478cc"],{"14c3":function(e,t,r){var a=r("c6b6"),i=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var n=r.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},5319:function(e,t,r){"use strict";var a=r("d784"),i=r("825a"),n=r("7b0b"),s=r("50c4"),o=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),d=Math.max,p=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var m=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=a.REPLACE_KEEPS_$0,x=m?"$":"$0";return[function(r,a){var i=c(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,i,a):t.call(String(i),r,a)},function(e,a){if(!m&&b||"string"===typeof a&&-1===a.indexOf(x)){var n=r(t,e,this,a);if(n.done)return n.value}var c=i(e),v=String(this),g="function"===typeof a;g||(a=String(a));var f=c.global;if(f){var _=c.unicode;c.lastIndex=0}var E=[];while(1){var y=u(c,v);if(null===y)break;if(E.push(y),!f)break;var S=String(y[0]);""===S&&(c.lastIndex=l(v,s(c.lastIndex),_))}for(var C="",k=0,I=0;I<E.length;I++){y=E[I];for(var $=String(y[0]),R=d(p(o(y.index),v.length),0),z=[],M=1;M<y.length;M++)z.push(h(y[M]));var A=y.groups;if(g){var N=[$].concat(z,R,v);void 0!==A&&N.push(A);var L=String(a.apply(void 0,N))}else L=w($,v,R,z,A,a);R>=k&&(C+=v.slice(k,R)+L,k=R+$.length)}return C+v.slice(k)}];function w(e,r,a,i,s,o){var c=a+e.length,l=i.length,u=f;return void 0!==s&&(s=n(s),u=g),t.call(o,u,(function(t,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(c);case"<":o=s[n.slice(1,-1)];break;default:var u=+n;if(0===u)return t;if(u>l){var d=v(u/10);return 0===d?t:d<=l?void 0===i[d-1]?n.charAt(1):i[d-1]+n.charAt(1):t}o=i[u-1]}return void 0===o?"":o}))}}))},"566c":function(e,t,r){},6619:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",staticStyle:{"max-width":"1980px",width:"100%"}},[r("link",{attrs:{rel:"stylesheet",href:"http://static.sasongsmat.nu/fonts/vegetarian.css"}}),e.recipe?r("div",[r("div",{staticClass:"recipe-header  "},[r("h1",{staticStyle:{"padding-top":"1%","font-size":"20pt","padding-bottom":"1%"}},[e._v(e._s(e.recipe.title))]),r("div",{staticStyle:{display:"flex","margin-top":"2%","padding-bottom":"2%"}},[r("div",{staticStyle:{"margin-top":"-2%","text-align":"center","padding-top":"1.5%","padding-bottom":"1.5%","background-color":"#95b3a9bf",width:"80%",float:"right","margin-left":"10%","margin-right":"-85%"}},[r("img",{staticClass:"center",attrs:{src:e.recipe.image}}),r("b-button-group",{staticStyle:{width:"95%"},attrs:{size:"lg"}},[r("b-button",{attrs:{variant:"light",disabled:""}},[r("b-icon",{attrs:{icon:"clock","aria-hidden":"true"}}),e._v(" "+e._s(e.recipe.readyInMinutes)+" "),r("span",{staticStyle:{"font-size":"15pt"}},[e._v("min")])],1),r("b-button",{attrs:{variant:"light",disabled:""}},[r("svg",{staticClass:"bi bi-people-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}),r("path",{attrs:{"fill-rule":"evenodd",d:"M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"}}),r("path",{attrs:{d:"M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"}})]),e._v(" "+e._s(e.recipe.servings)+" ")]),r("b-button",{attrs:{variant:"light",disabled:""}},[r("svg",{staticStyle:{"margin-bottom":"8%"},attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024"}},[r("path",{attrs:{fill:"black","fill-opacity":".15",d:"M273 495.9v428l.3-428zm538.2-88.3H496.8l9.6-198.4c.6-11.9-4.7-23.1-14.6-30.5c-6.1-4.5-13.6-6.8-21.1-6.7c-19.6.1-36.9 13.4-42.2 32.3c-37.1 134.4-64.9 235.2-83.5 302.5V852h399.4a56.85 56.85 0 0 0 33.6-51.8c0-9.7-2.3-18.9-6.9-27.3l-13.9-25.4l21.9-19a56.76 56.76 0 0 0 19.6-43c0-9.7-2.3-18.9-6.9-27.3l-13.9-25.4l21.9-19a56.76 56.76 0 0 0 19.6-43c0-9.7-2.3-18.9-6.9-27.3l-14-25.5l21.9-19a56.76 56.76 0 0 0 19.6-43c0-19.1-11-37.5-28.8-48.4z"}}),r("path",{attrs:{fill:"black",d:"M112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32zm773.9 5.7c16.8-22.2 26.1-49.4 26.1-77.7c0-44.9-25.1-87.5-65.5-111a67.67 67.67 0 0 0-34.3-9.3H572.3l6-122.9c1.5-29.7-9-57.9-29.5-79.4a106.4 106.4 0 0 0-77.9-33.4c-52 0-98 35-111.8 85.1l-85.8 310.8l-.3 428h472.1c9.3 0 18.2-1.8 26.5-5.4c47.6-20.3 78.3-66.8 78.3-118.4c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37zM820.4 499l-21.9 19l14 25.5a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.1 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.1 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H345V506.8c18.6-67.2 46.4-168 83.5-302.5a44.28 44.28 0 0 1 42.2-32.3c7.5-.1 15 2.2 21.1 6.7c9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.1 32.2-19.6 43z"}})]),r("span",{attrs:{id:"like"}},[e._v(" "+e._s(e.recipe.aggregateLikes))])]),e.recipe.vegetarian?r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.v-info",modifiers:{"v-info":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.bottom",modifiers:{bottom:!0}}],attrs:{variant:"light",title:"vegetarian",disabled:""}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"30",height:"27",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"#00a591",d:"m.59 15.956l171.09 473.93a29.099 29.099 0 0 0 27.37 19.218h123.777c6.73 0 12.737-4.222 15.016-10.555l173.57-482.481c2.43-6.754-3.026-13.73-10.166-12.998L363.502 17.186a24.03 24.03 0 0 0-20.251 16.021L256.817 282.08L169.795 32.097a24.03 24.03 0 0 0-20.43-16.023L10.679 2.94C3.56 2.267-1.838 9.231.59 15.956z"}})])]):e._e(),e.recipe.vegan?r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.v-success",modifiers:{"v-success":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.bottom",modifiers:{bottom:!0}}],attrs:{variant:"light",title:"vegan",disabled:""}},[r("svg",{attrs:{id:"vegan",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"34",height:"34",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[r("g",{attrs:{fill:"none",stroke:"#79c753","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}},[r("path",{attrs:{d:"M14.5 11.5C12.75 13.382 11 18 11 18s-2.5-6.5-5-8"}}),r("path",{attrs:{d:"m18.015 7.73l.297 3.08c.192 1.998-1.306 3.777-3.304 3.97c-1.96.188-3.736-1.245-3.925-3.205a3.566 3.566 0 0 1 3.208-3.892l3.284-.316a.404.404 0 0 1 .44.363Z"}}),r("path",{attrs:{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"}})])])]):e._e(),e.recipe.glutenFree?r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.v-warning",modifiers:{"v-warning":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.bottom",modifiers:{bottom:!0}}],attrs:{variant:"light",title:"gluten-free",disabled:""}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"34",height:"34",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 640 512"}},[r("path",{attrs:{fill:"#efc050",d:"M416.1 128.1c-8.5 10.2-23.7 10.2-33.1 0c-9.3-8.5-9.3-23.7 0-33.07l88-88.001c9.4-9.372 24.6-9.372 33.1 0c10.2 9.371 10.2 24.571 0 33.941l-88 87.13zm-99.3-89.47c4.5 4.52 8.6 9.31 12.3 14.3L375 7.029c9.4-9.372 24.6-9.372 33.1 0c10.2 9.371 10.2 24.571 0 33.941L350.7 99.2c5.2 21.5 4.7 44-1.4 65.3c20.3-5.8 41.8-7.4 62.4-2.1L471 103c9.4-9.34 24.6-9.34 33.1 0c10.2 9.4 10.2 24.6 0 33.1l-45.3 47c4.5 3.2 8.8 6.7 12.9 10.6c-45.4 6.2-85.2 29.8-112.6 63.7c-7.1-4.1-13.7-9.1-19.7-15.1l-12.2-12.2l-31.9 31c17.2 2.5 34.2 7.7 49.7 16.3c-15.9 26.5-25 57.5-25 90.6v3.1c-29.1 4.5-60-4.5-82.4-27l-12.2-12.2l-31.9 31.9c27.6 2.7 56.2 15 78 36.9l11.3 10.4c6.3 7.1 6.3 17.3 0 23.5l-11.3 11.3c-37.5 37.5-98.2 37.5-135.7 0l-12.3-12.2l-68.87 68.9c-12.5 12.5-32.76 12.5-45.258 0c-12.496-12.5-12.496-32.7 0-45.2l68.918-68.9L67.88 378c-37.49-37.4-37.49-98.2 0-135.7l11.32-12.2c6.24-5.4 16.37-5.4 22.6 0l11.3 12.2c21 21 33.2 47.4 36.6 74.8l30.4-30.5l-10.4-10.4c-37.5-37.5-37.5-98.3 0-135.7l11.3-11.4c6.3-6.2 16.4-6.2 22.6 0l10.5 11.4c21 20.9 34 47.4 37.4 74.8l30.4-30.5l-10.4-10.4c-37.5-37.5-37.5-98.28 0-135.77l11.3-11.32c6.3-6.25 16.4-6.25 22.7 0l11.3 11.32zM352 368c0-79.5 64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144s-144-64.5-144-144zm144 96c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zm-16.9-176v80c0 8.8 8.1 16 16 16c9.7 0 16-7.2 16-16v-80c0-8.8-6.3-16-16-16c-7.9 0-16 7.2-16 16z"}})])]):e._e()],1)],1),r("div",{staticClass:"mb-3",staticStyle:{width:"20%",float:"left","margin-left":"2.5%"},style:{color:e.activeColor},attrs:{id:"fav",disabled:!this.$root.store.username},on:{click:e.MarkFavorite}},[r("span",{attrs:{id:"textFavorite"}},[e._v(" ❤")])])])]),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"title"},[e._v("Ingredients")]),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped",staticStyle:{"margin-left":"3%"}},[r("ul",e._l(e.recipe.extendedIngredients.slice(0,e.size),(function(t,a){return r("li",{key:a+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]),r("div",{staticClass:"wrapped"},[r("ul",e._l(e.recipe.extendedIngredients.slice(e.size),(function(t,a){return r("li",{key:a+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)])]),r("div",{staticClass:"instruction"},[e.recipe._instructions.length>0?r("div",{staticClass:"title"},[e._v("Instructions")]):e._e(),r("ol",{staticStyle:{"counter-reset":"section","list-style":"none",padding:"1%","background-color":"rgba(252, 252, 252, 0.795)","margin-left":"5%","margin-right":"5%"}},e._l(e.recipe._instructions,(function(t){return r("li",{key:t.number,staticClass:"ins"},[e._v(" "+e._s(t.step)+" ")])})),0)])])]):e._e()])},i=[],n=(r("99af"),r("4160"),r("d81d"),r("13d5"),r("b0c0"),r("ac1f"),r("5319"),r("159b"),r("2909")),s=(r("96cf"),r("1da1")),o={name:"recipe",data:function(){return{recipe:null,favorite:!1,activeColor:"transparent",countr:40,size:0}},computed:{countList:function(){return{"margin-left":this.countr+"%"}}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,i,s,o,c,l,u,d,p,v,g,f,h,m,b,x,w,_;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.favorite=e.$route.params.favorite,e.favorite&&(e.activeColor="red"),t.prev=3,a={recipe_id:e.$route.params.recipeId},e.axios.defaults.withCredentials=!0,t.next=8,e.axios.get(e.$root.store.serverDomain+"/recipes/showRecipe",{params:a},{withCredentials:!0});case 8:r=t.sent,200!==r.status&&e.$router.replace("/NotFound"),t.next=17;break;case 12:return t.prev=12,t.t0=t["catch"](3),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 17:console.log("response",r),i=r.data,s=i.id,o=i.analyzedInstructions,c=i.instructions,l=i.extendedIngredients,u=i.aggregateLikes,d=i.readyInMinutes,p=i.image,v=i.title,g=i.vegan,f=i.vegetarian,h=i.glutenFree,m=i.servings,console.log("analyzedInstructions",o),b=o.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat(Object(n["a"])(e),Object(n["a"])(t))}),[]),x={id:s,instructions:c,_instructions:b,analyzedInstructions:o,extendedIngredients:l,aggregateLikes:u,readyInMinutes:d,image:p,title:v,vegan:g,vegetarian:f,glutenFree:h,servings:m},e.recipe=x,w=e.recipe.extendedIngredients.length,e.size=w/2,w%2!=0&&e.size++,e.recipe.vegan&&(e.countr-=4),e.recipe.vegetarian&&(e.countr-=4),e.recipe.glutenFree||(e.countr-=4),e.$root.store.username&&e.$root.store.lastSearch&&(console.log("before",e.$root.store.lastSearch),_=e.$root.store.lastSearch.resuilts,_.forEach((function(t){t.id==e.recipe.id&&(console.log("yes",t),t.userView=!0)})),console.log("after",e.$root.store.lastSearch)),t.next=35;break;case 32:t.prev=32,t.t1=t["catch"](0),console.log(t.t1);case 35:case"end":return t.stop()}}),t,null,[[0,32],[3,12]])})))()},methods:{MarkFavorite:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.favorite){t.next=17;break}return t.prev=1,e.axios.defaults.withCredentials=!0,t.next=5,e.axios.post(e.$root.store.serverDomain+"/users/favorites",{reciepeId:e.recipe.id},{withCredentials:!0});case 5:t.sent,e.activeColor="red",e.favorite=!0,e.$root.store.username&&e.$root.store.lastSearch&&(r=e.$root.store.lastSearch.resuilts,r.forEach((function(t){t.id==e.recipe.id&&(t.userFavorite=!0)}))),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0.response1),e.form.submitError=t.t0.response1.data.message;case 15:t.next=33;break;case 17:return t.prev=17,e.axios.defaults.withCredentials=!0,console.log("remove delete"),t.next=22,e.axios.post(e.$root.store.serverDomain+"/users/removeFavorite",{reciepeId:e.recipe.id},{withCredentials:!0});case 22:t.sent,e.activeColor="transparent",e.favorite=!1,console.log("remove delete transparent"),e.$root.store.username&&e.$root.store.lastSearch&&(a=e.$root.store.lastSearch.resuilts,a.forEach((function(t){t.id==e.recipe.id&&(t.userFavorite=!1)}))),t.next=33;break;case 29:t.prev=29,t.t1=t["catch"](17),console.log(t.t1.response),e.form.submitError=t.t1.response.data.message;case 33:case"end":return t.stop()}}),t,null,[[1,11],[17,29]])})))()}}},c=o,l=(r("b691"),r("2877")),u=Object(l["a"])(c,a,i,!1,null,"78541c36",null);t["default"]=u.exports},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("ad6d"),i=r("9f7f"),n=RegExp.prototype.exec,s=String.prototype.replace,o=n,c=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(o=function(e){var t,r,i,o,d=this,p=l&&d.sticky,v=a.call(d),g=d.source,f=0,h=e;return p&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,f++),r=new RegExp("^(?:"+g+")",v)),u&&(r=new RegExp("^"+g+"$(?!\\s)",v)),c&&(t=d.lastIndex),i=n.call(p?r:d,h),p?i?(i.input=i.input.slice(f),i[0]=i[0].slice(f),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:c&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),u&&i&&i.length>1&&s.call(i[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),e.exports=o},"9f7f":function(e,t,r){"use strict";var a=r("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var a=r("23e7"),i=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b691:function(e,t,r){"use strict";var a=r("566c"),i=r.n(a);i.a},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),i=r("d039"),n=r("b622"),s=r("9263"),o=r("9112"),c=n("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=n("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var g=n(e),f=!i((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),h=f&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!f||!h||"replace"===e&&(!l||!u||p)||"split"===e&&!v){var m=/./[g],b=r(g,""[e],(function(e,t,r,a,i){return t.exec===s?f&&!i?{done:!0,value:m.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=b[0],w=b[1];a(String.prototype,e,x),a(RegExp.prototype,g,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}d&&o(RegExp.prototype[g],"sham",!0)}},d81d:function(e,t,r){"use strict";var a=r("23e7"),i=r("b727").map,n=r("1dde"),s=r("ae40"),o=n("map"),c=s("map");a({target:"Array",proto:!0,forced:!o||!c},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-543478cc.2dee90b8.js.map