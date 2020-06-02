<template>
  <q-drawer v-model="drawerOpen" show-if-above bordered content-class="bg-grey-2">
    <q-list>
      <q-item-label header>Essential Links</q-item-label>
      <q-item to="/" exact>
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
          <q-item-label caption>Tv shows</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/genres" exact>
        <q-item-section avatar>
          <q-icon name="theaters" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Genres</q-item-label>
          <q-item-label caption>Category of tv shows</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: "LayoutDefault",
  props: {
    drawerOpen: Boolean
  }
};
</script>

<style>
</style>
