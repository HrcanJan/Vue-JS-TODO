<template>
    <ul>
        <li class="active" id="list" @click="activeTab('list')">
            <router-link to="/">List</router-link>
        </li>
        <li id="deleted" @click="activeTab('deleted')">
            <router-link to="/deleted">Deleted</router-link>
        </li>
    </ul>
    <div class="wrapper">
        <router-view/>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log(response.data))
    },

    methods: {
        activeTab(id) {
		    const tabs = document.getElementsByTagName('li')
		    const activeTab = document.getElementById(id)

	    for (let tab of tabs)
		    tab.classList.remove('active')

	    activeTab.classList.add('active')
	    }
    }
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
