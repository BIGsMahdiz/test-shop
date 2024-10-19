import {
  Box,
  Container,
  Fab,
  Grid2,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector } from "react-redux";
import Loader from "@/components/modules/Loader";
import extractImageLink from "@/utils/extractImageLink";
import { useState } from "react";

function Purchased() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("purchased")) || []
  );

  // const purchased = useSelector((store) => store.purchased);
  console.log(data);
  return (
    <Container maxWidth="xl">
      <List>
        <Grid2 container spacing={2}>
          {data[0].map((item) => (
            <ListItem
              key={item.id}
              sx={{
                padding: 2,
                border: "1px solid silver",
                borderRadius: "10px",
                width: "100%",
              }}
            >
              <Grid2 size={{ xs: 12, sm: 5, md: 2, lg: 1.5 }}>
                <img
                  src={extractImageLink(item.images[0])}
                  style={{ width: "80px", height: "80px" }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 8 }}>
                <Typography variant="h5" component="h5">
                  {item.title}
                </Typography>
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center", mt: 1 }}
                >
                  <Typography variant="span" component="span">
                    Category:
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{ color: "grey", marginLeft: 1 }}
                  >
                    {item.category.name}
                  </Typography>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2.5 }} sx={{ textAlign: "end" }}>
                <Fab>
                  <CheckIcon sx={{ fontSize: "2rem", color: "#e63946" }} />
                </Fab>
              </Grid2>
            </ListItem>
          ))}
        </Grid2>
      </List>
    </Container>
  );
}

export default Purchased;
