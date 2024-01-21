export default ({
  created() {
    this.getProducts();
  },
  mounted() {
  },
  data(){
    return {
      productData:[],
    }
  },
  methods: {
    getProducts: function() {
      this.$axios
        .get("/product")
        .then((res)=>{
          this.productData = res.data
        })
        .catch((err) => alert(err));
    },
    showOrderPage: function(data) {
      this.$emit('showOrderPage', data);
    }
  }
})