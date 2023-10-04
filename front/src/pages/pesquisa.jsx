import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { filtrarContatosPorNomeOuNumero } from "../utils";
import { Card } from "../components/Card/Card";
import './pesquisa.css';

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

  const editarContato = (id, data) => {
    
    const {valorNome:nome, valorIdade:idade} = data;
    const formatData = {nome,idade: Number(idade)}
    console.log(formatData);
    axios
      .put(`http://localhost:3000/contato/${id}`, formatData)
      .then(() => {
        console.log("editou");
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao editar o contato:", error);
      });
  };

  return (
    <div className="pesquisa-contatos">
      <Link to="/">
        <button id="back-button"></button>
      </Link>
      <div className="pesquisa">
      <h2>Pesquisar Contatos</h2>
      <div>
        <input
        id="pesquisa-por-nome"
          type="text"
          placeholder="Pesquisar por nome ou telefone"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <button id="botao-pesquisa"
          onClick={() =>
            setResultadosFiltrados(
              filtrarContatosPorNomeOuNumero(data, pesquisa)
            )
          }
        >
          Pesquisar
        </button>
      </div>
      <div className="resultado">
        <h3>Resultados da Pesquisa:</h3>
        <ul>
          {resultadosFiltrados.map((value) => (
            <>
              {console.log(value.numeros[0])}
              <Card
                editarContato={editarContato}
                id={value.id}
                key={value.id}
                idade={value.idade}
                nome={value.nome}
                numero={
                  value.numeros.length !== 0 ? value.numeros[0].numero : ""
                }
                excluirContato={() => excluirContato(value.id)}
              />
            </>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default PesquisaContatos;
