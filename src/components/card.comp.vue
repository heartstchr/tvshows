<template>
    <div class="q-pa-sm">
      <q-card inline class="card full-height" @click="details(element.id)">
        <q-img :src="element.image.medium" :alt="element.name"/>
        <q-card-section>
          <div class="row no-wrap items-center" v-if="detail">
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
            <span class="text-caption text-grey q-ml-sm">{{element.language}}</span>
          </div>
          <div class="text-h6">
            <q-icon v-if="details" name="theaters" />
            <q-icon v-if="person" name="person" />
            {{element.name}}
          </div>
          <div v-if="person" class="text-subtitle2" v-html="type"></div>
        </q-card-section>
      </q-card>
    </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    element: Object,
    detail: Boolean,
    person: Boolean,
    type:String
  },
  methods: {
    details(id) {
      console.log(id)
      this.$store.dispatch('getTvShowDetails',this.$route.params.id)
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
</style>
