<template>
  <RequestModal
    :isOpen="isRequestModalOpen"
    @close-modal="closeRequestModal"
    class="request-modal"
  />
  <div class="header-container">
    <div class="header-wrapper">
      <h1 class="header-title mobile">SAFE AND SECURE</h1>
      <p class="header-text mobile">We are a Service You Can Trust</p>
      <router-link class="contact-route" to="/contact">
        <BtnNoneBg cls="btn-none-bg-yellow" btnText="Contact Us Now" />
      </router-link>
      <BtnNoneBg
        cls="btn-none-bg-yellow-mobile"
        btnText="Request a Service"
        @click="openRequestModal"
      />
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import RequestModal from '@/components/RequestModal.vue'

export default {
  name: 'MainHeader',
  components: {
    BtnNoneBg,
    RequestModal
  },
  data() {
    return {
      isRequestModalOpen: false
    }
  },
  methods: {
    openRequestModal() {
      this.isRequestModalOpen = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    },
    closeRequestModal() {
      this.isRequestModalOpen = false
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }
}
</script>

<style scoped>
.contact-route {
  text-decoration: none;
}
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

.request-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>