<template>
  <span v-if="!load" translate="no">
    <v-row :style="layout.productPage.mobile.mainRowStyle">
      <v-col cols="12" align="center">
        <p
          :style="layout.productPage.mobile.productNameStyle"
          :class="layout.productPage.mobile.productNameClass"
        >
          {{ product.name }}
        </p>
      </v-col>
      <v-col
        :style="layout.productPage.mobile.selectedImgColStyle"
        class="no-padding"
        cols="12"
      >
        <v-img
          v-if="selectedUrlImg.highQuality"
          :src="selectedUrlImg.highQuality"
          :lazy-src="selectedUrlImg.lowQuality"
          alt="Imagem do produto"
        ></v-img>
      </v-col>
      <v-col cols="12">
        <div style="overflow-x: hidden">
          <div
            style="
              width: 104%;
              overflow-y: hidden;
              overflow-x: auto;
              white-space: nowrap;
              margin: 0 -3vw;
            "
          >
            <v-img
              contain
              style="display: inline-block; margin-left: 3vw"
              width="100"
              height="100"
              v-for="(item, index) in availablesImgs"
              :key="index"
              @click="setSelectedImg(item.name)"
              class="pointer"
              :src="item.url300px"
              alt="Thumbnail da imagem do produto"
            ></v-img>
          </div>
        </div>
      </v-col>
      <v-col cols="12">
        <p
          v-if="product.brand_name && config.product.showBrandInProductPage"
          :style="layout.productPage.mobile.brand.style"
          :class="layout.productPage.mobile.brand.class"
        >
          Marca: {{ product.brand_name }}
        </p>
        <p
          v-if="product.ref && layout.productPage.mobile.ref.show"
          :style="layout.productPage.mobile.ref.style"
          :class="layout.productPage.mobile.ref.class"
        >
          Ref: {{ product.ref }}
        </p>
        <p
          v-if="product.balance < 1"
          :style="layout.productPage.noStock.mobile.style"
          :class="layout.productPage.noStock.mobile.class"
        >
          {{ layout.productPage.noStock.mobile.name }}
        </p>
      </v-col>
      <v-col cols="12" align="center">
        <div
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
          :style="layout.productPage.mobile.color.mainStyle"
        >
          <p
            :style="layout.productPage.mobile.color.titleStyle"
            :class="layout.productPage.mobile.color.titleClass"
          >
            Cores Disponiveis :
          </p>
          <span v-for="(item, index) in availablesCodeColors" :key="index">
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
          <br />
          <p>{{ selectedColorName }}</p>
        </div>
      </v-col>
      <v-col cols="12" align="center">
        <div
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
          :style="layout.productPage.mobile.size.mainStyle"
        >
          <p
            :style="layout.productPage.mobile.size.titleStyle"
            :class="layout.productPage.mobile.size.titleClass"
          >
            Tamanhos Disponiveis :
          </p>

          <span v-for="(item, index) in ordenateAvailablesSizes" :key="index">
            <v-btn
              tile
              v-if="item"
              :style="
                setSizeBtnStyle(
                  layout.productPage.mobile.size.btn.defaultStyle,
                  layout.productPage.mobile.size.btn.selectedStyle,
                  item,
                  !enabledSizes.includes(item),
                  layout.productPage.mobile.size.btn.disabledStyle
                )
              "
              @click="setSelectedSize(item)"
              :disabled="!enabledSizes.includes(item)"
            >
              {{ item }}
            </v-btn>
          </span>
          <v-row align="center">
            <v-col
              cols="12"
              v-if="productVariation && productVariation.length > 0"
              :style="layout.productPage.color.mainStyle"
            >
              <p
                style="
                  font-family: 'Poppins', sans-serif;
                  font-size: 16px;
                  font-weight: bold;
                "
                :class="layout.productPage.mobile.color.titleClass"
              >
                Variação:
              </p>
              <span v-for="(item, index) in productVariation" :key="index">
                <v-btn
                  @click="callVariationRoute(item.product_id, item.name)"
                  :class="selectVariationButtonClass(item.product_id)"
                >
                  {{ item.variation_value }}
                </v-btn>
              </span>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" align="center">
        <div :style="layout.productPage.mobile.priceAndBuy.mainStyle">
          <v-row>
            <v-col cols="12">
              <span v-if="product.actived_promotions.length > 0">
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
                <!-- R$
                {{
                  (
                    parseFloat(product.price) -
                    calculateDiscountRate(product.price)
                  ).toLocaleString("pt-BR", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }} -->
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
                v-if="layout.productPage.mobile.priceAndBuy.installments"
                :style="layout.productPage.mobile.priceAndBuy.installmentStyle"
              >
                ou {{ maximumInstallment }}x de R${{ minimumValue }}
              </p>
            </v-col>

            <v-col
              cols="12"
              align-self="center"
              align="left"
              style="margin-left: 35px; margin-bottom: -15px"
            >
              <span style="font-weight: bold">QTD</span>
            </v-col>
            <v-row align="left">
              <v-col cols="4" class="pr-0 py-0" align-self="center">
                <div class="gs-amount-input py-2">
                  <v-row align="center">
                    <v-col cols="4" class="pa-0 pl-2" align="left">
                      <v-btn icon style="" @click="decreaseProductAmount">
                        <i style="font-size: 20px" class="fas fa-minus"></i>
                      </v-btn>
                    </v-col>

                    <v-col
                      class="pa-0"
                      cols="2"
                      align-self="center"
                      align="center"
                    >
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
            <!-- <v-col cols="12">
              <v-btn
                @click="setGridIdAndAddItemInCart()"
                :disabled="product.balance < 1"
                :style="layout.productPage.priceAndBuy.buyBtnStyle"
                >Comprar</v-btn
              >
            </v-col> -->
            <br />
          </v-row>
          <div>
            <v-col cols="12">
              <deliveryCalculator />
            </v-col>
          </div>
        </div>
        <v-row no-gutters align="center" style="margin-top: 32px">
          <div id="tabs" style="align-itens: center !important">
            <div class="tab-links">
              <v-card class="card-info">
                <v-tabs
                  class="tabs-nav"
                  background-color="#E4E0DD"
                  center-active
                  dark
                  style="width: 100%"
                >
                  <button
                    class="btn-Description"
                    :style="showSelectedDescriptionStyleButton(1)"
                    @click="ShowTabDescription(1)"
                  >
                    <span>Descrição</span>
                  </button>

                  <button
                    v-if="product.optional_description"
                    :style="showSelectedDescriptionStyleButton(2)"
                    @click="ShowTabDescription(2)"
                    class="btn-Description"
                    style="text-overflow: hidden !important"
                  >
                    <span>Informações adicionais</span>
                  </button>
                </v-tabs>

                <br />
                <div class="txtDescriptionCard">
                  {{ selectedProductDescription }}
                </div>
              </v-card>
            </div>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </span>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import deliveryCalculator from "@/components/body/productSession/productScreen/components/others/deliveryCalculator";

export default {
  components: {
    deliveryCalculator,
  },
  data: function () {
    return {
      maximumInstallment: "",
      minimumValue: "",
      whattsLink: null,
      pageDescription: "0",
      selectedProductDescription: null,
      productAmount: 1,
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
    calculateDiscountRate(price) {
      this.discountPrice = (parseFloat(price) * 0.4).toFixed(2);
      return this.discountPrice;
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
          "font-size": "16px",
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
.txt-freight-buyer-mobile {
  color: rgb(0, 0, 0);
  font-size: 16px;
}
.gs-color-btn {
  position: relative;
  box-sizing: inherit;
  min-width: 0 !important;
  width: 32px !important;
  height: 32px !important;
  padding: 3px !important;
  margin: 0 6px 4px 0;
  border-radius: 50%;
  box-shadow: none;
  overflow: hidden;
  border: 1px solid black;
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