(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c628526"],{"1df7":function(t,s,i){t.exports=i.p+"img/A.a3cc99a0.jpg"},7712:function(t,s,i){},"8e82":function(t,s,i){t.exports=i.p+"img/B.a4af38c6.jpg"},"9a22":function(t,s,i){"use strict";var a=i("7712"),e=i.n(a);e.a},"9f65":function(t,s,i){t.exports=i.p+"img/C.dac2c54f.png"},bb51:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"home",attrs:{id:"home",name:"home"}},[i("el-carousel",{attrs:{interval:2500,type:"card",height:"320px"}},t._l(t.carousel,(function(t){return i("el-carousel-item",{key:t.carousel_id},[i("img",{staticStyle:{height:"320px",width:"100%"},attrs:{src:t.product_picture}})])})),1),i("div",{staticClass:"main-box"},[i("div",{staticClass:"main"},[i("div",{staticClass:"phone"},[t._m(0),i("div",{staticClass:"box-bd"},[i("div",{staticClass:"list"},[i("MyList",{attrs:{list:t.phoneList,isMore:!0}})],1)])]),i("div",{staticClass:"appliance",attrs:{id:"promo-menu"}},[i("div",{staticClass:"box-hd"},[t._m(1),i("div",{staticClass:"more",attrs:{id:"more"}},[i("MyMenu",{attrs:{val:4},on:{fromChild:t.getChildMsg2}},[i("span",{attrs:{slot:"1"},slot:"1"},[t._v("天阶")]),i("span",{attrs:{slot:"2"},slot:"2"},[t._v("地阶")]),i("span",{attrs:{slot:"3"},slot:"3"},[t._v("玄阶")]),i("span",{attrs:{slot:"4"},slot:"4"},[t._v("黄阶")])])],1)]),i("div",{staticClass:"box-bd"},[i("div",{staticClass:"list"},[i("MyList",{attrs:{list:t.applianceList,isMore:!0}})],1)])]),i("div",{staticClass:"accessory",attrs:{id:"promo-menu"}},[t._m(2),i("div",{staticClass:"box-bd"},[i("div",{staticClass:"list"},[i("MyList",{attrs:{list:t.accessoryList,isMore:!0}})],1)])]),i("div",{staticClass:"accessory",attrs:{id:"promo-menu"}},[t._m(3),i("div",{staticClass:"box-bd"},[i("div",{staticClass:"list"},[i("MyList",{attrs:{list:t.danyao,isMore:!0}})],1)])])])])],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box-hd"},[i("div",{staticClass:"title"},[i("b",[t._v("丹药")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"title"},[i("b",[t._v("功法")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box-hd"},[i("div",{staticClass:"title"},[i("strong",[t._v("炼丹炉")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box-hd"},[i("div",{staticClass:"title"},[i("strong",[t._v("异火")])])])}],c=(i("4de4"),i("a434"),i("d3b7"),{data:function(){return{carousel:[{carousel_id:1,product_picture:i("1df7")},{carousel_id:2,product_picture:i("9f65")},{carousel_id:3,product_picture:i("8e82")}],alllist:"",danyao:"",phoneList:"",miTvList:"",applianceList:"",applianceHotList:"",accessoryList:"",accessoryHotList:"",protectingShellList:"",chargerList:"",applianceActive:1,accessoryActive:1}},computed:{listcom:function(){return this.alllist.filter((function(t){return this.alllist.category_id===t}))}},watch:{applianceActive:function(t){""==this.applianceHotList&&(this.applianceHotList=this.applianceList),1!=t?2!=t||(this.applianceList=this.miTvList):this.applianceList=this.applianceHotList},accessoryActive:function(t){""==this.accessoryHotList&&(this.accessoryHotList=this.accessoryList),1!=t?2!=t?3!=t||(this.accessoryList=this.chargerList):this.accessoryList=this.protectingShellList:this.accessoryList=this.accessoryHotList}},created:function(){this.getPromo("phoneList",15),this.getPromo("applianceList",17),this.getPromo("accessoryList",16),this.getPromo("danyao",18)},methods:{evenNumbers:function(t){return this.alllist.filter((function(s){return s.category_id===t}))},getChildMsg:function(t){this.applianceActive=t},getChildMsg2:function(t){this.accessoryActive=t},getall:function(){},getPromo:function(t,s){var i=this;this.$axios({url:this.$target+"/goodsByCategoryId",method:"get",params:{goodsCategoryId:s,currentPage:1,pageSize:5}}).then((function(s){i[t]=s.data.data,i[t].splice(2)})).catch((function(t){return Promise.reject(t)}))}}}),o=c,r=(i("9a22"),i("2877")),n=Object(r["a"])(o,a,e,!1,null,"14be9fdf",null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-1c628526.68328485.js.map