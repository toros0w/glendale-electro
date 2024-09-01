<template>
  <div class="add-block-section">
    <span class="add">&plus;</span>
  </div>
</template>

<script>
export default {
  name: 'AddBlogSection'
}
</script>

<style scoped>
.add-block-section {
  border-radius: 5px;
  width: 1300px;
  height: 180px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  line-height: 1.7;
  background-color: hsl(0, 0%, 81%);
  transition: background-color 0.3s ease;
}
.add {
  font-size: 100px;
  color: var(--light-gray);
  transition: color 0.3s ease;
  user-select: none;
  color: var(--white);
}
.add-block-section:hover {
  background-color: hwb(107 81% 3%);
}
.add-block-section:hover .add {
  color: hsl(112, 92%, 25%);
  opacity: 50%;
}
</style>