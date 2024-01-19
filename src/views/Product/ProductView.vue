<template>
  <ProductItem/>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import mixin from './ProductView.js'

export default ({
    mixins: [mixin],
    name: "ProductView",
    components: { ProductItem }
})
</script>

<style scoped>
</style>
