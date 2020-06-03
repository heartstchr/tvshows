<template>
  <div class="row">
    <div v-for="(crew,index) in crews" :key="index" class="q-pb-sm col-md-4">
      <card :element="crew.person" :detail="details" :person="person" :type="crew.type"></card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/common/card.comp.vue";
export default {
  name: "Crew",
  data(){
    return {
      person:true,
      details: false
    }
  },
  props: {
    crews: Array
  },
  components: {
    Card
  }
};
</script>
<style scoped>
</style>
