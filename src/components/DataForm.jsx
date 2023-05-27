import { Button, Card, CardContent, Grid, InputLabel } from "@mui/material";
import React from "react";
import "./Data.css"

const DataForm = () => {

  return (
    <div>
      <Card sx={{ marginTop: "5%" }}>
        <CardContent>
          <Grid container spacing={1} className="form">
            <div className="file">
              <InputLabel className="input">Upload PDF/PDFs</InputLabel>
              <input
                id="fileUpload"
                type="file"
                multiple
                accept="application/pdf"
              />
            </div>
            <div className="skill">
              <InputLabel className="input">Enter Skills</InputLabel>
              <input type="text" placeholder="skills1,skills2" />
            </div>
            <div className="role">
              <InputLabel className="input">Job Role</InputLabel>
              <input type="text" placeholder="eg. fronted developer" />
            </div>
            <div>
              <Button className="btn" variant="contained">Upload Data</Button>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataForm;
