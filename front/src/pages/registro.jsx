import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './cadastro.css'
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'

// eslint-disable-next-line react/prop-types
const CadastroContatos = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState();
  const [numero, setTelefone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleAddContact () {
try {

    setIsLoading(true);
    setError(null);

    if (!nome || !idade || !numero) {
        setError('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
    const response1 = await axios.post('http://localhost:3000/contato',{
        nome,
        idade: parseInt(idade, 10),
    })


const contatoId = response1.data.id;
console.log(contatoId);
const response2 = await axios.post("http://localhost:3000/numero", {
    contatoId, 
    numero,
})
console.log('ID do registro criado:', contatoId);
console.log('Resultado da segunda chamada:', response2.data);
} catch (error) {
console.error('Ocorreu um erro:', error);
setError('Ocorreu um erro ao cadastrar o contato.');
} finally {
setIsLoading(false);
}
}

  return (
    <div className="container">
      <h1 id='title'>Telecontacts</h1>
      <h2>Cadastrar Contato</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="input-container">
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Idade:</label>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Número de Telefone:</label>
        <input
          type="text"
          value={numero}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <Link to="/pesquisa">
        <button
          className="button"
          onClick={handleAddContact}
          disabled={isLoading}
        >
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </Link>
      <div className='redes'>
        <div ><a href="https://www.instagram.com/tiago_abranges/" target="_blank">
        <AiOutlineInstagram id='insta' size={32} />
      </a></div>
        <div ><a href="https://www.linkedin.com/in/tiagoabranges/" target="_blank">
        <AiOutlineLinkedin id='linkedin' size={32} />
      </a></div>
        <div><a href="https://github.com/Tiagoabranges" target="_blank">
        <AiOutlineGithub id='git' size={32} />
      </a></div>
      </div>
    </div>
  );
};

export default CadastroContatos;