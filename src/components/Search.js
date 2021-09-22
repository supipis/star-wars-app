import React, { useState } from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  const onChange = (q) => {
    setSearchQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search characters"
          autoFocus
          value={searchQuery}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
