import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

import searchLogo from "./../assets/search.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flex: 2,
  borderRadius: "12px",
  backgroundColor: "#121212",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  height: "45px",
  display: "flex",
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

export default function SearchUsers() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:{
          xs:  "#212121",
          md: "inherit",
        },
        padding: {
          xs: "16px 20px",
          md: "16px 0"
        },
        gap: "10px",
        marginTop: "16px",
        borderRadius: "22px",
      }}
    >
      <Search sx={{
        bgcolor: {
          xs: "auto",
          md: "#1A1A1A",
        }
      }}>
        <SearchIconWrapper>
          <IconButton>
            <img src={searchLogo} alt="" />
          </IconButton>
        </SearchIconWrapper>
        <StyledInputBase />
      </Search>
      <FormControl
        fullWidth
        sx={{
          flex: 1,
          color: "#FFF",
          textAlign: "center",
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "#FFF",
            textAlign: "center",
            borderRadius: "28px",
          }}
          >
          All
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            borderRadius: "28px",
            color: "#FFF",
            textAlign: "center",
            bgcolor: {
              xs: "auto",
              md: "#1A1A1A",
            }
          }}
        >
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Active</MenuItem>
          <MenuItem value={30}>Suspended</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
