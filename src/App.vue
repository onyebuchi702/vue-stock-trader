<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
    <!-- <h1>App.vue file</h1> -->
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      appHeader: Header
    }

  }
</script>

<style>

</style>
