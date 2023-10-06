import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { filterContactsByNameOrNumber } from "../../utils";
import { Card } from "../../components/Card/Card";
import "./search.css";
import RefreshButton from "../../components/RefreshButton";

const SearchContact = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filterResults, setFilterResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/contact")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(
          "An error occurred while fetching data from the API:",
          error
        );
      });
  }, []);

  useEffect(() => {
    setFilterResults(filterContactsByNameOrNumber(data, search));
  }, [data, search]);

  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:3000/contact/${id}`)
      .then(() => {
        const contactsUpdated = data.filter((contact) => contact.id !== id);
        setData(contactsUpdated);
        setFilterResults(filterContactsByNameOrNumber(contactsUpdated, search));
      })
      .catch((error) => {
        console.error("An error occurred while deleting the contact:", error);
      });
  };

  const editContact = async (id, data) => {
    try {
      const ageValueAsNumber = parseInt(data.ageValue, 10);
      const formatData = {
        name: data.nameValue,
        age: ageValueAsNumber,
      };
      const response = await axios.put(
        `http://localhost:3000/contact/${id}`,
        formatData
      );

      if (response.status === 200) {
        const updatedData = [...filterResults];

        const editedIndex = updatedData.findIndex(
          (contact) => contact.id === id
        );
        updatedData[editedIndex] = {
          ...updatedData[editedIndex],
          ...formatData,
        };
        setFilterResults(updatedData);
      } else {
        console.error("Erro ao editar o contato:", response.formatData);
      }
    } catch (error) {
      console.error("Erro ao editar o contato:", error);
    }
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            id="botao-pesquisa"
            onClick={() =>
              setFilterResults(filterContactsByNameOrNumber(data, search))
            }
          >
            Pesquisar
          </button>
          <RefreshButton id="atualizar" />
        </div>
        <div className="resultado">
          <h3>Resultados da Pesquisa:</h3>
          <ul>
            {filterResults.map((value) => (
              <Card
                editContact={editContact}
                id={value.id}
                key={value.id}
                age={value.age}
                name={value.name}
                phone={value.phones.length !== 0 ? value.phones[0].phone : ""}
                deleteContact={() => deleteContact(value.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchContact;
