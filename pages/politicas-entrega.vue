<template>
  <span>
    <div class="corpo">
      <h1>Política de Entrega</h1>
      <div class="texto">
        <p class="intro">
          Tire suas dúvidas sobre prazos, custos e modalidades de entrega.
        </p>
        
        <h3>Prazo e Valores</h3>
        <p>
          O preço do envio varia de região e quantidade de produtos. Para consultar 
          o valor, adicione um produto ao carrinho e informe o seu CEP na área 
          "opções de frete". O site exibirá o preço e prazo de acordo com os Correios 
          e/ou transportadora parceira.
        </p>
        <p>
          Você receberá um código de rastreamento para acompanhar o status do pedido, 
          situação e data de postagem e entrega. O prazo de postagem é de 
          <strong>até 3 dias úteis</strong> após aprovação do pedido e pagamento 
          (até 24h para aprovação do pagamento).
        </p>
        
        <h3>Retirada na Loja (Rio Claro/SP)</h3>
        <p>
          Para clientes de Rio Claro/SP, oferecemos a opção de retirada na loja. 
          Você deve retirar a compra pessoalmente com o pagamento aprovado ou, caso 
          alguém venha em seu lugar, é necessário informar o nome e RG da pessoa 
          autorizada.
        </p>
        
        <h3>Compras Internacionais</h3>
        <p>
          Para compras internacionais, consulte o custo de envio pelo 
          <strong>WhatsApp</strong> antes de finalizar a compra. Assim, garantimos 
          que todas as informações e custos estejam claros.
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
  margin-bottom: 15px;
}

h3 {
  color: #333;
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: 600;
}

.intro {
  font-style: italic;
  text-align: center;
  margin-bottom: 25px;
  color: #555;
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

.texto strong {
  color: #333;
  font-weight: 600;
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