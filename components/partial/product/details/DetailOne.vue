<template>
    <div class="product-details">
        <h1 class="product-title">{{product.name}}</h1>
        <!-- End .product-title -->

        <div class="ratings-container">
            <div class="ratings">
                <div class="ratings-val" style="width: 80%"></div>
                <!-- End .ratings-val -->
            </div>
            <!-- End .ratings -->
            <a class="ratings-text" href="#product-review-link" id="review-link"
                >( 2 Reviews )</a
            >
        </div>
        <!-- End .rating-container -->

        <div class="product-price">${{product.price}}</div>
        <!-- End .product-price -->

        <div class="product-content">
            <p>
                {{ product.description }}
            </p>
        </div>
        <!-- End .product-content -->
        <!-- End .details-filter-row -->

        <div class="details-filter-row details-row-size">
            <label for="size">Size:</label>
            <div class="select-custom">
                <select name="size" id="size" class="form-control">
                    <option value="#" selected="selected">Select a size</option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <!-- End .select-custom -->

            <a href="#" class="size-guide"
                ><i class="icon-th-list"></i>size guide</a
            >
        </div>
        <!-- End .details-filter-row -->

        <div class="details-filter-row details-row-size">
            <label for="qty">Qty:</label>
            <div class="product-details-quantity">
                <input
                    type="number"
                    id="qty"
                    class="form-control"
                    value="1"
                    min="1"
                    max="10"
                    step="1"
                    data-decimals="0"
                    required=""
                    style="display: none"
                />
                <div class="input-group input-spinner">
                    <div class="input-group-prepend">
                        <button
                            style="min-width: 26px"
                            class="btn btn-decrement btn-spinner"
                            type="button"
                        >
                            <i class="icon-minus"></i>
                        </button>
                    </div>
                    <input
                        type="text"
                        style="text-align: center"
                        class="form-control"
                        required=""
                        placeholder=""
                    />
                    <div class="input-group-append">
                        <button
                            style="min-width: 26px"
                            class="btn btn-increment btn-spinner"
                            type="button"
                        >
                            <i class="icon-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- End .product-details-quantity -->
        </div>
        <!-- End .details-filter-row -->

        <div class="product-details-action">
            <a href="#" class="btn-product btn-cart"
                ><span>add to cart</span></a
            >

            <div class="details-action-wrapper">
                <a href="#" class="btn-product btn-wishlist" title="Wishlist"
                    ><span>Add to Wishlist</span></a
                >
                <a href="#" class="btn-product btn-compare" title="Compare"
                    ><span>Add to Compare</span></a
                >
            </div>
            <!-- End .details-action-wrapper -->
        </div>
        <!-- End .product-details-action -->

        <div class="product-details-footer">
            <div class="product-cat">
                <span>Category:</span>
                <a href="#">Women</a>, <a href="#">Dresses</a>,
                <a href="#">Yellow</a>
            </div>
            <!-- End .product-cat -->

            <div class="social-icons social-icons-sm">
                <span class="social-label">Share:</span>
                <a href="#" class="social-icon" title="Facebook" target="_blank"
                    ><i class="icon-facebook-f"></i
                ></a>
                <a href="#" class="social-icon" title="Twitter" target="_blank"
                    ><i class="icon-twitter"></i
                ></a>
                <a
                    href="#"
                    class="social-icon"
                    title="Instagram"
                    target="_blank"
                    ><i class="icon-instagram"></i
                ></a>
                <a
                    href="#"
                    class="social-icon"
                    title="Pinterest"
                    target="_blank"
                    ><i class="icon-pinterest"></i
                ></a>
            </div>
        </div>
        <!-- End .product-details-footer -->
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    }
};
</script>

<style>
</style>