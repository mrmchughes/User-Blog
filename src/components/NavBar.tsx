import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

const NavBar = () => {
  const [auth, setAuth] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

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
          <ListItemButton component="a" href="/" sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="/signup"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Sign Up" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="/login"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Login" />
          </ListItemButton>
        </List>
      )}
      {auth && (
        <List>
          <ListItemButton component="a" href="/" sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component="a" href="" sx={{ textAlign: "center" }}>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </List>
      )}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
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
              <Button href="/" sx={{ color: "#fff" }}>
                Home
              </Button>
              <Button href="/signup" sx={{ color: "#fff" }}>
                Sign Up
              </Button>
              <Button href="/login" sx={{ color: "#fff" }}>
                Login
              </Button>
            </Box>
          )}
          {auth && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button href="/" sx={{ color: "#fff" }}>
                Home
              </Button>
              <Button sx={{ color: "#fff" }}>Log Out</Button>
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
