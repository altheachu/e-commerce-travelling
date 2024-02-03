<template>
  <div style="margin: 0 auto; width: 40vw;">
    <div style="display: flex; justify-content: center; flex-direction: column;">
    <div style="height: 20vh;">
      <img src = "@/assets/success.svg" style="height: 15vh; width: auto" alt="My Happy SVG"/>
    </div>
    <div>
    <el-form :label-position="labelPosition" label-width="160px" :model="orderInfo">
      <el-form-item :label="orderLabel.id">
        <el-input v-model="orderInfo.id"></el-input>
      </el-form-item>
      <el-form-item :label="orderLabel.date">
        <el-input v-model="orderInfo.region"></el-input>
      </el-form-item>
      <el-form-item :label="orderLabel.tamt">
        <el-input v-model="orderInfo.type"></el-input>
      </el-form-item>
      <el-form-item :label="orderLabel.customerName">
        <el-input v-model="orderInfo.type"></el-input>
      </el-form-item>
      <el-form-item :label="orderLabel.customerPhone">
        <el-input v-model="orderInfo.type"></el-input>
      </el-form-item>
      <el-form-item :label="orderLabel.orderDetail">
        <!-- <el-input v-model="orderInfo.type"></el-input> -->
        <div style="text-align: left;">
          <el-table
    :data="orderDetailList"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="price"
      width="105">
    </el-table-column>
    <el-table-column
      prop="name"
      label="qty"
      width="105">
    </el-table-column>
    <el-table-column
      prop="name"
      label="amt"
      width="105">
    </el-table-column>
  </el-table>
        </div>
      </el-form-item>
    </el-form>
    </div>
    </div>
  </div>
</template>

<script>
import mixin from './js/OrderSuccess.js';

export default ({
    mixins: [mixin],
    name: "OrderSuccess",
})
</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>