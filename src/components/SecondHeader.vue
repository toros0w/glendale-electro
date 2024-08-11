<template>
  <div class="second-header-container">
    <div class="second-header-wrapper">
      <img :src="headInfo.img" alt="" class="second-head-img" />
      <h1 class="second-head-title">{{ headInfo.title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondHeader',
  props: {
    headInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.second-header-container {
  width: 100vw;
  height: 183px;
}

.second-header-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.second-head-img {
  width: 100vw;
  height: 100%;
  object-fit: cover;
  margin-top: auto;
}

.second-head-title {
  position: absolute;
  color: var(--white);
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 64px;
  text-transform: uppercase;
}
@media screen {
  .second-header-container {
    width: 100vw;
    height: auto;
  }
  .second-head-title {
    font-size: 4vw;
  }
}
</style>
