import React from "react";
import '../styles/TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <React.Fragment>
        <input 
            className="TodoSearch" 
            placeholder="frontend" 
            onChange={onSearchValueChange}
        />
        <p>{searchValue}</p>
        </React.Fragment>
    );
}

export { TodoSearch };