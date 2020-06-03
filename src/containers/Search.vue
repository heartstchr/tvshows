<template>
  <q-page>
    <q-item class="text-h6">{{$route.params.type}}</q-item>
    <div class="row">
      <div
        v-for="(tvshow,index) in searchedShows"
        :key="index"
        class="col-md-3 col-sm-6"
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
import Card from "@/components/card.comp.vue";
export default {
  name: "Search",
  data() {
    return {
      details: true
    };
  },
  computed: {
    ...mapGetters(["searchedShows"])
  },
  components: {
    Card
  }
};
</script>
