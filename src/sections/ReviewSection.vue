<template>
  <div class="review-container">
    <div class="review-title">OUR CUSTOMERS SAY</div>
    <div class="review-items-wrapper">
      <ReviewItem v-for="(item, index) in data" :key="index" :review="item" />
    </div>
  </div>
</template>

<script>
import ReviewItem from '@/components/ReviewItem.vue'
export default {
  name: 'ReviewSection',
  components: {
    ReviewItem
  },
  data() {
    return {
      data: [
        {
          text: '"Excellent service from Glendale Electricians! They upgraded our electrical panel quickly and professionally. Highly recommended!"',
          user_photo: './images/user-1.jpg',
          user_name: 'Merry Minasyan',
          user_city: 'Glendale, CA.'
        },
        {
          text: '"Fast and reliable! Glendale Electricians handled our emergency situation with skill and friendliness. Great job!"',
          user_photo: './images/user-2.jpg',
          user_name: 'David Mark',
          user_city: 'Burbank, CA.'
        },
        {
          text: '"Consistently impressive! We trust Glendale Electricians for all our electrical needs. Always professional and efficient."',
          user_photo: './images/user-3.jpg',
          user_name: 'Lee Chang',
          user_city: 'Pasadena, CA.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.review-container {
  text-align: center;
  margin-top: 110px;
}
.review-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  color: var(--black);
  font-size: 40px;
}
.review-items-wrapper {
  display: flex;
  justify-content: center;
  gap: 84px;
  margin-top: 35px;
}
@media (max-width: 480px) {
  .review-container {
    width: 380px;
    justify-content: center;
    padding: 0 0 0 35px;
  }
  .review-title {
    font-size: 24px;
  }
  .review-items-wrapper {
    flex-wrap: wrap;
    gap: 30px;

    display: flex;
    justify-content: center;
  }
}
</style>