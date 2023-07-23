import React from "react";
import { Box } from "@mui/material";
import Top from './Top'
import ChartData from './chartData';
import Bottom from './bottom'

const Content = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }} className="p-5">
        <Top/>
        <ChartData/>
        <Bottom/>
      </Box>
    </div>
  );
};

export default Content;
