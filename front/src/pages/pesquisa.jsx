import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { filtrarContatosPorNomeOuNumero } from "../utils";
import { Card } from "../components/Card/Card";

const PesquisaContatos = () => {
  const [pesquisa, setPesquisa] = useState("");
  const [data, setData] = useState([]);
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/contato")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao buscar dados da API:", error);
      });
  }, []);

  useEffect(() => {
    setResultadosFiltrados(filtrarContatosPorNomeOuNumero(data, pesquisa));
  }, [data, pesquisa]);

  const excluirContato = (id) => {
    axios
      .delete(`http://localhost:3000/contato/${id}`)
      .then(() => {
        const contatosAtualizados = data.filter((contato) => contato.id !== id);
        setData(contatosAtualizados);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao excluir o contato:", error);
      });
  };

  return (
    <div className="pesquisa-contatos">
      <Link to="/">
        <button>voltar</button>
      </Link>
      <h2>Pesquisar Contatos</h2>
      <div>
        <input
          type="text"
          placeholder="Pesquisar por nome ou telefone"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <button
          onClick={() =>
            setResultadosFiltrados(
              filtrarContatosPorNomeOuNumero(data, pesquisa)
            )
          }
        >
          Pesquisar
        </button>
      </div>
      <div>
        <h3>Resultados da Pesquisa:</h3>
        <ul>
          {resultadosFiltrados.map((value) => (<>
         {  console.log(value.numeros[0])}
            <Card

              key={value.id}
              idade={value.idade}
              nome={value.nome}
             
              excluirContato={() => excluirContato(value.id)}
            />
         </> ))}
        </ul>
      </div>
    </div>
  );
};

export default PesquisaContatos;
