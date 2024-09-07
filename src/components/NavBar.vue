<template>
  <RequestModal
    :isOpen="isRequestModalOpen"
    @close-modal="closeRequestModal"
    class="request-modal"
  />
  <div class="navbar-wrapper">
    <div class="navbar-container">
      <div class="navbar-items">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/services" class="navbar-item">Services</router-link>
        <router-link to="/blogs" class="navbar-item">Blogs</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact Us</router-link>
      </div>
      <BurgerComponent class="burger" @toggle="toggleMenu" />
      <div class="info-section">
        <img src="/icons/mobile-white.svg" alt="" class="mobile-icon" />
        <div class="contact-wrapper">
          <a class="contact-phone" href="tel:+2348100112233">+1 (414) 929-0919</a>
          <div class="contact-text">Call Us Anytime</div>
        </div>
      </div>
      <BtnNoneBg class="btn-none-bg-mobile" btnText="Request A Service" @click="openRequestModal" />
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import BurgerComponent from '@/components/BurgerComponent.vue'
import RequestModal from '@/components/RequestModal.vue'

export default {
  name: 'NavBar',
  components: {
    BurgerComponent,
    BtnNoneBg,
    RequestModal
  },
  data() {
    return {
      isRequestModalOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle')
    },
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
.navbar-wrapper {
  display: flex;
  width: 100vw;
  background: var(--main-gradient);
  height: 48px;
  justify-content: space-between;
  color: var(--white);
}
.info-section {
  display: none;
}

.navbar-container {
  width: 1300px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-items {
  display: flex;
  align-items: center;
  gap: 61px;
}

.navbar-item {
  text-decoration: none;
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  letter-spacing: 0.9px;
  font-size: 14px;
  color: var(--white);
  text-transform: uppercase;
  transition: color 0.3s cubic-bezier(0, 0.19, 0.05, 0.46);
}

.navbar-item:hover {
  color: var(--light-gray);
}

.burger {
  margin-left: 15px;
  display: none;
}

.btn-none-bg-mobile {
  display: none;
}

@media (max-width: 480px) {
  .info-section {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: left;
    margin-right: 180px;
    font-family: var(--roboto-regular);
    font-weight: var(--weight-regular);
    gap: 5px;
  }
  .mobile-icon {
    width: 20px;
    height: 30px;
  }
  .contact-text {
    color: var(--light-gray);
    font-size: 8px;
    text-align: right;
  }
  .contact-phone {
    color: var(--white);
    text-decoration: none;
    font-size: 12px;
  }
}
@media (max-width: 600px) {
  .navbar-items {
    display: none;
  }
  .burger,
  .btn-none-bg-mobile {
    display: block;
  }
  .info-section {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: left;
    margin-right: 180px;
    font-family: var(--roboto-regular);
    font-weight: var(--weight-regular);
    gap: 5px;
  }
  .mobile-icon {
    width: 20px;
    height: 30px;
  }
  .contact-text {
    color: var(--light-gray);
    font-size: 8px;
    text-align: right;
  }
  .contact-phone {
    color: var(--white);
    text-decoration: none;
    font-size: 12px;
  }
}

@media (max-width: 1300px) {
  .navbar-container {
    width: 100%;
  }
}
@media (max-width: 1400px) {
  .navbar-container {
    padding: 0 20px 0 20px;
  }
}

.request-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
