const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      description: "This socks rules!",
      image: "./assets/images/socks_green.jpg",
      inStock: true,
      inventory: 100,
      onSale: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
        },
      ],
      sizes: ["35/36", "37/38", "39/40", "41/42"],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart <= 0) {
        this.cart;
      } else {
        this.cart -= 1;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
