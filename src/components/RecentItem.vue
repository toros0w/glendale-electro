<template>
  <div class="recent-item">
    <img :src="recentData.img" alt="" class="recent-img" />
    <div class="recent-hover-text">Read more...</div>
  </div>
</template>

<script>
export default {
  name: 'RecentItem',
  props: {
    recentData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.recent-item {
  position: relative;
  width: 361px;
  height: 271px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 3px 4px 29px -6px rgba(0, 0, 0, 0.53);
}

.recent-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recent-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease;
}

.recent-hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  font-size: 18px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.recent-item:hover::after {
  background-color: rgba(0, 0, 0, 0.5);
}

.recent-item:hover .recent-hover-text {
  opacity: 1;
}
</style>