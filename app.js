function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Constrói o HTML para cada item do resultado da pesquisa
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p>${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Saiba Mais</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }