<template>
  <q-page>
    <q-item class="text-h6">{{$route.params.type}}</q-item>
    <div class="row">
      <div
        v-for="(tvshow,index) in genresTvShows[$route.params.type]"
        :key="index"
        class="col-md-3"
      >
        <card :element="tvshow" :showDetails="details"></card>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/common/card.comp.vue";
export default {
  name: "SingleGenres",
  data() {
    return {
      details: true
    };
  },
  computed: {
    ...mapGetters(["genresTvShows"])
  },
  components: {
    Card
  }
};
</script>
