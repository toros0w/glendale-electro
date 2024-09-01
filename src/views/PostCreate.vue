<template>
  <div class="create-container">
    <TopInfo />
    <NavBar />
    <TextEditor class="editor" />
    <FooterSection />
  </div>
</template>

<script>
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import TextEditor from '@/sections/TextEditor.vue'
import FooterSection from '@/sections/FooterSection.vue'
export default {
  name: 'PostCreate',
  components: {
    TopInfo,
    NavBar,
    TextEditor,
    FooterSection
  }
}
</script>

<style scoped>
</style>