<template>
	<h2>Nová položka</h2>
	<input @keyup.enter="addItem" v-model="input" placeholder="Názov položky">
	<button @click="addItem()">Pridať</button>
	<hr>
	<h2>Pridané položky</h2>
	<ul>
		<li v-for="item in validItems" :key="`item-${item.id}`">
			<span @click="deleteItem(item)" style="margin-right: 15px" class="delete">X</span>
			{{  item.text }}
		</li>
	</ul>
	<hr>
	<h2>Zmazané položky</h2>
	<ul>
		<li v-for="item in deletedItems" :key="`item-${item.id}`">
			<s>{{  item.text }}</s>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			items: [],
			input: ''
		}
	},

	methods: {
		addItem() {
			this.items.push({
				id: this.items.length + 1,
				text: this.input,
				is_deleted: false
			})
			this.input = ''
		},

		deleteItem(item) {
			item.is_deleted = true
		}
	},

	computed: {
		validItems() {
			return this.items.filter(item => !item.is_deleted)
		},

		deletedItems() {
			return this.items.filter(item => item.is_deleted)
		}
	}
}
</script>