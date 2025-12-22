<template>
  <span :style="layout.topBar.main" style="margin-bottom: 30px">
    <!-- <componentTop /> -->
    <v-row :style="layout.topBar.sizes" class="adjust-top" align="center">
      <v-col cols="3" class="psb-3" align="center">
        <v-row justify="end">
          <v-col cols="11" lg="8" align="center">
            <router-link to="/">
              <img  v-if="typeLogo.items && typeLogo.items.length"
   :style="layout.topBar.topBarLogoImg"
  :src="typeLogo.items[0].src"
  alt="Logo da topBar"
/>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5" align="center">
        <v-text-field
          flat
          solo
          dense
          hide-details
          v-model="searchText"
          v-on:keydown.enter="search()"
          :style="layout.topBar.searchInput"
          placeholder="Busque seu produto!"
        >
          <template v-slot:append>
            <v-icon
              x-large
              @click="search()"
              :style="layout.topBar.searchInputBtn"
              >mdi-magnify</v-icon
            >
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="3" align-self="center" align="center">
        <v-row no-gutters justify="center">
          <v-col cols="4" align="center">
            <router-link
              style="text-decoration: none; color: black"
              to="/conta/minha-conta"
              v-if="user.id"
            >
              <v-img width="35" height="35" src="/Icons/3.png" />
              <small>CONTA</small>
            </router-link>
            <router-link
              v-else
              style="text-decoration: none; color: black"
              to="/login"
            >
              <v-img width="35" height="35" src="/Icons/3.png" />
              <small style="font-family: Lato, sans-serif !important"
                >ENTRAR</small
              >
            </router-link>
          </v-col>
          <v-col cols="4" align="center">
            <v-menu
              offset-y
              nudge-left="200"
              min-width="450"
              max-width="450"
              max-height="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="container-class"
                  style="display: flex; position: relative"
                >
                  <a
                    style="text-decoration: none; color: black"
                    @click="showCart()"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-img width="35" height="35" src="/Icons/2.png" />
                    <small>MEU CARRINHO</small>
                  </a>
                  <div class="item-cart-amount" v-if="totalAmountInCart > 0">
                    {{ totalAmountInCart }}
                  </div>
                </div>
              </template>
            </v-menu>
          </v-col>

          <v-col cols="4" align="center">
            <router-link
              style="text-decoration: none; color: black"
              :to="checkUser()"
            >
              <v-img width="35" height="35" src="/Icons/pedido.png" />
              <small>PEDIDOS</small>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </span>
  <!-- <h1>teste</h1> -->
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import componentTop from "@/components/header/topBar/components/Desktop/componentTopbar";

export default {
  data: function () {
    return {
      searchText: "",
    };
  },
  components: {
    componentTop,
  },
  computed: {
    ...mapState("Layouts", ["layout", "config"]),
        ...mapState("Settings", ["typeLogo"]),
    ...mapState("User", ["user"]),
    ...mapGetters("Cart", ["totalAmountInCart"]),
  },
  methods: {
    ...mapActions("Cart", ["setCartModal"]),
    search() {
      if (this.searchText && this.searchText.length > 0) {
        $nuxt.$router.push(`/busca/texto/${this.searchText}`);
        this.searchText = "";
      }
    },
    checkUser() {
      if (this.user.id) {
        return "/conta/pedidos";
      } else {
        return "/login";
      }
    },
    showCart() {
      if (this.config.showModalInClickCartIcon) {
        this.setCartModal(true);
      } else {
        $nuxt.$router.push({ path: "/carrinho" });
      }
    },
  },
};
</script>

<style scoped>
.cart-icon {
  font-size: 29px;
}

.user-icon {
  font-size: 17px;
}

.order-class {
  font-size: 19px;
}
.item-cart-amount {
  color: black;
  text-align: center;
  padding-bottom: 24px !important;
  font-size: 15px;
  /* top: 5px; */
  bottom: 21px;
  right: 20px;
  position: absolute;
  background: #e4e0dd !important;
  width: 22px;
  height: 15px !important;
  border-radius: 30px;
  /* z-index: 100; */
}
/* .icones {
  margin-left: 5px;
} */

@media screen and (max-width: 1284px) {
  .item-cart-amount {
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 15px;
    /* top: 5px; */
    top: 15px;
    right: 10px;
    position: absolute;
    background: #e182b7 !important;
    width: 22px;
    height: 15px !important;
    border-radius: 30px;
    /* z-index: 100; */
  }
}

@media screen and (max-width: 1000px) {
  .item-cart-amount {
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 15px;
    /* top: 5px; */
    top: 17px;
    right: 5px;
    position: absolute;
    background: #e182b7 !important;
    width: 22px;
    height: 15px !important;
    border-radius: 30px;
    /* z-index: 100; */
  }
}
</style>