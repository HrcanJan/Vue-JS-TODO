<template>
    <h2>Zmazané položky</h2>
	<div v-for="item in this.items" :key="`item-${item.id}`">
		<Item :item="item" :itemDeleted="itemDeleted" />
	</div>
</template>

<script>
import Item from '../components/Item.vue'

export default {
	data() {
		return {
			items: JSON.parse(sessionStorage.getItem("items")) ? JSON.parse(sessionStorage.getItem("items")) : [],
			itemDeleted: true
		}
	},

	components: {
		Item
	}
}
</script>
  