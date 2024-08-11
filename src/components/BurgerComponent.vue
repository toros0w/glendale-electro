<template>
  <div id="menuToggle" @click="toggleMenu">
    <input type="checkbox" :checked="isOpen" @change="toggleMenu" />
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'BurgerComponent',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>
#menuToggle {
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 32px;
  cursor: pointer;
  display: none;
}

#menuToggle input {
  display: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  background: #cdcdcd;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

#menuToggle input:checked ~ span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

#menuToggle input:checked ~ span:nth-child(2) {
  opacity: 0;
}

#menuToggle input:checked ~ span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 480px) {
  #menuToggle {
    display: flex;
  }
}
</style>
