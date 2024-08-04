<template>
  <div :class="cls" :style="styles">
    {{ btnText }}
  </div>
</template>

<script>
export default {
  name: 'BtnNoneBg',
  props: {
    btnText: String,
    styles: Object,
    cls: {
      type: String,
      required: true,
      default: 'btn-none-bg'
    }
  }
}
</script>

<style scoped>
.btn-none-bg {
  border: 2px solid var(--main-blue);
  color: var(--main-blue);
  font-family: var(--roboto-medium);
  font-weight: var(--weight-medium);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 209px;
  height: 47px;
  transition: background-color 0.5s cubic-bezier(0, 0.19, 0.05, 0.46);
  cursor: pointer;
}
.btn-none-bg:hover {
  background-color: var(--main-blue);
  color: var(--white);
}

.btn-none-bg-yellow {
  border: 2px solid var(--yellow);
  color: var(--yellow);
  font-family: var(--roboto-medium);
  font-weight: var(--weight-medium);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 209px;
  height: 47px;
  transition: background-color 0.5s cubic-bezier(0, 0.19, 0.05, 0.46);
  cursor: pointer;
}
.btn-none-bg-yellow:hover {
  background-color: var(--yellow-rgba);
  color: var(--white);
}
.btn-with-bg {
  border: 2px solid var(--main-blue);
  color: var(--white);
  background-color: var(--main-blue);
  font-family: var(--roboto-medium);
  font-weight: var(--weight-medium);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 209px;
  height: 47px;
  transition: background-color 0.5s cubic-bezier(0, 0.19, 0.05, 0.46);
  cursor: pointer;
}
.btn-with-bg:hover {
  background-color: var(--white);
  color: var(--main-blue);
}
.btn-with-bg-send {
  border: 2px solid var(--main-blue);
  color: var(--white);
  background-color: var(--main-blue);
  font-family: var(--roboto-medium);
  font-weight: var(--weight-medium);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 180px;
  height: 50px;
  transition: background-color 0.5s cubic-bezier(0, 0.19, 0.05, 0.46);
  cursor: pointer;
}
.btn-with-bg-send:hover {
  background-color: var(--white);
  color: var(--main-blue);
}
</style>