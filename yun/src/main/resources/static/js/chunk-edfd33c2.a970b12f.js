(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edfd33c2"],{"055d":function(t,e,r){},"80a5":function(t,e,r){"use strict";var s=r("055d"),o=r.n(s);o.a},cf2a:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order"},[t._m(0),null!==t.orders?r("div",{staticClass:"order-content"},t._l(t.orders,(function(e,s){return r("div",{key:s,staticClass:"content"},[r("ul",[r("li",{staticClass:"order-info"},[r("div",{staticClass:"order-id"},[t._v("订单编号: "+t._s(t.orders[s].orderItemId))]),r("div",{staticClass:"order-time"},[t._v("订单时间: "+t._s(t._f("dateFormat")(t.orders[s].createTime)))])]),t._m(1,!0),r("li",{staticClass:"product-list"},[r("div",{staticClass:"pro-img"},[r("router-link",{attrs:{to:{path:"/goods/details",query:{productID:t.orders[s].goodsId}}}},[r("img",{attrs:{src:t.orders[s].goodsCoverImg}})])],1),r("div",{staticClass:"pro-name"},[r("router-link",{attrs:{to:{path:"/goods/details",query:{productID:t.orders[s].goodsId}}}},[t._v(t._s(t.orders[s].goodsName))])],1),r("div",{staticClass:"pro-price"},[t._v(t._s(t.orders[s].sellingPrice)+"元")]),r("div",{staticClass:"pro-num"},[t._v(t._s(t.orders[s].goodsCount))]),r("div",{staticClass:"pro-total pro-total-in"},[t._v(t._s(t.orders[s].sellingPrice*t.orders[s].goodsCount)+"元")]),r("div",{staticClass:"pro-operate"},[r("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.orders[s].orderStatus,expression:"orders[index].orderStatus == 0"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.delOrder(t.orders[s].orderItemId)}}},[t._v("删除")]),r("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.orders[s].orderStatus,expression:"orders[index].orderStatus == 0"}],attrs:{type:"success",size:"mini"},on:{click:function(e){return t.undateOrder(t.orders[s].orderItemId,1)}}},[t._v("支付")]),r("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.orders[s].orderStatus,expression:"orders[index].orderStatus == 1"}],attrs:{type:"warning",size:"mini"},on:{click:function(e){return t.undateOrder(t.orders[s].orderItemId,0)}}},[t._v("退款")]),r("el-button",{directives:[{name:"show",rawName:"v-show",value:2==t.orders[s].orderStatus,expression:"orders[index].orderStatus == 2"}],attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.undateOrder(t.orders[s].orderItemId,3)}}},[t._v("确认签收")]),r("el-button",{directives:[{name:"show",rawName:"v-show",value:3==t.orders[s].orderStatus,expression:"orders[index].orderStatus == 3"}],attrs:{type:"text",size:"mini"},on:{click:function(e){return t.gitComment(t.orders[s].orderItemId)}}},[t._v("评论")]),r("p",{directives:[{name:"show",rawName:"v-show",value:3==t.orders[s].orderStatus,expression:"orders[index].orderStatus == 3"}]},[t._v("订单完成")])],1)])]),r("div",{staticClass:"order-bar"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.orders[s].orderStatus<3,expression:"orders[index].orderStatus <3"}],staticClass:"order-bar-right"},[r("span",[r("span",{staticClass:"total-price-title"},[t._v("状态：")]),r("span",{staticClass:"total-price"},[t._v(t._s(t.orderst[t.orders[s].orderStatus])+" ")])]),r("br")])])])})),0):t._e(),r("div",{staticStyle:{"margin-top":"-40px"}})])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-header"},[r("div",{staticClass:"order-header-content"},[r("p",[r("i",{staticClass:"el-icon-s-order",staticStyle:{"font-size":"30px",color:"#ff6700"}}),t._v(" 我的订单 ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"header"},[r("div",{staticClass:"pro-img"}),r("div",{staticClass:"pro-name"},[t._v("商品名称")]),r("div",{staticClass:"pro-price"},[t._v("单价")]),r("div",{staticClass:"pro-num"},[t._v("数量")]),r("div",{staticClass:"pro-total"},[t._v("小计")]),r("div",{staticClass:"pro-operate"},[t._v("操作")])])}],a=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("ade3")),i=r("2f62");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={computed:d({},Object(i["c"])(["getOrder"])),data:function(){return{orderst:["待支付","已支付","已发货","已签收"],forPay:!0,orders:[],total:[],comments:"",commentsid:""}},activated:function(){},created:function(){this.indexorder()},watch:{comments:function(t){var e=this;this.$axios({url:this.$target+"/addComment",method:"post",params:{orderItemId:this.commentsid,comment:t}}).then((function(t){t.data.flag?e.notifySucceed(t.data.msg):e.notifyError("更新订单失败",t.data.msg)})).catch((function(t){return Promise.reject(t)}))}},methods:{gitComment:function(t){var e=this;console.log("请输入评论"),this.$prompt("请输入评论",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(r){var s=r.value;e.comments=s,e.commentsid=t,console.log(e.comments),e.$message({type:"success",message:"评论成功 "+s})})).catch((function(){e.$message({type:"info",message:"取消输入"})})),console.log(t)},undateOrder:function(t,e){var r=this;this.$axios({url:this.$target+"/updateOrder",method:"post",params:{orderItemId:t,status:e}}).then((function(t){t.data.flag?r.notifySucceed(t.data.msg):r.notifyError("更新订单失败",t.data.msg)})).catch((function(t){return Promise.reject(t)})),this.$router.go(0)},delOrder:function(t){var e=this,r=this.$store.getters.getUserId;this.$axios({url:this.$target+"/delOrder",method:"psot",params:{orderItemId:t,userId:r}}).then((function(t){t.data.flag?(console.log(e.orders),e.notifySucceed(t.data.msg)):e.notifyError("删除失败",t.data.msg)})).catch((function(t){return Promise.reject(t)})),this.$router.go(0)},indexorder:function(){var t=this,e=this.$store.getters.getUserId;this.$axios({url:"http://localhost:3000/cart",method:"get",params:{userId:e}}).then((function(e){e.data.flag?(t.orders=e.data.data,console.log(t.orders)):t.notifyError("获取购物车的所有商品",e.data.msg)})).catch((function(t){return Promise.reject(t)}))}}},u=c,l=(r("80a5"),r("2877")),m=Object(l["a"])(u,s,o,!1,null,"f6d6606a",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-edfd33c2.a970b12f.js.map