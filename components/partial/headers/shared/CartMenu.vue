<template>
    <div class="dropdown cart-dropdown">
        <nuxt-link to="/shop/cart" class="dropdown-toggle">
            <div class="icon">
                <i class="icon-shopping-cart"></i>
                <span class="cart-count">{{ qtyTotal }}</span>
            </div>
            <p>Cart</p>
        </nuxt-link>

        <div class="dropdown-menu dropdown-menu-right" key="hasCart">
            <div class="dropdown-cart-products">
                <div class="product" v-for="(product, index) in cartList" :key="index">
                    <div class="product-cart-details">
                        <h4 class="product-title">
                            <nuxt-link :to="`/product/show/${product.id}`" >{{ product.name }}</nuxt-link>
                        </h4>

                        <!-- <span class="cart-product-info">
                            <span class="cart-product-qty">{{ product.qty }}</span>
                            x ${{ product.sale_price ? product.sale_price.toFixed(2): product.price.toFixed(2) }}
                        </span> -->
                    </div>

                    <figure class="product-image-container">
                        <nuxt-link :to="`/product/show/${product.id}`" class="">
                            <img
                                v-lazy="`${baseUrl}/${product.photo}`"
                                alt="product"
                                :width="50"
                                :height="50"
                            />
                        </nuxt-link>
                    </figure>
                    <a
                        href="#"
                        class="btn-remove"
                        title="Remove Product"
                        @click.prevent="removeFromCart({product: product})"
                    >
                        <i class="icon-close"></i>
                    </a>
                </div>
            </div>

            <div class="dropdown-cart-total">
                <span>Total</span>

                <span class="cart-total-price">${{ priceTotal.toFixed(2) }}</span>
            </div>

            <div class="dropdown-cart-action">
                <nuxt-link to="/shop/cart" class="btn btn-primary">View Cart</nuxt-link>
                <nuxt-link to="/shop/checkout" class="btn btn-outline-primary-2">
                    <span>Checkout</span>
                    <i class="icon-long-arrow-right"></i>
                </nuxt-link>
            </div>
        </div>
        <!-- <div class="dropdown-menu dropdown-menu-right">
            <p class="text-center">No products in the cart.</p>
        </div> -->
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/repositories/repository';

export default {
    data: function() {
        return {
            baseUrl: process.env.APP_URL
        };
    },
    computed: {
        ...mapGetters('cart', ['cartList', 'priceTotal', 'qtyTotal'])
    },
    methods: {
        ...mapActions('cart', ['removeFromCart'])
    }
};
</script>