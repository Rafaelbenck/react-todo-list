import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  //aqui iremos criar uma função que cuidará do submit do form
  const handleSubmit = (e) => {
    //precisaremos dar um argumento de evento para utilizar o js puro, e enviar o form de uma maneira não tradicional
    e.preventDefault();
    //faremos uma válidação para não passar valor nulo
    if (!value || !category) return;
    //adicionar o todo
    addTodo(value, category);
    //vamos limpar o campo quando dermos um input e para limpar os campos vamos precisar atribuir o state para o atributo de valor ao input
    setValue("");
    setCategory("");
    //aqui preenchemos os valores desse state com o forumalário
    console.log("Enviou form  ", value, category);
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      {/* quando esse evento for acionado ele trará o retorno da função handleSubmit */}
      <form onSubmit={handleSubmit}>
        {/* aqui quando mudar os valores ou seja onChange teremos uma função sendo executada que vai capturar o evento atual e altera-lo */}
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* vamos utilizar mesmo evento de onChange nesse select porém será direcionada a options, porém vamos mudar para selecionar a categoria */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
