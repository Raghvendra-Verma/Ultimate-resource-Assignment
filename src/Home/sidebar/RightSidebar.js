import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const RightSidebar = () => {
  const now = 80;
  const now1 = 65;
  const now2 = 18;
  return (
    <div className="sidebar">
      <section className="sidebar">
        <div>
          <h3>Retirement Strategy</h3>
        </div>
      </section>
      <div className="sidebar">
        <h5>Employee Contribution</h5>
        <ProgressBar now={now} label={`${now}%`} />
      </div>
      <div className="sidebar">
        <h5>Retirement Age</h5>
        <ProgressBar now={now1} label={`${now1}`} />
      </div>
      <div className="sidebar">
        <h5>Entry Age</h5>
        <ProgressBar now={now2} label={`${now2}`} />
      </div>
      <div className="sidebar">
        <h5>Employee Contribution</h5>
        <h6>8.4%</h6>
      </div>
      <div className="sidebar">
        <h5>Interest Rate</h5>
        <h6>5%</h6>
        <button>Update</button>
      </div>
      <div>
        
      </div>
        <span>
            <Box>
        <Card sx={{ minWidth: 160, borderBottom: "3px solid gray" }}>
            <CardContent>
                <Typography sx={{ fontSize: 12,fontWeight:"300",color:"black" }} color="text.secondary">Are You Considering a</Typography>
              <Typography
               
                variant="h5"
               sx={{fontWeight:"bold"}}
              >
                Housing Advance?
              </Typography>
              <Typography sx={{ fontSize: 12,fontWeight:"300",color:"black" }} color="text.secondary">Limited times reduced interest.</Typography>
            <div >
                <button>Learn more &#8805;</button>
            </div>
            </CardContent>
          </Card>
          </Box>
          </span>
    </div>
  );
};

export default RightSidebar;
