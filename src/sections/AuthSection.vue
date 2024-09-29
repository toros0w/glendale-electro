<template>
  <div class="auth-container">
    <div class="auth-wrapper">
      <div class="auth-title">Login</div>
      <input v-model="username" placeholder="Username" type="text" class="input" />
      <input v-model="password" placeholder="Password" type="password" class="input" />
      <BtnNoneBg cls="btn-with-bg mobile" btnText="Login" class="auth-btn" @click="login" />
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import axios from 'axios'

export default {
  name: 'AuthSection',
  components: {
    BtnNoneBg
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`https://electriciansoflosangeles.com/api/auth`, {
          username: this.username, // исправлено
          password: this.password // исправлено
        })
        const result = await response
        console.log('Section created:', result)
        setTimeout(() => {
          this.$router.push('/')
        }, 3000)
      } catch (error) {
        console.error('Error creating section:', error)
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
.auth-wrapper {
  width: 400px;
  min-height: 400px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  /* background-color: var(--light-gray); */
  /* border-left: 1px solid var(--light-gray);
  border-top: 1px solid var(--light-gray); */
  margin-bottom: 50px;
}
.auth-title {
  text-transform: uppercase;
  font-size: 36px;
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  margin-top: 30px;
  margin-bottom: 30px;
}
.input {
  width: 280px;
  height: 35px;
  font-size: 18px;
  margin-top: 30px;
}
.auth-btn {
  margin-top: 90px;
  font-size: 18px;
  width: 180px;
  height: 40px;
}
</style>