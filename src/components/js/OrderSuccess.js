// import { priceFormat } from './Common.js';

export default ({
  data() {
    return {
      labelPosition: 'right',
      orderInfo: {
        id: '',
        date: '',
        tamt: ''
      },
      orderLabel: {
        id: 'Order Number',
        date: 'Order Date',
        tamt: 'Order Total Amount',
        customerName: 'Your Name',
        customerPhone: 'Your Phone Number',
        orderDetail: 'Order Detail',
      },
      orderDetailList:[{
        name: 'test',
      }]
    };
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      console.log(row);
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
})