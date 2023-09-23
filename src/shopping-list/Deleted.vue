<template>
    <h2>Zmazané položky</h2>
	<div v-for="item in this.items" :key="`item-${item.id}`">
		<div class="item" v-if="item.deleted">
			<div>{{  item.text }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: JSON.parse(sessionStorage.getItem("items")) ? JSON.parse(sessionStorage.getItem("items")) : [],
		}
	}
}
</script>
  