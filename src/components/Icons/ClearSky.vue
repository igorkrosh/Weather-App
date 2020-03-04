<template>
  <div class="weather-icon clear-sky">
      <div class="sun"></div>
      <font-awesome-icon icon="cloud" class="cloud" />
      <font-awesome-icon icon="align-left" class="rain" />
  </div>
</template>

<script>
export default {
    name: 'IconClearSky'
}
</script>

<style>
.weather-icon 
{
    width: 300px;
    height: 300px;
    position: relative;
    margin: 20px auto 0 auto;
    font-size: 16px;
}
.clear-sky
{

}
.clear-sky .sun
{
    width: 75%;
    height: 75%;
    background:  radial-gradient(ellipse at center, rgba(255,193,106,1) 0%, rgba(255,225,92,1) 50%, rgba(255,193,106,1) 100%);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
}

.clear-sky .cloud
{

    width: 60%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
    color: #e9e9e9;
}

.clear-sky .rain
{
    width: 30%;
    height: auto;
    position: absolute;
    color: #4050d2;
    z-index: 101;    
    bottom: 10%;
    transform: rotate(90deg);
    right: 10%;
}
</style>