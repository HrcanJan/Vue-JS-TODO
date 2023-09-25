<template>
    <div class="item" v-if="!item.deleted">
        <span @click="deleteItem(item)" style="margin-right: 15px" class="delete">X</span>
        <span>{{  item.text }}</span>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: ['item', 'deleteItem']
    
}
</script>
