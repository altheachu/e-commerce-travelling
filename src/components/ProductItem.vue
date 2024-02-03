<template>
  <div>
    <el-row type="flex" justify="center" class="row-style">
      <el-col
        :span="4"
        :offset = "index > 0 ? 1 : 0" 
        v-for="(o, index) in productData"
        :key="o.id">
        <div style="position:relative;">
          <div class="stock-style"> 
            <div>{{o.stockQty}}</div>
            <div>Stock</div>
          </div>
          <el-card :body-style="{ padding: '0px' }">
            <img :src="require('@/assets/' + o.pdtUrl)" class="image" :alt="o.pdtAlt" aria-hidden="true">
          <div style="padding: 14px">
            <div class="pdt-info">
              <div>{{ o.type }}</div>
              <div>${{ o.price }}</div>
            </div>
            <span class="pdt-name clearfix">{{ o.name }}</span>
            <div class="bottom clearfix">
              <el-button type="primary" class="button" round @click="showOrderPage(o)">Buy Now</el-button>
            </div>
          </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mixin from './js/ProductItem.js';

export default ({
  mixins: [mixin],
  name: "ProductItem",
})
</script>

<script src="./js/ProductItem.js"></script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 10px;
    float: middle;
  }

  .image {
    width: 100%;
    height:250px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .row-style {
    padding-bottom: 20px;
  }
  .pdt-info{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .pdt-name{
    font-size: 20px;
    font-weight: bold;
    color: rgb(3, 66, 148);
  }

  .stock-style{
    background-color:rgba(44, 217, 229, 0.95); 
    color: black; 
    position: absolute;
    width:25%; 
    height:10%; 
    transform: rotate(0.08turn); 
    clip-path: polygon(0% 0%, 75% 0%, 100% 52%, 75% 100%, 0% 100%);
  }
</style>