<template>
  <span>
    <div class="corpo">
      <h1>Trocas e Devoluções</h1>
      <div class="texto">
        <p class="intro">
          Entenda como funcionam as trocas, devoluções e reembolsos de forma simples 
          e dentro do Código de Defesa do Consumidor.
        </p>
        
        <h3>Política Geral</h3>
        <p>
          Na Jardim das Essências, queremos que você tenha a melhor experiência 
          possível com suas compras online. Por isso, seguimos rigorosamente o que 
          está previsto no Código de Defesa do Consumidor (CDC).
        </p>
        
        <h3>Direito de Arrependimento – 7 Dias Corridos</h3>
        <p>
          De acordo com o Artigo 49 do CDC, você tem até 7 dias corridos a partir 
          do recebimento do produto para desistir da compra realizada em nossa 
          loja online.
        </p>
        <ul>
          <li>O produto deve estar sem sinais de uso, com etiquetas afixadas e, de preferência, na embalagem original;</li>
          <li>A solicitação deve ser feita pelo e-mail: <strong>jdessenciasrc@gmail.com</strong>;</li>
          <li>Você receberá o reembolso total do valor pago, incluindo o frete;</li>
          <li>O frete de devolução é de responsabilidade da loja, conforme determina a legislação.</li>
        </ul>
        
        <h3>Troca por Tamanho, Cor ou Insatisfação</h3>
        <p>
          Fora do prazo de arrependimento, aceitamos trocas por tamanho, cor ou 
          insatisfação em até 7 dias após o recebimento.
        </p>
        <ul>
          <li>A peça não pode apresentar sinais de uso, odores ou alterações;</li>
          <li>A etiqueta deve estar afixada à peça;</li>
          <li>O produto deve ser enviado com a Nota Fiscal e, se possível, na embalagem original;</li>
          <li>O frete de envio e reenvio é de responsabilidade do cliente.</li>
        </ul>
        <p>
          <strong>Importante:</strong> Itens promocionais ou de SALE poderão ser 
          trocados apenas em caso de defeito de fabricação.
        </p>
        
        <h3>Itens que Não Aceitamos para Troca ou Devolução</h3>
        <ul>
          <li>Peças com indícios de uso, sujeira, danos ou sem etiqueta original;</li>
          <li>Peças ajustadas ou alteradas pelo cliente;</li>
          <li>Peças promocionais exceto em caso de defeito de fabricação.</li>
        </ul>
        
        <h3>Produtos com Defeito</h3>
        <p>
          Todos os nossos produtos têm garantia de 7 dias para defeitos de 
          fabricação, conforme o Art. 26 do CDC.
        </p>
        <ul>
          <li>Envie o produto com a Nota Fiscal e, se possível, na embalagem original;</li>
          <li>O item será analisado pelo nosso controle de qualidade;</li>
          <li>Se o defeito for confirmado, você poderá escolher entre:
            <ul>
              <li>Receber um novo produto;</li>
              <li>Trocar por outro item de mesmo valor;</li>
              <li>Ser reembolsado integralmente.</li>
            </ul>
          </li>
          <li>Caso o defeito não seja constatado, o produto será devolvido ao cliente, 
              com custos de reenvio por conta do mesmo.</li>
        </ul>
        
        <h3>Reembolso</h3>
        <p>
          O valor pago será reembolsado conforme a forma de pagamento utilizada:
        </p>
        <ul>
          <li><strong>Cartão de crédito:</strong> estorno solicitado à operadora em até 
              10 dias úteis, podendo aparecer em até 2 faturas subsequentes (varia de 
              acordo com o banco);</li>
          <li><strong>PIX:</strong> reembolso em até 5 dias úteis diretamente na conta 
              utilizada para o pagamento.</li>
        </ul>
        
        <h3>Recusa no Ato da Entrega</h3>
        <p>
          Recuse o recebimento da encomenda caso constate:
        </p>
        <ul>
          <li>Embalagem aberta ou danificada;</li>
          <li>Produto avariado ou com indícios de violação;</li>
          <li>Produto em desacordo com o pedido;</li>
          <li>Falta de acessórios ou itens.</li>
        </ul>
        <p>
          <strong>Procedimento:</strong> Escreva o motivo da recusa no verso da nota 
          fiscal (DANFE) e entre em contato com a nossa equipe imediatamente.
        </p>
        
        <h3>Atendimento e Contato</h3>
        <p>
          Para qualquer solicitação ou dúvida, entre em contato com nosso Serviço 
          de Atendimento ao Cliente:
        </p>
        <p class="contact-info">
          📧 E-mail: <a href="mailto:jdessenciasrc@gmail.com">jdessenciasrc@gmail.com</a>
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
  background-color: #e4e0dd;
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

.texto ul {
  margin: 10px 0 15px 20px;
}

.texto li {
  margin-bottom: 8px;
}

.texto ul ul {
  margin: 5px 0 5px 20px;
  font-size: 0.95em;
}

.contact-info {
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 5px;
  border-left: 4px solid #4CAF50;
}

.contact-info a {
  color: #2196F3;
  text-decoration: none;
  font-weight: 500;
}

.contact-info a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 600px) {
  .corpo {
    border-radius: 5px;
    padding: 8%;
    margin: 3%;
    background-color: #e4e0dd;
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
  
  .texto ul {
    margin-left: 15px;
  }
}
</style>