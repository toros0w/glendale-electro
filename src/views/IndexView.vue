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
import axios from 'axios'

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
  mounted() {
    this.checkAuth()
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    checkAuth() {
      axios
        .get('https://electriciansoflosangeles.com/api/auth/check')
        .then((response) => {
          if (response.data.status === 'success') {
            this.isAuthorized = true
          } else {
            this.isAuthorized = false
          }
        })
        .catch((error) => {
          console.error('Error checking authorization:', error)
        })
    }
  }
}
</script>

<style scoped>
.container {
  min-width: 1300px;
  transition: filter 0.3s ease-in-out;
}
.mobile-menu-wrapper.open ~ .container {
  filter: none;
}
</style>
