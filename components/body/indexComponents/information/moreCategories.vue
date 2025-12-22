<template>
  <v-container fluid class="mt-15 px-4">
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center mb-8">
        <h2 class="categories-title">Encontre Seu Perfume Ideal</h2>
        <p class="categories-subtitle">Escolha a categoria perfeita para você</p>
      </v-col>
    </v-row>

    <v-row class="categories-grid">
      <!-- Categoria: Para Eles -->
      <v-col cols="12" md="4" sm="6">
        <v-card 
          class="category-card masculine-card"
          elevation="4"
          @click="navigateToCategory('masculino')"
        >
          <div class="card-overlay"></div>
          <v-img
            src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500&h=600&fit=crop"
            height="400"
            class="category-image"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          
          <div class="card-content">
            <v-icon class="category-icon" color="white">mdi-human-male</v-icon>
            <h3 class="category-name">Para Eles</h3>
            <p class="category-description">Fragrâncias masculinas marcantes e sofisticadas</p>
            <v-btn 
              color="white" 
              outlined 
              rounded 
              class="explore-btn"
            >
              <v-icon left small>mdi-arrow-right</v-icon>
              Explorar
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- Categoria: Para Elas -->
      <v-col cols="12" md="4" sm="6">
        <v-card 
          class="category-card feminine-card"
          elevation="4"
          @click="navigateToCategory('feminino')"
        >
          <div class="card-overlay"></div>
          <v-img
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=600&fit=crop"
            height="400"
            class="category-image"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="pink"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          
          <div class="card-content">
            <v-icon class="category-icon" color="white">mdi-human-female</v-icon>
            <h3 class="category-name">Para Elas</h3>
            <p class="category-description">Fragrâncias femininas delicadas e envolventes</p>
            <v-btn 
              color="white" 
              outlined 
              rounded 
              class="explore-btn"
            >
              <v-icon left small>mdi-arrow-right</v-icon>
              Explorar
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- Categoria: Perfumes Árabes -->
      <v-col cols="12" md="4" sm="12">
        <v-card 
          class="category-card arabic-card"
          elevation="4"
          @click="navigateToCategory('arabe')"
        >
          <div class="card-overlay"></div>
          <v-img
            src="https://images.unsplash.com/photo-1592853002751-dfd4b91367c6?w=500&h=600&fit=crop"
            height="400"
            class="category-image"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="amber"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          
          <div class="card-content">
            <v-icon class="category-icon" color="white">mdi-star-crescent</v-icon>
            <h3 class="category-name">Perfumes Árabes</h3>
            <p class="category-description">Essências exóticas e intensas do Oriente</p>
            <v-btn 
              color="white" 
              outlined 
              rounded 
              class="explore-btn"
            >
              <v-icon left small>mdi-arrow-right</v-icon>
              Explorar
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PerfumeCategories',
  methods: {
    navigateToCategory(category) {
      this.$router.push(`/busca/${category}`);
    }
  }
}
</script>

<style scoped>
/* ==============================
   VARIÁVEIS
   ============================== */
:root {
  --masculine-color: #2c5f7e;
  --feminine-color: #d4668b;
  --arabic-color: #c9932c;
  --text-white: #ffffff;
  --shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  --shadow-hover: 0 15px 45px rgba(0, 0, 0, 0.25);
}

/* ==============================
   TÍTULOS PRINCIPAIS
   ============================== */
.categories-title {
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
  letter-spacing: 1px;
  animation: fadeInDown 0.8s ease;
}

.categories-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #7f8c8d;
  font-weight: 400;
  animation: fadeInDown 0.8s ease 0.2s backwards;
}

/* ==============================
   GRID DE CATEGORIAS
   ============================== */
.categories-grid {
  margin-top: 40px;
}

/* ==============================
   CARDS DE CATEGORIA
   ============================== */
.category-card {
  position: relative;
  border-radius: 20px !important;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: fadeInUp 0.8s ease backwards;
  height: 100%;
}

.category-card:nth-child(1) { animation-delay: 0.3s; }
.category-card:nth-child(2) { animation-delay: 0.5s; }
.category-card:nth-child(3) { animation-delay: 0.7s; }

.category-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: var(--shadow-hover);
}

.category-card:hover .card-overlay {
  opacity: 0.85;
}

.category-card:hover .category-image {
  transform: scale(1.1);
}

.category-card:hover .explore-btn {
  background: white;
  color: #2c3e50;
  transform: translateX(5px);
}

/* OVERLAY GRADIENTE */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
  z-index: 1;
  transition: opacity 0.4s ease;
  opacity: 0.7;
}

/* OVERLAY POR CATEGORIA */
.masculine-card .card-overlay {
  background: linear-gradient(to bottom, rgba(44, 95, 126, 0.4) 0%, rgba(44, 95, 126, 0.9) 100%);
}

.feminine-card .card-overlay {
  background: linear-gradient(to bottom, rgba(212, 102, 139, 0.4) 0%, rgba(212, 102, 139, 0.9) 100%);
}

.arabic-card .card-overlay {
  background: linear-gradient(to bottom, rgba(201, 147, 44, 0.4) 0%, rgba(201, 147, 44, 0.9) 100%);
}

/* IMAGEM */
.category-image {
  transition: transform 0.6s ease;
}

/* ==============================
   CONTEÚDO DO CARD
   ============================== */
.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 24px;
  z-index: 2;
  text-align: center;
  color: var(--text-white);
}

.category-icon {
  font-size: 48px !important;
  margin-bottom: 12px;
  animation: pulse 2s ease-in-out infinite;
}

.category-name {
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.category-description {
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  margin-bottom: 20px;
  opacity: 0.95;
  line-height: 1.5;
}

.explore-btn {
  font-weight: 600 !important;
  font-size: 0.9rem !important;
  letter-spacing: 0.5px !important;
  padding: 8px 24px !important;
  transition: all 0.3s ease !important;
  border-width: 2px !important;
}

/* ==============================
   RESPONSIVIDADE
   ============================== */
@media (max-width: 960px) {
  .categories-title {
    font-size: 2.5rem;
  }
  
  .categories-subtitle {
    font-size: 1.1rem;
  }
  
  .category-name {
    font-size: 1.6rem;
  }
  
  .category-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .categories-title {
    font-size: 2rem;
  }
  
  .categories-subtitle {
    font-size: 1rem;
  }
  
  .category-card {
    margin-bottom: 20px;
  }
  
  .category-name {
    font-size: 1.5rem;
  }
  
  .category-icon {
    font-size: 40px !important;
  }
}

/* ==============================
   ANIMAÇÕES
   ============================== */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* ANIMAÇÃO EXTRA AO HOVER */
.category-card:hover .category-icon {
  animation: bounce 0.6s ease;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>