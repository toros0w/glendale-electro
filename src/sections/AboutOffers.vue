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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere'
        },
        {
          img: './icons/clock.svg',
          title: '24/7 Available',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere'
        },
        {
          img: './icons/wallet.svg',
          title: 'Affordable Prices',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere'
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