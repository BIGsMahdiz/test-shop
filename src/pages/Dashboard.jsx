import DashboardSidebar from "@/components/templates/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { Container, Grid2 } from "@mui/material";


function Dashboard({ data }) {
  return (
    <Container maxWidth="xl">
      <Grid2 container spacing={2} sx={{ marginTop: 5, width: "100%" }}>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <DashboardSidebar data={data} />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 9 }}
          sx={{ border: "1px solid silver", borderRadius: "10px", padding: 3 }}
        >
          <Outlet />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Dashboard;
