import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  //definimos o todo em um state (todo para consultar, setTodo para manipular) vamos usar o useState
  //useState permite que você reenderize o component quando atualizada, bom para sempre manipular valores
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir na academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  //Aqui criaremos um state para o search
  const [search, setSearch] = useState("");

  //para o filtro
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  //Função para adicionar mais um objeto a nossa lista de todo
  //para essa função ser executada vamos passar como propriets para dentro do form
  //assim que ela for passada para o form devemos receber ela no formulário
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    // agora vamos atualizar o state dos todos que vão ser adicionado
    setTodos(newTodos);
  };

  //Função para manusear a lista como completada ou remover o item
  const removeTodo = (id) => {
    const newTodos = [...todos];
    // vamos criar um filtro nela sabendo que o filtro não modifica o array original
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    //agora vamos atualizar o state
    setTodos(filteredTodos);
    //vamos atribuir a função ao botão de remover, para isso precisamos passar como propriedade para o component
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  // vamos utilizar todo o arquivo em um component só
  //o mais recomendado em situações focadas em estilização é separar por component ou utilizar uma estratégia chamada style components
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {/* aqui ele ira percorer pelo meu array de objetos e receber cada todo utilizando uma função javascript .map
          Sempre que utilizarmos códigos de javascript no jsx precisamos utilizar as '{chaves}'

          ------
          Podemos mudar o state com search, e por isso antes do map podemos fazer uma funcionalidade do search com filter
        */}
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            // aqui no chamado do component vamos passar a prop 'todo={todo}', estamos dizendo que a propriedade todo tem o valor todo que é um objeto
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
