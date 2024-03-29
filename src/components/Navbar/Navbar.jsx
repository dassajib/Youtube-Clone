import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        background: "#000",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={30} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
