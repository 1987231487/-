(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-341cf688"],{"0e6a":function(t,s,e){"use strict";var r=e("3dd2"),a=e.n(r);a.a},"3be6":function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"order"},[null!==t.User?e("div",{staticClass:"order-content"},t._l(t.User,(function(s,r){return e("div",{key:r,staticClass:"content"},[e("ul",[t._m(0,!0),e("li",{staticClass:"product-list"},[e("div",{staticClass:"pro-img"},[e("router-link",{attrs:{to:{path:"/goods/details",query:{productID:t.User[r].goodsId}}}},[e("img",{attrs:{src:t.User[r].goodsCoverImg}})])],1),e("div",{staticClass:"pro-name"},[t._v(" "+t._s(t.User[r].storeName)+" ")]),e("div",{staticClass:"pro-price"},[t._v(" 杀杀杀 ")]),e("div",{staticClass:"pro-total"},[t._v(t._s(t.User[r].createTime))]),e("div",{staticClass:"pro-operate"},[e("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("删除")]),e("el-button",{attrs:{type:"success",size:"mini"}},[t._v("修改")]),e("p",{directives:[{name:"show",rawName:"v-show",value:3==t.User[r].orderStatus,expression:"User[index].orderStatus == 3"}]},[t._v("订单完成")])],1)])])])})),0):t._e(),e("div",{staticStyle:{"margin-top":"-40px"}})])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"header"},[e("div",{staticClass:"pro-img"}),e("div",{staticClass:"pro-name"},[t._v("店铺名称")]),e("div",{staticClass:"pro-price"},[t._v("店主昵称")]),e("div",{staticClass:"pro-total"},[t._v("注册时间")]),e("div",{staticClass:"pro-operate"},[t._v("操作")])])}],i=(e("d3b7"),{data:function(){return{User:""}},created:function(){this.getPromo()},methods:{getPromo:function(){var t=this;this.$axios({url:" http://localhost:3000/shop",method:"get",params:{currentPage:1,pageSize:5}}).then((function(s){t.User=s.data.data,console.log("this.User ",t.User)})).catch((function(t){return Promise.reject(t)}))}}}),o=i,c=(e("0e6a"),e("2877")),n=Object(c["a"])(o,r,a,!1,null,"848d9e52",null);s["default"]=n.exports},"3dd2":function(t,s,e){}}]);
//# sourceMappingURL=chunk-341cf688.47e22543.js.map