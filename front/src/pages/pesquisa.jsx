/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PesquisaContatos = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Faz a solicitação GET para a API
    axios.get('http://localhost:3000/contato')
      .then(response => {
        // Define os dados da resposta no estado
        setData(response.data);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao buscar dados da API:', error);
      });
  }, []);
  console.log(data);
  const handlePesquisar = () => {
    // Filtrar os contatos com base na pesquisa (nome ou telefone)
    const resultadosFiltrados = data.filter((contato) => {
      const numero = contato.numero || ''; // Usar uma string vazia se o número for undefined
      return (
        contato.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
        numero.includes(pesquisa)
      );
    });
  
    // Definir os resultados da pesquisa no estado
    setData(resultadosFiltrados);
  };

  return (
    <div className="pesquisa-contatos">
        <Link to="/"><button>voltar</button></Link>
      <h2>Pesquisar Contatos</h2>
      <div>
        <input
          type="text"
          placeholder="Pesquisar por nome ou telefone"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <button onClick={handlePesquisar}>Pesquisar</button>
      </div>
      <div>
        <h3>Resultados da Pesquisa:</h3>
        <ul>
          {data.map((contato, index) => (
            <li key={index}>
              Nome: {contato.nome}, Idade: {contato.idade},Telefones:
      <ul>
        {contato.numeros.map((numero, numeroIndex) => (
          <li key={numeroIndex}>{numero.numero}</li>
        ))}
      </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PesquisaContatos;
