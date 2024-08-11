<template>
  <div class="offer-container">
    <div class="offer-title">WE OFFER</div>
    <div class="offer-subtitle">
      We offer a comprehensive range of cost effective services for residential and commercial
      properties.
    </div>
    <div class="offer-items-wrapper">
      <OfferItem v-for="(item, index) in data" :key="index" :offer="item" />
    </div>
  </div>
</template>

<script>
import OfferItem from '@/components/OfferItem.vue'
export default {
  name: 'OfferSection',
  components: {
    OfferItem
  },
  data() {
    return {
      data: [
        {
          img: './icons/electric-meter.svg',
          title: 'Safety Maintainance',
          text: 'Safety is our top priority. We ensure thorough inspections and adhere to the highest standards to keep your electrical systems safe and reliable.'
        },
        {
          img: './icons/lamp.svg',
          title: 'Electrical Installation',
          text: 'Our team ensures your new systems are seamlessly integrated and fully functional. We use top-quality materials and adhere to the latest codes for optimal performance and safety.'
        },
        {
          img: './icons/electrical.svg',
          title: 'Service Maintenance',
          text: 'We provide expert service maintenance to keep your electrical systems running smoothly and safely. Regular check-ups and quick repairs ensure ongoing efficiency and reliability.'
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
.offer-title {
  color: var(--black);
  font-size: 40px;
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
}
.offer-subtitle {
  font-size: 20px;
  margin-top: 35px;
}
.offer-items-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}
@media (max-width: 480px) {
  .offer-container {
    max-width: 430px;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    align-items: center;
  }
  .offer-items-wrapper {
    flex-wrap: wrap;

    display: flex;
    justify-content: center;
  }
  .offer-title {
    font-size: 24px;
  }
  .offer-subtitle {
    font-size: 18px;
    width: 340px;
    margin-top: 15px;
  }
}
</style>