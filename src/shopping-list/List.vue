<template>
	<h2>Nová položka</h2>
	<div class="form">
		<input @keyup.enter="addItem" @input="isInput" v-model="input" placeholder="Názov položky">
		<button @click="addItem()" disabled>+</button>
	</div>
	<hr>
	<h2>Pridané položky</h2>
	<div v-for="item in this.items" :key="`item-${item.id}`">
		<div class="item" v-if="!item.deleted">
			<span @click="deleteItem(item)" style="margin-right: 15px" class="delete">X</span>
			<span>{{  item.text }}</span>
		</div>
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
			if(this.input) {
				this.items.push({
					id: this.items.length + 1,
					text: this.input,
					deleted: false
				})
				sessionStorage.setItem("items", JSON.stringify(this.items))
				this.input = ''
				this.isInput()
			}
		},

		deleteItem(item) {
			item.deleted = true
			sessionStorage.setItem("items", JSON.stringify(this.items))
		},

		isInput() {
			const button =  document.querySelector('button');
			if(this.input)
				button.disabled = false
			else
				button.disabled = true
		}
	},

}
</script>