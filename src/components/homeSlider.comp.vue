<template>
  <div class="fit homebanner">
    <q-carousel swipeable animated v-model="slide" thumbnails infinite autoplay>
      <q-carousel-slide
        v-for="(ele,index) in elements"
        :key="index"
        :name="index"
        :img-src="ele.image.medium"
      >
        <div class="absolute-bottom custom-caption q-pa-sm">
          <div class="items-center">
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
          <div class="text-h2 text-white">{{ele.name}}</div>
          <div class="text-subtitle1 text-white">{{ele.language}}</div>
          <q-chip
            clickable
            color="teal"
            text-color="white"
            :to="{name:'singleGenres',params:{type:genres}}"
            v-for="(genre,index) in ele.genres"
            :key="index"
            icon="category"
          >{{genre}}</q-chip>
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
  text-align: center;
  padding: 12px;
  margin-bottom: 70px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
