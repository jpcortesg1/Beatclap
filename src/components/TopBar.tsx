import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Divider, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

import hamburgerLogo from "./../assets/hamburger.svg";
import searchPlusLogo from "./../assets/search-plus.svg";
import substractLogo from "./../assets/subtract.svg";
import beatClapLogo from "./../assets/Logo-Beatclap.svg";
import searchLogo from "./../assets/search.svg";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flex: 2,
  borderRadius: "12px",
  backgroundColor: "#1A1A1A",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  height: "45px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "left",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: {
            xs: "#080808",
            md: "#121212",
          },
          width: {
            sx: "100%",
            md: "calc(100% - 72px - 16px - 8px)",
          },
          marginLeft: {
            sx: 0,
            md: "calc(72px + 16px)",
          },
          borderRadius: {
            sx: "0",
            md: "22px",
          },
          marginTop: {
            sx: "0",
            md: "8px",
          },
          marginRight: {
            sx: "0",
            md: "8px",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: {
              sx: "11px 20px",
              md: "0 20px",
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <IconButton
                sx={{
                  padding: "8px 12px",
                }}
              >
                <img src={hamburgerLogo} alt="" />
              </IconButton>
              <IconButton
                sx={{
                  padding: "8px 12px",
                }}
              >
                <img src={substractLogo} alt="" />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <IconButton>
                <img src={beatClapLogo} alt="" />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                sx={{
                  backgroundColor: "#212121",
                  marginRight: "24px",
                  padding: "16px",
                  display: {
                    xs: "auto",
                    md: "none",
                  },
                }}
              >
                <img src={searchPlusLogo} alt="" />
              </IconButton>

              <Search
                sx={{
                  marginRight: "24px",
                  display: {
                    xs: "none",
                    md: "inline-flex",
                  },
                  minWidth: "300px",
                }}
              >
                <SearchIconWrapper>
                  <IconButton>
                    <img src={searchLogo} alt="" />
                  </IconButton>
                </SearchIconWrapper>
                <StyledInputBase />
              </Search>

              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    backgroundColor: "#EEC137",
                    padding: "5.5px 9.5px",
                    color: "#FFF",
                    fontSize: "14px",
                  }}
                >
                  P
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider
        sx={{
          backgroundColor: "#1A1A1A",
          height: "1px",
          display: {
            xs: "auto",
            md: "none",
          },
        }}
      />
    </>
  );
}
export default ResponsiveAppBar;
