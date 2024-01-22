<template>
  <div>
    <div>{{ pdtInfo }}</div>
    <el-button @click="goBack">Go Back</el-button>
  </div>
</template>

<script>
import mixin from './js/PurchaseItem.js';

export default ({
  mixins: [mixin],
  name: "PurchaseItem",
})
</script>

<style scoped>
</style>