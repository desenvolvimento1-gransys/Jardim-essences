<template>
  <span>
    <div>
      <loading v-if="deliverySpinner" />
    </div>

    <div
      style="
        width: 450px;
        max-height:  150px
        width: auto;
       
      "
      v-if="
        $vuetify.breakpoint.name !== 'xs' && $vuetify.breakpoint.name !== 'sm'
      "
    >
      <v-row
        align="left"
        justify="start"
        style="max-height: 150px; margin-bottom: -10px"
      >
        <v-col cols="5" md="5" sm="5" xl="5">
          <h4 class="calc-frete">Calcule o Frete</h4>
        </v-col>
      </v-row>
      <v-row align="left">
        <v-col cols="12" sm="12">
          <div class="div-input" style="display: flex; justify-content: left">
            <input
              type="text"
              :disabled="!product.grid[0]"
              color="black"
              label="CEP"
              placeholder="Digite seu CEP"
              style="
                font-size: 14px;
                font-weight: 200;
                border: 1px solid black;
                height: 40px;
                padding: 10px;
                width: 350px;
              "
              class="inputFrete"
              v-mask="'# # # # # - # # #'"
              v-model="cep"
              @click:clear="cep = 1"
              v-on:keydown.enter="cleanAndCalculate(cep)"
            />

            <v-btn
              :disabled="!product.grid[0]"
              @click="cleanAndCalculate(cep)"
              small
              tile
              style="height: 40px"
              color="black"
              ><v-icon color="white">mdi-arrow-right</v-icon></v-btn
            >
          </div>
          <!-- <span style="font-size: 10px; text-align: center"
                >Frete grátis para Fortaleza-CE</span
              > -->
        </v-col>
      </v-row>

      <v-row style="width: 425px">
        <v-col cols="12">
          <div class="cardFrete" v-if="isOpen">
            <v-row class="text-sizing" no-gutters justify="start">
              <v-col cols="1" class="mr-2">
                <v-icon color="black">mdi-truck</v-icon>
              </v-col>
              <v-col aria-colcount="10">
                <v-row no-gutters>
                  <v-col
                    style="
                      text-transform: uppercase;
                      color: black;
                      font-weight: bolder;
                      border-bottom: 1px solid grey;
                    "
                    cols="12"
                  >
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-row no-gutters>
                          <v-col cols="7"> Tipo: </v-col>
                          <v-col cols="3"> Prazo: </v-col>
                          <v-col cols="2"> Valor: </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row no-gutters>
                      <v-col
                        cols="12"
                        v-for="item in deliveryConsult"
                        :key="item.id"
                      >
                        <v-row no-gutters>
                          <v-col
                            cols="7"
                            style="
                              text-transform: uppercase;
                              color: black;
                              font-weight: bolder;
                            "
                          >
                            {{ item.type }}:
                          </v-col>
                          <v-col cols="3">{{ correctPlural(item.term) }}</v-col>
                          <v-col cols="2"
                            >R${{
                              parseFloat(item.price).toLocaleString("pt-BR", {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              })
                            }}
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>

    <div
      style="width: 80%; max-height: 400px; align-itens: center"
      v-if="$vuetify.breakpoint.name == 'sm'"
    >
      <v-row
        align="center"
        justify="center"
        style="max-height: 150px; margin-bottom: -10px"
      >
        <v-col cols="5" md="5" sm="5" xl="5">
          <h4 class="calc-frete">Calcule o Frete</h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" sm="12">
          <div class="div-input" style="display: flex; justify-content: center">
            <input
              type="text"
              :disabled="!product.grid[0]"
              color="black"
              label="CEP"
              placeholder="Digite seu CEP"
              style="
                font-size: 14px;
                font-weight: 200;
                border: 1px solid black;
                height: 40px;
                padding: 10px;
                width: 350px;
              "
              class="inputFrete"
              v-mask="'# # # # # - # # #'"
              v-model="cep"
              @click:clear="cep = 1"
              v-on:keydown.enter="cleanAndCalculate(cep)"
            />

            <v-btn
              :disabled="!product.grid[0]"
              @click="cleanAndCalculate(cep)"
              small
              tile
              style="height: 40px"
              color="black"
              ><v-icon color="white">mdi-arrow-right</v-icon></v-btn
            >
          </div>
          <!-- <span style="font-size: 10px; text-align: center"
                >Frete grátis para Fortaleza-CE</span
              > -->
        </v-col>
      </v-row>

      <v-row style="width: 425px" align="center">
        <v-col cols="12">
          <div class="cardFreteSM" v-if="isOpen">
            <v-row class="text-sizing" no-gutters justify="center">
              <v-col cols="1" class="mr-2">
                <v-icon color="black">mdi-truck</v-icon>
              </v-col>
              <v-col aria-colcount="10">
                <v-row no-gutters>
                  <v-col
                    style="
                      text-transform: uppercase;
                      color: black;
                      font-weight: bolder;
                      border-bottom: 1px solid grey;
                    "
                    cols="12"
                  >
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-row no-gutters>
                          <v-col cols="7"> Tipo: </v-col>
                          <v-col cols="3"> Prazo: </v-col>
                          <v-col cols="2"> Valor: </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row no-gutters>
                      <v-col
                        cols="12"
                        v-for="item in deliveryConsult"
                        :key="item.id"
                      >
                        <v-row no-gutters>
                          <v-col
                            cols="7"
                            style="
                              text-transform: uppercase;
                              color: black;
                              font-weight: bolder;
                            "
                          >
                            {{ item.type }}:
                          </v-col>
                          <v-col cols="3">{{ correctPlural(item.term) }}</v-col>
                          <v-col cols="2"
                            >R${{
                              parseFloat(item.price).toLocaleString("pt-BR", {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              })
                            }}
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>

    <div v-if="$vuetify.breakpoint.name == 'xs'">
      <v-row
        align="center"
        style="border-top: rgba(128, 128, 128, 0.308) 1px solid"
      >
        <v-col cols="12">
          <strong>Calcule o Frete</strong>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="div-input" style="display: flex; justify-content: center">
            <input
              type="text"
              :disabled="!product.grid[0]"
              color="black"
              label="CEP"
              placeholder="Digite seu CEP"
              style="
                font-size: 14px;
                font-weight: 200;
                border: 1px solid black;
                height: 40px;
                padding: 10px;
                width: auto;
              "
              class="inputFrete"
              v-mask="'# # # # # - # # #'"
              v-model="cep"
              @click:clear="cep = 1"
              v-on:keydown.enter="cleanAndCalculate(cep)"
            />

            <v-btn
              :disabled="!product.grid[0]"
              @click="cleanAndCalculate(cep)"
              small
              tile
              style="height: 40px"
              color="black"
              ><v-icon color="white">mdi-arrow-right</v-icon></v-btn
            >
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="cardFreteMobile" v-if="isOpen">
            <v-row class="text-sizing" no-gutters justify="start">
              <v-col cols="1" class="mr-2">
                <v-icon color="black">mdi-truck</v-icon>
              </v-col>
              <v-col aria-colcount="10">
                <v-row no-gutters>
                  <v-col
                    style="
                      text-transform: uppercase;
                      color: black;
                      font-weight: bolder;
                      border-bottom: 1px solid grey;
                    "
                    cols="12"
                  >
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-row no-gutters>
                          <v-col cols="7"> Tipo: </v-col>
                          <v-col cols="3"> Prazo: </v-col>
                          <v-col cols="2"> Valor: </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row no-gutters>
                      <v-col
                        cols="12"
                        v-for="item in deliveryConsult"
                        :key="item.id"
                      >
                        <v-row no-gutters>
                          <v-col
                            cols="7"
                            style="
                              text-transform: uppercase;
                              color: black;
                              font-weight: bolder;
                            "
                          >
                            {{ item.type }}:
                          </v-col>
                          <v-col cols="3">{{ correctPlural(item.term) }}</v-col>
                          <v-col cols="2"
                            >R${{
                              parseFloat(item.price).toLocaleString("pt-BR", {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              })
                            }}
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </span>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Loading from "@/components/loading";
export default {
  data: function () {
    return {
      cep: "",
      isOpen: false,
    };
  },
  components: {
    Loading,
  },
  computed: {
    ...mapState("Product", ["product", "deliverySpinner", "deliveryConsult"]),
  },
  watch: {
    cep: function () {
      if (this.cep && this.cep.length <= 0) {
        this.isOpen = false;
      } else if (!this.cep) {
        this.isOpen = false;
      }
    },
  },
  methods: {
    ...mapActions("Product", ["calculateProductDelivery"]),
    cleanAndCalculate(cep) {
      if (cep) {
        var res = cep.replace(/\D/g, "");

        this.calculateProductDelivery(res);

        this.isOpen = true;

        if (!this.deliveryConsult && !this.deliveryConsult.length > 0) {
          this.isOpen = false;
        }
      }
    },

    correctPlural(term) {
      if (term == 1) {
        return `${term} Dia`;
      } else {
        return `${term} Dias`;
      }
    },
  },
};
</script>

<style scoped>
.text-sizing {
  font-size: 13px;
}
.inputFrete {
  width: 100% !important;
}
.calc-frete {
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
}
.cardFrete {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  background-color: #f0e1e1;
  margin-top: -10px;
}

.cardFreteMobile {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  background-color: #f0e1e1;
}

.cardFreteSM {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  background-color: #f0e1e1;
  height: auto;
}

.v-text-field {
  padding-top: 0 !important;
  margin-top: 0 !important;
  color: transparent !important;
}
.v-text-field >>> .v-input__slot::before {
  border-color: black !important;
}

.v-text-field >>> input {
  color: black !important;
}

@media only screen and (max-width: 1470px) {
  .text-sizing {
    font-size: 11px;
  }
}
@media only screen and (max-width: 1070px) and (min-width: 960px) {
  .inputFrete {
    width: 250px !important;
  }
  .cardFrete {
    width: 300px !important;
  }
}

@media only screen and (max-width: 1212px) and (min-width: 960px) {
  .img-truck {
    height: 35px;
  }
  .calc-frete {
    font-size: 15px;
    text-align: center;
  }
  .txt-frete {
    font-size: 12px !important;
  }
}
@media only screen and (max-width: 960px) {
  .cardFrete {
    margin-left: -50px;
    width: 400px;
  }
}
</style>