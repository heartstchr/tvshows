<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="flat bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="getLeftDrawer"
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

        <search-comp></search-comp>
      </q-toolbar>
    </q-header>
    <drawer-comp></drawer-comp>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from "vuex";
import DrawerComp from "@/components/common/drawer.comp.vue";
import SearchComp from "@/components/common/search.comp.vue";
export default {
  name: "LayoutDefault",
  components: {
    DrawerComp,
    SearchComp
  },
  computed:{
    ...mapActions(['toggelMenu'])
  },
  methods:{
    getLeftDrawer(){
      this.$store.dispatch("toggelMenu")
    }
  }
};
</script>

<style>
.logo {
  width: 75px;
}
</style>
