<template>
  <div v-if="isOpen" class="modal-wrapper-with-bg">
    <div class="request-modal">
      <span class="request-close-btn" @click="closeRequestModal">&#10006;</span>
      <div class="request-modal-container">
        <div class="request-title">Schedule Free Estimate with Glendale Electricians</div>
        <div class="request-subtitle">
          Provide your information below, and we'll contact you to schedule your FREE estimate,
          complete with an electrical design consultation and detailed cost and savings analysis!
        </div>
        <div class="request-modal-inputs">
          <input
            v-model="customer_name"
            :class="{ 'request-input': true, 'error-input': formSubmitted && !customer_name }"
            placeholder="First Name"
            type="text"
            required
          />
          <input
            v-model="customer_lastname"
            :class="{ 'request-input': true, 'error-input': formSubmitted && !customer_lastname }"
            placeholder="Last Name"
            type="text"
            required
          />
          <input
            v-model="customer_phone"
            :class="{ 'request-input': true, 'error-input': formSubmitted && !customer_phone }"
            placeholder="Phone"
            type="text"
            required
          />
          <input
            v-model="customer_email"
            :class="{ 'request-input': true, 'error-input': formSubmitted && !customer_email }"
            placeholder="Email"
            type="text"
            required
          />
          <input
            v-model="customer_street"
            :class="{ 'request-input': true, 'error-input': formSubmitted && !customer_street }"
            placeholder="Street Address"
            type="text"
            required
          />
          <input
            v-model="customer_zipcode"
            :class="{ 'request-input': true, 'error-input': formSubmitted && !customer_zipcode }"
            placeholder="Zipcode"
            type="text"
            required
          />
        </div>
        <textarea
          v-model="request_text"
          :class="{ 'request-text': true, 'error-input': formSubmitted && !request_text }"
          placeholder="How can we help?"
          required
        ></textarea>
        <BtnNoneBg
          @click="sendRequest"
          btnText="Schedule Estimate"
          cls="request-btn-with-bg"
          class="req-modal-btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import axios from 'axios'

export default {
  name: 'RequestModal',
  components: {
    BtnNoneBg
  },
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      customer_name: '',
      customer_lastname: '',
      customer_phone: '',
      customer_email: '',
      customer_street: '',
      customer_zipcode: '',
      request_text: '',
      formSubmitted: false // флаг отправки формы
    }
  },
  methods: {
    closeRequestModal() {
      this.$emit('close-modal')
    },
    async sendRequest() {
      this.formSubmitted = true // устанавливаем флаг при отправке формы
      if (this.isFormValid()) {
        try {
          const response = await axios.post('https://electriciansoflosangeles.com/api/request', {
            customer_name: this.customer_name,
            customer_lastname: this.customer_lastname,
            customer_phone: this.customer_phone,
            customer_email: this.customer_email,
            customer_street: this.customer_street,
            customer_zipcode: this.customer_zipcode,
            request_text: this.request_text
          })
          if (response.data.status === true && response.data.data.message !== 'error') {
            this.closeRequestModal()
          } else {
            console.error('Request failed:', response.data.data.message)
          }
        } catch (error) {
          console.error('Error sending request:', error)
          console.error('Error details:', error.response.data.errors)
        }
      }
    },
    isFormValid() {
      // Проверяем, что все поля заполнены
      return (
        this.customer_name &&
        this.customer_lastname &&
        this.customer_phone &&
        this.customer_email &&
        this.customer_street &&
        this.customer_zipcode &&
        this.request_text
      )
    }
  }
}
</script>

<style scoped>
.request-input {
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid var(--light-gray);
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.3);
}
.request-input:focus {
  outline: none;
  border: 1px solid var(--t-gray);
}
.request-input::placeholder {
  /* position: absolute;
  top: 1px;
  left: 1px; */
  font-size: 16px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
}

.error-input {
  border-color: red;
}

.request-text {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  width: 813px;
  height: 160px;
  margin-top: 33px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  border: 1px solid var(--light-gray);
  padding: 3px 3px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.3);
}
.request-text:focus {
  border: 1px solid var(--t-gray);
  outline: none;
}

.error-input {
  border-color: red;
}

.modal-wrapper-with-bg {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

.request-modal-container {
  width: 1300px;
  height: 800px;
  background-color: var(--white);
  border: 1px solid var(--light-gray);
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--white);
  border-radius: 5px;
}

.request-modal {
  position: absolute;
  box-shadow: 0px 0px 55px -16px rgba(0, 0, 0, 1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100 !important;
}

.request-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 30px;
  margin-top: 25px;
}

.request-subtitle {
  color: var(--light-gray);
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 18px;
  width: 620px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
}

.request-modal-inputs {
  display: grid;
  grid-template-columns: 390px 390px;
  grid-template-rows: 50px 50px 50px;
  column-gap: 33px;
  row-gap: 33px;
  justify-content: center;
  margin-top: 50px;
}

.request-text::placeholder {
  /* position: absolute;
  top: 1px;
  left: 3px; */
  font-size: 16px;
}

.request-close-btn {
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  z-index: 100;
}

@media (max-width: 1330px) {
  .request-modal-container {
    width: 90vw;
  }
}
@media (max-width: 900px) {
  .req-modal-btn {
    width: 90%;
    margin-bottom: 30px;
    height: 40px;
  }
  .request-modal-container {
    height: 560px;
  }
  .request-modal-inputs {
    display: grid;
    grid-template-columns: 90%;
    grid-template-rows: 25px 25px 25px 25px 25px 25px;
    row-gap: 14px;
    column-gap: 14px;
  }
  .request-input {
    font-size: 12px;
  }
  .request-input::placeholder {
    font-size: 12px;
  }
  .request-text {
    width: 90%;
    height: 100px;
    font-size: 12px;
  }
  .request-text::placeholder {
    font-size: 12px;
  }
  .request-title {
    font-size: 20px;
  }
  .request-subtitle {
    width: 85%;
    font-size: 12px;
  }
  .request-btn {
    font-size: 12px;
    padding: 10px 20px;
  }
  .request-close-btn {
    position: relative;
    left: 93%;
    top: 30px;
    cursor: pointer;
    z-index: 100;
  }
  .request-modal-inputs {
    margin-top: 10px;
  }
  .request-text {
    margin-top: 15px;
  }
}
</style>
