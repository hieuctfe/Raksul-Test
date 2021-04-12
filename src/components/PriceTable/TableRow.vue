<template>
  <div class="row-container">
    <TableCell
      v-for="(cellData, index) in rowData"
      :key="index"
      :cell-data="cellData"
    />
  </div>
</template>

<script>
import TableCell from "./TableCell";
export default {
  name: "TableRow",
  components: {
    TableCell,
  },
  props: {
    rowData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.row-container {
  display: flex;
}
</style>
