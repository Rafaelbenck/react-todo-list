// Aqui teremos um componente que recebe props
// e vamos receber o state de search que vamos adicionar no app -todo
// e o state de mudar a busca aonde terá a lógica

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar Item da lista..."
      />
    </div>
  );
};

export default Search;
