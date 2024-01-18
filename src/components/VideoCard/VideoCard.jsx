import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  item: {
    id: { videoId },
    snippet,
  },
}) => {
  //   console.log(item);
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        borderRadius: 0,
        boxShadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "80px" }}>
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            {snippet?.title?.slice(0, 50) || demoVideoTitle}
          </Typography>
        </Link>
      
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
          style={{ textDecoration: "none" }}
        >
          <Typography variant="subtitle2" sx={{ color: "gray" }}>
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
