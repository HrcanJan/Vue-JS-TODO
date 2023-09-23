<template>
	<h2>Nová položka</h2>
	<input @keyup.enter="addItem" v-model="input" placeholder="Názov položky">
	<button @click="addItem()">Pridať</button>
	<hr>
	<h2>Pridané položky</h2>
	<div v-for="item in this.items" :key="`item-${item.id}`">
		<span v-if="!item.deleted" @click="deleteItem(item)" style="margin-right: 15px" class="delete">X</span>
		<span v-if="!item.deleted">{{  item.text }}</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: JSON.parse(sessionStorage.getItem("items")) ? JSON.parse(sessionStorage.getItem("items")) : [],
			input: '',
		}
	},

	methods: {
		addItem() {
			this.items.push({
				id: this.items.length + 1,
				text: this.input,
				deleted: false
			})
			sessionStorage.setItem("items", JSON.stringify(this.items))
			this.input = ''
		},

		deleteItem(item) {
			item.deleted = true
			sessionStorage.setItem("items", JSON.stringify(this.items))
		}
	},
}
</script>