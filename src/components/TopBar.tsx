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

import hamburgerLogo from "./../assets/hamburger.svg";
import searchPlusLogo from "./../assets/search-plus.svg";
import substractLogo from "./../assets/subtract.svg";
import { Divider } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
        position="static"
        sx={{
          backgroundColor: "#080808",
          width: "100%",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: "11px 20px",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
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

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                sx={{
                  backgroundColor: "#212121",
                  marginRight: "24px",
                  padding: "16px",
                }}
              >
                <img src={searchPlusLogo} alt="" />
              </IconButton>
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
        }}
      />
    </>
  );
}
export default ResponsiveAppBar;
