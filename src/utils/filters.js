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

export { categoryFilter, createQueryObject, getInitialQuery };
