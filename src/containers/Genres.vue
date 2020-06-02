<template>
  <q-page>
    <div>
      <div v-for="(genres,index) in allGenres" :key="index" class="q-pa-md">
        <q-item :to="{name:'singleGenres',params:{type:genres}}" class="text-h6 text-bold" > <q-icon name="category" /> {{genres}}</q-item>
        <horizontal :genresTvShow="genresTvShows[genres]"></horizontal>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from "vuex";
import Horizontal from "@/components/horizontal.comp.vue";
export default {
  name: 'Genres',
  computed: {
    ...mapGetters(["isTvShowsFetching", "isTvShowsFetched","allGenres", "genresTvShows"])
  },
  components: {
    Horizontal
  }
}
</script>
