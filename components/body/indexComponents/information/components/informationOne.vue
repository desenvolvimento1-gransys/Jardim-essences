<template>
  <div
    style="
      margin-bottom: -40px;
      max-width: 1300px !important;
      margin: 50px auto !important;
    "
  >
    <!-- Desktop -->

    <div class="px-5 d-none d-md-block">
      <v-row
      justify="center"  
      align="center"    
    >
      <v-col
        v-for="item in layout.index.carouselInformation.list.pageOne"
        :key="item.id"
        cols="3"
      >
        <v-row no-gutters>
          <v-col cols="3">
            <img
              width="40px"
              height="40px"
              :src="item.icon.src"
              loading="lazy"
            />
          </v-col>
          <v-col cols="9">
            <v-row no-gutters>
              <v-col cols="12">
                <span :style="item.boldText.style">{{
                  item.boldText.string
                }}</span>
              </v-col>
              <v-col cols="12">
                <span :style="item.regularText.style"
                  >{{ item.regularText.string }}
                  <a
                    v-if="item.link"
                    :href="item.link.href"
                    :style="item.link.style"
                    >{{ item.link.string }}</a
                  ></span
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        v-for="item in layout.index.carouselInformation.list.pageTwo"
        :key="item.id"
        cols="3"
      >
        <v-row no-gutters>
          <v-col cols="3">
            <img
              width="40px"
              height="40px"
              :src="item.icon.src"
              loading="lazy"
            />
          </v-col>
          <v-col cols="9">
            <v-row no-gutters>
              <v-col cols="12">
                <span :style="item.boldText.style">{{
                  item.boldText.string
                }}</span>
              </v-col>
              <v-col cols="12">
                <span :style="item.regularText.style"
                  >{{ item.regularText.string }}
                  <a
                    v-if="item.link"
                    :href="item.link.href"
                    :style="item.link.style"
                    >{{ item.link.string }}</a
                  ></span
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
    </div>

    <!-- Tablet -->

    <v-carousel
      light
      hide-delimiter-background
      hide-delimiters
      class="d-none d-sm-block d-md-none"
      height="95px"
      :show-arrows="false"
      interval="2000"
      cycle
    >
      <v-carousel-item>
        <v-container>
          <v-row no-gutters>
            <v-col
              cols="6"
              v-for="item in layout.index.carouselInformation.list.pageOne"
              :key="item.id"
            >
              <v-row no-gutters justify="center">
                <v-col cols="2">
                  <img
                    width="40px"
                    height="40px"
                    :src="item.icon.src"
                    loading="lazy"
                  />
                </v-col>
                <v-col cols="6">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <span :style="item.boldText.style">{{
                        item.boldText.string
                      }}</span>
                    </v-col>
                    <v-col cols="12">
                      <span :style="item.regularText.style"
                        >{{ item.regularText.string }}
                        <a
                          v-if="item.link"
                          :href="item.link.href"
                          :style="item.link.style"
                          >{{ item.link.string }}</a
                        ></span
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-carousel-item>
        <v-container>
          <v-row no-gutters justify="space-around">
            <v-col
              cols="5"
              v-for="item in layout.index.carouselInformation.list.pageTwo"
              :key="item.id"
            >
              <v-row no-gutters>
                <v-col cols="2">
                  <img width="40px" height="40px" :src="item.icon.src" />
                </v-col>
                <v-col cols="10">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <span :style="item.boldText.style">{{
                        item.boldText.string
                      }}</span>
                    </v-col>
                    <v-col cols="12">
                      <span :style="item.regularText.style"
                        >{{ item.regularText.string }}
                        <a
                          v-if="item.link"
                          :href="item.link.href"
                          :style="item.link.style"
                          >{{ item.link.string }}</a
                        ></span
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>

    <!-- Mobile -->

    <v-carousel
      style="margin-top: -30px; margin-bottom: -40px !important"
      light
      hide-delimiter-background
      hide-delimiters
      class="d-block d-sm-none"
      height="80px"
      :show-arrows="false"
      interval="2500"
      cycle
    >
      <v-carousel-item
        v-for="item in layout.index.carouselInformation.list.pageOne"
        :key="item.id"
      >
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" align="center">
              <v-row no-gutters justify="center">
                <v-col cols="2" align="right">
                  <img width="40px" height="40px" :src="item.icon.src" />
                </v-col>
                <v-col cols="6">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <span :style="item.boldText.style">{{
                        item.boldText.string
                      }}</span>
                    </v-col>
                    <v-col cols="12">
                      <span class="text-sizing" :style="item.regularText.style"
                        >{{ item.regularText.string }}
                        <a
                          v-if="item.link"
                          :href="item.link.href"
                          :style="item.link.style"
                          >{{ item.link.string }}</a
                        ></span
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-carousel-item
        v-for="item in layout.index.carouselInformation.list.pageTwo"
        :key="item.id"
      >
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" align="center">
              <v-row no-gutters justify="center">
                <v-col cols="2" align="right">
                  <img
                    width="40px"
                    height="40px"
                    :src="item.icon.src"
                    loading="lazy"
                  />
                </v-col>
                <v-col cols="8">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <span :style="item.boldText.style">{{
                        item.boldText.string
                      }}</span>
                    </v-col>
                    <v-col cols="12">
                      <span class="text-sizing" :style="item.regularText.style"
                        >{{ item.regularText.string }}
                        <a
                          v-if="item.link"
                          :href="item.link.href"
                          :style="item.link.style"
                          >{{ item.link.string }}</a
                        ></span
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("Layouts", ["layout"]),
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .text-sizing {
    font-size: 12px !important;
  }
}
</style>