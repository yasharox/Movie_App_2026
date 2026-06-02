import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./movies/MovieList";
import TextField from "@mui/material/TextField";
import {
  Link,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { AddColor } from "./color/AddColor";
// import { InitialMovies } from "./InitialMovies";
import { MovieDetails } from "./movies/MovieDetails";
import { NotFound } from "./others/NotFound";
import { Welcome } from "./others/Welcome";
import { AddMovie } from "./movies/AddMovie";
import { EditMovie } from "./movies/EditMovie";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

// Material UI Icon Component (Separated to fix execution crash)
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { BasicForm } from "./others/BasicForm";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6a1bf1008858a003817b5635.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((movies) => setData(movies));
  }, []);

  const history = useHistory();
  const [mode, setMode] = useState("dark");

  // creating context
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // State to track the anchor element for the mobile dropdown menu
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Helper function to navigate and automatically close the menu drawer on mobile
  const handleNavigation = (path) => {
    history.push(path);
    handleCloseNavMenu();
  };

  const paperStyles = {
    borderRadius: 0,
    minHeight: "100vh",
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Paper elevation={4} style={paperStyles}>
          <div className="App">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                  {/* --- 1. MOBILE LAYOUT: HAMBURGER & DROPDOWN MENU --- */}
                  <AdbIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    MOVIESX
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <IconButton
                      size="large"
                      aria-label="navigation menu"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                      edge="start"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>

                    <Typography
                      variant="h6"
                      noWrap
                      sx={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      MOVIESX
                    </Typography>

                    {/* Dropdown Menu Container */}
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      keepMounted
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      PaperProps={{
                        sx: {
                          bgcolor: "#1e1e1e", // Matches the dark dropdown aesthetic
                          color: "white",
                          minWidth: "180px",
                          boxShadow: "0px 8px 16px rgba(0,0,0,0.4)",
                        },
                      }}
                      sx={{ display: { xs: "block", md: "none" } }}
                    >
                      <MenuItem
                        sx={{ py: 1.5, fontSize: "0.95rem" }}
                        onClick={() => handleNavigation("/")}
                      >
                        Home
                      </MenuItem>
                      <MenuItem
                        sx={{ py: 1.5, fontSize: "0.95rem" }}
                        onClick={() => handleNavigation("/movies")}
                      >
                        Movies
                      </MenuItem>
                      <MenuItem
                        sx={{ py: 1.5, fontSize: "0.95rem" }}
                        onClick={() => handleNavigation("/movies/add-movie")}
                      >
                        Add Movies
                      </MenuItem>
                      <MenuItem
                        sx={{ py: 1.5, fontSize: "0.95rem" }}
                        onClick={() => handleNavigation("/basic-Form")}
                      >
                        Baic Form
                      </MenuItem>
                    </Menu>
                  </Box>

                  {/* --- 2. DESKTOP LAYOUT: INLINE HORIZONTAL NAVIGATION --- */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      color="inherit"
                      sx={{ mr: 3, fontWeight: 500 }}
                      onClick={() => handleNavigation("/")}
                    >
                      Home
                    </Button>
                    <Button
                      color="inherit"
                      sx={{ mr: 3, fontWeight: 500 }}
                      onClick={() => handleNavigation("/movies")}
                    >
                      Movies
                    </Button>
                    <Button
                      color="inherit"
                      sx={{ mr: 3, fontWeight: 500 }}
                      onClick={() => handleNavigation("/movies/add-movie")}
                    >
                      Add Movies
                    </Button>
                    <Button
                      color="inherit"
                      sx={{ mr: 3, fontWeight: 500 }}
                      onClick={() => handleNavigation("/basic-Form")}
                    >
                      Basic Form
                    </Button>
                  </Box>

                  <Button
                    color="inherit"
                    sx={{ mr: 3, fontWeight: 500 }}
                    onClick={changeMode}
                    startIcon={
                      mode === "light" ? <DarkModeIcon /> : <LightModeIcon />
                    }
                  >
                    {mode === "light" ? "dark" : "light"}

                    {/* {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />} */}
                  </Button>
                </Toolbar>
              </AppBar>
            </Box>

            {/* --- ROUTING SWITCHBOARD --- */}
            <Switch>
              <Route path="/films">
                <Redirect to="/movies"> </Redirect>
              </Route>
              <Route path="/movies/add-movie">
                <AddMovie />
              </Route>
              <Route path="/movies/edit/:id">
                <EditMovie />
              </Route>

              <Route path="/movies/:id">
                <MovieDetails />
              </Route>

              <Route path="/movies">
                <MovieList />
              </Route>

              <Route path="/basic-Form">
                {/* <AddColor /> */}
                <BasicForm />
              </Route>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="**">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;

//  1:53  mins done == validation - formik to be continued
// local crud  is done
// create - done Add Movie
// Read   - done MovieList, MovieDetails
// Update - EditMovie - combination of AddMovie & MovieDetails
// Delete - d one
// so far learned hooks
// usestate -react
// useHistory- route dom
// useparams- route dom
// useContext - to control prop drilling
// 1) createing - createContext
// 2) publisher - provider-  context.provider
// 3) subscriber - useContext(context)
// useEffect - from react
