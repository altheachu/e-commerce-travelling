export default ({
  props: {
    backPage: Boolean,
  },
  data(){
    return {
    }
  },
  computed: {
    showPage: {
      get() {
        return this.backPage; 
      },
      set(val) {
        this.$emit('update:backPage', val);
      }
    },
  },
  methods: {
    test() {
      this.showPage = false;
    }
  }
})