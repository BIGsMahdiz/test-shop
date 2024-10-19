import { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  Avatar,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import CardEl from "@/components/templates/CardEl";
import { getCategories } from "@/services/categories";
import {
  categoryFilter,
  createQueryObject,
  getInitialQuery,
} from "@/utils/filters";
import Loader from "@/components/modules/Loader";
import { useQueryF } from "@/contexts/Filters";

function SearchExplore() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  const [searchParams, setSearchParams] = useSearchParams();
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useQueryF();
  console.log(query);

  const { isLoading, data } = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: getCategories,
  });

  useEffect(() => {
    setDisplay(searchResults);
    // setQuery(getInitialQuery(searchParams));
  }, [searchResults]);

  useEffect(() => {
    setSearchParams(query);
    let filteredData = categoryFilter(searchResults, query.category);

    setDisplay(filteredData);
  }, [query]);

  const sliceCategory = data?.data.slice(0, 5);

  const categoryHandler = (event) => {
    const closestEl = event.target.closest("li");
    const categoryName = closestEl.dataset.category;

    if (!closestEl) return;

    setQuery((prev) => createQueryObject(prev, { category: categoryName }));
  };

  if (isLoading) return <Loader />;

  return (
    <Container maxWidth="xl">
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 10 }}>
          <Grid2 container spacing={2}>
            {display.map((item) => (
              <Grid2 key={item.id} size={{ xs: 12, md: 4 }}>
                <CardEl data={item} />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem onClick={categoryHandler} data-category={"all"}>
              <ListItemAvatar>
                <Avatar src="/logo.png" />
              </ListItemAvatar>
              <ListItemText
                primary="All"
                secondary={new Date("2024 11 10").toLocaleDateString()}
              />
            </ListItem>
            {sliceCategory.map((item) => (
              <ListItem
                key={item.id}
                data-category={item.name}
                onClick={categoryHandler}
              >
                <ListItemAvatar>
                  <Avatar src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  sx={{ textWrap: "nowrap" }}
                  primary={item.name}
                  secondary={new Date(item.creationAt).toLocaleDateString()}
                />
              </ListItem>
            ))}
          </List>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default SearchExplore;
