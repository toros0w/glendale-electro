<template>
  <div class="contact-container">
    <div class="contact-wrapper">
      <ContactInfo class="contact-info-mobile" />
      <SendMessage />
    </div>
  </div>
</template>

.<script>
import ContactInfo from '@/components/ContactInfo.vue'
import SendMessage from '@/components/SendMessage.vue'

export default {
  name: 'ContactSection',
  components: {
    ContactInfo,
    SendMessage
  }
}
</script>

<style scoped>
.contact-container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
@media screen {
  .contact-container {
    width: 90vw;
    margin: 60px auto;
  }
}
.contact-wrapper {
  display: flex;
  justify-content: space-between;
  width: 1300px;
}
@media (max-width: 480px) {
  .contact-info-mobile {
    display: none;
  }
  .contact-wrapper {
    justify-content: center;
    margin: 30px;
  }
}
@media (max-width: 1080px) {
  .contact-info-mobile {
    display: none;
  }
  .contact-wrapper {
    justify-content: center;
  }
}
@media (max-width: 700px) {
  .contact-wrapper {
    width: 100vw;
  }
}
</style>
