<template>
  <div class="row">
    <div v-for="(cast,index) in casts" :key="index" class="q-pb-sm col-md-4">
      <card :element="cast.person" :detail="details" :person="person"></card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/common/card.comp.vue";
export default {
  name: "Cast",
  data(){
    return {
      person:true
    }
  },
  props: {
    casts: Array
  },
  components: {
    Card
  }
};
</script>
<style scoped>
</style>
