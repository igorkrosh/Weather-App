<template>
    <div class="tile">
        <div class="tile is-child details-panel">
            <div class="title">
                <span>3-Day</span> 
            </div>
            <div class="three-day-weather">
                <div class="day-weather-card">
                    <span class="day-title">Sunday</span>
                        <IconClearSky/>
                    <span class="current-temp">15°</span>
                    <span class="feels-like-temp">-3°</span>
                </div>
                <div class="day-weather-card">
                    <span class="day-title">Monday</span>
                        <IconClearSky/>
                    <span class="current-temp">15°</span>
                    <span class="feels-like-temp">-3°</span>
                </div>
                <div class="day-weather-card">
                    <span class="day-title">Tuesday</span>
                        <IconClearSky/>
                    <span class="current-temp">15°</span>
                    <span class="feels-like-temp">-3°</span>
                </div>
            </div>
            <div class="title">
                <span>Today's Highlights    </span> 
            </div>
            <div class="today-highlights">
                <div class="day-weather-card">
                    <span class="highlights-title">UV Index</span>
                    <div class="uv-index">
                        <div class="bar-wrapper">
                            <div class="bar-bg"></div>
                            <div class="bar"></div>
                        </div>
                        <span class="value">10</span>
                    </div>                    
                </div>
                <div class="day-weather-card">
                    <span class="highlights-title">Sunrise & Sunset</span>
                    <div class="sun-data-wrapper">
                        <div class="sun">
                            <font-awesome-icon icon="arrow-up" class="arrow" />
                        </div>
                        <div class="sun-data">
                            6:05
                        </div>
                    </div>
                    <div class="sun-data-wrapper">
                        <div class="sun">
                            <font-awesome-icon icon="arrow-down" class="arrow" />
                        </div>
                        <div class="sun-data">
                            18:05
                        </div>
                    </div>
                </div>
                <div class="day-weather-card">
                    <span class="highlights-title">Visibility</span>
                    <div class="visibility">5.2 <span>km</span></div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import IconClearSky from './Icons/ClearSky'
export default {
    name: 'DetailsPanel',
    components: {
        IconClearSky
    }
}
</script>

<style>
.details-panel .title
{
    padding: 25px 60px;
    display: flex;
    color:black;
    margin-bottom: 0!important;
    font-size: 26px;
}

.details-panel .title span 
{
    padding: 5px 0px;
    border-bottom: 1px solid black;
}
.three-day-weather
{
    display:flex;
    padding: 0 35px;
    justify-content: center;
}
.day-weather-card
{
    display: inline-block;
    background-color: white;    
    padding: 15px 35px;
    border-radius: 25px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .1);
    color: black;
    margin-right: 25px;
}

.day-weather-card .day-title
{
    font-size: 18px;
    font-weight: 500;
}

.day-weather-card .current-temp
{
    font-size: 18px;
    font-weight: 500;  
    margin-right: 5px;
            
}

.day-weather-card .feels-like-temp
{
    font-size: 18px;  
    color: #bababa;   
}

.day-weather-card .weather-icon
{
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
}
.uv-index{
  position: relative;
  margin-bottom: 20px;
  margin-top: 10px;  
  text-align: center;
}
.uv-index .bar-wrapper{ 
  position: relative;
  overflow: hidden; 
  width: 160px; 
  height: 80px; 
  margin-bottom: -14px; 
}
.uv-index .bar{
  position: absolute;
  top: 0; 
  left: 0;
  width: 160px; 
  height: 160px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 20px solid rgba(0, 0, 0, 0);     
  border-bottom-color: #FFBF5E;  
  border-right-color: #FFBF5E;
  transform: rotate(60deg);
}
.uv-index .bar-bg{
  position: absolute;
  top: 5px; 
  left: 5px;
  width: 150px; 
  height: 150px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 10px solid #f3f1ef;
}
.uv-index .value
{
    font-size: 44px;
    line-height: 40px;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.highlights-title
{
    display: block;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    color: #AEAEAE;
}
.today-highlights .day-weather-card
{
    padding: 20px;
}

.today-highlights .sun
{
    background: radial-gradient(ellipse at center, rgba(255,193,106,1) 0%, rgba(255,225,92,1) 50%, rgba(255,193,106,1) 100%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.today-highlights .sun .arrow
{
    color: #ffffff;
    font-size: 32px;
}
.today-highlights .sun-data
{
    display: inline-flex;
    font-size: 24px;
}

.today-highlights .sun-data-wrapper
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
}

.today-highlights
{
    display: flex;
    align-items: center;
    justify-content: center;
}
.visibility
{
    font-size: 52px;
    margin: 25px 10px 10px 10px; 
}
.visibility span
{
    font-size: 32px;
}
</style>