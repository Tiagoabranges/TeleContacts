import axios from "axios";
import { useState } from "react";
import "./register.css";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const RegisterContact = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleAddContact() {
    try {
      setIsLoading(true);
      setError(null);

      if (!name || !age || !phone) {
        setError("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
      const response1 = await axios.post("http://localhost:3000/contact", {
        name,
        age: parseInt(age, 10),
      });

      const contactId = response1.data.id;
      const response2 = await axios.post("http://localhost:3000/phone", {
        contactId,
        phone,
      });
      const updatedPhones = response2.data.phone;

      setPhone(updatedPhones);
      window.location.href = "/pesquisa";
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred while registering the contact.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <h1 id="title">Telecontacts</h1>
      <h2>Cadastrar Contato</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="input-container">
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Idade:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Número de Telefone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button
        className="button"
        onClick={handleAddContact}
        disabled={isLoading}
      >
        {isLoading ? "Cadastrando..." : "Cadastrar"}
      </button>

      <div className="redes">
        <div>
          <a href="https://www.instagram.com/tiago_abranges/" target="_blank">
            <AiOutlineInstagram id="insta" size={32} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/tiagoabranges/" target="_blank">
            <AiOutlineLinkedin id="linkedin" size={32} />
          </a>
        </div>
        <div>
          <a href="https://github.com/Tiagoabranges" target="_blank">
            <AiOutlineGithub id="git" size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterContact;
