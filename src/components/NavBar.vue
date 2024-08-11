<template>
  <div class="navbar-wrapper">
    <div class="navbar-container">
      <div class="navbar-items">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/services" class="navbar-item">Services</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact Us</router-link>
      </div>
      <BurgerComponent class="burger" />
      <BtnNoneBg class="btn-none-bg-mobile" btnText="Request A Service" />
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import BurgerComponent from '@/components/BurgerComponent.vue'

export default {
  name: 'NavBar',
  components: {
    BurgerComponent,
    BtnNoneBg
  }
}
</script>

<style scoped>
.burger {
  visibility: hidden;
}
.btn-none-bg-mobile {
  visibility: hidden;
}
.navbar-wrapper {
  display: flex;
  width: 100vw;
  background: var(--main-gradient);
  height: 48px;
  text-align: center;
  justify-content: space-between;
  color: var(--white);
}
.navbar-container {
  width: 1300px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.navbar-items {
  display: flex;
  text-decoration: none;
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
.search-btn {
  width: 22px;
  height: 22px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0, 0.19, 0.05, 0.46);
}
.search-btn:hover {
  transform: scale(1.2);
}

@media (max-width: 480px) {
  .navbar-items {
    visibility: hidden;
  }
  .burger {
    display: flex;
    visibility: inherit;
  }
  .btn-none-bg-mobile {
    visibility: inherit;
  }
}
@media (max-width: 1300px) {
  .navbar-container {
    width: 100%;
  }
}
</style>