<template>
  <div>
    <ProductItem v-show="!isEnterPurchase && isShowProduct" @showOrderPage="showOrderPage"/>
    <PurchaseItem ref="purchaseItem" v-show="isEnterPurchase" :back-page.sync="isEnterPurchase" @showSuccessPage="showSuccessPage" />
    <OrderSuccess ref="orderSuccess" v-show="isShowOrder" @backToHome="backToHome"/>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import PurchaseItem from '@/components/PurchaseItem.vue';
import OrderSuccess from '@/components/OrderSuccess.vue';
import mixin from './ProductView.js'

export default ({
    mixins: [mixin],
    name: "ProductView",
    components: { ProductItem, PurchaseItem, OrderSuccess }
})
</script>

<style scoped>
</style>
