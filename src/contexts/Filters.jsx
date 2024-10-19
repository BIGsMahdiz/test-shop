import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterContext = createContext();

function Filters({ children }) {
  const [query, setQuery] = useState({});
  const [searhParams, setSearchParams] = useSearchParams();

  //   useEffect(() => {
  //     setSearchParams(query);
  //   }, [query]);

  return (
    <FilterContext.Provider value={{ query, setQuery }}>
      {children}
    </FilterContext.Provider>
  );
}

const useQueryF = () => {
  const { query, setQuery } = useContext(FilterContext);
  return [query, setQuery];
};

export default Filters;
export { useQueryF };
