import { priceFormat } from './Common.js';

export default ({
  data(){
    return {
      qty: 1,
      pdtInfo: {},
      pdtLabel: {
        name: 'Tour Name',
        price: 'Price',
        type: 'Type',
        stockQty: 'Quota of People',
        orderAmount: 'Order Amount',
      },
      customerInfo: {
        name: undefined,
        phone: undefined,
        email: undefined,
      },
      rules: {
        name: [
          { required: true, message: 'Please fill in your name.', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: 'Please fill in your phone number.', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Please fill in your email.', trigger: 'blur' },
        ],
      },
    }
  },
  props:{
    backPage: Boolean,
  },
  mounted() {
  },
  computed: {
    isEnterPurchase: {
      get() {
        return this.backPage;
      },
      set(val) {
        this.$emit('update:backPage', val);
      }
    },
    orderAmount: {
      get() {
        return priceFormat(Number(this.qty) * Number(this.pdtInfo.price));
      },
    }
  },
  methods: {
    goBack: function() {
      this.$refs.ProductItem.getProducts();
      this.isEnterPurchase = false;
    },

    checkNumber: function() {
      if (this.qty > this.pdtInfo.stockQty) {
        this.$message({
          message: 'Order quantity is larger than stock quatity! Please check it.',
          type: 'warning',
          duration: 3000,
        });
      }
    },
    buy: function() {
      if (this.qty > this.pdtInfo.stockQty) {
        this.$message({
          message: 'rder quantity is larger than stock quatity! The tranction failed.',
          type: 'warning',
          duration: 3000,
        });
        return;
      }
      this.$axios
        .post("/customer/add", this.customerInfo)
        .then((res)=>{
          let orderInfo = {
            customerId: res.data,
            orderDate: new Date(),
            orderAmt: this.orderAmount,
            orderDetailList: [
              {
                productId: this.pdtInfo.id,
                orderQty: this.qty
              }
            ]
          };
          this.$axios
          .post("/order/add", orderInfo)
            .then((res)=>{
              this.$axios
              .get(`/customer/findById/${res.data.customerId}`)
                .then((customerRes) => {
                  res.data.customerName = customerRes.data.name;
                  res.data.customerPhone = customerRes.data.phone;
                  this.$emit('showSuccessPage', true, res.data);
                })
                .catch((err)=> alert('order success but fail to find customer info:' + err))
            })
            .catch((err)=> alert('fail to convey order info:' + err))
        })
        .catch((err) => alert('fail to record customer info:' + err));      
    },
  }
})