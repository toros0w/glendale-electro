<template>
  <RequestModal
    :isOpen="isRequestModalOpen"
    @close-modal="closeRequestModal"
    class="request-modal"
  />
  <div class="top-info-wrapper">
    <div class="top-info-container">
      <div class="top-logo">
        <img src="/images/electro-logo.svg" alt="logo" class="logo-img" />
        <!-- <div class="logo-text">GLENDALE ELECTRICIANS</div> -->
        <router-link to="/" class="logo-text">Electricians of Los Angeles</router-link>
      </div>
      <div class="top-info-right">
        <div class="info-section">
          <img src="/icons/geo.svg" alt="location" class="gps-icon" />
          <div class="address-wrapper">
            <div class="top-address">213 North Glendale Ave</div>
            <div class="top-country">Glendale, CA</div>
          </div>
        </div>
        <div class="info-section">
          <img src="/icons/cil_mobile.svg" alt="" class="mobile-icon" />
          <div class="contact-wrapper">
            <div class="contact-text">Call Us Anytime</div>
            <a class="contact-phone" href="tel:+17472183267">+1 (747) 218-3267</a>
          </div>
        </div>
        <BtnNoneBg cls="btn-none-bg" btnText="Request A Service" @click="openRequestModal" />
        <a class="call-us-href" href="tel:+17472183267">
          <BtnNoneBg cls="btn-none-bg-mobile" btnText="Call Us Now" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import RequestModal from '@/components/RequestModal.vue'
export default {
  name: 'TopInfo.vue',
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
.btn-none-bg-mobile {
  display: none;
}
.call-us-href {
  text-decoration: none;
}
.top-info-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 88px;
  align-items: center;
  text-align: center;
}
.top-info-container {
  width: 1300px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.top-logo {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.logo-text {
  background: var(--main-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: var(--roboto-medium);
  font-weight: var(--weight-medium);
  font-size: 28px;
  text-transform: uppercase;
}
.top-info-right {
  display: flex;
  gap: 45px;
  align-items: center;
  text-align: left;
}
.info-section {
  display: flex;
  gap: 12px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  align-items: center;
  justify-content: left;
}
.top-address {
  color: var(--light-gray);
  font-size: 18px;
}
.top-country {
  color: var(--black);
  font-size: 16px;
}
.gps-icon {
  width: 27px;
  height: 38px;
}
.mobile-icon {
  width: 39px;
  height: 44px;
}
.contact-text {
  color: var(--light-gray);
}
.contact-phone {
  color: var(--main-blue);
  text-decoration: none;
}
@media (max-width: 480px) {
  .top-info-container {
    width: 430px;
    display: flex;
    justify-content: center;
  }
  .top-info-wrapper {
    width: 430px;
    height: 65px;
    align-items: center;
    text-align: center;
  }
  .top-logo {
    align-items: center;
  }
  .logo-text {
    font-size: 16px;
  }
  .address-wrapper {
    display: none;
  }
  .contact-wrapper {
    display: none;
  }
  .gps-icon {
    display: none;
  }

  .mobile-icon {
    display: none;
  }
  .top-info-right {
    gap: 10px;
  }
  .btn-none-bg {
    display: none;
  }
  .btn-none-bg-mobile {
    display: none;
    width: 160px;
    height: 30px;
    font-size: 14px;
  }
}

.request-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>