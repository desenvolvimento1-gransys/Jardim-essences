<template>
  <span>
    <div v-if="extension == false" :style="layout.topBar.mobile.main">
      <hr style="height: 15px; color: #e4e0dd" />
      <v-row style="width: 100%" align="center">
        <v-col
          cols="2"
          align-self="center"
          align="center"
          style="margin-top: -12px"
        >
          <button
            v-if="primaryDrawer.type !== 'permanent'"
            @click.stop="primaryDrawer.model = !primaryDrawer.model"
          >
            <i
              :style="layout.topBar.mobile.navIcon.style"
              :class="layout.topBar.mobile.navIcon.icon"
            ></i>
          </button>
        </v-col>
        <v-col
          cols="6"
          align="left"
          align-self="center"
          style="margin-top: -8px"
        >
          <router-link to="/">
           <img
  v-if="typeLogo.items && typeLogo.items.length"
  :style="layout.topBar.mobile.logoStyle"
  :src="typeLogo.items[0].src"
  alt="Logo da topBar"
/>

          </router-link>
        </v-col>
        <v-col cols="4" align="center" align-self="center">
          <v-row align="center">
            <div class="itens-icon" style="display: flex; margin: auto">
              <v-col cols="3" style="margin-top: -8px">
                <v-row
                  dense
                  v-for="(item, index) in layout.navBar.mobile.linkList"
                  :key="index"
                >
                  <v-col cols="12">
                    <v-input hide-details>
                      <router-link
                        v-if="user.id"
                        to="/conta/minha-conta"
                        :style="item.style"
                      >
                        <img src="/Icons/3.png" height="25px" alt="" />
                      </router-link>
                      <router-link v-else to="/login" :style="item.style">
                        <img src="/Icons/3.png" height="25px" alt="" />
                      </router-link>
                    </v-input>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="3" style="margin-top: -4px">
                <button @click="setCartModal(true)" style="position: relative">
                  <img src="/Icons/2.png" height="25px" alt="" />

                  <div class="item-cart-amount" v-if="totalAmountInCart > 0">
                    {{ totalAmountInCart }}
                  </div>
                </button>
              </v-col>
              <v-col cols="3" style="margin-top: -1px">
                <img
                  @click="extension = !extension"
                  src="/Icons/1.png"
                  height="20px"
                  alt=""
                />
              </v-col>
            </div>
          </v-row>
        </v-col>
      </v-row>
      <template v-if="extension">
        <v-row>
          <v-col align="center" cols="12">
            <v-container>
              <v-text-field
                flat
                solo
                hide-details
                v-model="searchText"
                v-on:keydown.enter="search()"
                class="txt-mobile"
                placeholder="Busque seu produto!"
              >
                <template v-slot:append>
                  <v-btn
                    icon
                    @click="search()"
                    :style="layout.topBar.searchInputBtn"
                  >
                    <img src="\Lupa.png" height="20px" alt="" />
                  </v-btn>
                </template>
              </v-text-field>
            </v-container>
          </v-col>
        </v-row>
      </template>
    </div>

    <div
      v-else
      style="
        height: auto !important;
        background-color:#f178b6; text-align: center;
      "
    >
      <hr style="height: 15px; color: #e4e0dd" />

      <v-row style="width: 100%" align="center">
        <v-col cols="2" align-self="center" align="center">
          <button
            v-if="primaryDrawer.type !== 'permanent'"
            @click.stop="primaryDrawer.model = !primaryDrawer.model"
          >
            <i
              :style="layout.topBar.mobile.navIcon.style"
              :class="layout.topBar.mobile.navIcon.icon"
            ></i>
          </button>
        </v-col>
        <v-col
          cols="6"
          align="left"
          align-self="center"
          style="margin-top: 10px"
        >
          <router-link to="/">
            <img
              :style="layout.topBar.mobile.logoStyle"
              :src="layout.topBar.mobile.logoUrl"
              alt="Logo da topBar"
            />
          </router-link>
        </v-col>
        <v-col cols="4" align="center" align-self="center">
          <v-row align="center">
            <div class="itens-icon" style="display: flex; margin: auto">
              <v-col cols="3" style="margin-top: -6px">
                <span v-if="user.id">
                  <v-row
                    dense
                    v-for="(item, index) in layout.navBar.mobile.linkList"
                    :key="index"
                  >
                    <v-col cols="12">
                      <v-input hide-details>
                        <router-link to="/conta/minha-conta">
                          <v-icon style="color: white">{{
                            item.icon.class
                          }}</v-icon>
                        </router-link></v-input
                      >
                    </v-col>
                  </v-row>
                </span>

                <v-row
                  v-else
                  dense
                  v-for="(item, index) in layout.navBar.mobile.linkList"
                  :key="index"
                >
                  <v-col cols="12">
                    <v-input hide-details>
                      <router-link to="/login" :style="item.style">
                        <img
                          src="/Icons/3.png"
                          height="25px"
                          alt=""
                        /> </router-link
                    ></v-input>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="3" style="margin-top: 0px">
                <button @click="setCartModal(true)">
                  <img src="/Icons/2.png" height="25px" alt="" />

                  <!-- <span :style="layout.topBar.cartText">
                    {{ totalAmountInCart }}</span
                  > -->
                </button>
              </v-col>
              <v-col cols="3" style="margin-top: 0px">
                <img
                  @click="extension = !extension"
                  src="/Icons/1.png"
                  height="20px"
                  alt=""
                />
              </v-col>
            </div>
          </v-row>
        </v-col>
      </v-row>
      <template v-if="extension">
        <v-row>
          <v-col align="center" cols="12">
            <v-container>
              <v-text-field
                flat
                solo
                hide-details
                v-model="searchText"
                v-on:keydown.enter="search()"
                class="txt-mobile"
                placeholder="Busque seu produto!"
              >
                <template v-slot:append>
                  <v-btn
                    icon
                    @click="search()"
                    :style="layout.topBar.searchInputBtn"
                  >
                    <img src="Lupa.png" height="20px" alt="" />
                  </v-btn>
                </template>
              </v-text-field>
            </v-container>
          </v-col>
        </v-row>
      </template>
    </div>

    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      class="drawer"
    >
      <nav-bar-one />
    </v-navigation-drawer>
  </span>
</template>
<style scoped>
.txt-mobile {
  border-radius: 50px;
}
.item-cart-amount {
  color: black;
  text-align: center;
  padding-bottom: 16px !important;
  font-size: 12px;
  /* top: 15px; */
  bottom: 25px;
  left: 20px;
  position: absolute;
  background: rgba(255, 255, 255, 0.872) !important;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  /* z-index: 100; */
}
</style>
<script>
import NavBarOne from "@/components/header/navBar/components/mobile/navBarOne";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    NavBarOne,
  },
  data: function () {
    return {
      searchText: "",
      extension: false,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      drawers: ["Default (no property)", "Permanent", "Temporary"],
      primaryDrawer: {
        model: null,
        type: "temporary",
        clipped: true,
        floating: false,
        mini: false,
      },
    };
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