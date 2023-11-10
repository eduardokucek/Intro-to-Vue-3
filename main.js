const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      this.cart.pop();
      // if (this.cart <= 0) {
      //   this.cart;
      // } else {
      //   this.cart -= 1;
      // }
    },
  },
});
