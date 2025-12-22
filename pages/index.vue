<template>
  <span translate="no">
    <carousel v-show="!spinner" />
    <information v-show="!spinner" />
    <categories v-show="!spinner" />
    <PerfumeTypes  v-show="!spinner" />
    <search v-show="!spinner" />
    <MoreCategories  v-show="!spinner" />
    <customer-comments v-show="!spinner" />
  </span>
</template>

<script>
import Carousel from "@/components/body/indexComponents/carousel/carousel";
import Information from "@/components/body/indexComponents/information/information";
import Categories from "@/components/body/indexComponents/categorySession/categories";
import Search from "@/components/body/productSession/search/indexSearch";
import CustomerComments from "@/components/utils/customerComment";
import { mapState } from "vuex";
import MoreCategories from "../components/body/indexComponents/information/moreCategories.vue";
import PerfumeTypes from "../components/body/indexComponents/information/components/PerfumeTypes.vue";

export default {
  computed: {
    ...mapState("Utils", ["spinner"]),
  },
  components: {
    Carousel,
    PerfumeTypes,
    MoreCategories,
    Information,
    Categories,
    Search,
    CustomerComments,
  },
};
</script>
