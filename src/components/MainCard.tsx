import { Box, Button, Container, Divider, Typography } from "@mui/material";

export default function MainCard() {
  return (
    <>
      <Container
        sx={{
          padding: "14px 20px",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row-reverse",
          },
          justifyContent: "space-between",
          alignItems: {
            sx: "auto",
            md: "center",
          },
          gap: "14px",
          paddingTop: {
            xs: "auto",
            md: "0",
          },
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "24.5px",
              fontWeight: "700",
              display: {
                xs: "auto",
                md: "none",
              },
            }}
          >
            Users & Teams
          </Typography>
          <Button
            sx={{
              backgroundColor: "#01D3B9",
              fontSize: "14px",
              color: "#1C2127",
              fontWeight: "700",
              padding: "16px 24px",
              borderRadius: "28px",
            }}
          >
            Invite People
          </Button>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#8C8C8C",
            }}
          >
            Invite other people (A&R, manager, accountant, etc.) to access your
            account. You can control what parts of your account they can see.
          </Typography>
        </Box>
      </Container>
      <Divider
        sx={{
          backgroundColor: "#1A1A1A",
          height: "1px",
        }}
      />
    </>
  );
}
