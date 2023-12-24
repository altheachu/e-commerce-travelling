<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-row>
      <el-button @click="getDemoMsg" round>測試API</el-button>
      <el-button @click="test" round>測試MIXIN</el-button>
    </el-row>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import mixin from "./test/index.js";

export default {
  mixins: [mixin],
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    getDemoMsg: function () {
      this.$axios
        .get("/demo")
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err));
    },
  },
};
</script>
