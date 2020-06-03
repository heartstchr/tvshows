<template>
  <q-input
    dense
    standout
    v-model="search"
    input-class="text-right"
    class="q-ml-md"
    @keydown.enter.prevent="searchItem(search)"
  >
    <template v-slot:append>
      <q-icon v-if="search === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
    </template>
  </q-input>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBox",
  data(){
    return {
        search: ""
    }
  },
  computed: {
    ...mapActions(["searchTvShows"])
  },
  methods: {
    searchItem(search) {
      this.$store.dispatch("searchTvShows", search);
      this.$router.push({ name: "search", params: { q: search } });
    }
  }
};
</script>

<style>
</style>
