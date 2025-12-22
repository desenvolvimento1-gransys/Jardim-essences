<template>
  <v-app-bar
    scroll-off-screen
    height="30px"
    v-if="$vuetify.breakpoint.name !== 'xs'"
    flat
    color="#E4E0DD"
  >
    <v-row
      class="d-none d-md-flex adjust-top"
      no-gutters
      cols="12"
      justify="space-around"
    >
      <v-col cols="12" md="9" :style="layout.index.information.colClass">
        <span v-for="(item, i) in layout.index.information.items" :key="i">
          <span>
            <i :style="layout.index.information.icons" :class="item.icon"></i>
          </span>
          <span class="teste" :style="layout.index.information.boldText">{{
            item.bold
          }}</span>

          <span :style="layout.index.information.text">
            {{ item.text }}
          </span>
          &nbsp; &nbsp; &nbsp; &nbsp;
        </span>
      </v-col>
      <v-col class="d-none d-md-block" cols="3" align="right">
        <span
          v-for="(item, index) in layout.footer.logoSession.midiaLinks"
          :key="index"
        >
          &nbsp;
          <a :href="item.href">
            <i style="font-size: 19px; color: black" :class="item.icon"></i>
          </a>
        </span>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
  
  <script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("Layouts", ["layout"]),
  },
};
</script>
  
  <style>
.teste {
  padding: 0 0 100px 0 !important;
}
.nav-list {
  display: flex;
  justify-content: center;
}
.nav-list li {
  text-decoration: none !important;
  list-style-type: none;
}
</style>