import { Container, Grid2 } from "@mui/material";
import { useSelector } from "react-redux";

import CartBox from "@/components/templates/CartBox";
import CartSlide from "@/components/templates/CartSlide";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  return (
    <Container maxWidth="xl" sx={{ marginTop: 12 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <CartSlide cart={cart} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <CartBox cart={cart} />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Checkout;
