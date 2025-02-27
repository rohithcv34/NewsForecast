import React from "react";

const SearchBar = ({ setSearchQuery }) => {

    return (
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Search news..."
            onChange={(e) => setSearchQuery(e.target.value)} //event handle will be triggered whenever the value inside input is changed and automatically will be changed
          />
        </div>
      );
    };
    
    export default SearchBar;