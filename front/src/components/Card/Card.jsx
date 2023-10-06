import { useState } from "react";
import "./style.css";
export function Card({ name, age, phone, deleteContact, editContact, id }) {
  const [nameValue, setNameValue] = useState(name);
  const [ageValue, setAgeValue] = useState(age);
  const [phoneValue, setPhoneValue] = useState(phone);
  const [editMode, setEditMode] = useState(true);
  return (
    <div className="card">
      <input
        className="card-input"
        disabled={editMode}
        type="text"
        onChange={({ target }) => {
          setNameValue(target.value);
        }}
        value={nameValue}
      />
      <input
        className="card-input"
        disabled={editMode}
        type="text"
        onChange={({ target }) => {
          setAgeValue(target.value);
        }}
        value={ageValue}
      />
      <input
        className="card-input"
        disabled
        type="text"
        onChange={({ target }) => {
          setPhoneValue(target.value);
        }}
        value={phoneValue}
      />
      <button id="card-button-editar" onClick={() => setEditMode(!editMode)}>
        Editar
      </button>
      <button id="card-excluir" onClick={deleteContact}>
        Excluir
      </button>
      {!editMode && (
        <button
          id="card-button-salvar"
          onClick={() => {
            setEditMode(!editMode);
            editContact(id, { ageValue, nameValue });
          }}
        >
          Salvar
        </button>
      )}
    </div>
  );
}
