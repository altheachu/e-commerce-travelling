export default ({
  created() {
    this.getProducts();
  },
  mounted() {
    this.test();
  },
  data(){
    return {
      productData:[],
    }
  },
  methods: {
    test: function() {
      console.log('test');
    },
    getProducts: function() {
      this.$axios
        .get("/product")
        .then((res)=>{this.productData = res.data})
        .catch((err) => alert(err));
    }
  }
})