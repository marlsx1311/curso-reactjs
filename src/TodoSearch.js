import React from "react";
import "./TodoSearch.css"

function TodoSearch(props){
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return [
        <input placeholder='cebolla'
        onChange={onSearchValueChange}
        value={searchValue}
        />,
        <p>{searchValue}</p>
    ];  
}
export {TodoSearch};