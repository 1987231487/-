(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05cb21e6"],{"3a52":function(t,r,e){"use strict";var s=e("df3d"),o=e.n(s);o.a},"9b46":function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"order"},[null!==t.orders?e("div",{staticClass:"order-content"},t._l(t.orders,(function(r,s){return e("div",{key:s,staticClass:"content"},[e("ul",[e("li",{staticClass:"order-info"},[e("div",{staticClass:"order-id"},[t._v("订单编号: "+t._s(t.orders[s].orderItemId))]),e("div",{staticClass:"order-time"},[t._v("订单时间: "+t._s(t._f("dateFormat")(t.orders[s].createTime)))])]),t._m(0,!0),e("li",{staticClass:"product-list"},[e("div",{staticClass:"pro-img"},[e("router-link",{attrs:{to:{path:"/goods/details",query:{productID:t.orders[s].goodsId}}}},[e("img",{attrs:{src:t.orders[s].goodsCoverImg}})])],1),e("div",{staticClass:"pro-name"},[e("router-link",{attrs:{to:{path:"/goods/details",query:{productID:t.orders[s].goodsId}}}},[t._v(t._s(t.orders[s].goodsName))])],1),e("div",{staticClass:"pro-price"},[t._v(t._s(t.orders[s].sellingPrice)+"元")]),e("div",{staticClass:"pro-num"},[t._v(t._s(t.orders[s].goodsCount))]),e("div",{staticClass:"pro-total pro-total-in"},[t._v(t._s(t.orders[s].sellingPrice*t.orders[s].goodsCount)+"元")]),e("div",{staticClass:"pro-operate"},[e("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.orders[s].orderStatus,expression:"orders[index].orderStatus == 0"}],attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.delOrder(t.orders[s].orderItemId)}}},[t._v("删除")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.orders[s].orderStatus,expression:"orders[index].orderStatus == 0"}],attrs:{type:"success",size:"mini"},on:{click:function(r){return t.undateOrder(t.orders[s].orderItemId,1)}}},[t._v("修改")]),e("p",{directives:[{name:"show",rawName:"v-show",value:3==t.orders[s].orderStatus,expression:"orders[index].orderStatus == 3"}]},[t._v("订单完成")])],1)])]),e("div",{staticClass:"order-bar"},[e("div",{staticClass:"order-bar-right"},[e("span",[e("span",{staticClass:"total-price-title"},[t._v("状态：")]),e("span",{staticClass:"total-price"},[t._v(t._s(t.orderst[t.orders[s].orderStatus])+" ")])]),e("br")])])])})),0):t._e(),e("div",{staticStyle:{"margin-top":"-40px"}})])},o=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("li",{staticClass:"header"},[e("div",{staticClass:"pro-img"}),e("div",{staticClass:"pro-name"},[t._v("商品名称")]),e("div",{staticClass:"pro-price"},[t._v("单价")]),e("div",{staticClass:"pro-num"},[t._v("数量")]),e("div",{staticClass:"pro-total"},[t._v("小计")]),e("div",{staticClass:"pro-operate"},[t._v("操作")])])}],a=(e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("d3b7"),e("159b"),e("ade3")),i=e("2f62");function d(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,s)}return e}function n(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?d(Object(e),!0).forEach((function(r){Object(a["a"])(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var c={computed:n({},Object(i["c"])(["getOrder"])),data:function(){return{orderst:["待支付","已支付","已发货","已签收"],forPay:!0,orders:[],total:[]}},activated:function(){},created:function(){this.indexorder()},watch:{},methods:{undateOrder:function(t,r){var e=this;this.$axios({url:this.$target+"/updateOrder",method:"post",params:{orderItemId:t,status:r}}).then((function(t){t.data.flag?e.notifySucceed(t.data.msg):e.notifyError("更新订单失败",t.data.msg)})).catch((function(t){return Promise.reject(t)})),this.$router.go(0)},delOrder:function(t){var r=this,e=this.$store.getters.getUserId;this.$axios({url:this.$target+"/delOrder",method:"psot",params:{orderItemId:t,userId:e}}).then((function(t){t.data.flag?(console.log(r.orders),r.notifySucceed(t.data.msg)):r.notifyError("删除失败",t.data.msg)})).catch((function(t){return Promise.reject(t)})),this.$router.go(0)},indexorder:function(){var t=this,r=this.$store.getters.getUserId;this.$axios({url:"http://localhost:3000/cart",method:"get",params:{userId:r}}).then((function(r){r.data.flag?(t.orders=r.data.data,console.log(t.orders)):t.notifyError("获取购物车的所有商品",r.data.msg)})).catch((function(t){return Promise.reject(t)}))}}},l=c,u=(e("3a52"),e("2877")),p=Object(u["a"])(l,s,o,!1,null,"52306ec6",null);r["default"]=p.exports},df3d:function(t,r,e){}}]);
//# sourceMappingURL=chunk-05cb21e6.6e5da0a6.js.map