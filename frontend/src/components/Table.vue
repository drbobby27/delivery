<script setup>
defineProps({
  titleFirst: String,
  titleSecond: String,
  titleThird : String,
  data: {
    type: Array,
    required: true,
  },
});
</script>
<template>
    <table class="table container text-center my-5">
      <thead class="table-header">
        <tr>
          <th scope="col">{{titleFirst}}</th>
          <th scope="col">{{titleSecond}}</th>
          <th scope="col">{{titleThird}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="body" v-for="item in data" :key="item.id">
          <td>{{textFirst}}</td>
          <td>{{textSecond}}</td>
          <td>
            <button type="button" class="btn btn-danger">Enviar</button>
          </td>
        </tr>
      </tbody>
</table>
</template>
<style scoped>
.table-header {
    background: #b20837;
    font-size: 1.5rem;
     color: #f0e9cb;
}
</style>