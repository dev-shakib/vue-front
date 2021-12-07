<template>
    <div class="product product-4 text-center">
        <figure class="product-media">
            <span class="product-label label-circle label-new" >New</span>
            <span class="product-label label-circle label-sale" >Sale</span>
            <span class="product-label label-circle label-top" >Top</span>
            <span
                class="product-label label-circle label-out"
            >Out Of Stock</span>

            <nuxt-link :to="'/product/default/'">
                <img
                    v-lazy="`${baseUrl}/${product.photo}`"
                    :alt="product.name"
                    class="product-image"
                />
                <img
                    v-lazy="`${baseUrl}/${product.photo}`"
                    :alt="product.name"
                    :width="100"
                    :height="100"
                    class="product-image-hover"
                />
            </nuxt-link>
            <!-- <div class="product-action-vertical" v-if="product.stock !== 0">
                <nuxt-link
                    to="/shop/wishlist"
                    class="btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
                    v-if="isInWishlist(product)"
                    key="inWishlist"
                >
                    <span>go to wishlist</span>
                </nuxt-link>
                <a
                    href="javascript:;"
                    class="btn-product-icon btn-wishlist btn-expandable"
                    @click.prevent="addToWishlist({product: product})"
                    v-else
                    key="notInWishlist"
                >
                    <span>add to wishlist</span>
                </a>
            </div> -->
            <!-- <div class="product-action" v-if="product.stock !== 0">
                <nuxt-link
                    :to="'/product/default/' + product.slug"
                    class="btn-product btn-cart btn-select"
                    v-if="product.variants.length > 0"
                >
                    <span>select options</span>
                </nuxt-link>
                <button
                    class="btn-product btn-cart"
                    @click.prevent="addToCart( {product: product} )"
                    v-else
                >
                    <span>add to cart</span>
                </button>
            </div> -->
        </figure>

        <!-- <div class="product-body">
            <div class="product-cat">
                <span v-for="(cat, index) of product.category" :key="index">
                    <nuxt-link
                        :to="{path: '/shop/sidebar/list', query: {category: cat.slug}}"
                    >{{ cat.name }}</nuxt-link>
                    {{ index < product.category.length - 1 ? ',' : '' }}
                </span>
            </div>
            <h3 class="product-title">
                <nuxt-link :to="'/product/default/'+ product.slug">{{ product.name }}</nuxt-link>
            </h3>

            <div class="product-price" v-if="product.stock==0" key="outPrice">
                <span class="out-price">${{ product.price.toFixed(2) }}</span>
            </div>

            <template v-else>
                <div class="product-price" v-if="minPrice == maxPrice">${{ minPrice.toFixed(2) }}</div>
                <template v-else>
                    <div class="product-price" v-if="product.variants.length == 0">
                        <span class="new-price">${{ minPrice.toFixed(2) }}</span>
                        <span class="old-price">${{ maxPrice.toFixed(2) }}</span>
                    </div>
                    <div
                        class="product-price"
                        v-else
                    >${{minPrice.toFixed(2)}}&ndash;${{maxPrice.toFixed(2)}}</div>
                </template>
            </template>

            <div class="product-nav product-nav-dots" v-if="product.variants.length > 0">
                <div class="row no-gutters">
                    <a
                        href="javascript:;"
                        :style="{'background-color': item.color}"
                        v-for="(item, index) in product.variants"
                        :key="index"
                    >
                        <span class="sr-only">Color name</span>
                    </a>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/repositories/repository';
export default {
    props: {
        product: Object
    },
    data: function() {
        return {
            baseUrl: process.env.APP_URL,
            maxPrice: 0,
            minPrice: 99999
        };
    },
    computed: {
        // ...mapGetters('cart', ['canAddToCart']),
        // ...mapGetters('wishlist', ['isInWishlist']),
        // ...mapGetters('compare', ['isInCompare'])
    },

    created: function() {
        // let min = this.minPrice;
        // let max = this.maxPrice;
        // this.product.variants.map(item => {
        //     if (min > item.price) min = item.price;
        //     if (max < item.price) max = item.price;
        // }, []);

        // if (this.product.variants.length == 0) {
        //     min = this.product.sale_price
        //         ? this.product.sale_price
        //         : this.product.price;
        //     max = this.product.price;
        // }

        // this.minPrice = min;
        // this.maxPrice = max;
    },
    methods: {
        // ...mapActions('cart', ['addToCart']),
        // ...mapActions('wishlist', ['addToWishlist']),
        // ...mapActions('compare', ['addToCompare']),
        // quickView: function() {
        //     this.$modal.show(
        //         () => import('~/components/elements/modals/QuickViewModal'),
        //         {
        //             product: this.product
        //         },
        //         { width: '1030', height: 'auto', adaptive: true }
        //     );
        // }
        getImage: function(data){
            return data.photo;
        }
    }
};
</script>