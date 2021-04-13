<template>
  <div>
    Order price: ¥{{price}}
    <button>Cart</button>
  </div>
</template>

<script>
export default {
  name: 'OrderPrice',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    price() {
      return this.item?.price || 0;
    },
  },
}
</script>

<style scoped>
</style>
