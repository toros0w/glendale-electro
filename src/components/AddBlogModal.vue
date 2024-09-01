<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-container">
      <span class="close-btn" @click="closeModal">&#10006;</span>
      <div class="modal-items">
        <div class="title">New blog</div>
        <div class="blog-input">
          <p class="placeholder">Title</p>
          <input v-model="title" type="text" class="modal-input" />
        </div>
        <div class="blog-input">
          <p class="placeholder">Image(URL)</p>
          <input v-model="image" type="text" class="modal-input" />
        </div>
        <div class="blog-input">
          <p class="placeholder">Description</p>
          <textarea v-model="description" class="modal-text"></textarea>
        </div>
      </div>
      <BtnNoneBg @click="createBlog" btnText="Create" cls="btn-with-bg" />
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import axios from 'axios'

export default {
  name: 'AddBlogModal',
  components: {
    BtnNoneBg
  },
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      title: '',
      image: '',
      description: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
    async createBlog() {
      try {
        const response = await axios.post('https://dev.electriciansoflosangeles.com/api/posts', {
          title: this.title,
          description: this.description,
          image: this.image
        })
        console.log('Blog created:', response.data)
        this.closeModal() // Закрыть модальное окно после успешного создания блога
      } catch (error) {
        console.error('Error creating blog:', error)
        console.error('Error details:', error.response.data.errors) // Показывает подробности ошибок
      }
    }
  }
}
</script>

<style scoped>
.modal {
  position: absolute;
  box-shadow: 0px 0px 55px -16px rgba(0, 0, 0, 1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 30px;
  margin-top: 25px;
}
.modal-container {
  width: 600px;
  height: 600px;
  background-color: var(--white);
  border: 1px solid var(--light-gray);
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
}
.modal-items {
  width: auto;
  margin-left: auto;
  margin-right: auto;
}
.placeholder {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 12px;
  color: var(--light-gray);
}
.modal-input {
  width: 400px;
  height: 40px;
  font-size: 18px;
}
.modal-text {
  width: 400px;
  height: 150px;
  font-size: 18px;
}
.blog-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
}
.btn-with-bg {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 100px;
  height: 40px;
  font-size: 14px;
}
.close-btn {
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
}
</style>