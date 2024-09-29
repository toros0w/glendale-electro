<template>
  <div :class="['mobile-menu-wrapper', { open: isOpen }]">
    <button class="close-button" @click="closeMenu">×</button>
    <div class="mobile-menu-items">
      <router-link class="router" to="/" @click="closeMenu">
        <div class="mobile-menu-item">Home</div>
      </router-link>
      <router-link class="router" to="/services" @click="closeMenu">
        <div class="mobile-menu-item">Services</div>
      </router-link>
      <router-link class="router" to="/blogs" @click="closeMenu">
        <div class="mobile-menu-item">Blogs</div>
      </router-link>
      <router-link class="router" to="/about" @click="closeMenu">
        <div class="mobile-menu-item">About</div>
      </router-link>
      <router-link class="router" to="/faq" @click="closeMenu">
        <div class="mobile-menu-item">FAQ</div>
      </router-link>
      <router-link class="router" to="/contact" @click="closeMenu">
        <div class="mobile-menu-item">Contact Us</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeMenu() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.router {
  text-decoration: none;
}
.mobile-menu-wrapper {
  width: 70vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -70vw;
  background-color: var(--t-gray);
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--white);
}

.mobile-menu-wrapper.open {
  transform: translateX(70vw);
}

.close-button {
  position: absolute;
  right: 1px;
  top: 1px;
  background: none;
  border: none;
  color: var(--white);
  font-size: 30px;
  cursor: pointer;
}

.mobile-menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  text-align: center;
  justify-content: center;
}

.mobile-menu-item {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 18px;
  text-transform: uppercase;
  color: var(--white);
  background-color: var(--t-gray);
  transition: background-color 0.3s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--white);
}
</style>
