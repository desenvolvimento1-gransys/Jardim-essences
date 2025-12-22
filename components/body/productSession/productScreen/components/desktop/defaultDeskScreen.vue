<template>
  <div v-if="!load" :style="layout.productPage.mainStyle" translate="no">
    <v-row no-gutters justify="center">
      <v-col :style="layout.productPage.availableImgColStyle" cols="12" md="7">
        <v-row no-gutters justify="center">
          <v-col cols="3" class="mr-5">
            <v-row no-gutters justify="end" class="thumbnail-sizing">
              <v-col cols="12" lg="8" class="thumbnail-scroll">
                <span v-for="(item, index) in availablesImgs" :key="index">
                  <v-card
                    tile
                    :style="layout.productPage.availableImgCardStyle"
                    @click="setSelectedImg(item.name)"
                    class="mb-5"
                  >
                    <v-img
                      contain
                      class="thumbnail"
                      :style="layout.productPage.availableImgStyle"
                      :src="item.url300px"
                      aspect-ratio="0.9"
                      alt="Thumbnail da imagem do produto"
                    ></v-img>
                  </v-card>
                </span>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            :style="layout.productPage.selectedImgColStyle"
            class="no-padding"
            cols="8"
            xl="7"
          >
            <zoom-on-hover
              class="magnifier"
              :img-normal="selectedUrlImg.highQuality"
              :scale="1.5"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="no-padding"
        :style="layout.productPage.informationColStyle"
        cols="4"
      >
        <p
          :style="layout.productPage.productNameStyle"
          :class="layout.productPage.productNameClass"
        >
          {{ product.name }}
        </p>
        <p
          v-if="config.product.showBrandInProductPage && product.brand_name"
          :style="layout.productPage.brand.style"
          :class="layout.productPage.brand.class"
        >
          Marca: {{ product.brand_name }}
        </p>
        <p
          v-if="layout.productPage.ref.show && product.ref"
          :style="layout.productPage.ref.style"
          :class="layout.productPage.ref.class"
        >
          Ref: {{ product.ref }}
        </p>
        <p
          v-if="product.balance < 1"
          :style="layout.productPage.noStock.style"
          :class="layout.productPage.noStock.class"
        >
          {{ layout.productPage.noStock.name }}
        </p>
        <div :style="layout.productPage.priceAndBuy.mainStyle">
          <v-row>
            <v-col cols="5">
              <span
                v-if="
                  product.actived_promotions &&
                  product.actived_promotions.length >= 1
                "
              >
                <strike>
                  R$
                  {{
                    (
                      parseFloat(product.actived_promotions[0].discount_value) +
                      parseFloat(product.price)
                    ).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </strike>
                <p :style="layout.productPage.priceAndBuy.priceStyle">
                  R$
                  {{
                    parseFloat(product.price).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </p>
              </span>

              <span v-else>
                <!-- <strike>
                  R$
                  {{
                    (
                      parseFloat(product.price) -
                      calculateDiscountRate(product.price)
                    ).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </strike> -->

                <p :style="layout.productPage.priceAndBuy.priceStyle">
                  R$
                  {{
                    parseFloat(product.price).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </p>
              </span>
              <p
                v-if="layout.productPage.priceAndBuy.installments"
                :style="layout.productPage.priceAndBuy.installmentStyle"
              >
                ou {{ maximumInstallment }}x de R${{ minimumValue }}
              </p>
            </v-col>
            <!-- <v-col cols="7" align-self="center">
              <v-btn
                @click="setGridIdAndAddItemInCart()"
                :disabled="product.balance < 1"
                :style="layout.productPage.priceAndBuy.buyBtnStyle"
                >Comprar</v-btn
              >
            </v-col> -->
            <v-col
              cols="12"
              v-if="productVariation.length > 0"
              :style="layout.productPage.color.variationStyle"
            >
              <p
                :style="layout.productPage.productNameStyle"
                :class="layout.productPage.productNameClass"
              >
                Variações
              </p>
              <span v-for="(item, index) in productVariation" :key="index">
                <v-btn
                  @click="callVariationRoute(item.product_id, item.name)"
                  :class="selectVariationButtonClass(item.product_id)"
                >
                  {{ item.variation_value }}
                </v-btn>
                <!-- {{ item }} <br /> -->
              </span>
            </v-col>

            <div v-if="product.delivery_rule == 1">
              <v-col v-if="fobOptions.addFreightByTheBuyerInDefaultDeskScreen">
                <span
                  v-if="fobOptions.AddtextFreightByFOB"
                  class="txt-freight-buyer"
                  >{{ fobOptions.textFreightByFOB }}</span
                >
                <br />
                <a
                  v-if="this.fobOptions.buttonFreightByTheBuyer"
                  target="_blank"
                  :href="whattsLink"
                  style="color: red; font-weight: bold"
                >
                  {{ fobOptions.textButtonFreightByTheBuyer }}
                </a>
              </v-col>
            </div>
          </v-row>
        </div>
        <!-- <p>
          <warn-me
            v-if="product.balance < 1"
            btntext="Avise-me quando chegar"
          />
        </p> -->

        <v-expansion-panels
          v-model="panel"
          :readonly="readonly"
          flat
          style="margin-left: -22px"
          v-if="
            availablesCodeColors[0] &&
            (config.product.showColorIfOnlyOne ||
              availablesCodeColors.length > 1) &&
            product.balance > 0 &&
            !(
              availablesCodeColors.length == 1 &&
              selectedColorName == 'N/A' &&
              !config.product.showColorIfNA
            )
          "
          :style="layout.productPage.color.mainStyle"
        >
          <v-expansion-panel>
            <v-expansion-panel-header
              :style="layout.productPage.color.titleStyle"
              :class="layout.productPage.color.titleClass"
              style="background-color: #e4e0dd"
              >Cores</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div style="margin-top: 5px">
                <span
                  v-for="(item, index) in availablesCodeColors"
                  :key="index"
                  class="gs-color-btn-container"
                >
                  <v-btn
                    tile
                    v-if="item"
                    @click="setSelectedColor(item)"
                    class="gs-color-btn"
                    :style="
                      setColorBtnStyle(
                        '',
                        item,
                        layout.productPage.color.selectedBtnStyle
                      )
                    "
                  >
                    <span
                      class="gs-second-color"
                      :style="`background-color: ${setSecondColor(item)}`"
                    >
                    </span>
                  </v-btn>
                  <!-- </span> -->
                </span>
              </div>
              <small>{{ selectedColorName }}</small>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels
          v-model="panel"
          :readonly="readonly"
          flat
          style="margin-left: -22px"
        >
          <v-expansion-panel
            v-if="
              ordenateAvailablesSizes[0] &&
              (config.product.showSizeIfOnlyOne ||
                ordenateAvailablesSizes.length > 1) &&
              product.balance > 0 &&
              !(
                ordenateAvailablesSizes.length == 1 &&
                ordenateAvailablesSizes[0] == 'N/A' &&
                !config.product.showSizeIfNA
              )
            "
            :style="layout.productPage.size.mainStyle"
          >
            <v-expansion-panel-header
              :style="layout.productPage.size.titleStyle"
              :class="layout.productPage.size.titleClass"
              style="background-color: #e4e0dd"
            >
              Tamanhos Disponiveis :
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div>
                <span
                  v-for="(item, index) in ordenateAvailablesSizes"
                  :key="index"
                >
                  <v-btn
                    tile
                    v-if="item"
                    :style="
                      setSizeBtnStyle(
                        layout.productPage.size.btn.defaultStyle,
                        layout.productPage.size.btn.selectedStyle,
                        item,
                        !enabledSizes.includes(item),
                        layout.productPage.size.btn.disabledStyle
                      )
                    "
                    @click="setSelectedSize(item)"
                    :disabled="!enabledSizes.includes(item)"
                  >
                    {{ item }}
                  </v-btn>
                </span>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-row align="center">
          <v-col
            cols="3"
            align-self="center"
            align="center"
            style="margin-left: 17px; margin-bottom: -15px"
          >
            <span style="font-weight: bold">QTD</span>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="4" class="pr-0 py-0" align-self="center">
            <div class="gs-amount-input py-2">
              <v-row align="center">
                <v-col cols="4" class="pa-0 pl-2" align="left">
                  <v-btn icon style="" @click="decreaseProductAmount">
                    <i style="font-size: 20px" class="fas fa-minus"></i>
                  </v-btn>
                </v-col>

                <v-col class="pa-0" cols="2" align-self="center" align="center">
                  <input
                    v-model="productAmount"
                    style="
                      max-width: 50px;
                      width: auto;
                      border: 1px solid grey;
                      border-radius: 10px;
                      text-align: center;
                      height: 45px;
                    "
                    type="text"
                    outlined
                    @keyup="validateAmountInput"
                    id="productAmountInput"
                  />
                </v-col>

                <v-col cols="4" class="pa-0 pl-2" align="right">
                  <v-btn
                    icon
                    style="width: auto"
                    @click="increaseProductAmount"
                  >
                    <i style="font-size: 20px" class="fas fa-plus"></i>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <br />
          <v-col cols="8" align-self="center" class="pl-0">
            <v-btn
              @click="setGridIdAndAddItemInCart(productAmount)"
              :disabled="product.balance < 1"
              :style="layout.productPage.priceAndBuy.buyBtnStyle"
              tile
              depressed
              style="border-radius: 30px"
              >Comprar</v-btn
            >
          </v-col>
        </v-row>
        <atribute-component
          v-if="config.atribute && config.atribute.show"
          :atributes="product.product_atribute"
        />
        <div>
          <v-col cols="12">
            <deliveryCalculator />
          </v-col>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" style="margin-top: 5vh; margin-left: 30px">
      <v-col cols="12">
        <div style="width: 100%">
          <div style="font-size: 20px">
            <v-card style="margin-right: 30px">
              <v-tabs
                background-color="#E4E0DD"
                center-active
                dark
                class="tab"
                style="width: 100%; overflow: hidden"
              >
                <button
                  class="btn-Description"
                  :style="showSelectedDescriptionStyleButton(1)"
                  @click="ShowTabDescription(1)"
                >
                  Descrição
                </button>

                <button
                  v-if="product.optional_description"
                  :style="showSelectedDescriptionStyleButton(2)"
                  @click="ShowTabDescription(2)"
                  class="btn-Description"
                >
                  Informações adicionais
                </button>
              </v-tabs>

              <br />
              <div class="txtDescriptionCard">
                <span
                  style="
                    text-overflow: Ellipsis;
                    word-wrap: break-Word;
                    overflow: hidden;
                    max-height: 3.6em;

                    line-height: 1.8em;
                  "
                >
                  <p style="white-space: pre-line">
                    {{ selectedProductDescription }}
                  </p>
                </span>
              </div>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AtribueComponent from "@/components/body/productSession/productScreen/components/others/atributeComponent";
import deliveryCalculator from "@/components/body/productSession/productScreen/components/others/deliveryCalculator";
import WarnMe from "@/components/body/productSession/productScreen/components/others/warnMe";

export default {
  components: {
    AtribueComponent,
    deliveryCalculator,
    WarnMe,
  },
  data: function () {
    return {
      maximumInstallment: "",
      minimumValue: "",
      whattsLink: null,
      productAmount: 1,
      pageDescription: "0",
      selectedProductDescription: null,
    };
  },
  computed: {
    ...mapState("Product", [
      "product",
      "load",
      "selectedColor",
      "selectedSize",
      "productVariation",
    ]),
    ...mapState("Layouts", ["layout", "fobOptions", "config"]),
    ...mapGetters("Product", [
      "selectedUrlImg",
      "availablesImgs",
      "availablesCodeColors",
      "ordenateAvailablesSizes",
      "enabledSizes",
      "selectedColorName",
      "installmentResult",
    ]),
  },
  methods: {
    ...mapActions("Product", [
      "setSelectedImg",
      "setSelectedColor",
      "setSelectedSize",
      "setGridIdAndAddItemInCart",
    ]),

    calculateDiscountRate(price) {
      this.discountPrice = (parseFloat(price) * 0.4).toFixed(2);
      return this.discountPrice;
    },

    setColorBtnStyle(style, bgColor, selectedBtnStyle, selected) {
      if (bgColor == this.selectedColor) {
        return {
          ...selectedBtnStyle,
          background: bgColor,
        };
      } else {
        return {
          ...style,
          background: bgColor,
        };
      }
    },

    setSecondColor(value) {
      let response = this.product.grid.filter((data) => {
        return data.code_color === value;
      });
      if (!response[0].second_code_color) {
        return value;
      } else {
        // return ` linear-gradient(135deg, ${value} 50%, ${response[0].second_code_color} 50%);`;
        return response[0].second_code_color;
      }
    },

    selectVariationButtonClass(productId) {
      if (this.$route.params.productId == productId) {
        return "variation-button-selected";
      } else {
        return "variation-button";
      }
    },
    callVariationRoute(productId, productName) {
      $nuxt.$router.push({
        path: `/produto/${productId}/${this.convertToLink(productName)}`,
      });
    },
    convertToLink(value) {
      let response = value
        .replace(/_|\/|\s/g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return response;
    },
    showSelectedDescriptionStyleButton(value) {
      if (this.pageDescription == value) {
        return {
          color: "black",
          border: "none !important",
          "font-size": "20px",
          "font-weight": "bold",
        };
      }
    },
    ShowTabDescription(value) {
      this.pageDescription = value;

      if (value == 1) {
        this.selectedProductDescription = this.product.description;
      } else {
        this.selectedProductDescription = this.product.optional_description;
      }
    },

    setSizeBtnStyle(
      defaultStyle,
      selectedStyle,
      size,
      disabled,
      disabledStyle
    ) {
      if (disabled) {
        return disabledStyle;
      } else {
        if (size == this.selectedSize) {
          return selectedStyle;
        } else {
          return defaultStyle;
        }
      }
    },
    validateAmountInput() {
      if (
        !/^[0-9]*$/.test(parseInt(this.productAmount)) ||
        this.productAmount < 1
      ) {
        this.productAmount = 1;
      } else if (this.productAmount > parseFloat(this.product.balance)) {
        this.productAmount = parseInt(this.product.balance);
      }
    },

    increaseProductAmount() {
      this.productAmount++;
      if (this.productAmount > parseFloat(this.product.balance)) {
        this.productAmount = parseFloat(this.product.balance);
      }
      if (isNaN(parseInt(this.productAmount))) {
        this.productAmount = 1;
      }
    },

    decreaseProductAmount() {
      this.productAmount--;
      if (this.productAmount < 1 || isNaN(parseInt(this.productAmount))) {
        this.productAmount = 1;
      }
    },
  },
  mounted: function () {
    this.ShowTabDescription(1);
    const installmentArray = this.installmentResult();
    this.maximumInstallment = installmentArray[0];
    this.minimumValue = installmentArray[1];
    this.whattsLink = `${this.layout.floatingIcon.link}&text=Olá, gostaria de cotar o frete do pedido: ${this.product.name}`;
  },
};
</script>

<style scoped>
button:focus,
button:active {
  border: 1px solid black;
  background: none;
  outline: none;
  padding: 0;
}

.thumbnail-scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.thumbnail-sizing {
  height: 40vw;
  max-height: 670px;
}
.txt-freight-buyer {
  color: rgb(0, 0, 0);
  font-size: 16px;
}
.thumbnail >>> .v-image__image {
  background-position: center top !important;
}

/* .magnifier >>> .v-image__image {
  background-position: center top !important;
} */

.magnifier {
  height: 100%;
}

.magnifier:hover {
  border: 2px solid black;
  cursor: zoom-in;
}

.magnifier >>> .normal {
  background-position: center top !important;
  height: 100%;
  object-fit: contain !important;
}

.gs-color-btn {
  position: relative;
  box-sizing: inherit;
  min-width: 0 !important;
  width: 32px !important;
  height: 32px !important;
  padding: 3px !important;
  margin: 0 6px 4px 0;
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: none;
  overflow: hidden;
}

.gs-second-color {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 100%;
  transform: skew(45deg) translate(-45%);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.btn-Description {
  color: black !important;
  text-transform: uppercase;
  margin: 10px;
}

.txtDescriptionCard {
  padding: 10px 20px 40px 20px;
}
</style>