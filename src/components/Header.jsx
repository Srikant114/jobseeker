import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <AppBar sx={{background:"#b71c1c"}}>
        <Toolbar>
          <Typography >Jobseekers</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
