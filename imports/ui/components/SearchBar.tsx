import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledSearchBar from '../elements/StyledSearchBar';

const SearchBar = (props:any):JSX.Element => {

    return <StyledSearchBar>
        <label htmlFor="searchbar" className="searchbar--label">
            <FontAwesome name="search" className="searchbar--icon"/>
            <input type="text" className="searchbar--input" placeholder="Rechercher ou Démarrer une discussion"/>
        </label>
    </StyledSearchBar>
}

export default SearchBar;