<template>
  <table class="price-table-container" border="1" cellspacing="0">
    <TableRow :is-col-header="true" :row-data="columnHeaders" />
    <TableRow
      v-for="(rowPrice, index) in tableData"
      :key="index"
      :row-data="rowPrice"
      :row-header="getRowHeader(rowPrice)"
      :hovered-item="hoveredItem"
      :selected-item="selectedItem"
      @hover-cell="hoveredItem = $event"
      @click-cell="$emit('click-cell', $event)"
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
    selectedItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      hoveredItem: {},
    };
  },
  computed: {
    columnHeaders() {
      return this.tableData[0].map((row) => `Business day ${row.business_day}`);
    },
  },
  methods: {
    getRowHeader(rowData) {
      return { title: rowData[0].quantity };
    },
  },
};
</script>

<style scoped>
.price-table-container {
  background-color: #ffffff;
  margin: auto;
}
</style>
