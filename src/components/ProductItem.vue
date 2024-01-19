<template>
  <div>
    <el-row type="flex" justify="center" class="row-style">
      <el-col
        :span="4"
        v-for="(o, index) in productData"
        :key="o.id"
        :offset="index > 0 ? 1 : 0">
        <div style="position:relative;">
          <div style="background-color:red; position: absolute; width:25%; height:10%; transform: rotate(0.08turn); clip-path: polygon(0% 0%, 75% 0%, 100% 52%, 75% 100%, 0% 100%);"> 
            <div>{{o.stockQty}}</div>
            <div>Stock</div>
          </div>
          <el-card :body-style="{ padding: '0px' }">
            <img 
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" 
            class="image"/>
          <div style="padding: 14px">
            <div class="pdt-info">
              <div>{{ o.type }}</div>
              <div>${{ o.price }}</div>
            </div>
            <span class="clearfix">{{ o.name }}</span>
            <div class="bottom clearfix">
              <el-button type="primary" class="button" round>Buy Now</el-button>
            </div>
          </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mixin from './js/ProductItem.js'

export default ({
  mixins: [mixin],
  name: "ProductItem",
})
</script>

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
  }
</style>