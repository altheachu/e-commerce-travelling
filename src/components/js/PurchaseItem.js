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
    this.getDefaultAmt();
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
      this.isEnterPurchase = false;
    },
    getDefaultAmt: function() {
      console.log('test', this.qty, this.pdtInfo)
      
    },
    buy: function() {
      // this.$axios
      //   .post("/customer/add", this.customerInfo)
      //   .then((res)=>{
      //     let orderInfo = {
      //       customerId: res.data,
      //       orderDate: new Date(),
      //       orderAmt: this.orderAmount,
      //       orderDetailList: [
      //         {
      //           productId: this.pdtInfo.id,
      //           orderQty: this.qty
      //         }
      //       ]
      //     };
      //     this.$axios
      //     .post("/order/add", orderInfo)
      //       .then((res)=>{
      //         console.log(res);
      //       })
      //       .catch((err)=> alert('fail to convey order info:' + err))
      //   })
      //   .catch((err) => alert('fail to record customer info:' + err));
      this.$emit('showSuccessPage', true);
    },
  }
})