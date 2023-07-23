import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './sidebar/sidebar'
import Side from '../components/Sidebar'
import Content from './content/content'
import RightSidebar from './sidebar/RightSidebar';

const Home = () => {
  return (
    <div>
      <Box style={{display:"flex"}}>
        <Sidebar/>
        <Side/>
        <Content/>
        <RightSidebar/>
      </Box>
   
    </div>
  )
}

export default Home
