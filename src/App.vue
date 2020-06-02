<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="flat bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="text-primary"
        />

        <q-toolbar-title>
          <div class="logo">
            <a href="/">
              <q-img src="http://static.tvmaze.com/images/tvm-header-logo.png" />
            </a>
          </div>
        </q-toolbar-title>
        <q-space />

        <q-input dense standout v-model="search" input-class="text-right" class="q-ml-md" @keydown.enter.prevent="searchItem(search)">
          <template v-slot:append>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>
    <drawer-comp :drawerOpen="leftDrawerOpen"></drawer-comp>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from "vuex";
import DrawerComp from "@/components/common/drawer.comp.vue";
export default {
  name: "LayoutDefault",
  data() {
    return {
      leftDrawerOpen: true,
      search: ""
    };
  },
  components: {
    DrawerComp
  },
  computed: {
    ...mapActions(["searchTvShows"])
  },
  mounted: function() {
    this.leftDrawerOpen = false;
  },
  methods: {
    searchItem( search ){
      console.log('search', search);
      this.$store.dispatch("searchTvShows", search);
      this.$router.push({ name: "search", params: { q: search } });
    }
  }
};
</script>

<style>
.logo {
  width: 75px;
}
</style>
