<template>
  <tr>
    <TableCell
      :is-row-header="true"
      :cell-data="rowHeader.title ? `Quantity ${rowHeader.title}` : ''"
    />
    <TableCell
      v-for="(cellData, index) in rowData"
      :is-row-header="isColHeader"
      :key="index"
      :cell-data="cellData"
      :is-highlighted="isCellHighlighted(cellData)"
      :is-hovered="isCellHovered(cellData)"
      :is-selected="isCellSelected(cellData)"
      @hover-cell="$emit('hover-cell', $event)"
      @click-cell="$emit('click-cell', $event)"
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
    selectedItem: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    isCellHighlighted(cellData) {
      return (
        !this.isColHeader &&
        !this.selectedItem &&
        (this.hoveredItem.business_day === cellData.business_day ||
          this.hoveredItem.quantity === cellData.quantity)
      );
    },
    isCellHovered(cellData) {
      return (
        !this.isColHeader &&
        !this.selectedItem &&
        this.hoveredItem.business_day === cellData.business_day &&
        this.hoveredItem.quantity === cellData.quantity
      );
    },
    isCellSelected(cellData) {
      return (
        !this.isColHeader &&
        this.selectedItem &&
        this.selectedItem.business_day === cellData.business_day &&
        this.selectedItem.quantity === cellData.quantity &&
        this.selectedItem.price === cellData.price
      );
    },
  },
};
</script>

<style scoped>
.row-container {
  display: flex;
}
</style>
