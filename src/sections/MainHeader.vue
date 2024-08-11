<template>
  <div class="header-container">
    <div class="header-wrapper">
      <h1 class="header-title mobile">SAFE AND SECURE</h1>
      <p class="header-text mobile">We are a Service You Can Trust</p>
      <BtnNoneBg cls="btn-none-bg-yellow" btnText="Contact Us Now" />
      <BtnNoneBg cls="btn-none-bg-yellow-mobile" btnText="Request a Service" />
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
.btn-none-bg-yellow-mobile {
  display: none;
}
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
@media (max-width: 480px) {
  .btn-none-bg-yellow-mobile {
    display: flex;
    position: absolute;
    top: 300px;
  }
  .header-wrapper {
    width: 480px;
  }
  .header-container {
    width: 480px;
    background-size: contain;
    height: 455px;
    background-image: url('/images/Mobile-Bg.jpg');
  }
  .btn-none-bg-yellow {
    visibility: hidden;
  }
  .header-title.mobile {
    font-size: 28px;
    position: absolute;
    top: 240px;
    left: 15px;
  }
  .header-text.mobile {
    font-size: 16px;
    position: absolute;
    top: 255px;
    left: 15px;
  }
}
</style>