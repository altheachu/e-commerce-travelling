export default ({
  data(){
    return {
      pdtInfo: {},
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
  }
})