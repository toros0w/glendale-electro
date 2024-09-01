<template>
  <div class="blogs-container">
    <MobileMenu :isOpen="isMenuOpen" @close="toggleMenu" />
    <TopInfo />
    <NavBar @toggle="toggleMenu" />
    <SecondHeader :headInfo="headerData" />
    <div class="content">
      <LatestPosts />
    </div>
    <FooterSection />
  </div>
</template>

<script>
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import SecondHeader from '@/components/SecondHeader.vue'
import LatestPosts from '@/sections/LatestPosts.vue'
import FooterSection from '@/sections/FooterSection.vue'

export default {
  name: 'BlogsView',
  components: {
    TopInfo,
    NavBar,
    MobileMenu,
    SecondHeader,
    LatestPosts,
    FooterSection
  },
  data() {
    return {
      headerData: {
        img: './images/AboutBg.jpg',
        title: 'Blogs'
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
.blogs-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Устанавливает минимальную высоту на весь экран */
}

.content {
  flex-grow: 1; /* Заставляет контент занимать всё оставшееся пространство */
}
</style>
