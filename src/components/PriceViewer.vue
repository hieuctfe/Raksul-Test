<template>
  <div class="price-viewer-container">
    <Card title="Select Page size">
      <PageSetting :initSelectedPage="selectedPage" @apply="applyPageHandler" />
    </Card>
    <Card title="Price Table">
      <PriceTable v-if="pricesData" :table-data="pricesData.prices" />
    </Card>
  </div>
</template>

<script>
import Card from "./Card";
import PageSetting from "./PageSetting";
import PriceTable from "./PriceTable";
import { PAGE_SIZE } from "../utils/constants";
import { getPrice } from "../service/price";
export default {
  name: "PriceViewer",
  components: {
    Card,
    PageSetting,
    PriceTable,
  },
  data() {
    return {
      selectedPage: PAGE_SIZE.A5,
      pricesData: null,
    };
  },
  mounted() {
    this.fetchPrice(this.selectedPage);
  },
  methods: {
    async fetchPrice(page) {
      try {
        this.pricesData = await getPrice(page);
      } catch (error) {
        alert("Some thing when wrong");
      }
    },
    applyPageHandler(pageSize) {
      this.fetchPrice(pageSize);
    },
  },
};
</script>

<style scoped></style>
