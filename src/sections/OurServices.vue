<template>
  <div class="our-services-container">
    <div class="services-title">OUR SERVICES</div>
    <div class="service-item-wrapper">
      <ServicesItem v-for="(item, index) in data" :key="index" :servicesData="item" />
    </div>
  </div>
</template>

<script>
import ServicesItem from '@/components/ServicesItem.vue'
export default {
  name: 'OurServices',
  components: {
    ServicesItem
  },
  data() {
    return {
      data: [
        {
          background: './images/service-1.jpg',
          icon: './icons/residential.svg',
          itemBtnText: 'RESIDENTIAL'
        },
        {
          background: './images/service-2.jpg',
          icon: './icons/commercial.svg',
          itemBtnText: 'COMMERCIAL'
        }
      ]
    }
  }
}
</script>

<style scoped>
.our-services-container {
  text-align: center;
  margin-top: 134px;
}
.services-title {
  color: var(--black);
  font-size: 40px;
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
}
.service-item-wrapper {
  display: flex;
  gap: 236px;
  justify-content: center;
  margin-top: 71px;
}

@media (max-width: 480px) {
  .our-services-container {
    width: 430px;
  }
  .services-title {
    font-size: 24px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .service-item-wrapper {
    gap: 10px;
    display: flex;
    justify-content: center;
    padding: 0 20px 0 0;
  }
}
</style>