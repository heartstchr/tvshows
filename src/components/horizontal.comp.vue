<template>
  <div class="col">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      arrows
      height="400px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img v-for="(tvshows,index) in genresTvShow.slice(0,4)" :key="index" class="rounded-borders col-md-3" :src="tvshows.image.medium" @click="details(tvshows.id)"/>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img v-for="(tvshows,index) in genresTvShow.slice(5,10)" :key="index" class="rounded-borders col-md-3" :src="tvshows.image.medium" @click="details(tvshows.id)" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img v-for="(tvshows,index) in genresTvShow.slice(11,15)" :key="index" class="rounded-borders col-md-3" :src="tvshows.image.medium" @click="details(tvshows.id)" />
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
      slide: 1
    };
  },
  props: {
    genresTvShow: Array
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
</style>
