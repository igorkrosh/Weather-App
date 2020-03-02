<template>
  <div class="search-places-form">
    <!--<b-input 
        v-model="name" 
        placeholder="Search for places ..."
        icon="search"
        class="search-places-form"
    ></b-input>-->
    <button class="icon-btn icon-search">
      <font-awesome-icon icon="search" />      
    </button>
    <div class="search-input">
      <input  type="text" placeholder="Search for places ...">
    </div>
    
    <button class="icon-btn icon-geo">
      <font-awesome-icon icon="map-marker-alt" />      
    </button>
  </div>
</template>

<script>
export default {
    name: 'SearchForm'
}
</script>

<style>
.search-places-form
{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon-search
{
  font-size: 22px;
  
  color: #3b3b3b;
  display: inline-flex;
}
.icon-search:hover
{
  color: black;
}
.icon-btn.icon-geo
{
  font-size: 22px;
  color: #0d0d0d;
  display: inline-flex;
  background-color: #e9e9ec;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.icon-btn.icon-geo:hover
{
  background-color: #d7d7db;
  
}
.icon-btn
{
  border: none;
  background-color:unset;
  cursor: pointer; 
  transition: 0.5s; 
}

.search-input
{
  width: 75%;
  display: flex;
  align-items: center;
  padding-top: 2px;
  position: relative;
}

.search-input input
{
  width: 100%;
  font-size: 18px;
  color: black;
  font-family: 'Raleway';
  border: none;
  font-weight: 500;
  position: relative;
  
}
.search-input input::placeholder
{
  font-weight: 500;
  color: black;
}

.search-input::after
{
  content: "";
  width: 0;
  height: 2px;
  transition: 0.5s;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  background-color: black;
}

.search-input:focus-within:after
{
  width: 100%;
}

.search-input input:focus
{
  outline: none;
}
/*
.search-places-form input:focus
{
  box-shadow: none;
}

.search-places-form.control.has-icons-left .icon
{
  color: black;
  top: 2px;
  font-size: 14px;
}

.search-places-form.control.has-icons-left input:focus ~ .icon
{
  color: black;
}

.search-places-form.control.has-icons-left::before
{
  content: "";
  border-bottom: 2px solid black;
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 2px;
  display: block;
  width: 75%; 
  transform: translateX(-50%)
}

.search-places-form.control.has-icons-left input
{
  padding-left: 50px;
  border: none;
  box-shadow: none;
  font-family: 'Raleway';
  font-size: 16px;
  transition: 0.5s;
}

.search-places-form input::placeholder
{
  color: black;
  font-weight: 600;
  
}
*/
</style>