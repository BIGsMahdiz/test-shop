import { getInitialQuery } from "@/utils/filters";
import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterContext = createContext();

function Filters({ children }) {
  const [query, setQuery] = useState({});
  const [searchResult, setSearchResult] = useState();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
  }, [searchParams]);

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
