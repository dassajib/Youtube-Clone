import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Feed from '../components/Feed/Feed'
import VideoDetails from '../components/VideoDetails/VideoDetails'
import ChannelDetails from '../components/ChannelDetails/ChannelDetails'
import SearchFeed from '../components/SearchFeed/SearchFeed'

const Index = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/video/:id' exact element={<VideoDetails />} />
            <Route path='/channel/:channelId' exact element={<ChannelDetails />} />
            <Route path='/searchterm' exact element={<SearchFeed />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Index