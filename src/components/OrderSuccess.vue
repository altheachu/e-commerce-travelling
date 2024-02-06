<template>
  <div class="outer-container">
    <div class="inner-container">
      <div class="img-container">
        <img src = "@/assets/success.svg" class="img" alt="ORDER SUCCESS SVG"/>
      </div>
      <div>
        <el-form :label-position="labelPosition" label-width="200px" :model="orderInfo" :key="reloadData">
          <el-form-item :label="orderLabel.id">
            <span>{{ orderInfo.id }}</span>
          </el-form-item>
          <el-form-item :label="orderLabel.date">
            <span>{{ orderInfo.date }}</span>
          </el-form-item>
          <el-form-item :label="orderLabel.tamt">
            <span>{{ orderInfo.tamt }}</span>
          </el-form-item>
          <el-form-item :label="orderLabel.customerName">
            <span>{{ orderInfo.customerName }}</span>
          </el-form-item>
          <el-form-item :label="orderLabel.customerPhone">
            <span>{{ orderInfo.customerPhone }}</span>
          </el-form-item>
          <div>
              <el-table :data="orderDetailList" style="width: 100%" :border="true" :row-class-name="tableRowClassName" :header-cell-style="headerStyle">
                <el-table-column prop="name" :label="orderdtlLabel.name" width="120">
                </el-table-column>
                <el-table-column prop="price" :label="orderdtlLabel.price" width="105">
                </el-table-column>
                <el-table-column prop="qty" :label="orderdtlLabel.qty" width="105">
                </el-table-column>
                <el-table-column prop="amt" :label="orderdtlLabel.amt" width="110">
                </el-table-column>
              </el-table>
            </div>
        </el-form>
      </div>
      <div class="button-container">
        <el-button type="primary" round @click="backToHome">HOME</el-button>
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
  .outer-container {
    margin: 0 auto; 
    width: 29.7vw;
  }

  .inner-container {
    display: flex; 
    justify-content: center; 
    flex-direction: column;
  }

  .img-container {
    height: 20vh;
  }

  .img {
    height: 15vh; width: auto
  }

  .button-container {
    margin-top: 2vh;
  }

  ::v-deep .el-table .striped-row {
    background-color: #cdd8dc;
  }
</style>