import { priceFormat } from './Common.js';

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
          let newData = [];
          res.data.forEach((ele) => {
            ele.price = priceFormat(ele.price);
            newData.push(ele);
          });
          this.productData = newData;
        })
        .catch((err) => alert(err));
    },
    showOrderPage: function(data) {
      this.$emit('showOrderPage', data);
    },
  }
})