import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SellIcon from "@mui/icons-material/Sell";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import DataUsageIcon from "@mui/icons-material/DataUsage";

import { checkout } from "@/features/cart/cartSlice";
import { purchasedItems } from "@/features/purchased/purchasedSlice";

function CartSlide({ cart }) {
  const purchased = useSelector((state) => state.purchased);
  const dispatch = useDispatch();
  return (
    <div>
      <Box
        component="div"
        sx={{
          //   backgroundColor: "#ffdab9",
          border: "2px dashed #ff5023",
          borderRadius: 5,
          color: "#ff5023",
          padding: 3,
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          sx={{ textAlign: "center", color: "grey" }}
        >
          Checkout Details
        </Typography>
        <Typography
          component="p"
          variant="p"
          mt={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <SellIcon sx={{ marginRight: "4px" }} />
          Total Price: <span style={{ color: "grey" }}>${cart.totalPrice}</span>
        </Typography>
        <Typography
          component="p"
          variant="p"
          mt={1.5}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <EqualizerIcon sx={{ marginRight: "4px" }} />
          Quantity: <span style={{ color: "grey" }}>{cart.itemsCounter}</span>
        </Typography>
        <Typography
          component="p"
          variant="p"
          mt={1.5}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DataUsageIcon sx={{ marginRight: "4px" }} />
          Status:
          <span style={{ color: "grey" }}>
            {!cart.checkout ? "Pending..." : "Successfuly"}
          </span>
        </Typography>
        <Button
          onClick={() =>
            dispatch(checkout()) && dispatch(purchasedItems(cart.selectedItems))
          }
          variant="contained"
          sx={{
            backgroundColor: "#ff5023",
            color: "white",
            fontSize: "1.2rem",
            marginTop: 5,
            borderRadius: 3,
          }}
          fullWidth
        >
          Checkout
        </Button>
      </Box>
    </div>
  );
}

export default CartSlide;
