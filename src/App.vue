<template>
  <div id="app">
    <div class="tile container is-ancestor weather-panel">
      <TodayPanel/> 
      <DetailsPanel/>  
    </div>  
  </div>
</template>

<script>
import TodayPanel from "./components/TodayPanel";
import DetailsPanel from "./components/DetailsPanel"

export default {
  name: 'App',
  components: {
    TodayPanel,
    DetailsPanel
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');

#app {
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 15px 60px 60px 60px;
  background-color: #d6d7da;
  min-height: 100vh;
  width: 100vw;  
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.weather-panel
{
  background-color: #f6f6f8;
  min-height: 800px;
  width: 100%;
  border-radius: 40px;
}
html
{
  overflow: auto!important;
}

</style>
