import { Box, IconButton } from "@mui/material";

import angleLeftLogo from "./../assets/angle-left.svg";
import questionCircleLogo from "./../assets/question-circle.svg";

export default function SideBar() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 16px - 48px)",
        width: "72px",
        bgcolor: "#121212",
        position: "fixed",
        top: "8px",
        left: "8px",
        borderRadius: "16px",
        zIndex: 1000,
        display: {
          xs: "none",
          md: "flex",
        },
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 0",
      }}
    >
      <IconButton
        sx={{
          width: "53px",
          height: "53px",
          borderRadius: "50%",
          bgcolor: "#212121",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={angleLeftLogo} alt="" />
      </IconButton>
      <IconButton>
        <img src={questionCircleLogo} alt="" />
      </IconButton>
    </Box>
  );
}
