export function filtrarContatosPorNomeOuNumero(listaDeContatos, filtro) {
    filtro = filtro.toLowerCase();
  
    return listaDeContatos.filter(contato => {
      const nomeEmMinusculas = contato.nome.toLowerCase();
      const numeros = contato.numeros.map(numeroObj => numeroObj.numero);
      
  
      return nomeEmMinusculas.includes(filtro) || numeros.some(numero => numero.includes(filtro));
    });
  }