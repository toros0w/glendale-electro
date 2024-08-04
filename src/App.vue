<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { watch } from 'vue'

const route = useRoute()

const updateMeta = (routeName) => {
  let title = ''
  let desc = ''
  let keywords = ''

  switch (routeName) {
    case 'Main':
      title = 'tests'
      desc = 'Desk'
      keywords = 'test, test1, test2'
      break
    default:
      title = 'Default Title'
      desc = 'Default Description'
      keywords = 'default, keywords'
      break
  }

  useHead({
    title: title,
    meta: [
      {
        name: 'description',
        content: desc
      },
      {
        name: 'keywords',
        content: keywords
      }
    ]
  })
}

watch(
  () => route.name,
  (newRouteName) => {
    updateMeta(newRouteName)
  },
  { immediate: true }
)
</script>

<style scoped>
</style>
