<template>
  <div class="map-container">
    <iframe
      src="https://my.atlist.com/map/16f5eadf-7339-42d4-a6ed-fccc6439808b/?share=true"
      width="100%"
      height="500px"
      loading="lazy"
      frameborder="0"
      scrolling="no"
      allowfullscreen
      id="atlist-embed"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'MapComponent'
}
</script>

<style scoped>
.map-container {
  max-width: 1300px;
  max-height: 510px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--t-gray);
  margin-top: 63px;
}
</style>
