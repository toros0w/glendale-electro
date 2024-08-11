<template>
  <div class="blogs-container">
    <TopInfo />
    <NavBar />
    <SecondHeader :headInfo="headerData" />
    <LatestPosts />
    <FooterSection />
  </div>
</template>

<script>
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import SecondHeader from '@/components/SecondHeader.vue'
import LatestPosts from '@/sections/LatestPosts.vue'
import FooterSection from '@/sections/FooterSection.vue'

export default {
  name: 'BlogsView',
  components: {
    TopInfo,
    NavBar,
    SecondHeader,
    LatestPosts,
    FooterSection
  },
  data() {
    return {
      headerData: {
        img: './images/AboutBg.jpg',
        title: 'Blogs'
      }
    }
  }
}
</script>