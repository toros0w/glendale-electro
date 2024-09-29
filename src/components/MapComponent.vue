<template>
  <div class="map-container">
    <iframe
      width="100%"
      height="500px"
      frameborder="0"
      style="border: 0"
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCwNWzGM5rwcuYtKxzVK79h5a9SwxOCBzg&q=213+North+Glendale+Ave,+Glendale,+CA"
      allowfullscreen
    >
    </iframe>
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
@media screen {
  .map-container {
    width: 90vw;
  }
}
</style>
