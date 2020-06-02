<template>
  <q-page>
    <div class="row">
      <div class="col-md-6 ">
        <q-parallax :height="400">
          <template v-slot:media class="fit">
            <img :src="tvshowsDetails.image.original" />
          </template>
        </q-parallax>
      </div>
      <div class="col-md-6 q-pa-md">
        <div class="fit row wrap justify-center items-center content-center">
          <h5 class="text-white text-title">{{tvshowsDetails.name}}</h5>
          <div class="text-subtitle2">{{tvshowsDetails.language}}</div>
          <div class="text-subtitle2 row no-wrap items-center">
            <q-rating
              size="18px"
              v-model="tvshowsDetails.rating.average"
              :max="10"
              color="primary"
              readonly
            />
            <span class="text-caption text-grey q-ml-sm">{{tvshowsDetails.rating.average}}</span>
          </div>
          <div class="text-subtitle2" v-html="tvshowsDetails.summary"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="q-pa-md">
        <q-splitter v-model="splitterModel" style="height: 650px">
          <template v-slot:before>
            <q-tabs v-model="tab" vertical class="text-teal">
              <q-tab
                v-for="(tab,index) in getTabs"
                :key="index"
                class="text-primary"
                :icon="tab.icon"
                :name="tab.name"
                :label="tab.name"
              />
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              transition-prev="jump-up"
              transition-next="jump-up"
            >
              <q-tab-panel v-for="(tab,index) in getTabs" :key="index" :name="tab.name">
                <div class="text-h4 q-mb-md text-uppercase">{{tab.name}}</div>
                <div v-if="tab.name==='episodes'">
                  <episodes :seasons="seasons" />
                </div>
                <div v-if="tab.name==='cast'">
                  <cast :casts="casts" />
                </div>
                <div v-if="tab.name==='crew'">
                  <crew :crews="crews" />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from "vuex";
import Episodes from "@/components/episodes.comp.vue";
import Cast from "@/components/cast.comp.vue";
import Crew from "@/components/crew.comp.vue";
export default {
  name: "SingleTvshows",
  data() {
    return {
      singleShow: {},
      tab: "episodes",
      splitterModel: 20,
      tabs: []
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.$store.dispatch("getTvShowDetails", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["tvshows", "tvshowsDetails", "seasons", "casts", "crews"]),
    tvShowItem: function() {
      return this.tvshows.filter(ele => {
        return ele.id == this.$route.params.id;
      })[0];
    },
    getTabs: function() {
      let tabs = [];
      let icons = {
        episodes: "ondemand_video",
        cast: "cast",
        crew: "streetview",
        image: "tv"
      };
      Object.keys(this.tvshowsDetails._embedded).forEach(ele => {
        tabs.push({ name: ele, icon: icons[ele] });
      });
      return tabs;
    }
  },
  components: {
    Episodes,
    Cast,
    Crew
  }
};
</script>
