import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";

function DashboardSidebar({ data }) {
  return (
    <div>
      <List
        sx={{ padding: 2, border: "1px solid silver", borderRadius: "10px" }}
      >
        <Box component="div" sx={{ marginBottom: 3 }}>
          <Avatar src={data.data.avatar} />
          <Typography variant="h5" component="h5">
            {data.data.name}
          </Typography>
          <Typography variant="p" component="p" sx={{ color: "grey" }}>
            {data.data.email}
          </Typography>
        </Box>
        <Divider />
        <Link to="/dashboard/profile">
          <ListItemButton sx={{ padding: 2 }}>
            <PermIdentityOutlinedIcon sx={{ marginRight: 1 }} />
            Profile
          </ListItemButton>
        </Link>
        <Divider />
        <Link to="/dashboard/favorite">
          <ListItemButton sx={{ padding: 2 }}>
            <FavoriteBorderOutlinedIcon sx={{ marginRight: 1 }} />
            Favorite
          </ListItemButton>
        </Link>
        <Divider />
        <Link to="/dashboard/purchased">
          <ListItemButton sx={{ padding: 2 }}>
            <LocalMallOutlinedIcon sx={{ marginRight: 1 }} />
            Purchased
          </ListItemButton>
        </Link>
      </List>
    </div>
  );
}

export default DashboardSidebar;
