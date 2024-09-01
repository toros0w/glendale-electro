<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-container">
      <span @click="closeModal" class="close-btn">&#10006;</span>
      <div class="section-create-title">Create a new section</div>
      <div class="select-design-wrapper">
        <form class="design-items-wrapper">
          <label class="design-item">
            <input type="radio" value="left" v-model="selectedPosition" />
            <img src="/public/images/blog-left-photo.png" alt="" class="design-img" />
          </label>
          <label class="design-item">
            <input type="radio" value="middle" v-model="selectedPosition" />
            <img src="/public/images/blog-no-photo.png" alt="" class="design-img" />
          </label>
          <label class="design-item">
            <input type="radio" value="right" v-model="selectedPosition" />
            <img src="/public/images/blog-right-photo.png" alt="" class="design-img" />
          </label>
        </form>
      </div>
      <div class="modal-items">
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
          <textarea v-model="description" class="modal-text" required></textarea>
        </div>
      </div>
      <BtnNoneBg @click="createSection" :btnText="'Create'" cls="btn-with-bg" />
    </div>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import axios from 'axios'

export default {
  name: 'BlogSectionAddModal',
  components: {
    BtnNoneBg
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      selectedPosition: '',
      title: '',
      image: '',
      description: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
    async createSection() {
      const blogId = this.$route.params.id // Получаем blog_id из URL

      if (!this.selectedPosition || !this.description) {
        alert('Please select a position and enter a description.')
        return
      }

      try {
        const response = await axios.post(
          `https://dev.electriciansoflosangeles.com/api/posts/${blogId}/create`,
          {
            blog_id: blogId, // Передаем blog_id вместе с остальными данными

            position: this.selectedPosition,
            title: this.title || null,
            image: this.image || null,
            text: this.description
          }
        )
        console.log('Section created:', response.data)
        this.closeModal()
      } catch (error) {
        console.error('Error creating section:', error)
        console.error('Error details:', error.response.data.errors)
      }
    }
  }
}
</script>

  <style scoped>
.modal {
  width: 800px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  box-shadow: 0px 0px 55px -16px rgba(0, 0, 0, 1);
  z-index: 10;
  /* display: none; */
}
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.modal-container {
  text-align: center;
}
.section-create-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 30px;
  margin-top: 25px;
}
.design-img {
  width: 80px;
  height: 80px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  /* box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75); */
}
.design-item {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.design-items-wrapper {
  display: flex;
  gap: 30px;
  justify-content: center;
}
.modal-items {
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin: 20px;
}
.placeholder {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 12px;
  color: var(--light-gray);
}
.modal-input {
  width: 650px;
  height: 40px;
  font-size: 18px;
}
.modal-text {
  width: 650px;
  height: 300px;
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
  width: 170px;
  height: 40px;
  font-size: 14px;
}
</style>