import css from './SearchBar.module.css';

import toast from "react-hot-toast";

const SearchBar = ({handleSearch}) => {
    const onSubmit = (e) => {
        e.preventDefault();

        const query = e.target.elements.search.value.trim();

        if(query.length === 0) {
            toast.error("Please enter a search query");
            return;
        }

        handleSearch(query);
        e.target.reset();
    };

    return (
        <header className={css.header}>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    name="search"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default SearchBar;