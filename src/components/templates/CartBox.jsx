import { Fab, Grid2, List, ListItem, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";

import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "@/features/cart/cartSlice";
import extractImageLink from "@/utils/extractImageLink";

function CartBox({ cart }) {
  const dispatch = useDispatch();

  if (!cart.selectedItems) return;
  return (
    <div>
      <List
        sx={{
          padding: 3,
          border: "1px dashed grey",
          borderRadius: 3,
        }}
      >
        <Grid2 container spacing={2}>
          {cart?.selectedItems.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                padding: 2,
                //   border: "1px dashed grey",
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: 3,
                margin: "10px 0",
              }}
            >
              <Grid2 size={{ xs: 12, md: 2.5 }}>
                <img
                  src={extractImageLink(item.images[0])}
                  style={{ width: "80px", height: "80px" }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 8 }}>
                <Typography component="h6" variant="h6" sx={{}}>
                  {item.title}
                </Typography>
                <Typography component="p" variant="p" sx={{ color: "grey" }}>
                  {item.category.name}
                </Typography>
              </Grid2>
              <Grid2
                size={{ xs: 12, md: 3 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bolder",
                }}
              >
                <Fab
                  onClick={() => dispatch(increaseItem(item))}
                  color="primary"
                  sx={{
                    width: "40px",
                    height: "40px",
                    margin: "0 8px",
                    fontSize: "1.2rem",
                  }}
                >
                  +
                </Fab>
                {item.quantity}
                <Fab
                  onClick={() => dispatch(decreaseItem(item))}
                  sx={{
                    width: "40px",
                    height: "40px",
                    margin: "0 8px",
                    fontSize: "1.2rem",
                  }}
                  disabled={item.quantity === 1}
                >
                  -
                </Fab>
              </Grid2>
              <Grid2
                size={{ xs: 12, md: 2 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Typography component="span" variant="span">
                  ${item.price}
                </Typography>
                <Fab
                  onClick={() => dispatch(removeItem(item))}
                  sx={{
                    width: "40px",
                    height: "40px",
                    margin: "0 8px",
                    fontSize: "1.2rem",
                  }}
                >
                  <DeleteOutlineIcon />
                </Fab>
              </Grid2>
            </ListItem>
          ))}
        </Grid2>
      </List>
    </div>
  );
}

export default CartBox;
