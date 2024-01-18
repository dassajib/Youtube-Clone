import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            fontWeight: "bold",
            textTransform: "capitalize",
            cursor: "pointer",
            border: "none",
            outline: "none",
            padding: "7px 15px",
            margin: "10px 0",
            borderRadius: "20px",
            background:
              category.name === selectedCategory ? "#FC1003" : "transparent",
            color: "white",
            transition: "all 0.3s ease",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
