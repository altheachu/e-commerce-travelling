export default ({
  created() {
    this.getProducts();
  },
  mounted() {
  },
  data(){
    return {
      productData:[],
      enterPage: false,
    }
  },
  methods: {
    getProducts: function() {
      this.$axios
        .get("/product")
        .then((res)=>{this.productData = res.data})
        .catch((err) => alert(err));
    },
    showOrderPage: function(data) {
      console.log('showOrderPage', data);
      this.enterPage = true;
    },
  }
})