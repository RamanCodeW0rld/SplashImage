import { useGlobalContext } from "./context";


const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        const searcHValue = e.target.elements.search.value;
        if(searcHValue === ""){
            return
        }
        else{
            setSearchTerm(searcHValue);
        }
    }
   
    return <section>
        <h1 className="title">Unsplash Images</h1>
        <form className="search-form" onSubmit={handleSubmit}>
         <input type="text" placeholder="cat" name="search" className="form-input search-input"/>
         <button type="submit" className="btn">search</button>
        </form>
    </section>
}

export default SearchForm;