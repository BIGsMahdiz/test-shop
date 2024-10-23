const categoryFilter = (data, category) => {
  if (!category) return data;
  const newProduct = data.filter((item) => item.category.name === category);
  return newProduct;
};

const createQueryObject = (prev, next) => {
  if (next.category === "all") {
    const { category, ...rest } = prev;
    return rest;
  }

  if (next.search === "") {
    const { search, ...rest } = prev;
    return rest;
  }

  return { ...prev, ...next };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

// const getInitialQuery = () => {
//   const query = {};
//   const category = JSON.parse(localStorage.getItem("category"));
//   const search = JSON.parse(localStorage.getItem("search"));
//   if (category) query.category = category;
//   if (search) query.search = search;
//   return query;
// };

// const saveQuery = (searchParams) => {
//   const search = searchParams.get("search");
//   const category = searchParams.get("category");
//   if (search) localStorage.setItem("search", JSON.stringify(search));
//   if (category) localStorage.setItem("category", JSON.stringify(category));
// };

export { categoryFilter, createQueryObject, getInitialQuery };
