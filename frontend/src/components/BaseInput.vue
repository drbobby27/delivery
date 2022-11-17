<script setup>
defineProps(['type'])


const emit = defineEmits(['update'])
const saveValue = event =>{
    emit('update', event.target.value)
}
</script>
<template>
    <input :type="type" name="input" @input="saveValue"/>
</template>
<style scoped>
   input {
    padding: 5px 8px;
   }
</style>