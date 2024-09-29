<template>
  <div class="blog-container">
    <MobileMenu :isOpen="isMenuOpen" @close="toggleMenu" />
    <TopInfo class="topinfo" />
    <NavBar class="navbar" @toggle="toggleMenu" />
    <BlogHeader :headInfo="blogMainInfo" />
    <BlogSection v-for="(item, index) in sectionsData" :key="index" :sectionData="item" />
    <BlogSectionAddModal :isOpen="isModalOpen" @close-modal="closeModal" />
    <AddBlogSection v-if="isAuthorized" @click="openModal" />
    <FooterSection />
  </div>
</template>

<script>
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import BlogHeader from '@/sections/BlogHeader.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import BlogSection from '@/sections/BlogSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import AddBlogSection from '@/components/AddBlogSection.vue'
import BlogSectionAddModal from '@/components/BlogSectionAddModal.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'BlogView',
  components: {
    TopInfo,
    NavBar,
    BlogHeader,
    BlogSection,
    AddBlogSection,
    FooterSection,
    BlogSectionAddModal,
    MobileMenu
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  setup() {
    const route = useRoute()
    const blogData = ref(null)
    const sectionsData = ref([])
    const blogMainInfo = ref({
      image: '',
      title: '',
      text: ''
    })
    const isModalOpen = ref(false)
    const isAuthorized = ref(false)

    // Функция для проверки авторизации
    const checkAuth = async () => {
      // https://electriciansoflosangeles.com
      try {
        const response = await axios.get('https://electriciansoflosangeles.com/api/auth/check')

        console.log(response.data, 'Raw response data')

        // Предполагается, что data содержит строку, которую нужно распарсить
        const parsedData = JSON.parse(response.data.substring(response.data.indexOf('{"status"')))

        console.log(parsedData, 'Parsed response data')

        if (parsedData.status === 'success') {
          isAuthorized.value = true
        } else {
          isAuthorized.value = false
        }
      } catch (error) {
        console.error('Error checking authorization:', error)
        isAuthorized.value = false
      }
    }

    // Функция для получения данных блока
    const fetchBlogData = async () => {
      const blogId = route.params.id
      try {
        const response = await axios.get(`https://electriciansoflosangeles.com/api/blog/${blogId}`)
        blogData.value = response.data.data

        // Обновляем blogMainInfo после получения данных блока
        blogMainInfo.value.image = blogData.value.image
        blogMainInfo.value.title = blogData.value.title
        blogMainInfo.value.text = blogData.value.description

        // Получаем секции блога после получения данных блока
        fetchBlogSections(blogId)
      } catch (error) {
        console.error('Error fetching block data', error)
      }
    }

    // Функция для получения секций блога
    const fetchBlogSections = async () => {
      const blogId = route.params.id
      try {
        const response = await axios.get(
          `https://electriciansoflosangeles.com/api/posts/${blogId}/sections`
        )
        sectionsData.value = response.data.data
      } catch (error) {
        console.error('Error fetching blog sections', error)
      }
    }

    // Открытие модального окна
    const openModal = () => {
      isModalOpen.value = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }

    // Закрытие модального окна
    const closeModal = () => {
      isModalOpen.value = false
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    onMounted(() => {
      checkAuth() // Проверка авторизации при загрузке компонента
      fetchBlogData() // Получение данных блога при загрузке компонента
    })

    return {
      blogMainInfo,
      sectionsData,
      isModalOpen,
      openModal,
      closeModal,
      isAuthorized // Возвращаем переменную авторизации для использования в шаблоне
    }
  }
}
</script>

<style scoped>
/* .topinfo {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
}
.navbar {
  position: fixed;
  left: 0;
  top: 88px;
  z-index: 200;
} */
</style>