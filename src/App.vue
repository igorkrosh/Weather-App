<template>
  <div id="app">
    <TodayPanel/>
  </div>
</template>

<script>
import TodayPanel from "./components/TodayPanel";

export default {
  name: 'App',
  components: {
    TodayPanel
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
