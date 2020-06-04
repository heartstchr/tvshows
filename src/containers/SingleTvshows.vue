<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="q-pa-md q-gutter-md">
          <div class="row justify-between">
            <q-parallax :height="500">
              <template v-slot:media class="fit">
                <img :src="tvshowsDetails.image.original" />
              </template>
              <div class="text-h5 absolute-bottom text-center">
                <q-btn
                  align="around"
                  rounded
                  class="btn-fixed-width"
                  size="xl"
                  color="primary"
                  label="Watch Now"
                  icon="play_arrow"
                  type="a"
                  :href="tvshowsDetails.url"
                  target="_blank"
                />
              </div>
            </q-parallax>
          </div>
        </div>
      </div>
      <div class="col-md-6 q-pa-md">
        <div class="text-h2">{{tvshowsDetails.name}}</div>
        <div class="text-subtitle2">
          <q-icon name="language" />
          {{tvshowsDetails.language}}
        </div>
        <div class="fit">
          <div class="text-subtitle2" v-if="tvshowsDetails.rating">
            <q-rating
              size="18px"
              v-model="tvshowsDetails.rating.average"
              :max="10"
              color="orange"
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
                v-for="(tab,index) in tabs"
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
              <q-tab-panel v-for="(tab,index) in tabs" :key="index" :name="tab.name">
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
  </div>
</template>

<style>
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import Episodes from "@/components/episodes.comp.vue";
import Cast from "@/components/cast.comp.vue";
import Crew from "@/components/crew.comp.vue";
export default {
  name: "SingleTvshows",
  data() {
    return {
      singleShow: {},
      tab: "episodes",
      splitterModel: 20
    };
  },
  mounted() {
    this.$store.dispatch("getTvShowDetails", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["tvshows", "tvshowsDetails", "seasons", "casts", "crews", "tabs"]),
    ...mapActions(['getTabs'])
  },
  components: {
    Episodes,
    Cast,
    Crew
  }
};
</script>
