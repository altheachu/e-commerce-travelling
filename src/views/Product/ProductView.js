import { priceFormat } from "@/components/js/Common";

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
    showSuccessPage: function(isShow, data) {
      let newArray = [];
      const array = data.orderDetailList;
      for(let i = 0; i < array.length; i++){
        let item = { qty: array[i].orderQty };
        this.$axios
        .get(`/product/findById/${array[i].productId}`, {})
          .then((res)=>{
            const str = 'day' + '\n';
            const formatNameArray = res.data.name.split('day');
            let formatName = formatNameArray[0] + str + formatNameArray[1];
            item.name = formatName;
            item.price = priceFormat(Number(res.data.price));
            item.amt = priceFormat(Number(res.data.price)*array[i].orderQty);
            newArray.push(item);
            if (i == array.length - 1 ){
              this.$refs.orderSuccess.setOrderInfo(data, newArray);
              this.isShowOrder = isShow;
              this.isEnterPurchase = false;
              this.isShowProduct = false;
            }
          });
      }
    },
    backToHome: function(sourceFrom) {
      this.$refs.purchaseItem.orderAmount = 1;
      this.$refs.purchaseItem.customerInfo = {};
      this.isShowOrder = false;
      this.isEnterPurchase = false;
      this.isShowProduct = false;
      if (sourceFrom==='orderSuccess') {
        this.$refs.ProductItem.getProducts();
        this.isShowProduct = true;
      }
    },
  }
})