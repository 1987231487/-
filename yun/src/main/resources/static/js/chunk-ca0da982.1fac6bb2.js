(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca0da982"],{4521:function(t,r,e){},b978:function(t,r,e){"use strict";var s=e("4521"),a=e.n(s);a.a},cf2a:function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"order"},[t._m(0),null!==t.getOrder?e("div",{staticClass:"order-content"},[t._l(t.orders,(function(r,s){return e("div",{key:s,staticClass:"content"},[e("ul",[e("li",{staticClass:"order-info"},[e("div",{staticClass:"order-id"},[t._v("订单编号: "+t._s(t.orders[s][0].order_id))]),e("div",{staticClass:"order-time"},[t._v("订单时间: "+t._s(t._f("dateFormat")(t.orders[s][0].order_time)))])]),t._m(1,!0),t._l(t.orders[s].slice(1),(function(r,s){return e("li",{key:s,staticClass:"product-list"},[e("div",{staticClass:"pro-img"},[e("router-link",{attrs:{to:{path:"/goods/details",query:{productID:r.product_id}}}},[e("img",{attrs:{src:r.product_picture}})])],1),e("div",{staticClass:"pro-name"},[e("router-link",{attrs:{to:{path:"/goods/details",query:{productID:r.product_id}}}},[t._v(t._s(r.product_name))])],1),e("div",{staticClass:"pro-price"},[t._v(t._s(r.product_price)+"元")]),e("div",{staticClass:"pro-num"},[t._v(t._s(r.count))]),e("div",{staticClass:"pro-total pro-total-in"},[t._v(t._s(r.product_price*r.count)+"元")])])}))],2),e("div",{staticClass:"order-bar"},[e("div",{staticClass:"order-bar-left"},[e("span",{staticClass:"order-total"},[t._v(" 共 "),e("span",{staticClass:"order-total-num"},[t._v(t._s(t.total[s].totalNum))]),t._v(" 件商品 ")])]),e("div",{staticClass:"order-bar-right"},[e("span",[e("span",{staticClass:"total-price-title"},[t._v("合计：")]),e("span",{staticClass:"total-price"},[t._v(t._s(t.total[s].totalPrice)+"元")])])])])])})),e("div",{staticStyle:{"margin-top":"-40px"}})],2):e("div",{staticClass:"order-empty"},[t._m(2)])])},a=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"order-header"},[e("div",{staticClass:"order-header-content"},[e("p",[e("i",{staticClass:"el-icon-s-order",staticStyle:{"font-size":"30px",color:"#ff6700"}}),t._v(" 我的订单 ")])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("li",{staticClass:"header"},[e("div",{staticClass:"pro-img"}),e("div",{staticClass:"pro-name"},[t._v("商品名称")]),e("div",{staticClass:"pro-price"},[t._v("单价")]),e("div",{staticClass:"pro-num"},[t._v("数量")]),e("div",{staticClass:"pro-total"},[t._v("小计")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"empty"},[e("h2",[t._v("您的订单还是空的！")]),e("p",[t._v("快去购物吧！")])])}],o=(e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("ade3")),i=e("2f62");function c(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,s)}return e}function n(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?c(Object(e),!0).forEach((function(r){Object(o["a"])(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var l={computed:n({},Object(i["c"])(["getOrder"])),data:function(){return{orders:[],total:[]}},activated:function(){this.orders=this.getOrder;var t=[this.getOrder];for(var r in t)console.log(t[r]);console.log(this.getOrder),console.log(t)},watch:{orders:function(t){for(var r=[],e=0;e<t.length;e++){for(var s=t[e],a=0,o=0,i=1;i<s.length;i++){var c=s[i];a+=c.count,o+=c.product_price*c.count}r.push({totalNum:a,totalPrice:o})}this.total=r,console.log(this.total)}}},d=l,p=(e("b978"),e("2877")),u=Object(p["a"])(d,s,a,!1,null,"c15fb294",null);r["default"]=u.exports}}]);
//# sourceMappingURL=chunk-ca0da982.1fac6bb2.js.map