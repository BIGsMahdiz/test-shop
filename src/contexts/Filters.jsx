import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

function Filters({ children }) {
  const [query, setQuery] = useState({});
  const [searchResult, setSearchResult] = useState();

  return (
    <FilterContext.Provider
      value={{ query, setQuery, searchResult, setSearchResult }}
    >
      {children}
    </FilterContext.Provider>
  );
}

const useQueryF = () => {
  const { query, setQuery } = useContext(FilterContext);
  return [query, setQuery];
};

const useSearchResult = () => {
  const { searchResult, setSearchResult } = useContext(FilterContext);
  return [searchResult, setSearchResult];
};

export default Filters;
export { useQueryF, useSearchResult };
