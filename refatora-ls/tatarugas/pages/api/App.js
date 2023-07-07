import React from 'react';
import { useForm } from 'react-hook-form';
// import './App.css';

function App() {

  const {register, handleSubmit, setValue} = useForm();

  const onSubmit = (e) => {
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      // register({ name: 'address', value: data.logradouro });
      setValue('city', data.localidade);
      setValue('uf', data.uf);
    });
  }

  return (
    <form id="formulario" onSubmit={handleSubmit(onSubmit)}>
    <ul>
      <li id="voltar" className="item-form">
        <a href="/">
          <i className="fa-solid fa-arrow-left" /> Voltar
        </a>
      </li>
      <li className="item-form">
        <label htmlFor="email">
          <i className="fa-solid fa-envelope" /> Email:
        </label>
        <input
          type="email"
          placeholder="exemplo@email.com"
          pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
          required/>
      </li>
      <li className="item-form">
        <label htmlFor="senha">
          <i className="fa-solid fa-lock" /> Senha:
        </label>
        <input type="password" pattern="^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$" required/>
      </li>
      <li className="item-form">
        <label htmlFor="nome">
          <i className="fa-solid fa-address-card" /> Nome Completo:
        </label>
        <input type="text" required/>
      </li>
      <li className="item-form">
        <label htmlFor="data">
          <i className="fa-solid fa-calendar-days" /> Data de nascimento:
        </label>
        <input type="date" required/>
      </li>
      <li className="item-form">
        <label htmlFor="cep">
          <i className="fa-solid fa-map-location-dot" /> CEP:
        </label>
        <input type="text" {...register("cep")} onBlur={checkCEP} required/>
      </li>
      <li className="item-form">
        <label htmlFor="estado">
          <i className="fa-solid fa-location-dot" /> Estado:
        </label>
        <input type="text" {...register("uf" )} readOnly/>
      </li>
      <li className="item-form">
        <label htmlFor="cidade">
          <i className="fa-solid fa-location-dot" /> Cidade:
        </label>
        <input type="text" {...register("city" )} readOnly/>
      </li>
      <li className="item-form">
        <input id="confirmar" type="submit" defaultValue="Confirmar ✔" />
      </li>
    </ul>
    </form>
  );
}

export default App;