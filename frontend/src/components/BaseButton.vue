<script setup>
defineProps(['button'])

const emits = defineEmits({
    handleUpdateQty: String
})

const emit = defineEmits(['update'])

const handleClickUpdate = (data, item) => {
    return emits('handleUpdateQty',data);
}
</script>
<template>
     <button :type="button" @click="handleClick('add', item.id)">+</button>
</template>