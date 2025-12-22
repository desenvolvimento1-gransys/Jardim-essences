import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("Settings", ["navBarList", "routeSearchSettings"]),
    ...mapState("Layouts", ["layout"]),
  },
  methods: {
    isLipProduct(product) {
      const lipProducts = ['Batons', 'Gloss', 'Lip Tint', 'Lip Balm', 'Lip Oil', 'Esfoliante', 'Máscara Hidratante'];
      return lipProducts.includes(product.name);
    },
    isFaceProduct(product) {
      const faceProducts = ['Base', 'Corretivo', 'Pó', 'Blush', 'Iluminador', 'Limpeza Facial'];
      return faceProducts.includes(product.name);
    },
    isEyersProduct(product) {
      const faceProducts = ['Máscara de Cilios', 'Delineador'];
      return faceProducts.includes(product.name);
    }
  },
  data: function () {
    return {
      dialog: false,
      menu: false,
    };
  },
};