<template>
  <div class="offer-container">
    <div class="offer-items-wrapper">
      <OfferItem v-for="(item, index) in data" :key="index" :offer="item" />
    </div>
  </div>
</template>

<script>
import OfferItem from '@/components/OfferItem.vue'
export default {
  name: 'AboutOffers',
  components: {
    OfferItem
  },
  data() {
    return {
      data: [
        {
          img: './icons/note.svg',
          title: 'Free Estimation',
          text: 'We offer free estimates to give you transparent pricing and expert advice from the start.'
        },
        {
          img: './icons/clock.svg',
          title: '24/7 Available',
          text: 'We are available 24/7 to handle all your electrical emergencies and needs promptly.'
        },
        {
          img: './icons/wallet.svg',
          title: 'Affordable Prices',
          text: 'We offer competitive pricing to ensure you receive high-quality electrical services at an excellent value.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.offer-container {
  display: block;
  max-width: 1300px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  color: var(--t-gray);
  font-size: 20px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  margin-top: 165px;
}
.offer-items-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}

@media (max-width: 1300px) {
  .offer-container {
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
  }
  .offer-items-wrapper {
    justify-content: center;
    gap: 0.1vw;
  }
}
@media (max-width: 750px) {
  .offer-container {
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
  }
  .offer-items-wrapper {
    justify-content: center;
    gap: 70px;
    flex-wrap: wrap;
  }
}
</style>