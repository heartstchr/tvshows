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
                <card :element="episodes" :showDetails="showDetails"></card>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
  </div>
</template>
<script>

import Card from "@/components/common/card.comp.vue";
export default {
  name: "Episodes",
  data() {
    return {
      showDetails: true
    };
  },
  props: {
    seasons: Object,
    detail: Boolean
  },
  components: {
    Card
  }
};
</script>
<style scoped>
</style>
