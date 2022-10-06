import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

interface NavBarProps {
  auth: boolean;
  handleChange: () => void;
}

const NavBar = ({ auth, handleChange }: NavBarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Blog Title Here
      </Typography>
      <Divider />
      {!auth && (
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/"
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/signup"
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/login"
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="Log In" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
      {auth && (
        <List>
          <ListItemButton
            component={RouterLink}
            to="/"
            sx={{ textAlign: "center" }}
          >
            Home
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              fetch(
                `https://rest-api-for-blog-production.up.railway.app/logout`,
                {
                  mode: "cors",
                }
              ).then(function () {
                localStorage.clear();
                handleChange();
              });
            }}
            sx={{ textAlign: "center" }}
          >
            Log Out
          </ListItemButton>
        </List>
      )}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Blog Title Here
          </Typography>
          {!auth && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ textAlign: "center" }}
              >
                Home
              </Button>
              <Button
                component={RouterLink}
                to="/signup"
                color="inherit"
                sx={{ textAlign: "center" }}
              >
                Sign Up
              </Button>
              <Button
                component={RouterLink}
                to="/login"
                color="inherit"
                sx={{ textAlign: "center" }}
              >
                Log In
              </Button>
            </Box>
          )}
          {auth && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ textAlign: "center" }}
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  fetch(
                    `https://rest-api-for-blog-production.up.railway.app/logout`,
                    {
                      mode: "cors",
                    }
                  ).then(function () {
                    localStorage.clear();
                    handleChange();
                  });
                }}
                color="inherit"
                sx={{ textAlign: "center" }}
              >
                Log Out
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
