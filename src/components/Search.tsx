
const Search = ({search, setSearch}) => {

    return (
    <div className='search'>
        <input type="text" placeholder="Faça uma busca" value={search}  onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search