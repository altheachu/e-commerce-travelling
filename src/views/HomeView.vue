<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-row>
      <el-button @click="testApi" round>測試API</el-button>
    </el-row>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    testApi: function () {
      this.$axios
        .get("/test")
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err));
    },
  },
};
</script>
