export default ({
  created() {
    this.getProducts();
  },
  mounted() {
  },
  data(){
    return {
      productData:[],
      isShowProduct: true,
      isEnterPurchase: false,
      isShowOrder: false,
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
      this.isEnterPurchase = true;
      this.$nextTick(()=>{
        this.$refs.purchaseItem.pdtInfo = data;
      })
    },
    showSuccessPage: function(isShow) {
      this.isShowOrder = isShow;
      this.isEnterPurchase = false;
      this.isShowProduct = false;
    }
  }
})