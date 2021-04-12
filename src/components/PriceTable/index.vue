<template>
  <div class="price-table-container">
    <TableRow
      v-for="(rowPrice, index) in tableData"
      :key="index"
      :row-data="rowPrice"
    />
  </div>
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
};
</script>

<style scoped></style>
