<template>
  <div class="container">
    <div class="item pdt_info">
      <div class="pdt_position">
        <el-form ref="form" :model="pdtInfo" label-width="160px" label-position="left">
          <el-form-item>
            <span slot="label">
              <span class="pdt_label">{{ pdtLabel.name }}</span>
            </span> 
            <div class="word">{{ pdtInfo.name }}</div>
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span class="pdt_label">{{ pdtLabel.price }}</span>
            </span>
            <div class="word">{{ pdtInfo.price }}</div>
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span class="pdt_label">{{ pdtLabel.type }}</span>
            </span>
            <div class="word">{{ pdtInfo.type }}</div>
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span class="pdt_label">{{ pdtLabel.stockQty }}</span>
            </span>
            <div class="word">{{ pdtInfo.stockQty }}</div>
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span class="pdt_label">Order Quantity</span>
            </span>
            <div>
              <el-input-number v-model="qty" :min="1" :step-strictly="true" @change="checkNumber"></el-input-number>
            </div>
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span class="pdt_label">{{ pdtLabel.orderAmount }}</span>
            </span>
            <div>
              <div class="word">{{ orderAmount }}</div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="item customer_info">
      <div class="customer_position">
        <el-form ref="form" :rules="rules" :model="customerInfo" label-width="160px" label-position="left">
          <el-form-item prop="name">
            <span slot="label">
              <span class="customer_label">Customer Name</span>
            </span> 
            <el-input class="word" v-model="customerInfo.name"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <span slot="label">
              <span class="customer_label">Phone</span>
            </span>
            <el-input class="word" v-model="customerInfo.phone"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <span slot="label">
              <span class="customer_label">Email</span>
            </span>
            <el-input class="word" v-model="customerInfo.email"></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button type="info" round @click="goBack" >Go Back</el-button>
          <el-button type="primary" round @click="buy">Buy Now</el-button>
        </div>
      </div>
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
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .item {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
  }

  .pdt_info {
    width: 95%;
    grid-row: span 2;
    background-color: #f2f2f2;
    border-radius: 20px;
    background-color: rgb(3, 66, 148);
  }

  .customer_info {
    width: 95%;
    background-color: #f2f2f2;
    border-radius: 20px;
    height: 105%;
  }

  .pdt_position{
    padding-top: 5%;
    padding-left: 25%;
  }

  .customer_position{
    padding-top: 5%;
    padding-left: 20%;
  }

  .word {
    text-align: left;
    font-size: 16px;
    color: #f2f2f2;
  }

  .pdt_label {
    font-size: 18px;
    color: #f2f2f2;
  }

  .customer_label {
    font-size: 18px;
  }
</style>