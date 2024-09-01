<template>
  <div>
    <PostPreview :post="post" />
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview.vue'
export default {
  name: 'PostPreviewSection',
  components: {
    PostPreview
  },
  data() {
    return {
      post: {
        title: 'WE ARE GLENDALE ELECTRICIANS',
        text: 'With 20 years of experience serving California, we’re your trusted electricians for all residential and commercial needs. From repairs and maintenance to installations and emergencies, we deliver reliable and professional service. Let us light up your world with top-notch expertise and care.',
        btnText: 'Read More...'
      }
    }
  }
}
</script>

<style scoped>
@media (max-width: 480px) {
  div {
    max-width: 430px;
  }
}
</style>