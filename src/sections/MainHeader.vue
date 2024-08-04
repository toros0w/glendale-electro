<template>
  <div class="header-container">
    <div class="header-wrapper">
      <h1 class="header-title">SAFE AND SECURE</h1>
      <p class="header-text">We are a Service You Can Trust</p>
      <BtnNoneBg cls="btn-none-bg-yellow" btnText="Contact Us Now" />
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
export default {
  name: 'MainHeader',
  components: {
    BtnNoneBg
  }
}
</script>

<style scoped>
.header-container {
  background-image: url('/images/header-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 700px;
}
.header-wrapper {
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  color: var(--white);
  font-family: var(--roboto-bold);
  padding-top: 306px;
  user-select: none;
}
.header-title {
  font-size: 64px;
  font-weight: var(weight-bold);
}
.header-text {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 32px;
  margin-top: 18px;
}
.btn-none-bg-yellow {
  margin-top: 18px;
}
</style>