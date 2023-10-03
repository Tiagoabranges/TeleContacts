import { useState } from "react";

export function Card({ nome, idade, numero, excluirContato }) {
  const [valorNome, setValorNome] = useState(nome);
  const [valorIdade, setValorIdade] = useState(idade);
  const [valorNumero, setValorNumero] = useState(numero);
  const [modoEditar, setModoEditar] = useState(true);

  return (
    <div>
      <input
        disabled={modoEditar}
        type="text"
        onChange={({ target }) => {
          setValorNome(target.value);
        }}
        value={valorNome}
      />
      <input
        disabled={modoEditar}
        type="text"
        onChange={({ target }) => {
          setValorIdade(target.value);
        }}
        value={valorIdade}
      />
      <input
        disabled={modoEditar}
        type="text"
        onChange={({ target }) => {
          setValorNumero(target.value);
        }}
        value={valorNumero}
      />
      <button onClick={() => setModoEditar(!modoEditar)}>Editar</button>
      <button onClick={excluirContato}>Excluir</button>
    </div>
  );
}
