(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f2bb0c4"],{"3be6":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order"},[null!==t.User?s("div",{staticClass:"order-content"},t._l(t.User,(function(e,i){return s("div",{key:i,staticClass:"content"},[s("ul",[t._m(0,!0),s("li",{staticClass:"product-list"},[s("div",{staticClass:"pro-img"},[s("img",{attrs:{src:t.User[i].goodsCoverImg}})]),s("div",{staticClass:"pro-name"},[t._v(" "+t._s(t.User[i].storeName)+" ")]),s("div",{staticClass:"pro-price"},[t._v(" 杀杀杀 ")]),s("div",{staticClass:"pro-total"},[t._v(t._s(t.User[i].createTime))]),s("div",{staticClass:"pro-operate"},[s("el-dialog",{attrs:{title:"表单弹框",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("el-form",{ref:"form",refInFor:!0,attrs:{model:t.form,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"店铺名"}},[s("el-input",{model:{value:t.form.storeName,callback:function(e){t.$set(t.form,"storeName",e)},expression:"form.storeName"}})],1),s("el-form-item",{attrs:{label:"描述"}},[s("el-input",{model:{value:t.form.introduceSign,callback:function(e){t.$set(t.form,"introduceSign",e)},expression:"form.introduceSign"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.undateshop()}}},[t._v("确 定")])],1)],1),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.delShop(t.User[i].storeId)}}},[t._v("删除")]),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){return t.undateshopID(i)}}},[t._v("修改")]),s("p",{directives:[{name:"show",rawName:"v-show",value:3==t.User[i].orderStatus,expression:"User[index].orderStatus == 3"}]},[t._v("订单完成")])],1)])])])})),0):t._e(),s("div",{staticStyle:{"margin-top":"-40px"}})])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"header"},[s("div",{staticClass:"pro-img"}),s("div",{staticClass:"pro-name"},[t._v("店铺名称")]),s("div",{staticClass:"pro-price"},[t._v("店主昵称")]),s("div",{staticClass:"pro-total"},[t._v("注册时间")]),s("div",{staticClass:"pro-operate"},[t._v("操作")])])}],r=(s("d3b7"),{data:function(){return{changeID:-1,dialogVisible:!1,User:"",form:{storeName:"",introduceSign:""}}},created:function(){this.getPromo()},watch:{changeID:function(t){console.log(t),t>=0&&(this.dialogVisible=!0,this.form.storeName=this.User[t].storeName,this.form.introduceSign=this.User[t].introduceSign)}},methods:{undateshopID:function(t){this.changeID=t,console.log("this.changeID=val",this.changeID)},undateshop:function(){var t=this;console.log(this.User[this.changeID].storeId,this.form.storeName,this.form.introduceSign),this.dialogVisible=!1,this.$axios({url:this.$target+"/admin/storesInfo/update",method:"post",params:{storeId:this.User[this.changeID].storeId,storeName:this.form.storeName,introduceSign:this.form.introduceSign}}).then((function(e){e.data.flag?t.notifySucceed(e.data.msg):t.notifyError("更新订单失败",e.data.msg)})).catch((function(t){return Promise.reject(t)})),this.changeID=-1,this.$router.go(0)},delShop:function(t){var e=this;this.$axios({url:this.$target+"/admin/storesInfo/delete",method:"post",params:{storeId:t}}).then((function(t){e.notifySucceed(t.data.msg)})).catch((function(t){return Promise.reject(t)}))},getPromo:function(){var t=this;this.$axios({url:this.$target+"/admin/storesInfo",method:"get",params:{}}).then((function(e){t.User=e.data.data,console.log("this.User ",t.User)})).catch((function(t){return Promise.reject(t)}))}}}),a=r,n=(s("6493"),s("2877")),c=Object(n["a"])(a,i,o,!1,null,"58c7939c",null);e["default"]=c.exports},"5e74":function(t,e,s){},6493:function(t,e,s){"use strict";var i=s("5e74"),o=s.n(i);o.a}}]);
//# sourceMappingURL=chunk-4f2bb0c4.536aeecc.js.map