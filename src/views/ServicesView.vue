<template>
  <div class="container">
    <TopInfo />
    <NavBar class="nav" />
    <SecondHeader :headInfo="headData" />
    <OurServices />
    <OfferSection />
    <AllServices />
    <FooterSection />
  </div>
</template>

<script>
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import SecondHeader from '@/components/SecondHeader.vue'
import OurServices from '@/sections/OurServices.vue'
import FooterSection from '@/sections/FooterSection.vue'
import OfferSection from '@/sections/OfferSection.vue'
import AllServices from '@/sections/AllServices.vue'
export default {
  name: 'IndexView',
  components: {
    TopInfo,
    NavBar,
    SecondHeader,
    FooterSection,
    OurServices,
    OfferSection,
    AllServices
  },
  data() {
    return {
      headData: {
        img: './images/ServicesBg.jpg',
        title: 'Services'
      }
    }
  }
}
</script>

<style scoped>
.container {
  min-width: 1300px;
}
</style>