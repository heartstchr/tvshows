<template>
  <div class="fit homebanner">
    <q-carousel swipeable animated v-model="slide" thumbnails infinite autoplay>
      <q-carousel-slide
        v-for="(ele,index) in elements"
        :key="index"
        :name="index"
        :img-src="ele.image.original"
      >
        <div class="absolute-bottom custom-caption q-pa-sm row">
          <div class="col-md-6">
            <div class="text-h2 text-white">{{ele.name}}</div>
            <div class="items-center" v-if="ele.rating">
              <q-rating
                size="2em"
                v-model="ele.rating.average"
                :max="10"
                color="orange"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
                no-dimming
                readonly
              ></q-rating>
              {{ele.rating.average}}
            </div>
            <div class="text-subtitle1 text-white">
              <q-icon name="language" />
              {{ele.language}}
            </div>
            <q-chip
              square
              clickable
              @click="goTo(genre)"
              class="text-bold"
              :to="{name:'singleGenres',params:{type:genre}}"
              v-for="(genre,index) in ele.genres"
              :key="index"
            >
              <q-avatar icon="category" color="teal" text-color="white" />
              {{genre}}
            </q-chip>
          </div>
          <div class="col-md-6 items-center">
            <q-btn
              round
              color="primary"
              icon="play_arrow"
              size="lg"
              :to="{name:'singleTvshows',params:{id:ele.id}}"
            />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  name: "HomeSlider",
  data() {
    return {
      slide: 1
    };
  },
  props: {
    elements: Array
  },
  methods: {
    goTo(genere) {
      console.log(genere);
      this.$router.push({ name: "singleGenres", params: { type: genere } });
    }
  },
  mounted: function() {
    console.log(this.elements);
  }
};
</script>
<style scoped>
.homebanner .q-carousel {
  height: 90vh;
}
.custom-caption {
  text-align: left;
  padding: 12px;
  margin-bottom: 70px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
