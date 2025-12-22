<template>
  <div align="center" style="background: #f178b6; width: auto; height: 50px">
    <v-row align="center">
      <v-col align="center" cols="9" style="width: auto">
        <div style="text-align: center; justify-content: center">
          <p style="color: white; font-family: Kameron; line-height: 40px">
            Seja Bem vindo! Nos siga nas Redes sociais
          </p>
        </div>
      </v-col>

      <v-col cols="1" align="right" class="icon-social">
        <v-btn icon :href="layout.LinkTopFace.link" target="_blank">
          <v-icon> mdi-facebook </v-icon></v-btn
        >
        <!-- <a :href="layout.LinkTopFace.link" target="_blank"
          ><img src="\5.png" class="img-icon" alt=""
        /></a> -->
      </v-col>

      <v-col
        cols="1"
        align="right"
        style="margin-left: -20px"
        class="icon-social"
      >
        <v-btn icon :href="layout.LinkTopInsta.link" target="_blank">
          <v-icon> mdi-instagram </v-icon></v-btn
        >
        <!-- <a href="https://www.instagram.com/potent_nails/" target="_blank"
          ><img src="\4.png" class="img-icon" alt=""
        /></a> -->
      </v-col>
      <!-- <v-col cols="1" align="right" class="icon-social">
      <a href="https://www.instagram.com/potent_nails/" target="_blank"
        ><img src="\4.png" class="img-icon" alt=""
      /></a>
    </v-col> -->
      <!-- <v-col cols="1" align="right" class="icon-social">
      <a href="https://www.instagram.com/potent_nails/" target="_blank"
        ><img src="\phone.png" class="img-icon" alt=""
      /></a>
    </v-col> -->
      <!-- <v-col cols="1" align="right" class="icon-social">
      <a :href="layout.LinkTopFace.link" target="_blank"
        ><img src="\5.png" class="img-icon" alt=""
      /></a>
    </v-col> -->
      <!-- <v-col
        cols="1"
        align="left"
        style="margin-top: -20px; margin-right: 15px max-width: 900px"
      >
        <a :href="layout.floatingIcon.link" target="_blank"
          ><img src="\phone.png" style="height: 20px; margin-top: 2px" alt=""
        /></a>
      </v-col> -->
    </v-row>
  </div>
</template>
<style scoped>
.icon-social {
  margin-top: -20px;
  max-width: 1065px;
  margin-left: -30px;
}
.img-icon {
  height: 20px;
  margin-top: 2px;
}
@media screen and (max-width: 1268px) {
  .icon-social {
    margin-left: -20px;
  }
}
@media screen and (max-width: 1028px) {
  .icon-social {
    margin-left: -15px;
  }
  .img-icon {
    height: 18px;
  }
}
</style>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data: function () {
    return {
      name: "componentTop",
    };
  },
  computed: {
    ...mapState("Layouts", ["layout", "config"]),
    ...mapState("User", ["user"]),
    ...mapGetters("Cart", ["totalAmountInCart"]),
  },
};
</script>
