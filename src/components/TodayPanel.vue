<template>
    <div class="tile is-4">
        <div class="tile is-child today-panel">
            <SearchForm/>
        </div>
    </div>
</template>

<script>
import SearchForm from './SearchForm'
export default {
    name: 'TodayPanel',
    components: {
        SearchForm
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
</style>