import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Feed from "../components/Feed/Feed";
import VideoDetails from "../components/VideoDetails/VideoDetails";
import ChannelDetails from "../components/ChannelDetails/ChannelDetails";
import SearchFeed from "../components/SearchFeed/SearchFeed";
import { Box } from "@mui/material";

const Index = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetails />} />
          <Route path="/channel/:id" exact element={<ChannelDetails />} />
          <Route path="/search/:searchterm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default Index;
