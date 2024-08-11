<template>
  <div class="container">
    <MobileMenu :isOpen="isMenuOpen" @close="toggleMenu" />
    <TopInfo />
    <NavBar class="nav" @toggle="toggleMenu" />
    <SecondHeader :headInfo="headerData" />
    <AboutContent />
    <AboutOffers />
    <OurTeam />
    <FooterSection />
  </div>
</template>

<script>
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import SecondHeader from '@/components/SecondHeader.vue'
import FooterSection from '@/sections/FooterSection.vue'
import AboutContent from '@/components/AboutContent.vue'
import AboutOffers from '@/sections/AboutOffers.vue'
import OurTeam from '@/sections/OurTeam.vue'
export default {
  name: 'IndexView',
  components: {
    TopInfo,
    NavBar,
    MobileMenu,
    FooterSection,
    SecondHeader,
    AboutContent,
    AboutOffers,
    OurTeam
  },
  data() {
    return {
      headerData: {
        img: './images/AboutBg.jpg',
        title: 'About Us'
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
.container {
  min-width: 1300px;
}
</style>