<template>
  <div id="app">
    <PriceViewer />
  </div>
</template>

<script>
import PriceViewer from './components/PriceViewer.vue'

export default {
  name: 'App',
  components: {
    PriceViewer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
