import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const Top = () => {
  return (
    <div>
      <Box>
        <Box>
          <Typography
            variant="h7"
            sx={{ color: "blue", fontWeight: "400", fontFamily: "sans-serif" }}
          >
            Retirement Income
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "black", fontWeight: "400", fontFamily: "sans-serif" }}
          >
            Starting Year 2026
          </Typography>
        </Box>
        <Box className="my-5" sx={{display:"flex",flexDirection:"row"}}>
          <Card sx={{ minWidth: 160, borderBottom: "3px solid gray" }}>
            <CardContent>
              <Typography
               
                variant="h5"
               sx={{fontWeight:"bold"}}
              >
                $300,000
              </Typography>
              <Typography sx={{ fontSize: 12,fontWeight:"300",color:"#adaaaa" }} color="text.secondary">My Goal</Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 160, borderBottom: "3px solid gray" }} className="mx-5">
            <CardContent>
            <Typography
               
               variant="h5"
              sx={{fontWeight:"bold"}}
             >
               59%
             </Typography>
             <Typography sx={{ fontSize: 12,fontWeight:"300",color:"#adaaaa" }} color="text.secondary">Goal Achieved</Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 160, borderBottom: "3px solid gray" }}>
            <CardContent>
            <Typography
               
               variant="h5"
              sx={{fontWeight:"bold"}}
             >
               $300
             </Typography>
             <Typography sx={{ fontSize: 12,fontWeight:"300",color:"#adaaaa" }} color="text.secondary">Est. Monthly Income</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default Top;
