app.component("review-form", {
  template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>

      <label for="rating">Review:</label>
      <select id="rating" v-model.numer="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
      </select>
      
      <p>Would you recomend this product?</p>

      <input type="radio" id="yes" value="yes" v-model="recomend" />
      <label for="yes">Yes</label>

      <input type="radio" id="no" value="no" v-model="recomend" />
      <label for="no">No</label>

      <input class="button" type="submit" value="Submit">
    </form>
    `,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recomend: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || this.review === "" || this.rating === null) {
        alert("Review is incomplete. Please fill out every field.");
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recomend: this.recomend,
      };
      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
      this.recomend = "";
    },
  },
});
