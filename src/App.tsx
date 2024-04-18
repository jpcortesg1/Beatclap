import { Box } from "@mui/material";
import BreadCrumb from "./components/BreadCrumb";
import MainCard from "./components/MainCard";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Users from "./components/Users";

function App() {
  return (
    <>
      <TopBar />
      <SideBar />
      <Box
        sx={{
          bgcolor: {
            sx: "inherit",
            md: "#121212",
          },
          position: {
            sx: "auto",
            md: "absolute",
          },
          top: "calc(76px + 16px)",
          left: "calc(72px + 16px)",
          borderRadius: "8px",
          width: {
            sx: "100%",
            md: "calc(100% - 72px - 16px - 8px)",
          },
          minHeight: "calc(100vh - 76px - 16px - 16px)",
        }}
      >
        <BreadCrumb />
        <MainCard />
        <Users />
      </Box>
    </>
  );
}

export default App;
