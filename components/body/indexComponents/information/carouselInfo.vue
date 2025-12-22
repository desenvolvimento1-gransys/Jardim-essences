<template>
  <information-two />
</template>

<script>
import InformationTwo from "@/components/body/indexComponents/information/components/informationTwo";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("Layouts", ["layout"]),
  },
  components: {
    InformationTwo,
  },
};
</script>

<style>
</style>