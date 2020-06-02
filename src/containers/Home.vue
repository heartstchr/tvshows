<template>
  <q-page>
    <div class="row">
      <home-slider :elements="limitPopularTvshow"></home-slider>
    </div>
    <!-- <div class="row"> -->
      <!-- <div v-for="(tvshow,index) in tvshows" :key="index" class="col col-md-3">
        <card :element="tvshow"></card>
      </div> -->
      <genres></genres>
    <!-- </div> -->
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
    ...mapGetters(["tvshows","popularTvShows", "isTvShowsFetching", "isTvShowsFetched"]),
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
