import React from "react";

function EmptySearchResults({ searchValue }) {
//   console.log(searchValue);
  return (
    <div className="EmptySearchResults">
      <p>Results not found for {searchValue}</p>
    </div>
  );
}

export { EmptySearchResults };