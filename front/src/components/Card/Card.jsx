import { useState } from "react";
import './style.css';
export function Card({
  nome,
  idade,
  numero,
  excluirContato,
  editarContato,
  id,
}) {
  const [valorNome, setValorNome] = useState(nome);
  const [valorIdade, setValorIdade] = useState(idade);
  const [valorNumero, setValorNumero] = useState(numero);
  const [modoEditar, setModoEditar] = useState(true);

  return (
    <div className="card">
    <input
      className="card-input"
      disabled={modoEditar}
      type="text"
      onChange={({ target }) => {
        setValorNome(target.value);
      }}
      value={valorNome}
    />
    <input
      className="card-input"
      disabled={modoEditar}
      type="text"
      onChange={({ target }) => {
        setValorIdade(target.value);
      }}
      value={valorIdade}
    />
    <input
      className="card-input"
      disabled
      type="text"
      onChange={({ target }) => {
        setValorNumero(target.value);
      }}
      value={valorNumero}
    />
    <button id="card-button-editar" onClick={() => setModoEditar(!modoEditar)}>
      Editar
    </button>
    <button id="card-excluir" onClick={excluirContato}>
      Excluir
    </button>
    {!modoEditar && (
      <button
        id="card-button-salvar"
        onClick={() => {
          setModoEditar(!modoEditar);
          editarContato(id, { valorIdade, valorNome });
        }}
      >
        Salvar
      </button>
    )}
  </div>
  
  );
}
