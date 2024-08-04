<template>
  <div class="review-item">
    <div class="review-text">{{ review.text }}</div>
    <div class="review-user">
      <img :src="review.user_photo" alt="" class="user-photo" />
      <div class="review-user-info">
        <div class="user-name">{{ review.user_name }}</div>
        <div class="user-city">{{ review.user_city }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewItem',
  props: {
    review: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.review-item {
  width: 361px;
  height: 227px;
  border: 1px solid var(--light-gray);
  padding: 25px;
  position: relative;
  box-shadow: 3px 4px 29px -6px rgba(0, 0, 0, 0.53);
}
.review-text {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  color: var(--t-gray);
  font-size: 20px;
  text-align: left;
}
.review-user {
  display: flex;
  align-items: center;
  gap: 30px;
  position: absolute;
  bottom: 10px;
}
.user-photo {
  border-radius: 50%;
}
.review-user-info {
  text-align: left;
}
.user-name {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  color: var(--black);
  font-size: 20px;
}
.user-city {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  color: var(--t-gray);
  font-size: 16px;
}
</style>