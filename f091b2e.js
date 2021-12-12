(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{332:function(t,e,r){"use strict";r.r(e);r(144);var l={props:{from:{type:Number,default:0},to:{type:Number,default:0},speed:{type:Number,default:2e3},interval:{type:Number,default:50}},data:function(){return{started:!1,current:0,intervalID:0,finished:!1}},computed:{step:function(){return(this.to-this.from)*this.interval/this.speed}},mounted:function(){this.current=this.from,window.addEventListener("scroll",this.scrollHandler,{passive:!0})},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHandler)},methods:{scrollHandler:function(){this.$el.getBoundingClientRect().top<window.innerHeight-100&&!this.started&&(this.started=!0,this.intervalID=window.setInterval(this.startCount,this.interval))},startCount:function(){this.current+this.step<=this.to?this.current+=this.step:(window.clearInterval(this.intervalID),this.finished=!0)}}},c=r(3),n={components:{CountTo:Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"count-wrapper"},[e("span",{staticClass:"count"},[this._v(this._s(Math.ceil(this.current)))]),this._v(" "),this.finished?this._t("default"):this._e()],2)}),[],!1,null,null,null).exports}},o=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/page-header-bg.jpg",expression:"'./images/page-header-bg.jpg'",arg:"background-image"}],staticClass:"page-header text-center"},[t._m(0)]),t._v(" "),r("nav",{staticClass:"breadcrumb-nav"},[r("div",{staticClass:"container"},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._m(1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("About Us 2")])])])]),t._v(" "),r("div",{staticClass:"page-content pb-3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-10 offset-lg-1"},[r("div",{staticClass:"about-text text-center mt-3"},[r("h2",{staticClass:"title text-center mb-2"},[t._v("Who We Are")]),t._v(" "),r("p",[t._v("Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.")]),t._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/about/about-2/signature.png",expression:"'./images/about/about-2/signature.png'"}],staticClass:"mx-auto mb-5 bg-transparent",attrs:{alt:"signature"}}),t._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/about/about-2/img-1.jpg",expression:"'./images/about/about-2/img-1.jpg'"}],staticClass:"mx-auto mb-6",attrs:{alt:"image"}})])])]),t._v(" "),t._m(2)]),t._v(" "),r("div",{staticClass:"mb-2"}),t._v(" "),r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/backgrounds/bg-4.jpg",expression:"'./images/backgrounds/bg-4.jpg'",arg:"background-image"}],staticClass:"bg-image pt-7 pb-5 pt-md-12 pb-md-9"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 col-md-3"},[r("div",{staticClass:"count-container text-center"},[r("count-to",{staticClass:"text-white",attrs:{from:0,to:40,speed:3e3,interval:50}},[t._v("K+")]),t._v(" "),r("h3",{staticClass:"count-title text-white"},[t._v("Happy Customer")])],1)]),t._v(" "),r("div",{staticClass:"col-6 col-md-3"},[r("div",{staticClass:"count-container text-center"},[r("count-to",{staticClass:"text-white",attrs:{from:0,to:20,speed:3e3,interval:50}},[t._v("+")]),t._v(" "),r("h3",{staticClass:"count-title text-white"},[t._v("Years in Business")])],1)]),t._v(" "),r("div",{staticClass:"col-6 col-md-3"},[r("div",{staticClass:"count-container text-center"},[r("count-to",{staticClass:"text-white",attrs:{from:0,to:95,speed:3e3,interval:50}},[t._v("%")]),t._v(" "),r("h3",{staticClass:"count-title text-white"},[t._v("Return Clients")])],1)]),t._v(" "),r("div",{staticClass:"col-6 col-md-3"},[r("div",{staticClass:"count-container text-center"},[r("count-to",{staticClass:"text-white",attrs:{from:0,to:15,speed:3e3,interval:50}}),t._v(" "),r("h3",{staticClass:"count-title text-white"},[t._v("Awards Won")])],1)])])])]),t._v(" "),r("div",{staticClass:"bg-light-2 pt-6 pb-7 mb-6"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"title text-center mb-4"},[t._v("Meet Our Team")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 col-lg-3"},[r("div",{staticClass:"member member-2 text-center"},[r("figure",{staticClass:"member-media"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/team/about-2/member-1.jpg",expression:"'./images/team/about-2/member-1.jpg'"}],attrs:{alt:"member photo"}}),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-lg-3"},[r("div",{staticClass:"member member-2 text-center"},[r("figure",{staticClass:"member-media"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/team/about-2/member-2.jpg",expression:"'./images/team/about-2/member-2.jpg'"}],attrs:{alt:"member photo"}}),t._v(" "),t._m(5)]),t._v(" "),t._m(6)])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-lg-3"},[r("div",{staticClass:"member member-2 text-center"},[r("figure",{staticClass:"member-media"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/team/about-2/member-3.jpg",expression:"'./images/team/about-2/member-3.jpg'"}],attrs:{alt:"member photo"}}),t._v(" "),t._m(7)]),t._v(" "),t._m(8)])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-lg-3"},[r("div",{staticClass:"member member-2 text-center"},[r("figure",{staticClass:"member-media"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/team/about-2/member-4.jpg",expression:"'./images/team/about-2/member-4.jpg'"}],attrs:{alt:"member photo"}}),t._v(" "),t._m(9)]),t._v(" "),t._m(10)])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-lg-3"},[r("div",{staticClass:"member member-2 text-center"},[r("figure",{staticClass:"member-media"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/team/about-2/member-5.jpg",expression:"'./images/team/about-2/member-5.jpg'"}],attrs:{alt:"member photo"}}),t._v(" "),t._m(11)]),t._v(" "),t._m(12)])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-lg-3"},[r("div",{staticClass:"member member-2 text-center"},[r("figure",{staticClass:"member-media"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/team/about-2/member-6.jpg",expression:"'./images/team/about-2/member-6.jpg'"}],attrs:{alt:"member photo"}}),t._v(" "),t._m(13)]),t._v(" "),t._m(14)])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-lg-3"},[r("div",{staticClass:"member member-2 text-center"},[r("figure",{staticClass:"member-media"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/team/about-2/member-7.jpg",expression:"'./images/team/about-2/member-7.jpg'"}],attrs:{alt:"member photo"}}),t._v(" "),t._m(15)]),t._v(" "),t._m(16)])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-lg-3"},[r("div",{staticClass:"member member-2 text-center"},[r("figure",{staticClass:"member-media"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/team/about-2/member-8.jpg",expression:"'./images/team/about-2/member-8.jpg'"}],attrs:{alt:"member photo"}}),t._v(" "),t._m(17)]),t._v(" "),t._m(18)])])]),t._v(" "),r("div",{staticClass:"text-center mt-3"},[r("nuxt-link",{staticClass:"btn btn-sm btn-minwidth-lg btn-outline-primary-2",attrs:{to:"/blog/classic"}},[r("span",[t._v("LETS START WORK")]),t._v(" "),r("i",{staticClass:"icon-long-arrow-right"})])],1)])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-10 offset-lg-1"},[t._m(19),t._v(" "),r("div",{staticClass:"brands-display"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-6 col-sm-4 col-md-3"},[r("a",{staticClass:"brand",attrs:{href:"#"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/brands/1.png",expression:"'./images/brands/1.png'"}],staticClass:"bg-white",attrs:{alt:"Brand"}})])]),t._v(" "),r("div",{staticClass:"col-6 col-sm-4 col-md-3"},[r("a",{staticClass:"brand",attrs:{href:"#"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/brands/2.png",expression:"'./images/brands/2.png'"}],staticClass:"bg-white",attrs:{alt:"Brand"}})])]),t._v(" "),r("div",{staticClass:"col-6 col-sm-4 col-md-3"},[r("a",{staticClass:"brand",attrs:{href:"#"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/brands/3.png",expression:"'./images/brands/3.png'"}],staticClass:"bg-white",attrs:{alt:"Brand"}})])]),t._v(" "),r("div",{staticClass:"col-6 col-sm-4 col-md-3"},[r("a",{staticClass:"brand",attrs:{href:"#"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/brands/7.png",expression:"'./images/brands/7.png'"}],staticClass:"bg-white",attrs:{alt:"Brand"}})])]),t._v(" "),r("div",{staticClass:"col-6 col-sm-4 col-md-3"},[r("a",{staticClass:"brand",attrs:{href:"#"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/brands/4.png",expression:"'./images/brands/4.png'"}],staticClass:"bg-white",attrs:{alt:"Brand"}})])]),t._v(" "),r("div",{staticClass:"col-6 col-sm-4 col-md-3"},[r("a",{staticClass:"brand",attrs:{href:"#"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/brands/5.png",expression:"'./images/brands/5.png'"}],staticClass:"bg-white",attrs:{alt:"Brand"}})])]),t._v(" "),r("div",{staticClass:"col-6 col-sm-4 col-md-3"},[r("a",{staticClass:"brand",attrs:{href:"#"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/brands/6.png",expression:"'./images/brands/6.png'"}],staticClass:"bg-white",attrs:{alt:"Brand"}})])]),t._v(" "),r("div",{staticClass:"col-6 col-sm-4 col-md-3"},[r("a",{staticClass:"brand",attrs:{href:"#"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/brands/9.png",expression:"'./images/brands/9.png'"}],staticClass:"bg-white",attrs:{alt:"Brand"}})])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticClass:"page-title"},[this._v("\n                About us 2\n                "),e("span",[this._v("Pages")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"javascript:;"}},[this._v("Pages")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-4 col-sm-6"},[r("div",{staticClass:"icon-box icon-box-sm text-center"},[r("span",{staticClass:"icon-box-icon"},[r("i",{staticClass:"icon-puzzle-piece"})]),t._v(" "),r("div",{staticClass:"icon-box-content"},[r("h3",{staticClass:"icon-box-title"},[t._v("Design Quality")]),t._v(" "),r("p",[t._v("\n                                Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero\n                                "),r("br"),t._v("eu augue.\n                            ")])])])]),t._v(" "),r("div",{staticClass:"col-lg-4 col-sm-6"},[r("div",{staticClass:"icon-box icon-box-sm text-center"},[r("span",{staticClass:"icon-box-icon"},[r("i",{staticClass:"icon-life-ring"})]),t._v(" "),r("div",{staticClass:"icon-box-content"},[r("h3",{staticClass:"icon-box-title"},[t._v("Professional Support")]),t._v(" "),r("p",[t._v("\n                                Praesent dapibus, neque id cursus faucibus,\n                                "),r("br"),t._v("tortor neque egestas augue, eu vulputate\n                                "),r("br"),t._v("magna eros eu erat.\n                            ")])])])]),t._v(" "),r("div",{staticClass:"col-lg-4 col-sm-6"},[r("div",{staticClass:"icon-box icon-box-sm text-center"},[r("span",{staticClass:"icon-box-icon"},[r("i",{staticClass:"icon-heart-o"})]),t._v(" "),r("div",{staticClass:"icon-box-content"},[r("h3",{staticClass:"icon-box-title"},[t._v("Made With Love")]),t._v(" "),r("p",[t._v("\n                                Pellentesque a diam sit amet mi ullamcorper\n                                "),r("br"),t._v("vehicula. Nullam quis massa sit amet\n                                "),r("br"),t._v("nibh viverra malesuada.\n                            ")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",{staticClass:"member-overlay"},[e("div",{staticClass:"social-icons social-icons-simple"},[e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"member-content"},[e("h3",{staticClass:"member-title"},[this._v("\n                                    Samanta Grey\n                                    "),e("span",[this._v("Founder & CEO")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",{staticClass:"member-overlay"},[e("div",{staticClass:"social-icons social-icons-simple"},[e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"member-content"},[e("h3",{staticClass:"member-title"},[this._v("\n                                    Bruce Sutton\n                                    "),e("span",[this._v("Sales & Marketing Manager")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",{staticClass:"member-overlay"},[e("div",{staticClass:"social-icons social-icons-simple"},[e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"member-content"},[e("h3",{staticClass:"member-title"},[this._v("\n                                    Janet Joy\n                                    "),e("span",[this._v("Product Manager")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",{staticClass:"member-overlay"},[e("div",{staticClass:"social-icons social-icons-simple"},[e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"member-content"},[e("h3",{staticClass:"member-title"},[this._v("\n                                    Mark Pocket\n                                    "),e("span",[this._v("Product Manager")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",{staticClass:"member-overlay"},[e("div",{staticClass:"social-icons social-icons-simple"},[e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"member-content"},[e("h3",{staticClass:"member-title"},[this._v("\n                                    Damion Blue\n                                    "),e("span",[this._v("Sales & Marketing Manager")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",{staticClass:"member-overlay"},[e("div",{staticClass:"social-icons social-icons-simple"},[e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"member-content"},[e("h3",{staticClass:"member-title"},[this._v("\n                                    Lenard Smith\n                                    "),e("span",[this._v("Product Manager")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",{staticClass:"member-overlay"},[e("div",{staticClass:"social-icons social-icons-simple"},[e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"member-content"},[e("h3",{staticClass:"member-title"},[this._v("\n                                    Rachel Green\n                                    "),e("span",[this._v("Product Manager")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",{staticClass:"member-overlay"},[e("div",{staticClass:"social-icons social-icons-simple"},[e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"#",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"member-content"},[e("h3",{staticClass:"member-title"},[this._v("\n                                    David Doe\n                                    "),e("span",[this._v("Product Manager")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brands-text text-center mx-auto mb-6"},[e("h2",{staticClass:"title"},[this._v("The world's premium design brands in one destination.")]),this._v(" "),e("p",[this._v("Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nis")])])}],!1,null,null,null);e.default=o.exports}}]);