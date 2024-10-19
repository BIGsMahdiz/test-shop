import { Grid2, List, ListItem, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services/categories";
import extractImageLink from "@/utils/extractImageLink";

function CategoryHome() {
  const { isLoading, data } = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: getCategories,
  });

  const slicedData = data?.data.slice(0, 6);
  return (
    <div>
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {slicedData?.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              border: "1px solid silver",
              borderRadius: "10px",
              padding: 3,
              width: "160px",
              height: "170px",
            }}
          >
            <img
              src={extractImageLink(item.image)}
              style={{ width: "90px", height: "90px" }}
            />
            <Typography
              variant="p"
              component="p"
              sx={{ mt: 2, textAlign: "center" }}
            >
              {item.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CategoryHome;
