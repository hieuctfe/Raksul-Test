<template>
  <th v-if="isRowHeader">
    {{ cellData }}
  </th>
  <td
    v-else
    :class="{ 'is-highlighted': isHighlighted, 'is-hovered': isHovered, 'is-selected': isSelected }"
    @mouseover="$emit('hover-cell', cellData)"
    @click="$emit('click-cell', cellData)"
  >
    {{ cellData.price }}
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
    isHighlighted: {
      type: Boolean,
      default: false,
    },
    isHovered: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    cellData: {
      type: String,
      default: '',
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
.is-highlighted {
  background-color: rgba(0, 0, 0, 0.1);
}
.is-hovered {
  background-color: rgba(0, 0, 0, 0.4);
}
.is-selected {
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
}
</style>
