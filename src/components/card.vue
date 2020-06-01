<template>
  <q-page class="flex">
    <h1>{{ msg }}</h1>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>
