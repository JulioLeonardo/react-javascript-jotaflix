import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [formValues, setFormValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {formValues.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, formValues]);

          setFormValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={formValues.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          value={formValues.descricao}
          name="descricao"
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          value={formValues.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria) => <li key={`${categoria.nome}`}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
