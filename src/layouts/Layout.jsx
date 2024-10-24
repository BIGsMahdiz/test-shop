import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  IconButton,
  InputBase,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CallIcon from "@mui/icons-material/Call";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { getProductBySearch } from "@/services/product";
import SearchResult from "@/components/templates/SearchResult";
import { getProfile } from "@/services/profile";

import styles from "@/styles/Layout.module.css";
import Loader from "@/components/modules/Loader";
import Dropdown from "@/components/modules/Dropdown";
import { useQueryF, useSearchResult } from "@/contexts/Filters";
import { createQueryObject } from "@/utils/filters";

function Layout({ children }) {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

  const [query, setQuery] = useQueryF();
  const [searchResult, setSearchResult] = useSearchResult();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  const { data, refetch } = useQuery({
    queryKey: ["getProductsBySearch", debouncedSearchValue],
    queryFn: () => getProductBySearch(debouncedSearchValue),
    enabled: !!debouncedSearchValue,
  });

  const { isLoading, data: profileData } = useQuery({
    queryKey: ["get-profile"],
    queryFn: getProfile,
  });

  const searchHandler = (event) => {
    event.preventDefault();

    if (!data && !data.data) return;
    setSearchResult(data.data);
    localStorage.setItem("searchData", JSON.stringify(data.data));
    navigate("/search-explore");
    setQuery((prev) =>
      createQueryObject(prev, { search: debouncedSearchValue })
    );
  };

  if (isLoading) return <Loader />;

  return (
    <div className={styles.main}>
      {!isAuthPage && (
        <header style={{ marginTop: 10 }}>
          <Container maxWidth="xl">
            <Grid2 container>
              <Grid2
                size={{ xs: 12, sm: 12, md: 9, lg: 9 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Link to="/">
                  <img src="/logo2.png" style={{ width: "200px" }} />
                </Link>
                <Box
                  component="div"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Paper
                    component="form"
                    onSubmit={searchHandler}
                    sx={{
                      p: "2px 4px",
                      ml: 2,
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                      position: "relative",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search products..."
                      inputProps={{ "aria-label": "Search products..." }}
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <IconButton
                      type="submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                  {!!debouncedSearchValue && <SearchResult data={data} />}
                </Box>
              </Grid2>
              <Grid2
                size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                {!profileData?.data && (
                  <Link to="/auth">
                    <Button
                      variant="outlined"
                      sx={{
                        textWrap: "nowrap",
                        borderColor: "#ff5023",
                        color: "#ff5023",
                      }}
                    >
                      Login / Signup
                      <LoginIcon ml={1} sx={{ fontSize: "30px" }} />
                    </Button>
                  </Link>
                )}
                {profileData?.data && (
                  <Link to="/dashboard">
                    <PersonOutlineOutlinedIcon sx={{ fontSize: "30px" }} />
                  </Link>
                )}
                {profileData?.data?.role === "admin" && (
                  <Link to="/admin">
                    <ManageAccountsIcon sx={{ fontSize: "30px" }} />
                  </Link>
                )}
                {profileData?.data && (
                  <Link to="/checkout">
                    <ShoppingBasketOutlinedIcon sx={{ fontSize: "30px" }} />
                  </Link>
                )}
              </Grid2>
            </Grid2>
          </Container>
          <section style={{ backgroundColor: "#f9f9f9" }}>
            <Container maxWidth="xl">
              <Grid2
                container
                spacing={2}
                mt={1}
                padding={1}
                alignItems="center"
              >
                <Grid2 size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
                  <section>
                    <List
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        color: "#495057",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <ListItem
                          sx={{
                            margin: "3px",
                            padding: "5 20px",
                            borderRadius: "7px",
                            width: "fit-content",
                            backgroundColor: "#ff5023",
                            color: "#fff",
                            position: "relative",
                          }}
                        >
                          <Link
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <FormatListBulletedIcon />
                            <span style={{ marginLeft: "3px" }}>
                              Categories
                            </span>
                          </Link>
                        </ListItem>
                      </Box>
                      <ListItem
                        sx={{
                          margin: "3px",
                          padding: "0 20px",
                          width: "fit-content",
                        }}
                      >
                        <Link style={{ display: "flex", alignItems: "center" }}>
                          <HomeIcon />
                          <span style={{ marginLeft: "3px" }}>Home</span>
                        </Link>
                      </ListItem>
                      <ListItem
                        sx={{
                          margin: "3px",
                          padding: "0 20px",
                          width: "fit-content",
                        }}
                      >
                        <Link style={{ display: "flex", alignItems: "center" }}>
                          <StoreIcon />
                          <span style={{ marginLeft: "3px" }}>Shop</span>
                        </Link>
                      </ListItem>
                      <ListItem
                        sx={{
                          margin: "3px",
                          padding: "0 20px",
                          width: "fit-content",
                        }}
                      >
                        <Link style={{ display: "flex", alignItems: "center" }}>
                          <LibraryBooksIcon />
                          <span style={{ marginLeft: "3px" }}>Weblog</span>
                        </Link>
                      </ListItem>
                      <ListItem
                        sx={{
                          margin: "3px",
                          padding: "0 20px",
                          width: "fit-content",
                        }}
                      >
                        <Link style={{ display: "flex", alignItems: "center" }}>
                          <CallIcon />
                          <span style={{ marginLeft: "3px" }}>Contact</span>
                        </Link>
                      </ListItem>
                      <ListItem
                        sx={{
                          margin: "3px",
                          padding: "0 20px",
                          width: "fit-content",
                        }}
                      >
                        <Link style={{ display: "flex", alignItems: "center" }}>
                          <GroupsIcon />
                          <span style={{ marginLeft: "3px" }}>About us</span>
                        </Link>
                      </ListItem>
                    </List>
                  </section>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                  <Button variant="contained" sx={{ bgcolor: "#212121" }}>
                    Sell now
                    <NotificationsActiveIcon sx={{ marginLeft: "5px" }} />
                  </Button>
                </Grid2>
              </Grid2>
            </Container>
          </section>
        </header>
      )}
      <main>{children}</main>
      {!isAuthPage && <footer></footer>}
    </div>
  );
}

export default Layout;
