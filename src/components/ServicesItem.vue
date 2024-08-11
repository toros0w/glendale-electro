<template>
  <div class="service-item">
    <img :src="servicesData.background" alt="" class="item-img" />
    <div class="item-btn">
      <img :src="servicesData.icon" alt="icon" class="item-btn-icon" />
      {{ servicesData.itemBtnText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesItem',
  props: {
    servicesData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.service-item {
  width: 383px;
  height: 276px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 3px 4px 29px -6px rgba(0, 0, 0, 0.53);
}

.item-btn {
  position: absolute;
  z-index: 1;
  bottom: -67px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 67px;
  width: 100%;
  background: rgba(var(--blue-rgb), 0.8);
  color: var(--white);
  font-size: 20px;
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  letter-spacing: 0.5px;

  transition: bottom 0.3s ease;
}

.service-item:hover .item-btn {
  bottom: 0;
}
.item-btn-icon {
  margin-right: 14px;
}
@media (max-width: 480px) {
  .service-item {
    width: 191px;
    height: 138px;
  }
  .item-btn {
    position: absolute;
    z-index: 1;
    bottom: 0px;
    display: flex;
    height: 33px;
    width: 100%;
    background: rgba(var(--blue-rgb), 0.8);
    color: var(--white);
    font-size: 12px;
    font-family: var(--roboto-bold);
    font-weight: var(--weight-bold);
    letter-spacing: 0.5px;
  }
  .item-btn-icon {
    width: 17px;
    height: 17px;
  }
  .item-img {
    width: 191px;
    height: 137px;
  }
}
</style>