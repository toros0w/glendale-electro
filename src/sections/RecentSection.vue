<template>
  <div class="recent-container">
    <div class="recent-title">Recent Projects</div>
    <div class="recent-items-wrapper">
      <RecentItem v-for="(item, index) in recentImages" :key="index" :recentData="item" />
    </div>
  </div>
</template>

<script>
import RecentItem from '@/components/RecentItem.vue'
export default {
  name: 'RecentSection',
  components: {
    RecentItem
  },
  data() {
    return {
      recentImages: [
        {
          id: '1',
          img: './images/recent-1.jpg',
          text: ''
        },
        {
          id: '2',
          img: './images/recent-2.jpg',
          text: ''
        },
        {
          id: '3',
          img: './images/recent-3.jpg',
          text: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.recent-container {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
.recent-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  color: var(--black);
  font-size: 40px;
  text-transform: uppercase;
}
.recent-items-wrapper {
  display: flex;
  justify-content: center;
  gap: 84px;
  margin-top: 40px;
}

@media (max-width: 480px) {
  .recent-container {
    display: none;
  }
}
</style>