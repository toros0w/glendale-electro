<template>
  <div class="container">
    <MobileMenu :isOpen="isMenuOpen" @close="toggleMenu" />
    <TopInfo />
    <NavBar class="nav" @toggle="toggleMenu" />
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
import MobileMenu from '@/components/MobileMenu.vue'
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
    MobileMenu,
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
      },
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
</style>