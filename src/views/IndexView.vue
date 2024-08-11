<template>
  <div class="container">
    <MobileMenu :isOpen="isMenuOpen" @close="toggleMenu" />
    <TopInfo />
    <NavBar class="nav" @toggle="toggleMenu" />
    <MainHeader />
    <PostPreviewSection />
    <OurServices />
    <OfferSection />
    <RecentSection />
    <ReviewSection />
    <FooterSection />
  </div>
</template>

<script>
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import MainHeader from '@/sections/MainHeader.vue'
import PostPreviewSection from '@/sections/PostPreviewSection.vue'
import OurServices from '@/sections/OurServices.vue'
import OfferSection from '@/sections/OfferSection.vue'
import RecentSection from '@/sections/RecentSection.vue'
import ReviewSection from '@/sections/ReviewSection.vue'
import FooterSection from '@/sections/FooterSection.vue'

export default {
  name: 'IndexView',
  components: {
    TopInfo,
    NavBar,
    MobileMenu,
    MainHeader,
    PostPreviewSection,
    OurServices,
    OfferSection,
    RecentSection,
    ReviewSection,
    FooterSection
  },
  data() {
    return {
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
  position: relative;
  transition: filter 0.3s ease-in-out;
}
.mobile-menu-wrapper.open ~ .container {
  filter: none;
}
</style>
