<template>
    <div class="q-pa-sm">
      <q-card inline class="card full-height" @click="details(element.id)">
        <q-parallax :src="element.image.medium" :height="300" />
        <q-card-section>
          <div class="row no-wrap items-center" v-if="detail && element.rating">
            <q-rating
              size="2em"
              v-model="element.rating.average"
              :max="1"
              color="orange"
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
              no-dimming
              readonly
            >
              <template v-slot:tip-1>
                <q-tooltip>{{element.rating.average}}</q-tooltip>
              </template>
            </q-rating>
            <span class="text-caption text-grey q-ml-sm"> <q-icon name="language" />{{element.language}}</span>
          </div>
          <div class="text-h6">
            <q-icon name="theaters" />
            {{element.name}}
          </div>
          <!-- <div class="text-subtitle2" v-html="element.summary"></div> -->
        </q-card-section>
      </q-card>
    </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    person: Object,
    detail: Boolean
  },
};
</script>
<style scoped>
.card {
  width: 100%;
  max-width: 500px;
  min-height: 350px;
}
.card .q-parallax {
  min-width: 220px;
}
</style>
