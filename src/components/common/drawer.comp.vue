<template>
    <q-drawer :value="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item>
          <search-box></search-box>
        </q-item>
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
import { mapGetters } from "vuex";
import SearchBox from "@/components/common/search.comp.vue";
export default {
  name: "LayoutDefault",
  computed: {
    ...mapGetters(["leftDrawerOpen"])
  },
  components: {
    SearchBox
  }
};
</script>

<style>
</style>
