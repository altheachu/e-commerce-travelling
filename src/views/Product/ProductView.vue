<template>
  <div>
    <ProductItem v-if="!isEnterPurchase && isShowProduct" @showOrderPage="showOrderPage"/>
    <PurchaseItem ref="purchaseItem" v-if="isEnterPurchase" :back-page.sync="isEnterPurchase" @showSuccessPage="showSuccessPage" />
    <OrderSuccess v-if="isShowOrder"/>
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
