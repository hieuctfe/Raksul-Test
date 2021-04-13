<template>
  <table class="price-table-container" border="1">
    <TableRow
      v-for="(rowPrice, index) in tableData"
      :is-col-header="!index"
      :key="index"
      :row-data="rowPrice"
      :hovered-item="hoveredItem"
      @hover-cell="hoveredItem = $event"
    />
  </table>
</template>

<script>
import TableRow from "./TableRow";
export default {
  name: "PriceTable",
  components: {
    TableRow,
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      hoveredItem: {},
    };
  },
};
</script>

<style scoped></style>
