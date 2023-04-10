const Search = ({search, handleSearchUpdate}) => {
    return(
        <label>
            <p>Rechercher votre Robot</p>
            <input type="text" value={search} onChange={(event) => handleSearchUpdate(event.target.value)}/>
        </label>
)
}
export default Search;