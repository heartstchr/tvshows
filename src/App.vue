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
      </q-toolbar>
    </q-header>
    <drawer-comp :drawerOpen="leftDrawerOpen"></drawer-comp>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import DrawerComp from "@/components/common/drawer.comp.vue";
export default {
  name: "LayoutDefault",
  data() {
    return {
      leftDrawerOpen: true
    };
  },
  components: {
    DrawerComp
  },
  mounted: function() {
    this.leftDrawerOpen =false
  }
};
</script>

<style>
.logo {
  width: 75px;
}
</style>
