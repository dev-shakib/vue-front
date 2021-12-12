/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{236:function(t,e,r){"use strict";var o={props:{title:{type:String,required:!0},subtitle:String}},c=r(3),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/page-header-bg.jpg",expression:"'./images/page-header-bg.jpg'",arg:"background-image"}],staticClass:"page-header text-center"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"page-title"},[t._v("\n            "+t._s(t.title)+"\n            "),t.subtitle?r("span",[t._v(t._s(t.subtitle))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},241:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o={name:"VueSlideToggle",props:{open:Boolean,duration:{type:Number,default:300},tag:{type:String,default:"div"}},data:function(){return{scrollHeight:0,doneOpenTransition:!1,innerOpen:this.open}},mounted:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},updated:function(){this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},watch:{open:function(t){var e=this;t?this.innerOpen=!0:(this.getHeight(),this.doneOpenTransition=!1,this.$nextTick().then((function(){e.innerOpen=!1})))}},computed:{style:function(){if(this.innerOpen&&this.doneOpenTransition)return null;var t=this.innerOpen?this.scrollHeight:0;return{overflow:"hidden",transitionProperty:"height",height:"".concat(t,"px"),transitionDuration:"".concat(this.duration,"ms")}}},methods:{getHeight:function(){var t=this.$refs.container;this.scrollHeight=t.scrollHeight},handleTransition:function(){this.innerOpen&&(this.doneOpenTransition=!0)}},render:function(t){return t(this.tag,{style:this.style,ref:"container",on:{transitionend:this.handleTransition}},this.$slots.default)}};var c={install:function t(e){t.installed||(t.installed=!0,e.component("VueSlideToggle",o))}},n=o,l=null;"undefined"!=typeof window&&(l=window.Vue),l&&l.use(c)},250:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return n})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return d})),r.d(e,"g",(function(){return m})),r.d(e,"a",(function(){return h}));var o=[{id:1,class:"accessories women",image:"./images/portfolio/item-1.jpg",category:"Accessories"},{id:2,class:"men",image:"./images/portfolio/item-2.jpg",category:"Men"},{id:3,class:"women accessories",image:"./images/portfolio/item-3.jpg",category:"Women"},{id:4,class:"men",image:"./images/portfolio/item-4.jpg",category:"Accessories"},{id:5,class:"men women",image:"./images/portfolio/item-5.jpg",category:"Women"},{id:6,class:"men accessories",image:"./images/portfolio/item-6.jpg",category:"Men"}],c=[{class:"accessories women",image:"./images/portfolio/4cols/item-1.jpg",title:"Vestibulum auctor dapibus",category:"Accessories"},{class:"men",image:"./images/portfolio/4cols/item-2.jpg",title:"Vestibulum auctor dapibus",category:"Men"},{class:"women accessories",image:"./images/portfolio/4cols/item-3.jpg",title:"Vestibulum auctor dapibus",category:"Women"},{class:"men",image:"./images/portfolio/4cols/item-4.jpg",title:"Vestibulum auctor dapibus",category:"Accessories"},{class:"men women",image:"./images/portfolio/4cols/item-5.jpg",title:"Vestibulum auctor dapibus",category:"Women"},{class:"men accessories",image:"./images/portfolio/4cols/item-6.jpg",title:"Vestibulum auctor dapibus",category:"Men"},{class:"men",image:"./images/portfolio/4cols/item-7.jpg",title:"Vestibulum auctor dapibus",category:"Men"},{class:"women accessories",image:"./images/portfolio/4cols/item-8.jpg",title:"Vestibulum auctor dapibus",category:"Women"}],n=[{class:"accessories women",image:"./images/portfolio/masonry-3cols/item-1.jpg",title:"Vestibulum auctor dapibus",category:"Accessories"},{class:"men",image:"./images/portfolio/masonry-3cols/item-2.jpg",title:"Vestibulum auctor dapibus",category:"Men"},{class:"women accessories",image:"./images/portfolio/masonry-3cols/item-3.jpg",title:"Vestibulum auctor dapibus",category:"Women"},{class:"men",image:"./images/portfolio/masonry-3cols/item-4.jpg",title:"Vestibulum auctor dapibus",category:"Accessories"},{class:"men women",image:"./images/portfolio/masonry-3cols/item-5.jpg",title:"Vestibulum auctor dapibus",category:"Women"},{class:"men accessories",image:"./images/portfolio/masonry-3cols/item-6.jpg",title:"Vestibulum auctor dapibus",category:"Men"}],l=[{class:"accessories women",image:"./images/portfolio/masonry-4cols/item-1.jpg",title:"Vestibulum auctor dapibus",category:"Accessories"},{class:"men",image:"./images/portfolio/masonry-4cols/item-2.jpg",title:"Vestibulum auctor dapibus",category:"Men"},{class:"women accessories",image:"./images/portfolio/masonry-4cols/item-3.jpg",title:"Vestibulum auctor dapibus",category:"Women"},{class:"men",image:"./images/portfolio/masonry-4cols/item-4.jpg",title:"Vestibulum auctor dapibus",category:"Accessories"},{class:"men women",image:"./images/portfolio/masonry-4cols/item-5.jpg",title:"Vestibulum auctor dapibus",category:"Women"},{class:"men accessories",image:"./images/portfolio/masonry-4cols/item-6.jpg",title:"Vestibulum auctor dapibus",category:"Men"},{class:"men",image:"./images/portfolio/masonry-4cols/item-7.jpg",title:"Vestibulum auctor dapibus",category:"Men"},{class:"women accessories",image:"./images/portfolio/masonry-4cols/item-8.jpg",title:"Vestibulum auctor dapibus",category:"Women"}],d=[{class:"accessories women",image:"./images/portfolio/fullwidth/item-1.jpg",title:"Vestibulum auctor dapibus",category:"Accessories"},{class:"accessories",image:"./images/portfolio/fullwidth/item-2.jpg",title:"Nunc dignissim risus",category:"Accessories"},{class:"men accessories",image:"./images/portfolio/fullwidth/item-3.jpg",title:"Cras ornare tristique",category:"Men"},{class:"men",image:"./images/portfolio/fullwidth/item-4.jpg",title:"Vivamus vestibulum ntulla",category:"Men"},{class:"men women",image:"./images/portfolio/fullwidth/item-5.jpg",title:"Vestibulum auctor dapibus",category:"Women"},{class:"men accessories",image:"./images/portfolio/fullwidth/item-6.jpg",title:"Nunc dignissim risus",category:"Accessories"},{class:"women accessories",image:"./images/portfolio/fullwidth/item-7.jpg",title:"Cras ornare tristique",category:"Women"},{class:"men accessories",image:"./images/portfolio/fullwidth/item-8.jpg",title:"Vivamus vestibulum ntulla",category:"Accessories"}],m={sizes:[{size:"Extra Small",slug:"XS"},{size:"Small",slug:"S"},{size:"Medium",slug:"M"},{size:"Large",slug:"L"},{size:"Extra Large",slug:"XL"}],colors:[{color:"#cc9966",color_name:"Brown"},{color:"#3399cc",color_name:"Blue"},{color:"#9966cc",color_name:"Purple"},{color:"#333333",color_name:"Black"},{color:"#669933",color_name:"Green"},{color:"#cc3333",color_name:"Red"},{color:"#999999",color_name:"Grey"}],brands:[{brand:"Next",slug:"next"},{brand:"River Island",slug:"river-island"},{brand:"Geox",slug:"geox"},{brand:"New Balance",slug:"nex-balance"},{brand:"UGG",slug:"ugg"},{brand:"F&F",slug:"f-and-f"},{brand:"Nike",slug:"nike"}],categories:[{name:"Furniture",slug:"furniture",count:9},{name:"Coffee & Tables",slug:"coffee-and-tables",count:1},{name:"Lighting",slug:"lighting",count:3},{name:"Decoration",slug:"decoration",count:5},{name:"Electronics",slug:"electronics",count:10},{name:"Beds",slug:"beds",count:2},{name:"Armchairs & Chaises",slug:"armchairs-and-chaises",count:3},{name:"Sofas & Sleeper Sofas",slug:"sofas-and-sleeper-sofas",count:1}],prices:[{min:"0",max:"25",name:"Under $25"},{min:"25",max:"50",name:"$25 to $50"},{min:"50",max:"100",name:"$50 to $100"},{min:"100",max:"200",name:"$100 to $200"},{min:"200",max:null,name:"$200 & Above"}]},h={brands:[{name:"brand",image:"./images/brands/1.png",width:85,height:35},{name:"brand",image:"./images/brands/2.png",width:85,height:35},{name:"brand",image:"./images/brands/3.png",width:85,height:35},{name:"brand",image:"./images/brands/4.png",width:85,height:35},{name:"brand",image:"./images/brands/5.png",width:85,height:35},{name:"brand",image:"./images/brands/6.png",width:85,height:35},{name:"brand",image:"./images/brands/7.png",width:85,height:35}]}},278:function(t,e,r){"use strict";r(24),r(13),r(14),r(9),r(19),r(96),r(33),r(43);var o=r(20),c=r(2),n=r(241),l=r(250);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{VueSlideToggle:n.a},props:{isSidebar:Boolean},data:function(){return{loaded:!0,priceValues:[0,1e3],priceSliderConfig:{connect:!0,step:50,margin:100,range:{min:0,max:1e3}},toggleStates:[!0,!0,!0,!0,!0],filterData:l.g}},computed:{priceRangeText:function(){return"$"+parseInt(this.priceValues[0])+" — $"+parseInt(this.priceValues[1])},priceFilterRoute:function(){var t={};if(this.$route.query.page)for(var e in this.$route.query)"page"!==e&&(t[e]=this.$route.query[e]);else t=m({},this.$route.query);return{path:this.$route.path,query:m(m({},t),{},{minPrice:this.priceValues[0],maxPrice:this.priceValues[1]})}}},created:function(){document.querySelector("body").classList.remove("sidebar-filter-active"),this.$route.query.minPrice&&this.$route.query.maxPrice?(this.loaded=!1,this.priceValues=[this.$route.query.minPrice,this.$route.query.maxPrice],this.$nextTick((function(){this.loaded=!0}))):(this.loaded=!1,this.$nextTick((function(){this.loaded=!0})))},methods:{cleanAll:function(){this.loaded=!1,this.priceValues=[0,1e3],this.$nextTick((function(){this.orderBy="default",this.loaded=!0,this.$router.push(this.$route.path)}))},toggleSlide:function(t){this.toggleStates=this.toggleStates.reduce((function(e,r,c){return[].concat(Object(o.a)(e),c==t?[!r]:[r])}),[])},sizeChecked:function(t){return this.$route.query.size&&this.$route.query.size.split(",").includes(t.slug)},brandChecked:function(t){return this.$route.query.brand&&this.$route.query.brand.split(",").includes(t.slug)},categorySelected:function(t){return this.$route.query.category&&this.$route.query.category==t.slug},colorSelected:function(t){return this.$route.query.color&&this.$route.query.color.split(",").includes(t.color_name)},setSizeFilter:function(t){var e={};if(this.$route.query.page)for(var r in this.$route.query)"page"!==r&&(e[r]=this.$route.query[r]);else e=m({},this.$route.query);e=this.$route.query.size?this.$route.query.size.split(",").includes(t.slug)?m(m({},e),{},{size:e.size.split(",").filter((function(e){return e!==t.slug})).join(",")}):m(m({},e),{},{size:[].concat(Object(o.a)(e.size.split(",")),[t.slug]).join(",")}):m(m({},e),{},{size:t.slug}),this.$router.push({path:this.$route.path,query:e})},setBrandFilter:function(t){var e={};if(this.$route.query.page)for(var r in this.$route.query)"page"!==r&&(e[r]=this.$route.query[r]);else e=m({},this.$route.query);e=this.$route.query.brand?this.$route.query.brand.split(",").includes(t.slug)?m(m({},e),{},{brand:e.brand.split(",").filter((function(e){return e!==t.slug})).join(",")}):m(m({},e),{},{brand:[].concat(Object(o.a)(e.brand.split(",")),[t.slug]).join(",")}):m(m({},e),{},{brand:t.slug}),this.$router.push({path:this.$route.path,query:e})},getColorUrl:function(t){var e={},r={};if((e=this.$route.query.color?this.$route.query.color.split(",").includes(t.color_name)?m(m({},this.$route.query),{},{color:this.$route.query.color.split(",").filter((function(e){return e!==t.color_name})).join(",")}):m(m({},this.$route.query),{},{color:[].concat(Object(o.a)(this.$route.query.color.split(",")),[t.color_name]).join(",")}):m(m({},this.$route.query),{},{color:t.color_name})).page)for(var c in e)"page"!==c&&(r[c]=e[c]);else r=m({},e);return{path:this.$route.path,query:r}}}},f=r(3),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar-shop",class:t.isSidebar?"sidebar-filter":"sidebar"},[r("div",{class:{"sidebar-filter-wrapper":t.isSidebar}},[r("div",{staticClass:"widget widget-clean"},[r("label",[t._v("Filters:")]),t._v(" "),r("a",{staticClass:"sidebar-filter-clear",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.cleanAll(e)}}},[t._v("Clean All")])]),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title mb-2"},[r("a",{class:{collapsed:!t.toggleStates[0]},attrs:{href:"#widget-1"},on:{click:function(e){return e.preventDefault(),t.toggleSlide(0)}}},[t._v("Category")])]),t._v(" "),r("vue-slide-toggle",{staticClass:"show",attrs:{open:t.toggleStates[0],duration:200}},[r("div",{staticClass:"widget-body pt-0"},[r("div",{staticClass:"filter-items filter-items-count"},t._l(t.filterData.categories,(function(e,o){return r("div",{key:o,staticClass:"filter-item"},[r("nuxt-link",{class:{active:t.categorySelected(e)},attrs:{to:{path:t.$route.path,query:{category:e.slug}}}},[t._v(t._s(e.name))]),t._v(" "),r("span",{staticClass:"item-count"},[t._v(t._s(e.count))])],1)})),0)])])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title mb-2"},[r("a",{class:{collapsed:!t.toggleStates[1]},attrs:{href:"#widget-2"},on:{click:function(e){return e.preventDefault(),t.toggleSlide(1)}}},[t._v("Size")])]),t._v(" "),r("vue-slide-toggle",{staticClass:"show",attrs:{open:t.toggleStates[1],duration:200}},[r("div",{staticClass:"widget-body pt-0"},[r("div",{staticClass:"filter-items"},t._l(t.filterData.sizes,(function(e,o){return r("div",{key:o,staticClass:"filter-item"},[r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"size-"+o},domProps:{checked:t.sizeChecked(e)},on:{click:function(r){return t.setSizeFilter(e)}}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"size-"+o}},[t._v(t._s(e.slug))])])])})),0)])])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title mb-2"},[r("a",{class:{collapsed:!t.toggleStates[2]},attrs:{href:"#widget-3"},on:{click:function(e){return e.preventDefault(),t.toggleSlide(2)}}},[t._v("Colour")])]),t._v(" "),r("vue-slide-toggle",{staticClass:"show",attrs:{open:t.toggleStates[2],duration:200}},[r("div",{staticClass:"widget-body pt-0"},[r("div",{staticClass:"filter-colors"},t._l(t.filterData.colors,(function(e,o){return r("nuxt-link",{key:o,class:{selected:t.colorSelected(e)},style:{"background-color":e.color},attrs:{to:t.getColorUrl(e)}},[r("span",{staticClass:"sr-only"},[t._v(t._s(e.color_name))])])})),1)])])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title mb-2"},[r("a",{class:{collapsed:!t.toggleStates[3]},attrs:{href:"#widget-4"},on:{click:function(e){return e.preventDefault(),t.toggleSlide(3)}}},[t._v("Brand")])]),t._v(" "),r("vue-slide-toggle",{staticClass:"show",attrs:{open:t.toggleStates[3],duration:200}},[r("div",{staticClass:"widget-body pt-0"},[r("div",{staticClass:"filter-items"},t._l(t.filterData.brands,(function(e,o){return r("div",{key:o,staticClass:"filter-item"},[r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"brand-"+o},domProps:{checked:t.brandChecked(e)},on:{click:function(r){return t.setBrandFilter(e)}}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"brand-"+o}},[t._v(t._s(e.brand))])])])})),0)])])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title mb-2"},[r("a",{class:{collapsed:!t.toggleStates[4]},attrs:{href:"#widget-5"},on:{click:function(e){return e.preventDefault(),t.toggleSlide(4)}}},[t._v("Price")])]),t._v(" "),r("vue-slide-toggle",{staticClass:"show",attrs:{open:t.toggleStates[4],duration:200}},[r("div",{staticClass:"widget-body pt-0"},[r("div",{staticClass:"filter-price"},[r("div",{staticClass:"filter-price-text d-flex justify-content-between"},[r("span",[t._v("\n                                Price Range:\n                                "),r("span",{attrs:{id:"filter-price-range"}},[t._v(t._s(t.priceRangeText))])]),t._v(" "),r("nuxt-link",{staticClass:"pr-2",attrs:{to:t.priceFilterRoute}},[t._v("Filter")])],1),t._v(" "),t.loaded?r("vue-nouislider",{attrs:{config:t.priceSliderConfig,values:t.priceValues,id:"price-slider"}}):t._e()],1)])])],1)])])}),[],!1,null,null,null);e.a=component.exports},330:function(t,e,r){"use strict";r.r(e);r(24),r(13),r(14),r(9),r(19),r(42);var o=r(4),c=r(2),n=r(10),l=r(236),d=r(32);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{product:Object},data:function(){return{baseUrl:d.a,maxPrice:0,minPrice:99999}},computed:h(h({},Object(n.c)("cart",["canAddToCart"])),Object(n.c)("wishlist",["isInWishlist"])),created:function(){var t=this.minPrice,e=this.maxPrice;this.product.variants.map((function(r){t>r.price&&(t=r.price),e<r.price&&(e=r.price)}),[]),0==this.product.variants.length&&(t=this.product.sale_price?this.product.sale_price:this.product.price,e=this.product.price),this.minPrice=t,this.maxPrice=e},methods:h(h(h({},Object(n.b)("cart",["addToCart"])),Object(n.b)("wishlist",["addToWishlist"])),{},{quickView:function(){this.$modal.show((function(){return r.e(5).then(r.bind(null,323))}),{product:this.product},{width:"1030",height:"auto",adaptive:!0})}})},v=r(3),y={components:{ProductTen:Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("figure",{staticClass:"product-media"},[t.product.new?r("span",{staticClass:"product-label label-new"},[t._v("New")]):t._e(),t._v(" "),t.product.sale_price?r("span",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.top?r("span",{staticClass:"product-label label-top"},[t._v("Top")]):t._e(),t._v(" "),0===t.product.stock?r("span",{staticClass:"product-label label-out"},[t._v("Out Of Stock")]):t._e(),t._v(" "),r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.sm_pictures[0].url,expression:"`${baseUrl}${product.sm_pictures[0].url}`"}],staticClass:"product-image",attrs:{alt:"Product",width:t.product.sm_pictures[0].width,height:t.product.sm_pictures[0].height}}),t._v(" "),t.product.sm_pictures[1]?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.sm_pictures[1].url,expression:"`${baseUrl}${product.sm_pictures[1].url}`"}],staticClass:"product-image-hover",attrs:{alt:"Product",width:t.product.sm_pictures[1].width,height:t.product.sm_pictures[1].height}}):t._e()]),t._v(" "),0!==t.product.stock?r("div",{staticClass:"product-action action-icon-top"},[t.product.variants.length>0?r("nuxt-link",{staticClass:"btn-product btn-cart btn-select",attrs:{to:"/product/default/"+t.product.slug}},[r("span",[t._v("select options")])]):r("button",{staticClass:"btn-product btn-cart",on:{click:function(e){return e.preventDefault(),t.addToCart({product:t.product})}}},[r("span",[t._v("add to cart")])]),t._v(" "),r("button",{staticClass:"btn-product btn-quickview",attrs:{title:"Quick view"},on:{click:function(e){return e.preventDefault(),t.quickView({product:t.product})}}},[r("span",[t._v("quick view")])])],1):t._e()],1),t._v(" "),r("div",{staticClass:"product-body product-action-inner"},[t.isInWishlist(t.product)?r("nuxt-link",{key:"inWishlist",staticClass:"btn-product btn-wishlist added-to-wishlist",attrs:{to:"/shop/wishlist"}},[r("span",[t._v("go to wishlist")])]):r("a",{key:"notInWishlist",staticClass:"btn-product btn-wishlist",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[r("span",[t._v("add to wishlist")])]),t._v(" "),r("div",{staticClass:"product-cat"},t._l(t.product.category,(function(e,o){return r("span",{key:o},[r("nuxt-link",{attrs:{to:{path:"/shop/sidebar/list",query:{category:e.slug}}}},[t._v(t._s(e.name))]),t._v("\n                "+t._s(o<t.product.category.length-1?",":"")+"\n            ")],1)})),0),t._v(" "),r("h3",{staticClass:"product-title"},[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),0==t.product.stock?r("div",{key:"outPrice",staticClass:"product-price"},[r("span",{staticClass:"out-price"},[t._v("$"+t._s(t.product.price.toFixed(2)))])]):[t.minPrice==t.maxPrice?r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]):[0==t.product.variants.length?r("div",{staticClass:"product-price"},[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t.minPrice.toFixed(2)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v("$"+t._s(t.maxPrice.toFixed(2)))])]):r("div",{staticClass:"product-price"},[t._v("$"+t._s(t.minPrice.toFixed(2))+"–$"+t._s(t.maxPrice.toFixed(2)))])]],t._v(" "),r("div",{staticClass:"ratings-container"},[r("div",{staticClass:"ratings"},[r("div",{staticClass:"ratings-val",style:{width:20*t.product.ratings+"%"}}),t._v(" "),r("span",{staticClass:"tooltip-text"},[t._v(t._s(t.product.ratings.toFixed(2)))])]),t._v(" "),r("span",{staticClass:"ratings-text"},[t._v("( "+t._s(t.product.review)+" Reviews )")])]),t._v(" "),t.product.variants.length>0?r("div",{staticClass:"product-nav product-nav-dots"},[r("div",{staticClass:"row no-gutters"},t._l(t.product.variants,(function(e,o){return r("a",{key:o,style:{"background-color":e.color},attrs:{href:"javascript:;"}},[r("span",{staticClass:"sr-only"},[t._v("Color name")])])})),0)]):t._e()],2)])}),[],!1,null,null,null).exports},props:{products:Array,loaded:Boolean},data:function(){return{fakeArray:[1,2,3,4,5,6,7,8]}},computed:{cols:function(){return"boxed"==this.$route.params.type?"col-6 col-md-4 col-lg-4 col-xl-3":"col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2"}}},_=Object(v.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products mb-3 content-overlay"},[0===t.products.length&&t.loaded?r("p",{staticClass:"no-results"},[t._v("No products matching your selection.")]):t._e(),t._v(" "),r("div",{staticClass:"row"},[t.loaded?t._l(t.products,(function(e,o){return r("div",{key:o,class:t.cols},[r("product-ten",{attrs:{product:e}})],1)})):t._l(t.fakeArray,(function(e){return r("div",{key:e,class:t.cols},[r("div",{staticClass:"skel-pro"})])}))],2)])}),[],!1,null,null,null).exports,w=r(278),C=r(74);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $,x={components:{PageHeader:l.a,ShopListThree:_,ShopSidebarOne:w.a},data:function(){return{products:[],perPage:8,type:"list",totalCount:0,orderBy:"default",isSidebar:!0,loaded:!1,loadMoreLoading:!1}},computed:O(O({},Object(n.c)("demo",["currentDemo"])),{},{pageTitle:function(){return"boxed"==this.$route.params.type?"Boxed No Sidebar":"Fullwidth No Sidebar"},containerClass:function(){return"fullwidth"==this.$route.params.type?"container-fluid":"container"},hasMore:function(){return this.perPage<=this.totalCount}}),watch:{$route:function(){this.getProducts(!0)}},created:function(){this.getProducts()},methods:{getProducts:($=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r=this,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]&&o[0],o.length>1&&void 0!==o[1]&&o[1]||(this.loaded=!1),t.next=5,d.b.get("".concat(d.a,"/shop"),{params:O(O({},this.$route.query),{},{orderBy:this.orderBy,perPage:this.perPage,demo:this.currentDemo})}).then((function(t){r.products=t.data.products,r.totalCount=t.data.totalCount,r.loaded=!0,e&&Object(C.f)()})).catch((function(t){return{error:JSON.stringify(t)}}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return $.apply(this,arguments)}),toggleSidebar:function(){document.querySelector("body").classList.contains("sidebar-filter-active")?document.querySelector("body").classList.remove("sidebar-filter-active"):document.querySelector("body").classList.add("sidebar-filter-active")},showSidebar:function(){document.querySelector("body").classList.add("sidebar-filter-active")},hideSidebar:function(){document.querySelector("body").classList.remove("sidebar-filter-active")},loadMore:function(){var t=this;this.perPage<this.totalCount&&(this.perPage+=4,this.loadMoreLoading=!0,setTimeout((function(){t.getProducts(!1,!0),t.loadMoreLoading=!1}),400))}}},k=Object(v.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("page-header",{attrs:{title:t.pageTitle,subtitle:"Shop"}}),t._v(" "),r("nav",{staticClass:"breadcrumb-nav mb-2",attrs:{"aria-label":"breadcrumb"}},[r("div",{class:t.containerClass},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[t._v("Shop")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageTitle))]),t._v(" "),t.$route.query.searchTerm?r("li",{staticClass:"breadcrumb-item"},[r("span",[t._v("Search - "+t._s(t.$route.query.searchTerm))])]):t._e()])])]),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{class:t.containerClass},[r("div",{staticClass:"toolbox"},[r("div",{staticClass:"toolbox-left"},[r("a",{staticClass:"sidebar-toggler mr-0 mr-md-5",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showSidebar(e)}}},[r("i",{staticClass:"icon-bars"}),t._v("Filters\n                    ")])]),t._v(" "),r("div",{staticClass:"toolbox-center"},[r("div",{staticClass:"toolbox-info"},[t._v("\n                        Showing\n                        "),r("span",[t._v(t._s(t.products.length)+" of "+t._s(t.totalCount))]),t._v(" Products\n                    ")])]),t._v(" "),r("div",{staticClass:"toolbox-right"},[r("div",{staticClass:"toolbox-sort"},[r("label",{attrs:{for:"sortby"}},[t._v("Sort by:")]),t._v(" "),r("div",{staticClass:"select-custom"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.orderBy,expression:"orderBy"}],staticClass:"form-control",attrs:{name:"sortby",id:"sortby"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.orderBy=e.target.multiple?r:r[0]},function(e){return e.preventDefault(),t.getProducts(e)}]}},[r("option",{attrs:{value:"default"}},[t._v("Default")]),t._v(" "),r("option",{attrs:{value:"featured"}},[t._v("Most Popular")]),t._v(" "),r("option",{attrs:{value:"rating"}},[t._v("Most Rated")]),t._v(" "),r("option",{attrs:{value:"new"}},[t._v("Date")])])])])])]),t._v(" "),r("shop-list-three",{staticClass:"skeleton-body skel-shop-products",class:{loaded:t.loaded},attrs:{products:t.products,"per-page":t.perPage,loaded:t.loaded}}),t._v(" "),r("div",{staticClass:"load-more-container text-center"},[t.loadMoreLoading||t.hasMore?r("a",{staticClass:"btn btn-outline-darker btn-load-more",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.loadMore(e)}}},[t._v("\n                    More Products\n                    "),r("i",{staticClass:"icon-refresh",class:{"load-more-rotating":t.loadMoreLoading}})]):t._e()]),t._v(" "),r("div",{staticClass:"sidebar-filter-overlay",on:{click:t.hideSidebar}}),t._v(" "),r("shop-sidebar-one",{attrs:{"is-sidebar":!0}})],1)])],1)}),[],!1,null,null,null);e.default=k.exports}}]);