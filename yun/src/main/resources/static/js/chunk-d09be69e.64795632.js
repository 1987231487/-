(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d09be69e"],{"0cca":function(t,i,s){t.exports=s.p+"img/2.01f43ae1.png"},"1a54":function(t,i,s){},"1df7":function(t,i,s){t.exports=s.p+"img/A.a3cc99a0.jpg"},"28f5":function(t,i,s){t.exports=s.p+"img/GLLH.ae6d49f4.png"},4822:function(t,i,s){t.exports=s.p+"img/WSD.a3fad85b.png"},"890e":function(t,i,s){t.exports=s.p+"img/DYJ.23573770.png"},"8e82":function(t,i,s){t.exports=s.p+"img/B.a4af38c6.jpg"},"9f65":function(t,i,s){t.exports=s.p+"img/C.dac2c54f.png"},a90b:function(t,i,s){"use strict";var e=s("1a54"),c=s.n(e);c.a},bb51:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"home",attrs:{id:"home",name:"home"}},[s("el-carousel",{attrs:{interval:2500,type:"card",height:"320px"}},t._l(t.carousel,(function(t){return s("el-carousel-item",{key:t.carousel_id},[s("img",{staticStyle:{height:"320px",width:"100%"},attrs:{src:t.product_picture}})])})),1),s("div",{staticClass:"main-box"},[s("div",{staticClass:"main"},[s("div",{staticClass:"phone"},[t._m(0),s("div",{staticClass:"box-bd"},[s("div",{staticClass:"list"},[s("MyList",{attrs:{list:t.phoneList,isMore:!0}})],1)])]),s("div",{staticClass:"appliance",attrs:{id:"promo-menu"}},[s("div",{staticClass:"box-hd"},[t._m(1),s("div",{staticClass:"more",attrs:{id:"more"}},[s("MyMenu",{attrs:{val:4},on:{fromChild:t.getChildMsg2}},[s("span",{attrs:{slot:"1"},slot:"1"},[t._v("天阶")]),s("span",{attrs:{slot:"2"},slot:"2"},[t._v("地阶")]),s("span",{attrs:{slot:"3"},slot:"3"},[t._v("玄阶")]),s("span",{attrs:{slot:"4"},slot:"4"},[t._v("黄阶")])])],1)]),s("div",{staticClass:"box-bd"},[s("div",{staticClass:"list"},[s("MyList",{attrs:{list:t.applianceList,isMore:!0}})],1)])]),s("div",{staticClass:"accessory",attrs:{id:"promo-menu"}},[t._m(2),s("div",{staticClass:"box-bd"},[s("div",{staticClass:"list"},[s("MyList",{attrs:{list:t.accessoryList,isMore:!0}})],1)])]),s("div",{staticClass:"accessory",attrs:{id:"promo-menu"}},[t._m(3),s("div",{staticClass:"box-bd"},[s("div",{staticClass:"list"},[s("MyList",{attrs:{list:t.danyao,isMore:!0}})],1)])])])])],1)},c=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"box-hd"},[s("div",{staticClass:"title"},[s("b",[t._v("异火")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"title"},[s("b",[t._v("功法")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"box-hd"},[s("div",{staticClass:"title"},[s("strong",[t._v("药鼎")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"box-hd"},[s("div",{staticClass:"title"},[s("strong",[t._v("丹药")])])])}],r=(s("4de4"),{data:function(){return{carousel:[{carousel_id:1,product_picture:s("1df7")},{carousel_id:2,product_picture:s("9f65")},{carousel_id:3,product_picture:s("8e82")}],applianceActive:1,accessoryActive:1}},computed:{listcom:function(){return this.alllist.filter((function(t){return this.alllist.category_id===t}))}},watch:{applianceActive:function(t){""==this.applianceHotList&&(this.applianceHotList=this.applianceList),1!=t?2!=t||(this.applianceList=this.miTvList):this.applianceList=this.applianceHotList},accessoryActive:function(t){""==this.accessoryHotList&&(this.accessoryHotList=this.accessoryList),1!=t?2!=t?3!=t||(this.accessoryList=this.chargerList):this.accessoryList=this.protectingShellList:this.accessoryList=this.accessoryHotList}},created:function(){this.getPromo("手机","phoneList"),this.getPromo(["保护套","保护膜","充电器","充电宝"],"accessoryList","/api/product/getHotProduct")},methods:{evenNumbers:function(t){return this.alllist.filter((function(i){return i.category_id===t}))},getChildMsg:function(t){this.applianceActive=t},getChildMsg2:function(t){this.accessoryActive=t},getPromo:function(t,i,e){this.alllist=[{product_id:1,product_picture:s("0cca"),category_id:1,product_name:"青莲地心火",product_title:"异火榜上，排名第十九，是火山深处，被锻烧了千百年的的熔岩地火。",product_selling_price:12,product_price:13},{product_id:2,product_picture:s("890e"),category_id:2,product_name:"帝印决（天阶）",product_title:"古族天阶高级功法",product_selling_price:12,product_price:13},{product_id:3,product_picture:s("28f5"),category_id:1,product_name:"骨灵冷火",product_title:"极寒与极热相结合的奇特火焰，只有在每百年，日月交替之时，方才能够在极寒与极阴之地遇见。",product_selling_price:12,product_price:13},{product_id:4,product_picture:s("890e"),category_id:2,product_name:"帝印决（地阶）",product_title:"古族地阶高级功法",product_selling_price:12,product_price:13},{product_id:5,product_picture:s("4822"),category_id:3,product_name:"黑魔",product_title:"天鼎榜排行第五",product_selling_price:12,product_price:13},{product_id:6,product_picture:s("be5e"),category_id:4,product_name:"斗帝丹",product_title:"服用即可晋升斗帝",product_selling_price:12,product_price:13}],console.log(t,i,e),this.phoneList=this.evenNumbers(1),this.applianceList=this.evenNumbers(2),this.accessoryList=this.evenNumbers(3),this.danyao=this.evenNumbers(4),console.log(this.phoneList,this.applianceList)}}}),a=r,o=(s("a90b"),s("2877")),n=Object(o["a"])(a,e,c,!1,null,"3baf8679",null);i["default"]=n.exports},be5e:function(t,i,s){t.exports=s.p+"img/DDD.e0b2b79d.png"}}]);
//# sourceMappingURL=chunk-d09be69e.64795632.js.map