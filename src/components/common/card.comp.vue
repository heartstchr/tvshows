<template>
  <div class="q-pa-sm">
    <q-card inline class="card full-height" @click="details(element.id)">
      <q-img :src="element.image.medium" :alt="element.name" v-if="element.image">
        <q-icon
          class="absolute all-pointer-events"
          size="32px"
          name="info"
          color="white"
          style="top: 8px; left: 8px"
          v-if="element.rating && element.rating.average"
        >
          <q-tooltip> Rating:{{element.rating.average}}</q-tooltip>
        </q-icon>
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center" v-if="showDetails && element.rating && element.rating.average">
          <q-rating
            size="1em"
            v-model="element.rating.average"
            :max="10"
            color="orange"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            no-dimming
            readonly
          ></q-rating>
          <div>{{element.rating.average}}</div>
        </div>
        <div v-if="person" class="text-subtitle2">{{type}}</div>
        <div class="text-h6">
          {{element.name}}
        </div>
        <div class="text-caption text-grey q-ml-sm" v-if="showDetails && element.language">
          <q-icon name="language" />
          {{element.language}}
        </div>
        <div class="text-caption text-grey q-ml-sm" v-if="showDetails && element.number">
          Episode {{element.number}}
        </div>
        <div class="text-subtitle2 details" v-if="showDetails" v-html="element.summary"></div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    element: Object,
    showDetails: Boolean,
    person: Boolean,
    type: String
  },
  methods: {
    details(id) {
      this.$store.dispatch("getTvShowDetails", this.$route.params.id);
      this.$router.push({ name: "singleTvshows", params: { id: id } });
    }
  }
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
.details {
  width: auto;
  max-height: 100px;
  overflow: scroll;
}
</style>
