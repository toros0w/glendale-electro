<template>
  <div class="footer-container">
    <div class="footer-wrapper">
      <div class="footer-info">
        <div class="footer-logo">
          <img src="/images/logo-white.svg" alt="" class="logo-icon" />
          <div class="logo-text">Electricians of Los Angeles</div>
        </div>
        <div class="info-text">
          With 20 years of experience, we deliver trusted electrical solutions. Let our expertise
          light the way for you.
        </div>
        <div class="info-contacts">
          213 North Glendale Ave. Glendale, CA <br />
          info@electriciansoflosangeles.com <br />
          +1 (747) 218-3267
        </div>
        <div class="social-items mobile">
          <img src="/icons/facebook.svg" alt="" class="social-item" />
          <img src="/icons/twitter.svg" alt="" class="social-item" />
          <img src="/icons/instagram.svg" alt="" class="social-item" />
          <img src="/icons/google.svg" alt="" class="social-item" />
        </div>
      </div>
      <div class="footer-explore">
        <div class="explore-title">Explore</div>
        <div class="explore-items">
          <a href="#" class="explore-item">Home</a>
          <a href="#" class="explore-item">Services</a>
          <a href="#" class="explore-item">Contact us</a>
          <a href="#" class="explore-item">About us</a>
          <a href="#" class="explore-item">Projects</a>
          <a href="#" class="explore-item">Testimonial</a>
          <router-link to="/faq" class="explore-item">FAQ</router-link>
        </div>
      </div>
      <div class="footer-socials">
        <div class="newsletter">
          <div class="newsletter-title">Newsletter</div>
          <div class="newsletter-input-wrapper">
            <input v-model="email" type="text" class="newsletter-input" />
            <button @click="newsLetter" class="newsletter-btn">Subscribe</button>
          </div>
        </div>
        <div class="socials">
          <div class="title">Socials</div>
          <div class="social-items">
            <img src="/icons/facebook.svg" alt="" class="social-item" />
            <img src="/icons/twitter.svg" alt="" class="social-item" />
            <img src="/icons/instagram.svg" alt="" class="social-item" />
            <img src="/icons/google.svg" alt="" class="social-item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FooterSection',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    async newsLetter() {
      try {
        // https://electriciansoflosangeles.com
        const response = await axios.post('https://electriciansoflosangeles.com/api/newsletter', {
          email: this.email
        })
        if (response.data.status === true && response.data.data.message !== 'error') {
          location.reload()
        } else {
          console.error('Request failed:', response.data.data.message)
        }
      } catch (error) {
        console.error('Error sending request:', error)
        console.error('Error details:', error.response.data.errors)
      }
    }
  }
}
</script>

<style scoped>
.footer-container {
  margin-top: 52px;
  width: 100vw;
  height: 327px;
  background-image: url('/images/Footer.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
}
.footer-wrapper {
  display: flex;
  width: 1300px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}
.footer-info {
}
.footer-logo {
  display: flex;
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 36px;
  text-align: center;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
}
.info-text {
  width: 380px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 18px;
  margin-left: 10px;
  margin-top: 30px;
  line-height: 30px;
}
.info-contacts {
  width: 380px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 18px;
  margin-left: 10px;
  margin-top: 40px;
  line-height: 30px;
}
.social-items.mobile {
  display: none;
  margin-top: 20px;
  margin-left: 10px;
}
.footer-explore {
  margin-top: 32px;
}
.explore-title {
  margin-bottom: 25px;
  font-family: var(--roboto-medium);
  font-weight: var(--weight-medium);
  font-size: 24px;
}
.explore-items {
  display: flex;
  flex-direction: column;
}
.explore-item {
  text-decoration: none;
  color: #fff;
  margin-left: 20px;
  margin-top: 10px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 18px;
  transition: color 0.3s ease;
}
.explore-item:hover {
  color: var(--light-gray);
}
.footer-socials {
  padding-left: 280px;
}
.newsletter-input-wrapper {
  position: relative;
  width: 100%;
  width: 359px;
}
.newsletter-title {
  margin-bottom: 15px;
  font-family: var(--roboto-medium);
  font-weight: var(--weight-medium);
  font-size: 24px;
}
.newsletter-input {
  width: 100%;
  padding: 10px 50px 10px 10px;
  border-radius: 7px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.newsletter-btn {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 122px;
  background-color: var(--main-blue);
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.newsletter-btn:hover {
  background-color: var(--dark-blue);
  color: var(--white);
  border: 1px solid white;
}
.footer-socials {
  margin-top: 32px;
}
.social-items {
  display: flex;
  gap: 17px;
}
.social-item {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.social-item:hover {
  transform: scale(1.1);
}
.title {
  font-family: var(--roboto-medium);
  font-weight: var(--weight-medium);
  font-size: 24px;
  margin-top: 45px;
  margin-bottom: 11px;
}
@media (max-width: 480px) {
  .footer-explore {
    display: none;
  }
  .footer-socials {
    display: none;
  }
  .footer-container {
    max-width: 430px;
    min-height: 380px;
  }
  .logo-icon {
    margin-left: 10px;
  }
  .footer-info {
    margin-left: 30px;
  }
  .logo-text {
    font-size: 18px;
  }
  .info-text {
    font-size: 16px;
    padding: 0 40px 0 0;
  }
  .info-contacts {
    font-size: 16px;
  }
  .social-items.mobile {
    display: flex;
  }
}
</style>