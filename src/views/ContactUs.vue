<template>
  <div class="container">
    <MobileMenu :isOpen="isMenuOpen" @close="toggleMenu" />
    <TopInfo />
    <NavBar @toggle="toggleMenu" />
    <SecondHeader :headInfo="headerData" />
    <MapComponent />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue'
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import SecondHeader from '@/components/SecondHeader.vue'
import ContactSection from '@/sections/ContactSection.vue'
import FooterSection from '@/sections/FooterSection.vue'

export default {
  name: 'ContactUs',
  components: {
    MapComponent,
    TopInfo,
    NavBar,
    MobileMenu,
    SecondHeader,
    ContactSection,
    FooterSection
  },
  data() {
    return {
      headerData: {
        img: './images/contact.jpg',
        title: 'Contact Us'
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