import React from 'react';
import './searchbar.css';

const SearchBar = props => {
    return (
    <form onSubmit={props.submit}>
        <input
            type="text"
            value={props.value}
            onChange={props.change}
            placeholder="Wpisz miasto" />
        <button>Wyszukaj miasto</button>
    </form>
    )
}

export default SearchBar;