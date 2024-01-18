import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoProfilePicture,
  demoVideoTitle,
} from "../../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        borderRadius: "20px",
        width: { xs: "356px", md: "320px" },
      }}
    >
      <Link
        to={`/channel/${item?.snippet?.channelId}`}
        style={{ textDecoration: "none" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={item?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={item?.snippet?.channelTitle || demoVideoTitle}
            sx={{
              height: "180px",
              width: "180px",
              borderRadius: "50%",
              mb: 2,
              boder: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            {item?.snippet.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "4px" }} />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
