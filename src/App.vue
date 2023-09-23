<template>
    <ul>
        <li class="active" id="list" @click="activeTab('list')">
            <router-link to="/">List ({{ numOfItems }})</router-link>
        </li>
        <li id="deleted" @click="activeTab('deleted')">
            <router-link to="/deleted">Deleted ({{ itemLength - numOfItems }})</router-link>
        </li>
    </ul>
    <div class="wrapper">
        <router-view/>
    </div>
</template>

<script>
export default {

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
