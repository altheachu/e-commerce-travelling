import { priceFormat } from './Common.js';

export default ({
  props:{
    indexOrder: {},
  },
  data() {
    return {
      labelPosition: 'left',
      orderLabel: {
        id: 'Order Number',
        date: 'Order Date',
        tamt: 'Order Total Amount',
        customerName: 'Customer Name',
        customerPhone: 'Customer Phone Number',
        orderDetail: 'Order Detail',
      },
      orderdtlLabel : {
        name: 'Product',
        price: 'Unit Price',
        qty: 'Quatity',
        amt: 'Item Amount',
      },
      orderDetailList: [],
      headerStyle: {
        textAlign: 'center',
      },
      reloadData: false,
      orderInfo: {
      },
    };
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      let resultClass = '';
      if (rowIndex % 2 == 0){
        resultClass = 'striped-row';
      } else {
        resultClass = '';
      }
      if ( Number(row.amt) * Number(row.qty) >= 10000){
        resultClass = 'warning-row';
      }
      return resultClass;
    },
    backToHome() {
      this.$emit('backToHome', 'orderSuccess');
    },
    setOrderInfo(data) {
      console.log(data);
      this.orderInfo.id = data.orderId;
      this.orderInfo.date = data.orderDate;
      this.orderInfo.tamt = priceFormat(data.orderAmt);
      this.orderInfo.customerName = data.customerName;
      this.orderInfo.customerPhone = data.customerPhone;
      this.reloadData = !this.reloadData;
    }
  },
})