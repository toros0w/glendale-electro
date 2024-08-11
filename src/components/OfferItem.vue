<template>
  <div class="offer-item">
    <img :src="offer.img" alt="" class="offer-icon" />
    <div class="offer-item-title">{{ offer.title }}</div>
    <div class="offer-item-text">{{ offer.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'OfferItem',
  props: {
    offer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.offer-item {
  max-width: 381px;
  height: 350px;
  color: var(--t-gray);
  font-size: 20px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
}
.offer-icon {
  max-width: 80px;
  max-height: 80px;
  margin-top: 20px;
}
.offer-item-title {
  font-size: 24px;
  color: var(--black);
  font-family: var(--roboto-bold);
  font-weight: var(--weight-regular);
}
.offer-item-text {
  margin-top: 22px;
}
@media (max-width: 480px) {
  .offer-item {
    max-height: 220px;
  }
  .offer-icon {
    max-width: 60px;
    max-height: 60px;
    margin-top: 20px;
  }
  .offer-item-title {
    font-size: 20px;
  }
  .offer-item-text {
    font-size: 16px;
    line-height: 20px;
  }
}
@media (max-width: 1300px) {
  .offer-item {
    width: 100vw;
    height: 100%;
  }
  .offer-item {
    max-height: auto;
  }
}
</style>