<template>
  <div class="send-message-container">
    <div class="send-message-wrapper">
      <div class="send-message-title">Send Us a Message</div>
      <div class="input-wrapper">
        <div class="input-title">Full Name</div>
        <input type="text" class="small-input" />
      </div>
      <div class="input-wrapper">
        <div class="input-title">Email Address</div>
        <input type="text" class="small-input" />
      </div>
      <div class="input-wrapper">
        <div class="text-title">Message</div>
        <textarea name="Message" id="" class="main-input"></textarea>
      </div>
      <BtnNoneBg cls="btn-with-bg-send" btnText="Send" />
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
export default {
  name: 'SendMessage',
  components: {
    BtnNoneBg
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
</style>