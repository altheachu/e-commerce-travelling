export default ({
  data(){
    return {
      pdtInfo: {},
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
  computed: {
    enterPage: {
      get() {
        return this.backPage;
      },
      set(val) {
        this.$emit('update:backPage', val);
      }
    }
  },
  methods: {
    goBack: function() {
      this.enterPage = false;
    },
    buy: function() {
      this.$axios
        .post("/customer/add", this.customerInfo)
        .then((res)=>{
          console.log(res);
          // TODO purchase product
        })
        .catch((err) => alert('fail to record customer info:' + err));
    },
  }
})