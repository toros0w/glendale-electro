<template>
  <div class="send-message-container">
    <div class="send-message-wrapper">
      <div class="send-message-title">Send Us a Message</div>
      <div class="input-wrapper">
        <div class="input-title">Full Name</div>
        <input v-model="customer_name" type="text" class="small-input" />
      </div>
      <div class="input-wrapper">
        <div class="input-title">Email Address</div>
        <input v-model="customer_email" type="text" class="small-input" />
      </div>
      <div class="input-wrapper">
        <div class="text-title">Message</div>
        <textarea v-model="customer_message" name="Message" id="" class="main-input"></textarea>
      </div>
      <BtnNoneBg cls="btn-with-bg-send" btnText="Send" @click="sendMessage" />
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import axios from 'axios'
export default {
  name: 'SendMessage',
  components: {
    BtnNoneBg
  },
  data() {
    return {
      customer_name: '',
      customer_email: '',
      customer_message: '',
      formSubmitted: ''
    }
  },
  methods: {
    async sendMessage() {
      this.formSubmitted = true
      try {
        //REAL REQUEST TO DEV -  https://electriciansoflosangeles.com/api/message
        const response = await axios.post('https://electriciansoflosangeles.com/api/message', {
          customer_name: this.customer_name,
          customer_email: this.customer_email,
          customer_message: this.customer_message
        })
        if (response.data.status === true && response.data.data.message !== 'error') {
          location.reload()
        } else {
          console.error('Request failed:', response.data.data.message)
        }
      } catch (error) {
        console.error('Error sending request:', error)
        if (error.response && error.response.data && error.response.data.errors) {
          console.error('Error details:', error.response.data.errors)
        }
      }
    }
  }
}
</script>

<style scoped>
.send-message-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  color: var(--t-gray);
  font-size: 36px;
  margin-bottom: 22px;
}
.input-wrapper {
  margin-top: 19px;
}
.input-title .text-title {
  font-family: var(--roboto-regular);
  color: var(--t-gray);
  font-weight: var(--weight-regular);
}
.small-input {
  width: 618px;
  height: 42px;
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--light-gray);
}
.small-input:focus {
  border: 2px solid var(--t-gray);
}
.main-input {
  width: 618px;
  height: 140px;
  outline: none;
  border: 1px solid var(--light-gray);
}
.main-input:focus {
  border: 2px solid var(--t-gray);
}
.btn-with-bg-send {
  margin-top: 25px;
}
@media (max-width: 700px) {
  .send-message-title {
    font-size: 6vw;
  }
  .send-message-wrapper {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .send-message-container {
    width: 100vw;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .main-input {
    width: 100%;
  }
  .small-input {
    width: 100%;
  }
}
</style>
