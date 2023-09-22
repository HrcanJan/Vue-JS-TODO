<template>
	<h2>Nová položka</h2>
	<input @keyup.enter="addItem" v-model="input" placeholder="Názov položky">
	<button @click="addItem()">Pridať</button>
	<hr>
	<h2>Pridané položky</h2>
	<ul>
		<li v-for="item in this.items" :key="`item-${item.id}`">
			<span @click="deleteItem(item)" style="margin-right: 15px" class="delete">X</span>
			<span v-if="!item.deleted">{{  item.text }}</span>
		</li>
	</ul>
	<hr>
	<h2>Zmazané položky</h2>
	<ul>
		<li v-for="item in this.items" :key="`item-${item.id}`">
			<s v-if="item.deleted">{{  item.text }}</s>
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
				deleted: false
			})
			this.input = ''
		},

		deleteItem(item) {
			item.deleted = true
		}
	},
}
</script>