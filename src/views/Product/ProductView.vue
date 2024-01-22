<template>
  <div>
    <ProductItem v-if="!enterPage" @showOrderPage="showOrderPage"/>
    <PurchaseItem ref="purchaseItem" v-if="enterPage" :back-page.sync="enterPage" />
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import PurchaseItem from '@/components/PurchaseItem.vue';
import mixin from './ProductView.js'

export default ({
    mixins: [mixin],
    name: "ProductView",
    components: { ProductItem, PurchaseItem }
})
</script>

<style scoped>
</style>
