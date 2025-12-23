<template>
  <span>
    <div class="corpo">
      <h1>Quem somos</h1>
      <div class="texto">
        <p>
          No Jardim das Essências, acreditamos que o aroma tem o poder de transformar 
          momentos comuns em memórias extraordinárias. Nossa jornada começou com uma 
          paixão simples, mas profunda: a busca por equilíbrio e harmonia através dos 
          elementos mais puros da natureza. Para nós, o cuidado com o corpo e com a 
          mente não deve ser um luxo distante, mas uma prática acessível a todos.
        </p>
        
        <h3>Nossa Curadoria e a Parceria com a Natureza</h3>
        <p>
          Mais do que apenas fragrâncias, entregamos uma experiência de autocuidado e 
          conexão. Cada item em nosso jardim é selecionado para despertar sentidos, 
          acalmar a mente e renovar a energia do seu ambiente.
        </p>
        <p>
          Por compartilharmos os valores de sustentabilidade e cuidado com a vida, 
          focamos nosso trabalho na linha Natura — uma marca que é referência mundial 
          em beleza consciente e ingredientes da biodiversidade brasileira.
        </p>
        
        <h3>Luxo Acessível: Preço de Outlet</h3>
        <p>
          Sabemos que o bem-estar floresce melhor quando estamos em equilíbrio também 
          com as nossas finanças. Por isso, o Jardim das Essências nasceu com um 
          propósito claro: democratizar o acesso aos melhores produtos do mercado.
        </p>
        <p>
          Operamos com o conceito de Outlet, oferecendo os itens que você já ama da 
          Natura com valores diferenciados e facilidades de pagamento. Queremos que 
          você sinta a qualidade de um óleo Sève, o frescor de um Ekos ou a 
          sofisticação de um perfume Essencial sem precisar pesar no orçamento.
        </p>
        
        <h3>Nossa Missão</h3>
        <p>
          Nossa missão é cultivar o bem-estar através de essências que abraçam a 
          alma e perfumam a vida. No Jardim das Essências, você não apenas compra um 
          produto; você investe em si mesmo, garantindo as melhores marcas com o 
          melhor custo-benefício do mercado.
        </p>
        <p>
          <strong>Jardim das Essências:</strong> A beleza da natureza, o cuidado que 
          você merece e o preço que você procura.
        </p>
      </div>
    </div>
  </span>
</template>

<script>
export default {};
</script>

<style>
h1 {
  text-align: center;
  color: black;
  margin-bottom: 20px;
}

h3 {
  color: #333;
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: 600;
}

.corpo {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5%;
  background-color: #dcd2c9;
  max-width: 1000px;
  height: auto;
  padding: 2%;
  border-radius: 10px;
}

.texto {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  text-align: justify;
  line-height: 1.6;
}

.texto p {
  margin-bottom: 15px;
}

@media only screen and (max-width: 600px) {
  .corpo {
    border-radius: 5px;
    padding: 8%;
    margin: 3%;
    background-color: #dcd2c9;
  }
  
  .texto {
    font-size: 16px;
    text-align: left;
  }
  
  h1 {
    font-size: 24px;
  }
  
  h3 {
    font-size: 18px;
  }
}
</style>