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
</style>