import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import checkLogo from "./../assets/check.svg";
import { useState } from "react";

import ellipsesHLogo from "./../assets/ellipses-h.svg";
import trashLogo from "./../assets/trash.svg";
import lockLogo from "./../assets/lock.svg";
import cogLogo from "./../assets/cog.svg";

interface UserProps {
  name: string;
  role: string;
  type: string;
  avatar: string;
  colorAvatar?: string;
}

const settings = [
  {
    text: "Edit Permissions",
    icon: cogLogo,
  },
  {
    text: "Suspend Access",
    icon: lockLogo,
  },
  {
    text: "Remove",
    icon: trashLogo,
  },
];

export default function User({
  name,
  role,
  type,
  avatar,
  colorAvatar,
}: UserProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
        bgcolor: "#1A1A1A",
        padding: "12px",
        borderRadius: "22px",
        mt: "16px",
      }}
    >
      {colorAvatar ? (
        <Avatar
          sx={{
            bgcolor: colorAvatar,
            fontSize: "14px",
            fontWeight: "700",
            height: "28px",
            width: "28px",
          }}
        >
          {avatar}
        </Avatar>
      ) : (
        <Avatar
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            height: "28px",
            width: "28px",
          }}
          src={avatar}
        />
      )}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#8C8C8C",
          }}
        >
          {role}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "7px",
        }}
      >
        {type === "owner" && (
          <Button
            sx={{
              fontSize: "10.5px",
              fontWeight: "700",
              backgroundColor: "#86EFAC",
              height: "23px",
              padding: "3.5px 5.6px",
              borderRadius: "14px",
              color: "#1C2127",
            }}
          >
            Owner
          </Button>
        )}
        <Button
          sx={{
            fontSize: "10.5px",
            fontWeight: "700",
            backgroundColor: "#86EFAC",
            height: "23px",
            padding: "3.5px 5.6px",
            borderRadius: "14px",
            color: "#1C2127",
            width: "21.7px",
            minWidth: "0",
          }}
        >
          <img src={checkLogo} alt="" />
        </Button>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{
            backgroundColor: "#121212",
            padding: "5.5px 9.5px",
            color: "#FFF",
            fontSize: "14px",
          }}
        >
          <img src={ellipsesHLogo} alt="" />
        </IconButton>
        <Menu
          sx={{ mt: "45px"}}
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
          {settings.map(({text, icon }) => (
            <MenuItem sx={{
              bgcolor: '#1A1A1A',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
            }} key={text} onClick={handleCloseUserMenu}>
              <Typography sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: '#FFF',
              }} >{text}</Typography>
              <img src={icon} alt="" />
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}
