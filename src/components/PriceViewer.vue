<template>
  <div class="price-viewer-container">
    <Card title="Select Page size" class="select-page-size-section">
      <PageSetting :initSelectedPage="selectedPage" @apply="fetchPrice" />
    </Card>
    <Card title="Price Table" class="price-table-section">
      <PriceTable v-if="pricesData" :table-data="priceTable" :selected-item="selectedItem" @click-cell="toggleSelectedPrice" />
      <button
        v-if="pricesData && !isSeeMoreClicked"
        @click="isSeeMoreClicked = true"
      >
        See more
      </button>
    </Card>
    <Card class="order-price-section">
      <OrderPrice :item="selectedItem" />
    </Card>
  </div>
</template>

<script>
import Card from "./Card";
import PageSetting from "./PageSetting";
import PriceTable from "./PriceTable";
import OrderPrice from "./OrderPrice";
import { PAGE_SIZE } from "../utils/constants";
import { getPrice } from "../service/price";
export default {
  name: "PriceViewer",
  components: {
    Card,
    PageSetting,
    PriceTable,
    OrderPrice,
  },
  data() {
    return {
      selectedPage: PAGE_SIZE.A5,
      pricesData: null,
      isSeeMoreClicked: false,
      selectedItem: null,
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
    toggleSelectedPrice(cellData) {
      this.selectedItem = !this.selectedItem ||
      this.selectedItem.business_day !== cellData.business_day ||
      this.selectedItem.quantity !== cellData.quantity
        ? cellData : null;
    },
  },
};
</script>

<style>

</style>
