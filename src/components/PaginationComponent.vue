<template>
  <div class="example-one">
    <vue-awesome-paginate
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :max-pages-shown="5"
      v-model="page"
      @input="pageChanged"
    />
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'PaginationComponent',
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 12
    },
    modelValue: {
      type: Number,
      default: 1
    }
  },
  setup(props, { emit }) {
    const page = ref(props.modelValue)

    const pageChanged = (newPage) => {
      page.value = newPage
      emit('update:modelValue', newPage)
    }

    // Синхронизация modelValue с внутренним состоянием page
    watch(
      () => props.modelValue,
      (newValue) => {
        page.value = newValue
      }
    )

    return {
      page,
      pageChanged
    }
  }
}
</script>

<style>
.example-one .pagination-container {
  column-gap: 10px;
}
.example-one .paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.example-one .paginate-buttons:hover {
  background-color: #d8d8d8;
}
.example-one .active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.example-one .active-page:hover {
  background-color: #2988c8;
}
.example-one .back-button:active,
.example-one .next-button:active {
  background-color: #c4c4c4;
}
</style>