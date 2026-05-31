import { useState } from "react";
import "./App.css";
import MovieList from "./movies/MovieList";
import TextField from "@mui/material/TextField";
import {
  Link,
  Switch,
  Route,
  Redirect,
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { AddColor } from "./color/AddColor";
import { InitialMovies } from "./InitialMovies";
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

// Material UI Icon Component (Separated to fix execution crash)
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function App() {
  const [data, setData] = useState(InitialMovies);
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
            {/* <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" >
            <Toolbar>
              <Button  color="inherit" aria-label="Home"   sx={{ mr: 2 }} onClick={()=>history.push("/")}  >
               Home                                 
              </Button>
              <Button  color="inherit" aria-label="Home"   sx={{ mr: 2 }} onClick={()=>history.push("/movies")}  >
               Movies           
              </Button>
              <Button  color="inherit" aria-label="Home"   sx={{ mr: 2 }} onClick={()=>history.push("/movies/add-movie")} >
               Add Movies  
              </Button>
              <Button  color="inherit" aria-label="Home"   sx={{ mr: 2 }} onClick={()=>history.push("/color-game")}  >
               Color Game   
              </Button>              
              
            </Toolbar>
          </AppBar>
       </Box> */}

            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                  {/* --- 1. MOBILE LAYOUT: HAMBURGER & DROPDOWN MENU --- */}
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                      alignItems: "center",
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
                        onClick={() => handleNavigation("/color-game")}
                      >
                        Color Game
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
                      onClick={() => handleNavigation("/color-game")}
                    >
                      Color Game
                    </Button>
                  </Box>

                  <Button
                    color="inherit"
                    sx={{ mr: 3, fontWeight: 500 }}
                    onClick={changeMode}
                  >
                    {/* { mode === "light" ? "dark" : "light"}  */}

                    {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
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
                <AddMovie data={data} setData={setData} />
              </Route>
              <Route path="/movies/edit/:id">
                <EditMovie data={data} setData={setData} />
              </Route>

              <Route path="/movies/:id">
                <MovieDetails data={data} />
              </Route>

              <Route path="/movies">
                <MovieList data={data} setData={setData} />
              </Route>

              <Route path="/color-game">
                <AddColor />
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

//26   mins done

// local crud  is done

// create - done Add Movie
// Read   - done MovieList, MovieDetails
// Update - EditMovie - combination of AddMovie & MovieDetails
// Delete - d one

// so far learned hooks
// usestate
// useHistory- route dom
// useparams- route dom
// useContext - to control prop drilling
// 1) createing - createContext
// 2) publisher - provider-  context.provider
// 3) subscriber - useContext(context)
