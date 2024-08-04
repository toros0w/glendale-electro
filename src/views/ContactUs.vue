<template>
  <div class="container">
    <TopInfo />
    <NavBar />
    <MapComponent />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue'
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import ContactSection from '@/sections/ContactSection.vue'
import FooterSection from '@/sections/FooterSection.vue'

export default {
  name: 'ContactUs',
  components: {
    MapComponent,
    TopInfo,
    NavBar,
    ContactSection,
    FooterSection
  }
}
</script>