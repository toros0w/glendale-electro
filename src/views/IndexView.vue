<template>
  <div class="container">
    <TopInfo />
    <NavBar class="nav" />
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
    MainHeader,
    PostPreviewSection,
    OurServices,
    OfferSection,
    RecentSection,
    ReviewSection,
    FooterSection
  }
}
</script>

<style scoped>
.container {
  min-width: 1300px;
}
</style>