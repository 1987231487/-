(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1b753b4"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),o=a("5899"),c="["+o+"]",i=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),n=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:n(1),end:n(2),trim:n(3)}},7156:function(t,e,a){var r=a("861d"),o=a("d2bb");t.exports=function(t,e,a){var c,i;return o&&"function"==typeof(c=e.constructor)&&c!==a&&r(i=c.prototype)&&i!==a.prototype&&o(t,i),t}},8252:function(t,e,a){"use strict";var r=a("a1e0"),o=a.n(r);o.a},8629:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods",attrs:{id:"goods",name:"goods"}},[a("div",{staticClass:"nav"},[a("div",{staticClass:"product-nav"},[a("div",{staticClass:"title"},[t._v("分类")]),a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.categoryList,(function(e){return a("el-tab-pane",{key:e.category_id,attrs:{label:e.category_name,name:""+e.category_id},on:{click:function(a){return t.getKlassifiseer(e.category_id)}}})})),1)],1)]),a("div",{staticClass:"main"},[a("div",{staticClass:"list"},[t.productList.length>0?a("MyList",{attrs:{list:t.productList}}):a("div",{staticClass:"none-product"},[t._v("抱歉没有找到相关的商品，请看看其他的商品")])],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.currentChange}})],1)])])},o=[],c=(a("4de4"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("841c"),a("bc3a")),i=a.n(c),s={data:function(){return{goodsUrl:"/categories",categoryList:"",categoryID:[],product:"",productList:"",total:0,pageSize:15,currentPage:1,activeName:"-1",search:""}},created:function(){this.getCategory()},activated:function(){return this.activeName="-1",this.total=0,this.currentPage=1,0==Object.keys(this.$route.query).length?(this.categoryID=[],void(this.activeName="0")):void 0!=this.$route.query.categoryID?(this.categoryID=this.$route.query.categoryID,void(1==this.categoryID.length&&(this.activeName=""+this.categoryID[0]))):void(void 0!=this.$route.query.search&&(this.search=this.$route.query.search))},watch:{activeName:function(t){0==t&&(this.categoryID=[]),t>0&&(this.categoryID=[Number(t)]),this.total=0,this.currentPage=1,this.$router.push({path:"/goods",query:{categoryID:this.categoryID[0]}})},search:function(t){""!=t&&this.getProductBySearch(t)},categoryID:function(){console.log("当前分类ID",this.categoryID),console.log(this),this.getData(),this.getKlassifiseer(this.categoryID[0]),this.search=""},$route:function(t){"/goods"==t.path&&void 0!=t.query.search&&(this.activeName="-1",this.currentPage=1,this.total=0,this.search=t.query.search)}},methods:{evenNumbers:function(t){return this.product.filter((function(e){return void 0===t?e:e.category_id===t}))},backtop:function(){var t=setInterval((function(){var e=document.documentElement.scrollTop||document.body.scrollTop,a=Math.floor(-e/5);document.documentElement.scrollTop=document.body.scrollTop=e+a,0===e&&clearInterval(t)}),20)},currentChange:function(t){this.currentPage=t,""!=this.search?this.getProductBySearch():this.getData(),this.backtop()},getCategory:function(){var t=this;i()({method:"get",baseURL:"http://localhost:80",url:this.goodsUrl}).then((function(e){var a={category_id:0,category_name:"全部"},r=e.data.data;r.unshift(a),t.categoryList=r})).catch((function(t){return Promise.reject(t)}))},getKlassifiseer:function(t){this.productList=this.evenNumbers(t),console.log("product",t),console.log("productlist",this.productList)},getData:function(){var t=this,e=0==this.categoryID.length?"/api/product/getAllProduct":"/api/product/getProductByCategory";this.$axios.post(e,{categoryID:this.categoryID,currentPage:this.currentPage,pageSize:this.pageSize}).then((function(e){t.product=e.data.Product,t.total=e.data.total})).catch((function(t){return Promise.reject(t)}))},getProductBySearch:function(){}}},n=s,u=(a("8252"),a("2877")),h=Object(u["a"])(n,r,o,!1,null,"03f11226",null);e["default"]=h.exports},a1e0:function(t,e,a){},a9e3:function(t,e,a){"use strict";var r=a("83ab"),o=a("da84"),c=a("94ca"),i=a("6eeb"),s=a("5135"),n=a("c6b6"),u=a("7156"),h=a("c04e"),g=a("d039"),l=a("7c73"),d=a("241c").f,f=a("06cf").f,p=a("9bf2").f,y=a("58a8").trim,v="Number",I=o[v],m=I.prototype,b=n(l(m))==v,N=function(t){var e,a,r,o,c,i,s,n,u=h(t,!1);if("string"==typeof u&&u.length>2)if(u=y(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(c=u.slice(2),i=c.length,s=0;s<i;s++)if(n=c.charCodeAt(s),n<48||n>o)return NaN;return parseInt(c,r)}return+u};if(c(v,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var D,_=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof _&&(b?g((function(){m.valueOf.call(a)})):n(a)!=v)?u(new I(N(e)),a,_):N(e)},C=r?d(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;C.length>E;E++)s(I,D=C[E])&&!s(_,D)&&p(_,D,f(I,D));_.prototype=m,m.constructor=_,i(o,v,_)}}}]);
//# sourceMappingURL=chunk-e1b753b4.960945e3.js.map