import React from "react";

const SearchBox = ({change}) => {
    return(
        <input className="pa3 ba b--green bg-lightest-blue" 
        onChange = {change}
        type="search" placeholder="Search Robot"/>
    );
}
export default SearchBox;