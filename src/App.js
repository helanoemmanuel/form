import React from 'react';
import './index.css';

export default () => {
  return (
    <div>
      <h1>Formulário de energia solar</h1>
      <form>
        <input type="text" name="nome" placeholder="Digite seu nome" />
        <input type="email" name="e-mail" placeholder="Digite seu e-mail" />
        <input type="number" name="numero" placeholder="Contato de whatsapp" />
        <input type="number" name="numero" placeholder="valor ($) conta de energia" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};