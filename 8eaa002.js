(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{236:function(t,e,c){"use strict";var l={props:{title:{type:String,required:!0},subtitle:String}},n=c(3),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/page-header-bg.jpg",expression:"'./images/page-header-bg.jpg'",arg:"background-image"}],staticClass:"page-header text-center"},[c("div",{staticClass:"container"},[c("h1",{staticClass:"page-title"},[t._v("\n            "+t._s(t.title)+"\n            "),t.subtitle?c("span",[t._v(t._s(t.subtitle))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},333:function(t,e,c){"use strict";c.r(e);var l=c(236),n={created:function(){document.querySelector("body").classList.remove("sidebar-filter-active")},methods:{cleanAllFilter:function(){for(var t=document.querySelectorAll(".sidebar-filter input[type=checkbox]"),i=0;i<t.length;i++)t[i].checked=!1},closeSidebar:function(){document.querySelector("body").classList.remove("sidebar-filter-active")}}},r=c(3),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("aside",{staticClass:"sidebar-shop sidebar-filter sidebar-filter-banner"},[c("div",{staticClass:"sidebar-filter-wrapper"},[c("div",{staticClass:"widget widget-clean"},[c("button",{on:{click:t.closeSidebar}},[c("i",{staticClass:"icon-close"}),t._v("Filters\n            ")]),t._v(" "),c("a",{staticClass:"sidebar-filter-clear",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.cleanAllFilter(e)}}},[t._v("Clean All")])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"widget"},[c("h3",{staticClass:"widget-title"},[t._v("Browse Category")]),t._v(" "),c("div",{staticClass:"widget-body"},[c("div",{staticClass:"filter-items filter-items-count"},[c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-1"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-1"}},[t._v("Women")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("3")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-2"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-2"}},[t._v("Men")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("0")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-3"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-3"}},[t._v("Holiday Shop")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("0")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-4"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-4"}},[t._v("Gifts")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("0")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-5"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-5"}},[t._v("Homeware")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("0")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-6",checked:"checked"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-6"}},[t._v("Grid Categories Fullwidth")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("13")])]),t._v(" "),c("div",{staticClass:"sub-filter-items"},[c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-7"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-7"}},[t._v("Dresses")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("3")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-8"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-8"}},[t._v("T-shirts")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("0")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-9"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-9"}},[t._v("Bags")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("4")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-10"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-10"}},[t._v("Jackets")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("2")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-11"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-11"}},[t._v("Shoes")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("2")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-12"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-12"}},[t._v("Jumpers")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("1")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-13"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-13"}},[t._v("Jeans")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("1")])]),t._v(" "),c("div",{staticClass:"filter-item"},[c("div",{staticClass:"custom-control custom-checkbox"},[c("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"cat-14"}}),t._v(" "),c("label",{staticClass:"custom-control-label",attrs:{for:"cat-14"}},[t._v("Sportwear")])]),t._v(" "),c("span",{staticClass:"item-count"},[t._v("0")])])])])])])}],!1,null,null,null).exports,v={components:{PageHeader:l.a,ShopSidebarTwo:o},methods:{openSidebar:function(){document.querySelector("body").classList.add("sidebar-filter-active")},closeSidebar:function(){document.querySelector("body").classList.remove("sidebar-filter-active")}}},d=Object(r.a)(v,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("main",{staticClass:"main"},[c("page-header",{attrs:{title:"Product Category Boxed"}}),t._v(" "),c("nav",{staticClass:"breadcrumb-nav breadcrumb-with-filter"},[c("div",{staticClass:"container"},[c("button",{staticClass:"sidebar-toggler p-0",on:{click:t.openSidebar}},[c("i",{staticClass:"icon-bars"}),t._v("Filters\n            ")]),t._v(" "),c("ol",{staticClass:"breadcrumb"},[c("li",{staticClass:"breadcrumb-item"},[c("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),c("li",{staticClass:"breadcrumb-item"},[c("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[t._v("Shop")])],1),t._v(" "),c("li",{staticClass:"breadcrumb-item"},[t._v("Product Category")]),t._v(" "),c("li",{staticClass:"breadcrumb-item active"},[t._v("Boxed")])])])]),t._v(" "),c("div",{staticClass:"page-content"},[c("div",{staticClass:"categories-page"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-md-6"},[c("div",{staticClass:"banner banner-cat banner-badge"},[c("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/category/boxed/banner-1.jpg",expression:"'./images/category/boxed/banner-1.jpg'"}],attrs:{alt:"Banner"}})]),t._v(" "),c("nuxt-link",{staticClass:"banner-link",attrs:{to:"/shop/sidebar/3cols"}},[c("h3",{staticClass:"banner-title"},[t._v("Dresses")]),t._v(" "),c("h4",{staticClass:"banner-subtitle"},[t._v("3 Products")]),t._v(" "),c("span",{staticClass:"banner-link-text"},[t._v("Shop Now")])])],1),t._v(" "),c("div",{staticClass:"banner banner-cat banner-badge"},[c("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/category/boxed/banner-2.jpg",expression:"'./images/category/boxed/banner-2.jpg'"}],attrs:{alt:"Banner"}})]),t._v(" "),c("nuxt-link",{staticClass:"banner-link",attrs:{to:"/shop/sidebar/3cols"}},[c("h3",{staticClass:"banner-title"},[t._v("Jackets")]),t._v(" "),c("h4",{staticClass:"banner-subtitle"},[t._v("2 Products")]),t._v(" "),c("span",{staticClass:"banner-link-text"},[t._v("Shop Now")])])],1)]),t._v(" "),c("div",{staticClass:"col-md-6"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"banner banner-cat banner-badge"},[c("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/category/boxed/banner-3.jpg",expression:"'./images/category/boxed/banner-3.jpg'"}],attrs:{alt:"Banner"}})]),t._v(" "),c("nuxt-link",{staticClass:"banner-link",attrs:{to:"/shop/sidebar/3cols"}},[c("h3",{staticClass:"banner-title"},[t._v("T-shirts")]),t._v(" "),c("h4",{staticClass:"banner-subtitle"},[t._v("0 Products")]),t._v(" "),c("span",{staticClass:"banner-link-text"},[t._v("Shop Now")])])],1)]),t._v(" "),c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"banner banner-cat banner-badge"},[c("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/category/boxed/banner-4.jpg",expression:"'./images/category/boxed/banner-4.jpg'"}],attrs:{alt:"Banner"}})]),t._v(" "),c("nuxt-link",{staticClass:"banner-link",attrs:{to:"/shop/sidebar/3cols"}},[c("h3",{staticClass:"banner-title"},[t._v("Jeans")]),t._v(" "),c("h4",{staticClass:"banner-subtitle"},[t._v("1 Products")]),t._v(" "),c("span",{staticClass:"banner-link-text"},[t._v("Shop Now")])])],1)])]),t._v(" "),c("div",{staticClass:"banner banner-cat banner-badge"},[c("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/category/boxed/banner-5.jpg",expression:"'./images/category/boxed/banner-5.jpg'"}],attrs:{alt:"Banner"}})]),t._v(" "),c("nuxt-link",{staticClass:"banner-link",attrs:{to:"/shop/sidebar/3cols"}},[c("h3",{staticClass:"banner-title"},[t._v("Bags")]),t._v(" "),c("h4",{staticClass:"banner-subtitle"},[t._v("4 Products")]),t._v(" "),c("span",{staticClass:"banner-link-text"},[t._v("Shop Now")])])],1)]),t._v(" "),c("div",{staticClass:"col-sm-6 col-md-3"},[c("div",{staticClass:"banner banner-cat banner-badge"},[c("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/category/boxed/banner-6.jpg",expression:"'./images/category/boxed/banner-6.jpg'"}],attrs:{alt:"Banner"}})]),t._v(" "),c("nuxt-link",{staticClass:"banner-link",attrs:{to:"/shop/sidebar/3cols"}},[c("h3",{staticClass:"banner-title"},[t._v("Sportwear")]),t._v(" "),c("h4",{staticClass:"banner-subtitle"},[t._v("0 Products")]),t._v(" "),c("span",{staticClass:"banner-link-text"},[t._v("Shop Now")])])],1)]),t._v(" "),c("div",{staticClass:"col-sm-6 col-md-3 order-md-last"},[c("div",{staticClass:"banner banner-cat banner-badge"},[c("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/category/boxed/banner-8.jpg",expression:"'./images/category/boxed/banner-8.jpg'"}],attrs:{alt:"Banner"}})]),t._v(" "),c("nuxt-link",{staticClass:"banner-link",attrs:{to:"/shop/sidebar/3cols"}},[c("h3",{staticClass:"banner-title"},[t._v("Jumpers")]),t._v(" "),c("h4",{staticClass:"banner-subtitle"},[t._v("1 Products")]),t._v(" "),c("span",{staticClass:"banner-link-text"},[t._v("Shop Now")])])],1)]),t._v(" "),c("div",{staticClass:"col-md-6"},[c("div",{staticClass:"banner banner-cat banner-badge"},[c("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/category/boxed/banner-7.jpg",expression:"'./images/category/boxed/banner-7.jpg'"}],attrs:{alt:"Banner"}})]),t._v(" "),c("nuxt-link",{staticClass:"banner-link",attrs:{to:"/shop/sidebar/3cols"}},[c("h3",{staticClass:"banner-title"},[t._v("Shoes")]),t._v(" "),c("h4",{staticClass:"banner-subtitle"},[t._v("2 Products")]),t._v(" "),c("span",{staticClass:"banner-link-text"},[t._v("Shop Now")])])],1)])])])]),t._v(" "),c("div",{staticClass:"sidebar-filter-overlay",on:{click:t.closeSidebar}}),t._v(" "),c("shop-sidebar-two")],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);