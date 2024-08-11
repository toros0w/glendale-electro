<template>
  <div class="team-container">
    <div class="team-title">Our Team</div>
    <div class="team-subtitle">
      Meat our professional team members who are ever ready and up to the task of assisting you
    </div>
    <div class="team-wrapper">
      <TeamItem v-for="(user, index) in teamData" :key="index" :teamData="user" />
    </div>
  </div>
</template>

<script>
import TeamItem from '@/components/TeamItem.vue'
export default {
  name: 'OurTeam',
  components: {
    TeamItem
  },
  data() {
    return {
      teamData: [
        {
          photo: './images/team-1.jpg',
          title: 'Electrician',
          name: 'Jack Wilshere'
        },
        {
          photo: './images/team-2.jpg',
          title: 'Wirin Technician',
          name: 'Jack Wilshere'
        },
        {
          photo: './images/team-3.jpg',
          title: 'Service Manager',
          name: 'Jack Wilshere'
        },
        {
          photo: './images/team-4.jpg',
          title: 'Accountant',
          name: 'Jack Wilshere'
        }
      ]
    }
  }
}
</script>

<style scoped>
.team-container {
  display: block;
  max-width: 1300px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  color: var(--t-gray);
  font-size: 20px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  margin-top: 165px;
}

.team-title {
  color: var(--black);
  font-size: 40px;
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
}

.team-subtitle {
  font-size: 20px;
  margin-top: 35px;
}

.team-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 80px;
}

@media (max-width: 1300px) {
  .team-container {
    margin-left: 0;
    margin-right: 0;
  }
  .team-wrapper {
    gap: 3vw;
  }
}

@media (max-width: 1200px) {
  .team-wrapper {
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    row-gap: 30px;
  }
}
@media screen {
  .team-title {
    font-size: 2.5vw;
  }
  .team-subtitle {
    font-size: 1.5vw;
  }
}
@media (max-width: 800px) {
  .team-title {
    font-size: 24px;
  }
  .team-subtitle {
    font-size: 16px;
    padding: 10px;
  }
  .team-container {
    display: block;
    width: 100vw;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
    color: var(--t-gray);
    font-family: var(--roboto-regular);
    font-weight: var(--weight-regular);
    margin-top: 165px;
  }
}
</style>