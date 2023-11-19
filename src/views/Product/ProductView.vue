<template>
  <div>
    <el-row type="flex" justify="center" class="row-style">
      <el-col
        :span="4"
        v-for="(o, index) in productData"
        :key="o"
        :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img 
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" 
          class="image"/>
          <div style="padding: 14px">
            <div class="pdt-info">
              <div>{{ o.type }}</div>
              <div>{{ o.price }}</div>
            </div>
            <span class="clearfix">{{ o.name }}</span>
            <div class="bottom clearfix">
              <time class="time">2022-10-19</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mixin from './ProductView.js'

export default ({
  mixins: [mixin],
  name: "ProductView",
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
    padding: 0;
    float: right;
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
