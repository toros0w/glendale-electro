<template>
  <div class="team-item-wrapper">
    <div class="team-member">
      <img :src="teamData.photo" alt="" class="member-photo" />
      <div class="member-title">{{ teamData.title }}</div>
    </div>
    <div class="member-name">{{ teamData.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'TeamItem',
  props: {
    teamData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.team-item-wrapper {
  max-width: 230px; /* Устанавливаем максимальную ширину элемента */
  box-sizing: border-box; /* Включаем отступы и границы в ширину и высоту элемента */
  margin: 0 auto; /* Центрирование элемента */
}

.team-member {
  position: relative;
  border-radius: 20px;
  cursor: pointer;
}

.member-photo {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 3px 4px 29px -6px rgba(0, 0, 0, 0.53);
}

.member-title {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: var(--main-blue);
  color: var(--white);
  border-radius: 0 0 20px 20px;
}

.member-name {
  margin-top: 10px;
  text-align: center;
}

@media (max-width: 1200px) {
  .team-item-wrapper {
    max-width: 300px;
  }
}
@media (max-width: 500px) {
  .team-item-wrapper {
    max-width: 170px;
  }
}
</style>