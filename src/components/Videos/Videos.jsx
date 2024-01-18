import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";

const Videos = ({ videos }) => {
  //   console.log(videos);
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={3}
      mt={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard item={item} />}
          {item.id.channelId && <ChannelCard item={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
