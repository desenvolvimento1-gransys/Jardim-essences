<template>
  <div>
    <span class="nav-list" :style="layout.navBar.main">
      <span v-for="item in navBarList" :key="item.name">
        <v-menu transition="slide-x-transition" open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <router-link :to="`/busca${item.route}`" class="no-decoration">
              <li :style="layout.navBar.navText" v-on="on">
                {{ item.name }}
              </li>
            </router-link>
          </template>
          <span v-if="item.name !== 'Maquiagens a Preço único'">
            <v-list
              :style="layout.navBar.sub"
              class="nav-subitens-main-class"
              v-if="item.children && item.children.lenght > 0"
            >
              <v-list-item v-for="detail in item.children" :key="detail.name">
                <router-link
                  :to="`/busca${detail.route}`"
                  class="no-decoration"
                >
                  <v-list-item-title
                    :style="layout.navBar.subText"
                    class="ml-5 mr-5 nav-subitens"
                    >{{ detail.name }}</v-list-item-title
                  >
                </router-link>
              </v-list-item>
            </v-list>
          </span>
          <span v-else>
            <v-card>
              <h4>Lábios</h4>
              <v-row :style="layout.navBar.sub" class="nav-subitens-main-class">
                <v-col
                  cols="3"
                  v-for="detail in item.children"
                  :key="detail.name"
                  v-if="isLipProduct(detail)"
                >
                  <router-link
                    :to="`/busca${detail.route}`"
                    class="no-decoration"
                  >
                    <v-btn
                      text
                      block
                      depressed
                      :ripple="false"
                      class="nav-subitens"
                    >
                      <span>{{ detail.name }}</span>
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>

              <h4>Face</h4>
              <v-row :style="layout.navBar.sub" class="nav-subitens-main-class">
                <v-col
                  cols="3"
                  v-for="detail in item.children"
                  :key="detail.name"
                  v-if="isFaceProduct(detail)"
                >
                  <router-link
                    :to="`/busca${detail.route}`"
                    class="no-decoration"
                  >
                    <v-btn
                      text
                      block
                      depressed
                      :ripple="false"
                      class="nav-subitens"
                    >
                      <span>{{ detail.name }}</span>
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>

              <h4>Olhos</h4>
              <v-row :style="layout.navBar.sub" class="nav-subitens-main-class">
                <v-col
                  cols="3"
                  v-for="detail in item.children"
                  :key="detail.name"
                  v-if="isEyersProduct(detail)"
                >
                  <router-link
                    :to="`/busca${detail.route}`"
                    class="no-decoration"
                  >
                    <v-btn
                      text
                      block
                      depressed
                      :ripple="false"
                      class="nav-subitens"
                    >
                      <span>{{ detail.name }}</span>
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>
            </v-card>
          </span>
        </v-menu>
      </span>
    </span>
  </div>
</template>


<script src='./../navBarjs'/>

<style scoped>
.nav-list {
  display: flex;
  justify-content: center;
}

.nav-list li {
  text-decoration: none !important;
  list-style-type: none;
}
.nav-subitens:hover .selection-line {
  animation-name: grow;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
</style>