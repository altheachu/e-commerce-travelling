<template>
  <div>
    <el-button @click="test">back</el-button>
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