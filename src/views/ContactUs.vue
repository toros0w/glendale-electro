<template>
  <div class="container">
    <TopInfo />
    <NavBar />
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
import SecondHeader from '@/components/SecondHeader.vue'
import ContactSection from '@/sections/ContactSection.vue'
import FooterSection from '@/sections/FooterSection.vue'

export default {
  name: 'ContactUs',
  components: {
    MapComponent,
    TopInfo,
    NavBar,
    SecondHeader,
    ContactSection,
    FooterSection
  },
  data() {
    return {
      headerData: {
        img: './images/contact.jpg',
        title: 'Contact Us'
      }
    }
  }
}
</script>