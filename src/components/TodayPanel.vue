<template>
    <div class="tile is-3">
        <div class="tile is-child today-panel">
            <SearchForm/>
            <IconClearSky/>
            <div class="temperature">
                <div class="current-now">
                    3°C
                    <b-tooltip class="feels-like" label="Feels like">
                        <div >
                            -1°C
                        </div>
                    </b-tooltip>

                </div>
               
            </div>
            <div class="date-time">
                <div class="date">
                    Monday,
                </div>
                <div class="time">
                    16:00
                </div>
            </div>
            <div class="weather-details">
                <div class="detail cloudcover tile">
                    <font-awesome-icon icon="cloud" class=" tile is-1 icon-detail"/>        
                    <span class="detail-text"> Cloudcover: 75% </span>
                </div>
                <div class="detail humidity tile">
                    <font-awesome-icon icon="tint" class="tile is-1 icon-detail"/>        
                    <span class="detail-text"> Humidity: 87% </span>
                </div>
                <div class="detail windspeed tile">
                    <font-awesome-icon icon="wind" class="tile is-1 icon-detail"/>        
                    <span class="detail-text"> Wind speed: 15 km/h</span>
                </div>
                       
            </div>
        </div>
    </div>
</template>

<script>
import SearchForm from './SearchForm'
import IconClearSky from './Icons/ClearSky'

export default {
    name: 'TodayPanel',
    components: {
        SearchForm,
        IconClearSky
    }
}
</script>

<style>
.today-panel
{
    background-color: #ffffff;    
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    padding: 35px;
}

.temperature
{
    text-align: left;
}
.detail
{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.detail-text
{
    font-size: 1.1rem;
    color:black;
}

.icon-detail
{
    font-size: 1.7rem;    
    margin-right: 15px;
}

.cloudcover .icon-detail
{
    color: #dfdfe0;
}

.humidity .icon-detail
{
    color: #4050d2;
}


.temperature .feels-like
{
    position: absolute;
    left: 110%;
    top: 5%;
    font-size: 2rem;
    color: #bababa;
}

.temperature .current-now
{
    font-size:5rem;
    color: black;
    text-align: left;    
    margin: 0 15px;
    position: relative;
    display: inline;
}

.date-time 
{
    text-align: left;
    margin: 0 15px;
    border-bottom: 2px solid #ececee;
    padding-bottom: 15px;
}
.date-time .date, .date-time .time
{
    display: inline-block;
    font-size: 24px;
    margin-right: 10px;
}

.date-time .date
{
    color: black;
}

.date-time .time
{
    color:#bababa;
}

.weather-details
{
    margin-top: 15px;
    margin-left: 15px;
}

.feels-like.b-tooltip:after
{
    box-shadow: none;
    transition: 0.5s;
}

.feels-like.b-tooltip:before
{
    content: none;
}

</style>