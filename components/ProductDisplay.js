app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="product-display">
    <div class="product-container">
      <div
        class="product-image"
        :class="[inStock ? 'product-image' : 'out-of-stock-img']"
      >
        <img :src="image" alt="" />
      </div>
      <div class="product-info">
        <h1>{{ title + '' + onSale }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <product-details :details="details"></product-details>
        

        <div class="colors">
          <div
            class="color-circle"
            :style="{ background: variant.color }"
            @mouseover="updateVariant(index)"
            v-for="(variant, index) in variants"
            :key="variant.id"
          ></div>
        </div>

        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <button
          class="button"
          :class="{ disabledButton: !inStock  }"
          :disabled="!inStock"
          v-on:click="addToCart"
        >
          Add to Cart
        </button>

        <button class="button-remove" v-on:click="removeFromCart">
          Remove from Cart
        </button>
      </div>
    </div>
  </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      description: "This socks rules!",
      selectedVariant: 0,
      inventory: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          onSale: true,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
          onSale: false,
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
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    onSale() {
      if (this.variants[this.selectedVariant].onSale) {
        return " is on sale!";
      } else {
        return " ";
      }
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
