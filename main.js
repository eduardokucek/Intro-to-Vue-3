const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "This socks rules!",
      image: "./assets/images/socks_green.jpg",
      //   inStock: true,
      inventory: 0,
      onSale: true,
    };
  },
});
