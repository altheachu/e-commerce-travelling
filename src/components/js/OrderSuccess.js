// import { priceFormat } from './Common.js';

export default ({
  data() {
    return {
      labelPosition: 'left',
      orderInfo: {},
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
      }
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
  },
})