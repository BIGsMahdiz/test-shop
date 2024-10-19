import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import HomePage from "@/pages/HomePage";
import Dashboard from "@/pages/Dashboard";
import Admin from "@/pages/Admin";
import Authentication from "@/pages/Authentication";
import Checkout from "@/pages/Checkout";
import SearchExplore from "@/pages/SearchExplore";
import ProductDetails from "@/pages/ProductDetails";
import { getProfile } from "@/services/profile";
import Loader from "@/components/modules/Loader";
import PageNotFound from "@/pages/404";
import Profile from "@/pages/Profile";
import Favorite from "@/pages/Favorite";
import Purchased from "@/pages/Purchased";

function Router() {
  const { isLoading, data } = useQuery({
    queryKey: ["get-profile"],
    queryFn: getProfile,
  });
  console.log({ isLoading, data });

  if (isLoading) return <Loader />;
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/dashboard"
        element={
          data?.data ? <Dashboard data={data} /> : <Navigate to="/auth" />
        }
      >
        <Route index element={<Navigate to="profile" />} />

        <Route path="profile" element={<Profile data={data} />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="purchased" element={<Purchased />} />
      </Route>
      <Route
        path="/admin"
        element={
          data?.data && data?.data.role === "admin" ? (
            <Admin />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/auth"
        element={data?.data ? <Navigate to="/dashboard" /> : <Authentication />}
      />
      <Route path="/search-explore" element={<SearchExplore />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
