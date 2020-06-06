<template>
  <div id="app">
    <div v-show="loading" class="loading">
        <span class="sr-only">Загрузка...</span>
    </div>
    <transition name="slide-fade" mode="out-in" v-show="!loading">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState(['loading']),
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: aliceblue;
  }

  .flexbox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 15px;
  }

  .flexbox .column {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    background-color: blueviolet;
    padding: 15px;
  }

  .flexbox .column .card {
    height: 100px;
    padding: 15px 25px;
    background-color: azure;
    cursor: pointer;
    margin-bottom: 15px;
    overflow-x:hidden;
  }

  .loading {
    text-align: center;
    vertical-align: middle;
    line-height: 90px;
  }

  .column-title {
    margin-bottom: 10px;
    border-bottom: 1px solid black;
  }

  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
</style>
