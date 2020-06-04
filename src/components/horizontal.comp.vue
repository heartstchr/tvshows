<template>
  <div class="col">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-type="regular"
      control-color="primary"
      control-text-color="white"
      arrows
      height="400px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="parentIndex" v-for="parentIndex in sets" :key="parentIndex">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img v-for="(tvshows,index) in getSetOfShows(parentIndex,5)" :key="index" class="rounded-borders col-md-3" :src="tvshows.image.medium" @click="details(tvshows.id)"/>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  name: "Horizontal",
  data() {
    return {
      slide: 1,
      sets:5
    };
  },
  props: {
    genresTvShow: Array
  },
  methods: {
    details(id) {
      this.$store.dispatch('getTvShowDetails',this.$route.params.id)
      this.$router.push({ name: "singleTvshows", params: { id: id } });
    },
    getSetOfShows(index){
      return this.genresTvShow ? this.genresTvShow.slice((index-1)*4,index*4): []
    }
  }
};
</script>

<style scoped>
</style>
