<template>
  <div class="container">
    <div class="item pdt_info">
      <div class="pdt_position">
        <el-form ref="form" :model="pdtInfo" label-width="160px" label-position="left">
        <el-form-item>
          <span slot="label">
            <span>Tour Name</span>
          </span> 
          <div class="word">{{ pdtInfo.name }}</div>
        </el-form-item>
        <el-form-item label="Price">
          <div class="word">{{ pdtInfo.price }}</div>
        </el-form-item>
        <el-form-item label="Type">
          <div class="word">{{ pdtInfo.type }}</div>
        </el-form-item>
        <el-form-item label="Quota of People">
          <div class="word">{{ pdtInfo.stockQty }}</div>
        </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="item">
      test1
    </div>
    <div class="colspan">
      <el-button @click="goBack">Go Back</el-button>
      <el-button>Buy Now</el-button>
    </div>
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
  .container{
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pdt_info {
    width: 100%;
    grid-row: span 2;
    background-color: #f2f2f2;
    border-radius: 5px;
  }

  .pdt_position{
    padding-left: 25%;
  }

  .word {
    text-align: left;
  }
</style>