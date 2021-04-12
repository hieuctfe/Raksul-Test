<template>
  <div class="cell-container">
    {{ cellData }}
  </div>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    cellData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.cell-container {
  width: 100px;
  height: 100px;
  font-size: 10px;
}
</style>
