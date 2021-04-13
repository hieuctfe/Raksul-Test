<template>
  <div class="price-viewer-container">
    <Card title="Select Page size">
      <PageSetting :initSelectedPage="selectedPage" @apply="fetchPrice" />
    </Card>
    <Card title="Price Table">
      <PriceTable v-if="pricesData" :table-data="tableData" />
    </Card>
    <button
      v-if="pricesData && !isSeeMoreClicked"
      @click="isSeeMoreClicked = true"
    >
      See more
    </button>
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
      isSeeMoreClicked: false,
    };
  },
  mounted() {
    this.fetchPrice(this.selectedPage);
  },
  computed: {
    priceTable() {
      if (!this.pricesData?.prices) return null;
      return this.isSeeMoreClicked
        ? this.pricesData.prices
        : this.pricesData.prices.slice(0, 5);
    },
    columnHeaders() {
      if (!this.priceTable) return [{}];
      return [
        {},
        ...this.priceTable[0]?.map((e) => ({ title: e.business_day })),
      ];
    },
    tableData() {
      if (!this.priceTable) return [this.columnHeaders];
      const prices = JSON.parse(JSON.stringify(this.priceTable));
      prices?.forEach((e) => e.unshift({ title: e[0].quantity }));
      return [this.columnHeaders, ...prices];
    },
  },
  methods: {
    async fetchPrice(page) {
      try {
        this.pricesData = await getPrice(page);
        this.isSeeMoreClicked = false;
      } catch (error) {
        alert("Some thing when wrong");
      }
    },
  },
};
</script>

<style scoped></style>
