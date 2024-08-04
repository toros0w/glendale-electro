<template>
  <div class="footer-container">
    <div class="footer-wrapper">
      <div class="footer-info">
        <div class="footer-logo">
          <img src="/images/logo-white.svg" alt="" class="logo-icon" />
          <div class="logo-text">GLENDALE ELECTRICIANS</div>
        </div>
        <div class="info-text">
          With over 8 years experience in the industry, adipiscing elit. Tortor vel posuere
        </div>
        <div class="info-contacts">
          0012, Chiranci Street Kano, Nigeria <br />
          electro@mailservice.com <br />
          +2348100112233
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
          <a href="#" class="explore-item">FAQ</a>
        </div>
      </div>
      <div class="footer-socials">
        <div class="newsletter">
          <div class="newsletter-title">Newsletter</div>
          <div class="newsletter-input-wrapper">
            <input type="text" class="newsletter-input" />
            <button class="newsletter-btn">Subscribe</button>
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
export default {
  name: 'FooterSection'
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
  margin-top: 45px;
  line-height: 30px;
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
</style>