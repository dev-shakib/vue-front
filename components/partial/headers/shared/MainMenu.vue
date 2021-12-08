<template>
    <nav class="main-nav">
        <ul class="menu sf-arrows">
            <!-- <li class="megamenu-container" :class="{active: current=='/'}">
                <nuxt-link to="/" class="sf-with-ul">Home</nuxt-link>

                <div class="megamenu demo">
                    <div class="menu-col">
                        <div class="menu-title">Choose your demo</div>

                        <div class="demo-list">
                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-1">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/1.jpg'"
                                    ></span>
                                    <span class="demo-title">01 - furniture store</span>
                                </a>
                            </div>

                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-2">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/2.jpg'"
                                    ></span>
                                    <span class="demo-title">02 - furniture store</span>
                                </a>
                            </div>

                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-3">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/3.jpg'"
                                    ></span>
                                    <span class="demo-title">03 - electronic store</span>
                                </a>
                            </div>

                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-4">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/4.jpg'"
                                    ></span>
                                    <span class="demo-title">04 - electronic store</span>
                                </a>
                            </div>

                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-5">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/5.jpg'"
                                    ></span>
                                    <span class="demo-title">05 - fashion store</span>
                                </a>
                            </div>

                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-6">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/6.jpg'"
                                    ></span>
                                    <span class="demo-title">06 - fashion store</span>
                                </a>
                            </div>

                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-7">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/7.jpg'"
                                    ></span>
                                    <span class="demo-title">07 - fashion store</span>
                                </a>
                            </div>

                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-8">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/8.jpg'"
                                    ></span>
                                    <span class="demo-title">08 - fashion store</span>
                                </a>
                            </div>

                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-9">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/9.jpg'"
                                    ></span>
                                    <span class="demo-title">09 - fashion store</span>
                                </a>
                            </div>

                            <div class="demo-item">
                                <a href="https://d-themes.com/vue/molla/demo-10">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/10.jpg'"
                                    ></span>
                                    <span class="demo-title">10 - shoes store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-11">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/11.jpg'"
                                    ></span>
                                    <span class="demo-title">11 - furniture simple store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-12">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/12.jpg'"
                                    ></span>
                                    <span class="demo-title">12 - fashion simple store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-13">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/13.jpg'"
                                    ></span>
                                    <span class="demo-title">13 - market</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-14">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/14.jpg'"
                                    ></span>
                                    <span class="demo-title">14 - market fullwidth</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-15">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/15.jpg'"
                                    ></span>
                                    <span class="demo-title">15 - lookbook 1</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-16">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/16.jpg'"
                                    ></span>
                                    <span class="demo-title">16 - lookbook 2</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-17">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/17.jpg'"
                                    ></span>
                                    <span class="demo-title">17 - fashion store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-18">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/18.jpg'"
                                    ></span>
                                    <span class="demo-title">18 - fashion store (with sidebar)</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-19">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/19.jpg'"
                                    ></span>
                                    <span class="demo-title">19 - games store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-20">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/20.jpg'"
                                    ></span>
                                    <span class="demo-title">20 - book store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-21">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/21.jpg'"
                                    ></span>
                                    <span class="demo-title">21 - sport store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-22">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/22.jpg'"
                                    ></span>
                                    <span class="demo-title">22 - tools store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-23">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/23.jpg'"
                                    ></span>
                                    <span class="demo-title">23 - fashion left navigation store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-24">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/24.jpg'"
                                    ></span>
                                    <span class="demo-title">24 - extreme sport store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-25">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/25.jpg'"
                                    ></span>
                                    <span class="demo-title">25 - jewelry store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-26">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/26.jpg'"
                                    ></span>
                                    <span class="demo-title">26 - market store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-27">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/27.jpg'"
                                    ></span>
                                    <span class="demo-title">27 - fashion store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-28">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/28.jpg'"
                                    ></span>
                                    <span class="demo-title">28 - food market store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-29">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/29.jpg'"
                                    ></span>
                                    <span class="demo-title">29 - t-shirts store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-30">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/30.jpg'"
                                    ></span>
                                    <span class="demo-title">30 - headphones store</span>
                                </a>
                            </div>

                            <div class="demo-item hidden">
                                <a href="https://d-themes.com/vue/molla/demo-31">
                                    <span
                                        class="demo-bg"
                                        v-lazy:background-image="'./images/menu/demos/31.jpg'"
                                    ></span>
                                    <span class="demo-title">31 - yoga store</span>
                                </a>
                            </div>
                        </div>

                        <div class="megamenu-action text-center">
                            <a
                                href="#"
                                class="btn btn-outline-primary-2 view-all-demos"
                                @click.prevent="viewAllDemos"
                            >
                                <span>View All Demos</span>
                                <i class="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </li> -->
            <li v-for="item of topbaritems" :key="item.id" :class="{active: current=='blog'}">
                <nuxt-link to="/blog/classic" class="">{{ item.name }}</nuxt-link>
            </li> 

            <li :class="{active: current=='blog'}">
                <nuxt-link to="/blog/classic" class="sf-with-ul">Blog</nuxt-link>
                <ul>
                    <li>
                        <nuxt-link to="/blog/classic">Classic</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/blog/listing">Listing</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/blog/grid/grid-2" class="sf-with-ul">Grid</nuxt-link>
                        <ul>
                            <li>
                                <nuxt-link to="/blog/grid/grid-2">Grid 2 columns</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/blog/grid/grid-3">Grid 3 columns</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/blog/grid/grid-4">Grid 4 columns</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/blog/grid-sidebar">Grid sidebar</nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <nuxt-link to="/blog/masonry/masonry-2" class="sf-with-ul">Masonry</nuxt-link>
                        <ul>
                            <li>
                                <nuxt-link to="/blog/masonry/masonry-2">Masonry 2 columns</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/blog/masonry/masonry-3">Masonry 3 columns</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/blog/masonry/masonry-4">Masonry 4 columns</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/blog/masonry-sidebar">Masonry sidebar</nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <nuxt-link to="/blog/mask/grid" class="sf-with-ul">Mask</nuxt-link>
                        <ul>
                            <li>
                                <nuxt-link to="/blog/mask/grid">Blog mask grid</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/blog/mask/masonry">Blog mask masonry</nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <nuxt-link
                            to="/blog/single/default/cras-ornare-tristique-elit."
                            class="sf-with-ul"
                        >Single Post</nuxt-link>
                        <ul>
                            <li>
                                <nuxt-link
                                    to="/blog/single/default/cras-ornare-tristique-elit."
                                >Default with sidebar</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    to="/blog/single/fullwidth/fusce-pellentesque-suscipit."
                                >Fullwidth no sidebar</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    to="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo"
                                >Fullwidth with sidebar</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

        </ul>
    </nav>
</template>
<script>

import axios from 'axios';

export default {
    computed: {
        current: function() {
            if (this.$route.path.includes('elements')) return 'elements';
            if (this.$route.path.includes('shop')) return 'shop';
            if (this.$route.path.includes('blog')) return 'blog';
            if (this.$route.path.includes('product')) return 'product';
            if (this.$route.path.includes('pages')) return 'pages';
            return '/';
        }
    },
    data: function(){
        return {
            topbaritems: [],
        }
    },
    mounted: function () {
        this.getTopmenuItems()
    },
    methods: {
        viewAllDemos: function(e) {
            var list = document.querySelectorAll('.demo-list .hidden');
            for (let i = 0; i < list.length; i++) {
                list[i].classList.add('show');
            }

            e.currentTarget.parentElement.classList.add('d-none');
        },
        getTopmenuItems(){
            axios.get( process.env.BASE_URL + '/get-topbar')
                .then((res) => {
                    this.topbaritems = res.data;
            })
        }
    }
};
</script>