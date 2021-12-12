(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{245:function(t,e,r){"use strict";var c={props:{product:Object}},n=r(3),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details"},[r("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.product.price))]),t._v(" "),r("div",{staticClass:"product-content"},[r("p",[t._v("\n            "+t._s(t.product.description)+"\n        ")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ratings-container"},[e("div",{staticClass:"ratings"},[e("div",{staticClass:"ratings-val",staticStyle:{width:"80%"}})]),this._v(" "),e("a",{staticClass:"ratings-text",attrs:{href:"#product-review-link",id:"review-link"}},[this._v("( 2 Reviews )")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"details-filter-row details-row-size"},[r("label",{attrs:{for:"size"}},[t._v("Size:")]),t._v(" "),r("div",{staticClass:"select-custom"},[r("select",{staticClass:"form-control",attrs:{name:"size",id:"size"}},[r("option",{attrs:{value:"#",selected:"selected"}},[t._v("Select a size")]),t._v(" "),r("option",{attrs:{value:"s"}},[t._v("Small")]),t._v(" "),r("option",{attrs:{value:"m"}},[t._v("Medium")]),t._v(" "),r("option",{attrs:{value:"l"}},[t._v("Large")]),t._v(" "),r("option",{attrs:{value:"xl"}},[t._v("Extra Large")])])]),t._v(" "),r("a",{staticClass:"size-guide",attrs:{href:"#"}},[r("i",{staticClass:"icon-th-list"}),t._v("size guide")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details-filter-row details-row-size"},[e("label",{attrs:{for:"qty"}},[this._v("Qty:")]),this._v(" "),e("div",{staticClass:"product-details-quantity"},[e("input",{staticClass:"form-control",staticStyle:{display:"none"},attrs:{type:"number",id:"qty",value:"1",min:"1",max:"10",step:"1","data-decimals":"0",required:""}}),this._v(" "),e("div",{staticClass:"input-group input-spinner"},[e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-decrement btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"}},[e("i",{staticClass:"icon-minus"})])]),this._v(" "),e("input",{staticClass:"form-control",staticStyle:{"text-align":"center"},attrs:{type:"text",required:"",placeholder:""}}),this._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-increment btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"}},[e("i",{staticClass:"icon-plus"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-details-action"},[e("a",{staticClass:"btn-product btn-cart",attrs:{href:"#"}},[e("span",[this._v("add to cart")])]),this._v(" "),e("div",{staticClass:"details-action-wrapper"},[e("a",{staticClass:"btn-product btn-wishlist",attrs:{href:"#",title:"Wishlist"}},[e("span",[this._v("Add to Wishlist")])]),this._v(" "),e("a",{staticClass:"btn-product btn-compare",attrs:{href:"#",title:"Compare"}},[e("span",[this._v("Add to Compare")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details-footer"},[r("div",{staticClass:"product-cat"},[r("span",[t._v("Category:")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("Women")]),t._v(", "),r("a",{attrs:{href:"#"}},[t._v("Dresses")]),t._v(",\n            "),r("a",{attrs:{href:"#"}},[t._v("Yellow")])]),t._v(" "),r("div",{staticClass:"social-icons social-icons-sm"},[r("span",{staticClass:"social-label"},[t._v("Share:")]),t._v(" "),r("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[r("i",{staticClass:"icon-facebook-f"})]),t._v(" "),r("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[r("i",{staticClass:"icon-twitter"})]),t._v(" "),r("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[r("i",{staticClass:"icon-instagram"})]),t._v(" "),r("a",{staticClass:"social-icon",attrs:{href:"#",title:"Pinterest",target:"_blank"}},[r("i",{staticClass:"icon-pinterest"})])])])}],!1,null,null,null);e.a=component.exports},263:function(t,e,r){"use strict";r(25);var c=r(254),n=r.n(c),o=(r(95),r(255),r(32),{components:{LightBox:n.a},props:{product:Object},data:function(){return{baseUrl:"http://vue-backend.test",currentIndex:0}},computed:{lightBoxMedia:function(){return[{thumb:"".concat("http://vue-backend.test","/").concat(this.product.photo),src:"".concat("http://vue-backend.test","/").concat(this.product.photo),caption:this.product.name}]}},methods:{changePicture:function(t){this.currentIndex=t},openLightBox:function(){this.$refs.lightbox.showImage(this.currentIndex)}}}),l=r(3),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"product-gallery product-gallery-vertical"},[r("div",{staticClass:"row m-0"},[r("figure",{staticClass:"product-main-image"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+"/"+t.product.photo,expression:"`${baseUrl}/${product.photo}`"}],attrs:{id:"product-zoom",alt:"product",width:200,height:200}}),t._v(" "),r("a",{staticClass:"btn-product-gallery",attrs:{href:"#",id:"btn-product-gallery"},on:{click:function(e){return e.preventDefault(),t.openLightBox(e)}}},[r("i",{staticClass:"icon-arrows"})])]),t._v(" "),r("div",{staticClass:"product-image-gallery",attrs:{id:"product-zoom-gallery"}},[r("a",{key:t.index,staticClass:"product-gallery-item h-100 h-lg-auto carousel-dot",class:{active:t.currentIndex==t.index},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePicture(t.index)}}},[r("img",{attrs:{src:t.baseUrl+"/"+t.product.photo,width:100,height:100,alt:"product side"}})])]),t._v(" "),r("light-box",{ref:"lightbox",staticClass:"light-box",attrs:{media:t.lightBoxMedia,"show-caption":!0,"show-light-box":!1}})],1)]):t._e()}),[],!1,null,null,null);e.a=component.exports},376:function(t,e,r){"use strict";r.r(e);r(24),r(13),r(14),r(9),r(19),r(42);var c=r(4),n=r(2),o=r(10),l=r(263),d=r(245),v=r(264),h=r(246),_=r(248),m=(r(32),r(22)),f=r.n(m);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y,w={components:{DetailOne:d.a,InfoOne:v.a,Breadcrumb:h.a,GalleryVertical:l.a,RelatedProductsOne:_.a},data:function(){return{product:null,prevProduct:null,nextProduct:null,relatedProducts:[],loaded:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("demo",["currentDemo"])),mounted:function(){this.getProduct()},methods:{getProduct:(y=Object(c.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("http://vue-backend.test/api/single-product/"+this.$route.params.id).then((function(t){e.product=t.data}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})}},x=r(3),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("breadcrumb",{attrs:{"prev-product":t.prevProduct,"next-product":t.nextProduct,current:"Default"}}),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{staticClass:"container skeleton-body"},[r("div",{staticClass:"product-details-top"},[r("div",{staticClass:"row skel-pro-single",class:{loaded:t.loaded}},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"skel-product-gallery"}),t._v(" "),r("gallery-vertical",{attrs:{product:t.product}})],1),t._v(" "),r("div",{staticClass:"col-md-6"},[t._m(0),t._v(" "),t.product?r("detail-one",{attrs:{product:t.product}}):t._e()],1)])]),t._v(" "),r("info-one"),t._v(" "),r("related-products-one",{attrs:{products:t.relatedProducts}})],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"entry-summary row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary1 mt-2 mt-md-0"})]),this._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary2"})])])}],!1,null,null,null);e.default=component.exports}}]);