<template>
  <v-container  class="perfume-types-section py-12">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" class="text-center">
        <h2 class="display-1 font-weight-bold mb-3">Explore por Tipo</h2>
        <p class="subtitle-1 grey--text text--darken-1">
          Descubra a fragrância perfeita para cada momento
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        v-for="(category, index) in categories"
        :key="category.id"
        cols="12"
        sm="6"
        md="3"
        class="d-flex"
      >
        <v-card
          :class="['perfume-card', `delay-${index}`]"
          :color="category.color"
          dark
          hover
          elevation="4"
          @click="navigateToCategory(category.route)"
        >
          <div class="card-overlay"></div>
          
          <v-card-text class="card-content pa-6">
            <div class="icon-wrapper mb-4">
              <v-icon size="64" class="pulse-icon">{{ category.icon }}</v-icon>
            </div>

            <h3 class="text-h5 font-weight-bold mb-2">
              {{ category.title }}
            </h3>

            <p class="subtitle-2 mb-4">
              {{ category.description }}
            </p>

            <v-btn
              outlined
              dark
              rounded
              class="explore-btn"
            >
              Explorar
              <v-icon right small>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PerfumeTypes',
  data() {
    return {
      categories: [
        {
          id: 1,
          title: 'Eau de Parfum',
          description: 'Alta concentração e longa duração',
          icon: 'mdi-spray-bottle',
          route: '/busca/eau-de-parfum',
          color: '#6A1B9A'
        },
        {
          id: 2,
          title: 'Eau de Toilette',
          description: 'Fragrância suave para o dia a dia',
          icon: 'mdi-flower',
          route: '/busca/eau-de-toilette',
          color: '#00897B'
        },
        {
          id: 3,
          title: 'Colônia',
          description: 'Frescor leve e refrescante',
          icon: 'mdi-water',
          route: '/busca/colonia',
          color: '#1E88E5'
        },
        {
          id: 4,
          title: 'Extrait',
          description: 'Máxima intensidade e exclusividade',
          icon: 'mdi-diamond-stone',
          route: '/busca/extrait',
          color: '#D84315'
        }
      ]
    }
  },
  methods: {
    navigateToCategory(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>


.perfume-card {
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 16px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.perfume-card.delay-0 {
  animation-delay: 0.1s;
}

.perfume-card.delay-1 {
  animation-delay: 0.2s;
}

.perfume-card.delay-2 {
  animation-delay: 0.3s;
}

.perfume-card.delay-3 {
  animation-delay: 0.4s;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%);
  transition: opacity 0.4s ease;
}

.perfume-card:hover .card-overlay {
  opacity: 0.7;
}

.perfume-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 320px;
}

.icon-wrapper {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.4s ease;
}

.perfume-card:hover .icon-wrapper {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.3);
}

.pulse-icon {
  animation: pulse 2s ease-in-out infinite;
}

.perfume-card:hover .pulse-icon {
  animation: bounce 0.6s ease;
}

.explore-btn {
  transition: all 0.3s ease;
  border-width: 2px !important;
}

.perfume-card:hover .explore-btn {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: translateX(4px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(-8px);
  }
}

@media (max-width: 960px) {
  .card-content {
    min-height: 280px;
  }
  
  .icon-wrapper {
    width: 80px;
    height: 80px;
  }
  
  .pulse-icon {
    font-size: 48px !important;
  }
}

@media (max-width: 600px) {
  .perfume-card {
    margin-bottom: 16px;
  }
}
</style>
