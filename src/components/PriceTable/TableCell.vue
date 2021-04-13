<template>
  <th
    v-if="isRowHeader"
    :class="{'is-highlight': isHighlight, 'is-hover': isHover}"
    @mouseover="$emit('hover-cell', cellData)"
  >
    {{ cellData }}
  </th>
  <td
    v-else
    :class="{'is-highlight': isHighlight, 'is-hover': isHover}"
    @mouseover="$emit('hover-cell', cellData)"
  >
    {{ cellData }}
  </td>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    isRowHeader: {
      type: Boolean,
      default: false,
    },
    cellData: {
      type: Object,
      default: () => ({}),
    },
    hoveredItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isHighlight() {
      return this.hoveredItem.business_day === this.cellData.business_day || this.hoveredItem.quantity === this.cellData.quantity;
    },
    isHover() {
      return this.hoveredItem.business_day === this.cellData.business_day && this.hoveredItem.quantity === this.cellData.quantity;
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
.is-highlight {
  background-color: rgba(0, 0, 0, 0.1);
}
.is-hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
