<template>
    <div class="bg"></div>
    <ul>
        <li class="active" id="list" @click="activeTab('list')">
            <router-link to="/">List</router-link>
        </li>
        <li id="deleted" @click="activeTab('deleted')">
            <router-link to="/deleted">Deleted</router-link>
        </li>
        <li id="deleted" @click="getData()">
            <a>GET</a>
        </li>
        <li id="deleted" @click="postData()">
            <a>POST</a>
        </li>
    </ul>
    <div class="wrapper">
        <router-view :item_list="this.items" />
    </div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			items: []
		}
	},

    async mounted() {
        try{
            this.getData()
        } catch (error) {
            console.error("Error fetching data:", error);
            }
    },

    methods: {
        activeTab(id) {
		    const tabs = document.getElementsByTagName('li')
		    const activeTab = document.getElementById(id)

	    for (let tab of tabs)
		    tab.classList.remove('active')

	    activeTab.classList.add('active')
	    },

        getData() {
            axios.get('https://28ad3fcf-e1e0-48be-b014-13f6120e1bc0.mock.pstmn.io/items')
            .then(response => {
                this.items = JSON.parse(JSON.stringify(response.data))
            })
        },

        postData() {
            axios({
                method: 'post',
                url: 'https://28ad3fcf-e1e0-48be-b014-13f6120e1bc0.mock.pstmn.io/additems',
                data: {"id": "4", "name": "Date", "isDeleted": "True"}
                })
            .then(response => console.log(response.data))
        },

        putData() {
            axios.put('https://28ad3fcf-e1e0-48be-b014-13f6120e1bc0.mock.pstmn.io/deleteitems', {"id": "4", "isDeleted": "True"})
            .then((response) => console.log(response.data))
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
