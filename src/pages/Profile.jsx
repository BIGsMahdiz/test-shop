import { Avatar, Box, Grid2, Typography } from "@mui/material";

function Profile({ data }) {
  return (
    <div>
      <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar src={data.data.avatar} sx={{ width: "80px", height: "80px" }} />
      </Box>
      <Grid2 container spacing={2} mt={3} p={3}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
          >
            <Typography variant="h6" component="h6">
              Fullname:
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ color: "grey", marginLeft: 1 }}
            >
              {data.data.name}
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
          >
            <Typography variant="h6" component="h6">
              Email:
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ color: "grey", marginLeft: 1 }}
            >
              {data.data.email}
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
          >
            <Typography variant="h6" component="h6">
              Password:
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ color: "grey", marginLeft: 1 }}
            >
              {data.data.password}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
          >
            <Typography variant="h6" component="h6">
              ID number:
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ color: "grey", marginLeft: 1 }}
            >
              {data.data.id}
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
          >
            <Typography variant="h6" component="h6">
              creationAt:
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ color: "grey", marginLeft: 1 }}
            >
              {new Date(data.data.creationAt).toDateString()}
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
          >
            <Typography variant="h6" component="h6">
              Role:
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ color: "grey", marginLeft: 1 }}
            >
              {data.data.role}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Profile;
