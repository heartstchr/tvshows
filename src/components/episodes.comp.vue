<template>
  <div>
    <div v-for="(season,index) in seasons" :key="index">
      <div class="q-pb-sm">
        <q-expansion-item
          class="shadow-1 overflow-hidden"
          style="border-radius: 20px"
          icon="dvr"
          :label="'Season '+season[0].season"
          header-class="bg-primary text-white"
          expand-icon-class="text-white"
        >
          <q-card>
            <q-card-section class="row">
              <div v-for="(episodes,index) in season" :key="index" class="col-md-4">
                <card :element="episodes" :detail="false"></card>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
  </div>
</template>
<script>

import Card from "@/components/card.comp.vue";
export default {
  name: "Episodes",
  props: {
    seasons: Object,
    detail: Boolean
  },
  components: {
    Card
  },
  methods: {
    details(id) {
      console.log(id);
      this.$store.dispatch("getTvShowDetails", this.$route.params.id);
      this.$router.push({ name: "singleTvshows", params: { id: id } });
    }
  }
};
</script>
<style scoped>
</style>
