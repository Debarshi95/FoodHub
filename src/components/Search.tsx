import React from "react";
import styled from "styled-components";
interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchRoot = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  left: 0;
  right: 0;
`;
const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <SearchRoot>
      <input
        autoComplete="off"
        style={{
          width: "80%",
          padding: "14px 28px",
          borderRadius: "24px",
          outline: "none",
          border: 0,
          fontFamily: "inherit",
          fontSize: "1rem",
        }}
        type="text"
        name="query"
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        placeholder="Search for a food or cuisine"
      />
    </SearchRoot>
  );
};

export default Search;
