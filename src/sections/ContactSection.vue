<template>
  <div class="contact-container">
    <div class="contact-wrapper">
      <ContactInfo />
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
.contact-wrapper {
  display: flex;
  justify-content: space-between;
  width: 1300px;
}
</style>