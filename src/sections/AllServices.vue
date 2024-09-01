<template>
  <div class="all-services-container">
    <div class="all-services-title">ALL SERVICES</div>
    <div class="all-services-subtitle">Here a a detailed list of all services we offer</div>
    <div class="services-wrapper">
      <div class="residental-wrapper">
        <div class="title">Residential Buildings</div>
        <div class="items">
          <div v-for="(item, index) in residental" :key="index" class="item">{{ item }}</div>
        </div>
      </div>
      <div class="commercial-wrapper">
        <div class="title">Commercial Buildings</div>
        <div class="items">
          <div v-for="(item, index) in commercial" :key="index" class="item">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllServices',
  data() {
    return {
      residental: [
        'Panel Upgrades',
        'Breakers and Fuses',
        'Code Corrections',
        'Outlets, Circuits and Rewiring',
        'Indoor and Outdoor Lighting',
        'Data/Communication Lines',
        'Landscape Lighting',
        'Exhaust Fans',
        'Smoke Detectors',
        'Home Theater Installation',
        'And more...'
      ],
      commercial: [
        'Telecom Installation and Repair',
        'Hosted PBX Solutions',
        'Outdoor/Parking Lot Lighting',
        'Outlets, Circuits and Rewiring',
        'HID Lighting and Control',
        'Lighting Design',
        'Motors and Transformers',
        'Isolated Computer Circuits',
        'Data/Communications Cabling',
        'Ballast/Lamp Replacing',
        'And more...'
      ]
    }
  }
}
</script>

<style scoped>
.all-services-container {
  background-image: url('/images/all-services.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 18px;
  height: 574px;
  align-items: center;
  text-align: center;
}
.all-services-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 40px;
  padding-top: 35px;
}
.all-services-subtitle {
  margin-top: 12px;
}
.services-wrapper {
  display: flex;
  justify-content: center;
  gap: 220px;
  margin-top: 12px;
}
.title {
  font-size: 24px;
  text-align: left;
  margin-top: 20px;
}
.items {
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
}
.item {
  margin-top: 10px;
}
@media (max-width: 480px) {
  .all-services-container {
    width: 430px;
    height: 480px;
    margin-top: 100px;
  }
  .services-wrapper {
    gap: 10px;
  }
  .all-services-title {
    font-size: 24px;
  }
  .all-services-subtitle {
    font-size: 20px;
  }
  .title {
    font-size: 16px;
  }
  .items {
    font-size: 12px;
  }
}
</style>

