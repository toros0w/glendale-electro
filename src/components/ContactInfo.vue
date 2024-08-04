<template>
  <div class="contact-info-container">
    <div class="info-title">Contact Info</div>
    <div class="info-text">
      With over 8 years experience in the industry, adipiscing elit. Tortor vel posuere
    </div>
    <div class="info-address">
      0012, Chiranci Street Kano, Nigeria <br />
      electro@mailservice.com <br />
      +2348100112233
    </div>
    <div class="social-items">
      <img src="/icons/facebook-black.svg" alt="" class="social-item" />
      <img src="/icons/twitter-black.svg" alt="" class="social-item" />
      <img src="/icons/instagram-black.svg" alt="" class="social-item" />
      <img src="/icons/google-black.svg" alt="" class="social-item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo'
}
</script>

<style scoped>
.contact-info-container {
  width: 381px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  color: var(--t-gray);
  font-size: 20px;
}
.info-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 36px;
}
.info-text {
  margin-top: 42px;
}
.info-address {
  margin-top: 42px;
}
.social-items {
  display: flex;
  gap: 17px;
  margin-top: 60px;
}
.social-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.social-item:hover {
  transform: scale(1.1);
}
</style>
