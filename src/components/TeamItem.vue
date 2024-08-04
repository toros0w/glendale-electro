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
.team-member {
  position: relative;
  border-radius: 20px;
  cursor: pointer;
}
.member-photo {
  width: 230px;
  height: 232px;
  border-radius: 20px;
  box-shadow: 3px 4px 29px -6px rgba(0, 0, 0, 0.53);
}
.member-title {
  position: absolute;
  top: 215px;
  width: 166px;
  height: 28px;
  background-color: var(--main-blue);
  border-radius: 5px;
  color: var(--white);
  left: 34px;
}
.member-name {
  margin-top: 34px;
  text-align: left;
  margin-bottom: 120px;
}
</style>