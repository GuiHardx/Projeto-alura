function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if(campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado. Não existe o nome de atleta no banco </p>"
        return
    }

      campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
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
  
      }
      if (!resultados){
        resultados = "<p>Nada foi encontradao </p>"
      }
    //  console.log(dado.titulo.includes(campoPesquisa))
      // Constrói o HTML para cada item do resultado da pesquisa
      
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }