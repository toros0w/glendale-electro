<template>
  <div class="review-container">
    <div class="review-wrapper">
      <img src="/public/images/review-icon.png" alt="" class="review-icon" />
      <div class="review-title">Leave Us a Review</div>
      <div class="review-text">
        We’d love to hear your feedback. If you're satisfied with our work, please leave us a 5-star
        review on Google.
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ReviewComponent'
}
</script>

<style scoped>
.review-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.review-icon {
  width: 120px;
  height: 120px;
}
.review-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 20px;
}
.review-text {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 16px;
  color: var(--light-gray);
  margin-top: 12px;
  width: 280px;
}
</style>