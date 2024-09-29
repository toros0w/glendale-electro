<template>
  <div class="faq-contacts-container">
    <div class="faq-left">
      <div class="left-title">Neew assistance?</div>
      <hr class="line" />
      <div class="left-content">
        <img src="/public/icons/faq-phone.svg" alt="" class="phone-icon" />
        <div class="phone-number">(818) 818-8181</div>
      </div>
      <div class="left-content">
        <img src="/public/icons/faq-clock.svg" alt="" class="time-icon" />
        <div class="time-content">24/7</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqContacts'
}
</script>

<style scoped>
.faq-contacts-container {
  max-width: 300px;
}
.left-title {
  color: var(--light-gray);
  font-family: var(--roboto-light);
  font-size: 16px;
  padding-bottom: 15px;
}
.line {
  width: 300px;
  margin-bottom: 25px;
}
.left-content {
  display: flex;
  text-align: center;
  align-items: center;
  gap: 10px;
  justify-content: start;
  margin-bottom: 10px;
}
.left-content {
  font-size: 20px;
}
.left-content img {
  width: 23px;
  height: 23px;
}
</style>