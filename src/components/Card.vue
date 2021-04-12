<template>
  <div class="component-container">
    <span class="component-title" v-if="title">{{ title }}</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
