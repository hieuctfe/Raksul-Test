<template>
  <tr>
    <TableCell
      v-for="(cellData, index) in rowData"
      :is-row-header="isColHeader || !index"
      :key="index"
      :cell-data="cellData"
      :hovered-item="hoveredItem"
      @hover-cell="$emit('hover-cell', $event)"
    />
  </tr>
</template>

<script>
import TableCell from "./TableCell";
export default {
  name: "TableRow",
  components: {
    TableCell,
  },
  props: {
    isColHeader: {
      type: Boolean,
      default: false,
    },
    rowHeader: {
      type: Object,
      default: () => ({}),
    },
    rowData: {
      type: Array,
      default: () => [],
    },
    hoveredItem: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.row-container {
  display: flex;
}
</style>
