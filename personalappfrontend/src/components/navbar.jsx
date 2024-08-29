import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton, Menu, MenuItem, styled } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../reducer/AuthReducer";
import { useNavigate } from "react-router-dom";

const StyledNavLinks = styled(Button)({
  color: "black",
  fontFamily: "Open Sans",
});

const StyledSocialIcon = styled(IconButton)({});

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const { state, dispatch } = useAuth();
  const { role, isLoggedIn } = state;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <AppBar
      sx={{ height: "100px" }}
      elevation={0}
      color="transparent"
      position="static"
    >
      <Toolbar
        sx={{
          display: "flex",
          alignIems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            gap: "10px",
            flex: 1,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <StyledSocialIcon component="a">
            <InstagramIcon sx={{ fontSize: "18px" }} htmlColor="#f01a50" />
          </StyledSocialIcon>
          <StyledSocialIcon component="a">
            <LinkedInIcon sx={{ fontSize: "18px" }} htmlColor="blue" />
          </StyledSocialIcon>
          <StyledSocialIcon component="a">
            <XIcon sx={{ fontSize: "18px" }} htmlColor="black" />
          </StyledSocialIcon>
          <StyledSocialIcon component="a">
            <YouTubeIcon sx={{ fontSize: "20px" }} htmlColor="#e30211" />
          </StyledSocialIcon>
        </Box>
        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontSize: "20px",
            fontWeight: 500,
            textAlign: {
              xs: "left",
              lg: "center",
            },
            // width: "350px",
            flex: 1,
          }}
          variant="h6"
          component="div"
        >
          <Link to="/">Lovedeep Blog</Link>
        </Typography>
        <Box
          sx={{
            flex: 1,
            alignItems: "center",
            gap: "20px",
            fontSize: "14px",
            display: {
              xs: "none",
              md: "block",
            },
            textAlign: "center",
          }}
        >
          <Link
            style={{
              color: "black",
              fontFamily: "Open Sans",
              display: "inline-block",
            }}
            to="/"
          >
            HomePage
          </Link>
          <Link
            style={{
              color: "black",
              fontFamily: "Open Sans",
              display: "inline-block",
              marginLeft: "12px",
            }}
            to="/"
          >
            Contact
          </Link>
          <Link
            style={{
              color: "black",
              fontFamily: "Open Sans",
              display: "inline-block",
              marginLeft: "12px",
            }}
            to="/"
          >
            About
          </Link>
          {isLoggedIn == false && (
            <Link
              style={{
                color: "black",
                fontFamily: "Open Sans",
                display: "inline-block",
                marginLeft: "12px",
              }}
              to="/login"
            >
              Login
            </Link>
          )}
          {isLoggedIn == false && (
            <Link
              style={{
                color: "black",
                fontFamily: "Open Sans",
                display: "inline-block",
                marginLeft: "12px",
              }}
              to="/register"
            >
              Register
            </Link>
          )}
          {isLoggedIn == true && (
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                marignLeft: "12px",
                paddingLeft: "12px",
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
          {isLoggedIn == true && role === "ADMIN" && (
            <Link
              style={{
                color: "black",
                fontFamily: "Open Sans",
                display: "inline-block",
                marginLeft: "12px",
              }}
              to="/writePost"
            >
              Write
            </Link>
          )}
        </Box>
        <Box
          sx={{
            flex: 1,
            display: { sm: "block", md: "none" },
            textAlign: "right",
          }}
        >
          <IconButton id="basic-button" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            elevation="2"
          >
            <MenuItem onClick={handleClose}>
              <StyledNavLinks component={Link}>Contact</StyledNavLinks>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <StyledNavLinks component={Link}>About</StyledNavLinks>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <StyledNavLinks component={Link}>Login</StyledNavLinks>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
