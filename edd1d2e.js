(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{239:function(t,e,r){"use strict";var o=r(240);const c=function(t){t.directive("Sticky",o.a)};window.Vue&&Vue.use(c),o.a.install=c,e.a=o.a},240:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,style={},e={})=>{for(let e in style)t.style[e]=style[e];for(let r in e)e[r]&&!t.classList.contains(r)?t.classList.add(r):!e[r]&&t.classList.contains(r)&&t.classList.remove(r)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const r=this.getAttribute("sticky-offset")||{},o=this.getAttribute("sticky-side")||"top",c=this.getAttribute("sticky-z-index")||"10",n=this.getAttribute("on-stick")||null;this.options={topOffset:Number(r.top)||0,bottomOffset:Number(r.bottom)||0,shouldTopSticky:"top"===o||"both"===o,shouldBottomSticky:"bottom"===o||"both"===o,zIndex:c,onStick:n}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick(()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach(t=>{const e=this.update.bind(this);this.unsubscribers.push(()=>window.removeEventListener(t,e)),this.unsubscribers.push(()=>this.containerEl.removeEventListener(t,e)),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})})})}doUnbind(){this.unsubscribers.forEach(t=>t()),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame(()=>{this.isPending=!1,this.recomputeState(),this.updateElements()}),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,r=this.options.topOffset,o=this.options.bottomOffset;return t<=r&&e>=o}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,r=this.options.topOffset;return t<=this.options.bottomOffset&&e>=r}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},r={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const o=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;o<0&&(e.top=o+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",r["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const o=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;o<0&&(e.bottom=o+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",r["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,r),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach(t=>{this.el.style.removeProperty(t)}),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result=void 0;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,r){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,r.context),t[namespace].doBind())},unbind(t,e,r){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,r){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,r.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},245:function(t,e,r){"use strict";var o={props:{product:Object}},c=r(3),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details"},[r("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.product.price))]),t._v(" "),r("div",{staticClass:"product-content"},[r("p",[t._v("\n            "+t._s(t.product.description)+"\n        ")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ratings-container"},[e("div",{staticClass:"ratings"},[e("div",{staticClass:"ratings-val",staticStyle:{width:"80%"}})]),this._v(" "),e("a",{staticClass:"ratings-text",attrs:{href:"#product-review-link",id:"review-link"}},[this._v("( 2 Reviews )")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"details-filter-row details-row-size"},[r("label",{attrs:{for:"size"}},[t._v("Size:")]),t._v(" "),r("div",{staticClass:"select-custom"},[r("select",{staticClass:"form-control",attrs:{name:"size",id:"size"}},[r("option",{attrs:{value:"#",selected:"selected"}},[t._v("Select a size")]),t._v(" "),r("option",{attrs:{value:"s"}},[t._v("Small")]),t._v(" "),r("option",{attrs:{value:"m"}},[t._v("Medium")]),t._v(" "),r("option",{attrs:{value:"l"}},[t._v("Large")]),t._v(" "),r("option",{attrs:{value:"xl"}},[t._v("Extra Large")])])]),t._v(" "),r("a",{staticClass:"size-guide",attrs:{href:"#"}},[r("i",{staticClass:"icon-th-list"}),t._v("size guide")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details-filter-row details-row-size"},[e("label",{attrs:{for:"qty"}},[this._v("Qty:")]),this._v(" "),e("div",{staticClass:"product-details-quantity"},[e("input",{staticClass:"form-control",staticStyle:{display:"none"},attrs:{type:"number",id:"qty",value:"1",min:"1",max:"10",step:"1","data-decimals":"0",required:""}}),this._v(" "),e("div",{staticClass:"input-group input-spinner"},[e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-decrement btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"}},[e("i",{staticClass:"icon-minus"})])]),this._v(" "),e("input",{staticClass:"form-control",staticStyle:{"text-align":"center"},attrs:{type:"text",required:"",placeholder:""}}),this._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-increment btn-spinner",staticStyle:{"min-width":"26px"},attrs:{type:"button"}},[e("i",{staticClass:"icon-plus"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-details-action"},[e("a",{staticClass:"btn-product btn-cart",attrs:{href:"#"}},[e("span",[this._v("add to cart")])]),this._v(" "),e("div",{staticClass:"details-action-wrapper"},[e("a",{staticClass:"btn-product btn-wishlist",attrs:{href:"#",title:"Wishlist"}},[e("span",[this._v("Add to Wishlist")])]),this._v(" "),e("a",{staticClass:"btn-product btn-compare",attrs:{href:"#",title:"Compare"}},[e("span",[this._v("Add to Compare")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details-footer"},[r("div",{staticClass:"product-cat"},[r("span",[t._v("Category:")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("Women")]),t._v(", "),r("a",{attrs:{href:"#"}},[t._v("Dresses")]),t._v(",\n            "),r("a",{attrs:{href:"#"}},[t._v("Yellow")])]),t._v(" "),r("div",{staticClass:"social-icons social-icons-sm"},[r("span",{staticClass:"social-label"},[t._v("Share:")]),t._v(" "),r("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[r("i",{staticClass:"icon-facebook-f"})]),t._v(" "),r("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[r("i",{staticClass:"icon-twitter"})]),t._v(" "),r("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[r("i",{staticClass:"icon-instagram"})]),t._v(" "),r("a",{staticClass:"social-icon",attrs:{href:"#",title:"Pinterest",target:"_blank"}},[r("i",{staticClass:"icon-pinterest"})])])])}],!1,null,null,null);e.a=component.exports},265:function(t,e,r){"use strict";var o=r(254),c=r.n(o),n=(r(95),r(255),r(32)),l={components:{LightBox:c.a},props:{product:{type:Object,default:function(){return{sm_pictures:[],pictures:[]}}}},data:function(){return{baseUrl:n.a,currentIndex:0}},computed:{},methods:{}},d=r(3),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"product-gallery"},[r("div",{staticClass:"row m-0"},[r("figure",{staticClass:"product-main-image"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.pictures[t.currentIndex].url,expression:"`${baseUrl}${product.pictures[currentIndex].url}`"}],attrs:{id:"product-zoom",alt:"product",width:t.product.pictures[t.currentIndex].width,height:t.product.pictures[t.currentIndex].height}}),t._v(" "),r("a",{staticClass:"btn-product-gallery",attrs:{href:"#",id:"btn-product-gallery"},on:{click:function(e){return e.preventDefault(),t.openLightBox(e)}}},[r("i",{staticClass:"icon-arrows"})])]),t._v(" "),r("div",{staticClass:"product-image-gallery flex-grow-1",attrs:{id:"product-zoom-gallery"}},t._l(t.product.sm_pictures,(function(e,o){return r("a",{key:o,staticClass:"product-gallery-item h-100 carousel-dot",class:{active:t.currentIndex==o},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePicture(o)}}},[r("img",{attrs:{src:""+t.baseUrl+e.url,width:e.width,height:e.height,alt:"product side"}})])})),0),t._v(" "),r("light-box",{ref:"lightbox",staticClass:"light-box",attrs:{media:t.lightBoxMedia,"show-caption":!0,"show-light-box":!1}})],1)]):t._e()}),[],!1,null,null,null);e.a=component.exports},275:function(t,e,r){"use strict";var o=r(32),c={props:{product:Object},data:function(){return{baseUrl:o.a,maxPrice:0,minPrice:99999}},created:function(){var t=this.minPrice,e=this.maxPrice;this.product.variants.map((function(r){t>r.price&&(t=r.price),e<r.price&&(e=r.price)}),[]),0==this.product.variants.length&&(t=this.product.sale_price?this.product.sale_price:this.product.price,e=this.product.price),this.minPrice=t,this.maxPrice=e}},n=r(3),l=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product product-sm align-items-center"},[r("figure",{staticClass:"product-media"},[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.sm_pictures[0].url,expression:"`${baseUrl}${product.sm_pictures[0].url}`"}],staticClass:"product-image",attrs:{alt:"Product",width:t.product.sm_pictures[0].width,height:t.product.sm_pictures[0].height}}),t._v(" "),t.product.sm_pictures[1]?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.sm_pictures[1].url,expression:"`${baseUrl}${product.sm_pictures[1].url}`"}],staticClass:"product-image-hover",attrs:{alt:"Product",width:t.product.sm_pictures[1].width,height:t.product.sm_pictures[1].height}}):t._e()])],1),t._v(" "),r("div",{staticClass:"product-body py-0 pl-4"},[r("h3",{staticClass:"product-title"},[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),0==t.product.stock?r("div",{key:"outPrice",staticClass:"product-price"},[r("span",{staticClass:"out-price"},[t._v("$"+t._s(t.product.price.toFixed(2)))])]):[t.minPrice==t.maxPrice?r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]):[0==t.product.variants.length?r("div",{staticClass:"product-price"},[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v("$"+t._s(t.maxPrice.toFixed(2)))])]):r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2))+"–$"+t._s(t.maxPrice.toFixed(2)))])]]],2)])}),[],!1,null,null,null).exports,d={props:{products:Array},components:{ProductEleven:l}},h={components:{RelatedProductsTwo:Object(n.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget widget-products"},[e("h4",{staticClass:"widget-title"},[this._v("Related Product")]),this._v(" "),e("div",{staticClass:"products"},this._l(this.products,(function(t,r){return e("product-eleven",{key:r,attrs:{product:t}})})),1),this._v(" "),e("nuxt-link",{staticClass:"btn btn-outline-dark-3 text-truncate",attrs:{to:"/shop/sidebar/4cols"}},[e("span",[this._v("View More Products")]),this._v(" "),e("i",{staticClass:"icon-long-arrow-right"})])],1)}),[],!1,null,null,null).exports},props:{products:Array,loaded:Boolean},computed:{relatedProducts:function(){return this.products.slice(0,4)}},data:function(){return{toggleState:!1}},mounted:function(){this.stickyHandle(),window.addEventListener("resize",this.stickyHandle,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.stickyHandle)},methods:{stickyHandle:function(){window.outerWidth<992?this.toggleState=!0:this.toggleState=!1},toggleSidebar:function(){document.querySelector("body").classList.toggle("sidebar-filter-active")},hideSidebar:function(){document.querySelector("body").classList.remove("sidebar-filter-active")}}},v=Object(n.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"skeleton-body"},[r("div",{staticClass:"skel-pro-single",class:{loaded:t.loaded}},[r("div",{staticClass:"skel-widget"}),t._v(" "),r("div",{staticClass:"skel-widget"}),t._v(" "),r("div",{class:t.toggleState?"sidebar-filter right sidebar-product":"sidebar sidebar-product"},[r("button",{staticClass:"mfp-close",attrs:{title:"Close (Esc)",type:"button"},on:{click:t.toggleSidebar}},[r("span",[t._v("×")])]),t._v(" "),r("related-products-two",{attrs:{products:t.relatedProducts}}),t._v(" "),r("div",{staticClass:"widget widget-banner-sidebar"},[r("div",{staticClass:"banner-sidebar-title"},[t._v("ad box 280 x 280")]),t._v(" "),r("div",{staticClass:"banner-sidebar banner-overlay"},[r("nuxt-link",{attrs:{to:"/shop/sidebar/4cols"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/sidebar/banner.jpg",expression:"'./images/blog/sidebar/banner.jpg'"}],attrs:{alt:"banner"}})])],1)])],1),t._v(" "),t.toggleState?r("button",{staticClass:"sidebar-fixed-toggler right",on:{click:t.toggleSidebar}},[r("i",{staticClass:"icon-cog"})]):t._e(),t._v(" "),r("div",{staticClass:"sidebar-filter-overlay",on:{click:t.hideSidebar}})])])}),[],!1,null,null,null);e.a=v.exports},377:function(t,e,r){"use strict";r.r(e);r(24),r(13),r(14),r(9),r(19);var o=r(20),c=(r(42),r(4)),n=r(2),l=r(10),d=r(239),h=r(265),v=r(245),m=r(264),f=r(246),_=r(275),y=r(248),C=r(32);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x,S={components:{DetailOne:v.a,InfoOne:m.a,Sidebar:_.a,Breadcrumb:f.a,GalleryHorizontal:h.a,RelatedProductsOne:y.a},directives:{Sticky:d.a},data:function(){return{product:null,prevProduct:null,nextProduct:null,relatedProducts:[],loaded:!1,shouldSticky:!1}},computed:w({},Object(l.c)("demo",["currentDemo"])),created:function(){this.getProduct()},mounted:function(){this.stickyHandle(),window.addEventListener("resize",this.stickyHandle,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.stickyHandle)},methods:{getProduct:(x=Object(c.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaded=!1,t.next=3,C.b.get("".concat(C.a,"/products/").concat(this.$route.params.slug),{params:{demo:this.currentDemo}}).then((function(t){e.product=w({},t.data.product),e.relatedProducts=Object(o.a)(t.data.relatedProducts),e.prevProduct=t.data.prevProduct,e.nextProduct=t.data.nextProduct,e.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)}),stickyHandle:function(){window.innerWidth>991?this.shouldSticky=!0:this.shouldSticky=!1}}},E=r(3),component=Object(E.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("breadcrumb",{attrs:{"prev-product":t.prevProduct,"next-product":t.nextProduct,current:"Extended"}}),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{staticClass:"container skeleton-body horizontal"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-9"},[r("div",{staticClass:"product-details-top"},[r("div",{staticClass:"row skel-pro-single",class:{loaded:t.loaded}},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"skel-product-gallery"}),t._v(" "),r("gallery-horizontal",{attrs:{product:t.product}})],1),t._v(" "),r("div",{staticClass:"col-md-6"},[t._m(0),t._v(" "),t.product?r("detail-one",{attrs:{product:t.product}}):t._e()],1)])]),t._v(" "),r("info-one"),t._v(" "),r("related-products-one",{staticClass:"nav-none",attrs:{products:t.relatedProducts}})],1),t._v(" "),r("div",{staticClass:"col-lg-3",attrs:{"sticky-container":""}},[r("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.shouldSticky,expression:"shouldSticky"}],attrs:{"sticky-offset":"{ top: 69 }"}},[r("sidebar",{attrs:{products:t.relatedProducts,loaded:t.loaded}})],1)])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"entry-summary row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary1"})]),this._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary2"})])])}],!1,null,null,null);e.default=component.exports}}]);