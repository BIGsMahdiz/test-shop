import extractImageLink from "@/utils/extractImageLink";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { textCut } from "@/utils/text";
import { addItem } from "@/features/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";

function CardEl({ data }) {
  const dipatch = useDispatch();

  const addItemHandler = () => {
    toast.success(`${data.title} added to cart successfuly`);
    dipatch(addItem(data));
  };

  return (
    <Card
      sx={{
        minWidth: 200,
        marginTop: 10,
        marginBottom: 5,
        // border: "1px solid grey",
        backgroundColor: "#f9f7f3",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Link to={`/product-details/${data.id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={`${extractImageLink(data.images[0])}`}
          title={data.title}
        />
      </Link>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textWrap: "nowrap" }}
        >
          {textCut(data.title)}
        </Typography>
        <Box
          variant="div"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "green",
          }}
        >
          <Typography variant="h6" component="h6">
            Price :
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "1.2rem" }}
          >
            ${data.price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          onClick={addItemHandler}
          variant="outlined"
          sx={{ display: "flex", alignItems: "center" }}
          fullWidth
        >
          Add to cart <AddShoppingCartIcon sx={{ marginLeft: 2 }} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardEl;
