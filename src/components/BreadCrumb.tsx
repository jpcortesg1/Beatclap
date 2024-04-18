import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Container, Divider, IconButton, Typography } from "@mui/material";

import separatorLogo from "./../assets/separator.svg";
import homeLogo from "./../assets/home.svg";

export default function BasicBreadcrumbs() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 20px",
          paddingBottom: {
            xs: "auto",
            md: "0",
          },
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            color: "#FFF",
            display: {
              xs: "auto",
              md: "none",
            },
          }}
          separator={<img src={separatorLogo} alt="" />}
        >
          <Link underline="hover" color="inherit" href="/">
            <IconButton>
              <img src={homeLogo} alt="" />
            </IconButton>
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            <Typography
              sx={{
                fontSize: "17.5px",
              }}
            >
              Invite Members
            </Typography>
          </Link>
        </Breadcrumbs>

        <Typography
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            color: "#FFF",
            fontSize: "35px",
            fontWeight: "700",
          }}
        >
          Invite Members
        </Typography>

        <Box
          sx={{
            display: {
              xs: "auto",
              md: "none",
            },
          }}
        >
          <IconButton
            sx={{
              transform: "rotate(90deg)",
            }}
          >
            <img src={separatorLogo} alt="" />
          </IconButton>
        </Box>
      </Container>
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
