<template>
  <div class="page-setting-container">
    <select v-model="internalSelectedPage">
      <option
        v-for="pageSize in listPageSize"
        :value="pageSize"
        :key="pageSize"
        >{{ pageSize }}</option
      >
    </select>
    <button @click="applyHandler">Apply</button>
  </div>
</template>

<script>
import { PAGE_SIZE } from "../utils/constants";
export default {
  name: "PageSetting",
  data() {
    return {
      PAGE_SIZE,
      internalSelectedPage: "",
    };
  },
  props: {
    initSelectedPage: {
      type: String,
      default: PAGE_SIZE.A4,
    },
  },
  mounted() {
    this.internalSelectedPage = this.initSelectedPage;
  },
  computed: {
    listPageSize() {
      return Object.values(PAGE_SIZE);
    },
  },
  methods: {
    applyHandler() {
      this.$emit("apply", this.internalSelectedPage);
    },
  },
};
</script>

<style scoped></style>
