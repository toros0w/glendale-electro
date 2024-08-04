<template>
  <div class="content-container">
    <div class="content-wrapper">
      <img :src="content.img" alt="" class="content-img" />
      <div class="content">
        <div class="content-title">{{ content.title }}</div>
        <div class="content-text">{{ content.text }}</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AboutContent',
  data() {
    return {
      content: {
        img: './images/content.jpg',
        title: 'Welcome to Electro',
        text: 'With over 8 years experience in the industry, adipiscing elit. Tortor vel posuere vitae enim, molestie. Diam consequat ac velit ac, morbi erat. Sed ipsum lorem feugiat iaculis sollicitudin molt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuereWith over 8 years experience in the industry, adipiscing elit. Tortor vel posuere vitae enim, molestie. Diam consequat ac velit ac, morbi erat. Sed ipsum lorem feugiat iaculis sollicitudin molt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuereWith over 8 years experience in the industry, adipiscing elit. Tortor vel posuere vitae enim, molestie. Diam consequat ac velit ac, morbi erat. Sed ipsum lorem feugiat iaculis sollicitudin molt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuereWith over 8 years experience in the industry, adipiscing elit. Tortor vel posuere vitae enim, molestie. '
      }
    }
  }
}
</script>

<style scoped>
.content-container {
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 86px;
}
.content-wrapper {
  display: flex;
  width: 1300px;
  align-items: center;
  justify-content: space-between;
}
.content {
  width: 640px;
  height: 520px;
}
.content-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 40px;
}
.content-text {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  color: var(--t-gray);
  font-size: 18px;
  line-height: 30px;
  margin-top: 32px;
}
</style>