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
    removeFromCart() {
      this.cart.pop();
    },
  },
});
