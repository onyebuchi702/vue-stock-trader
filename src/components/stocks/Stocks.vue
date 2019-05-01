<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data() {
      return {
        stocks: [
          {id: 1, name: 'BMW', price: 110},
          {id: 2, name: 'Benz', price: 210},
          {id: 3, name: 'Apple', price: 410},
          {id: 1, name: 'Twitter', price: 310},
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style>

</style>
