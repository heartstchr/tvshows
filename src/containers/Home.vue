<template>
  <q-page>
    <div class="row">
      <home-slider :elements="limitPopularTvshow"></home-slider>
    </div>
      <genres></genres>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from "vuex";
import Genres from "@/containers/Genres";
import HomeSlider from "@/components/homeSlider.comp.vue";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["tvshows","popularTvShows"]),
    limitPopularTvshow(){
      return this.popularTvShows.slice(0,5)
    }
  },
  components: {
    Genres,
    HomeSlider
  }
};
</script>
