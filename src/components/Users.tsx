import { Box, Container, Typography } from "@mui/material";

import SearchUsers from "./SearchUsers";
import User from "./User";

import avatarLogo from "./../assets/avatar.svg";
import avatarLogo1 from "./../assets/avatar (1).svg";
import avatarLogo2 from "./../assets/avatar (2).svg";

const userData = [
  {
    name: "Aarón Pérez Nuñez (a...",
    role: "Admin",
    type: "owner",
    avatar: "N",
    colorAvatar: "#A855F7",
  },
  {
    name: "Ralph Edwards",
    role: "Admin",
    type: "normal",
    avatar: "R",
    colorAvatar: "#E20038",
  },
  {
    name: "Courtney Henry",
    role: "Admin",
    type: "normal",
    avatar: "C",
    colorAvatar: "#25A24E",
  },
  {
    name: "Brooklyn Simmons",
    role: "Admin",
    type: "normal",
    avatar: avatarLogo,
  },
  {
    name: "Cameron Williamson",
    role: "Cameron Williamson - 654323",
    type: "normal",
    avatar: avatarLogo1,
  },
  {
    name: "Dianne Russell",
    role: "Cameron Williamson - 1230481",
    type: "normal",
    avatar: avatarLogo2,
  },
];

export default function Users() {
  return (
    <Container
      sx={{
        padding: "16px 20px",
      }}
    >
      <Typography
        sx={{
          fontSize: "17.5px",
          fontWeight: "700",
        }}
      >
        All Users
      </Typography>

      <Box sx={{
        maxWidth: "600px",
        margin: "0 auto",
      }}>
        <SearchUsers />
        {userData.map((user, index) => {
          return (
            <User
              key={index}
              name={user.name}
              role={user.role}
              type={user.type}
              avatar={user.avatar}
              colorAvatar={user.colorAvatar}
            />
          );
        })}
      </Box>
    </Container>
  );
}
