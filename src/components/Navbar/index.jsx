import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar>
      <Toolbar>
        <Typography onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
          DENTAL
        </Typography>
        <Tabs sx={{ marginLeft: "auto" }} value={0}>
          <Tab sx={{ color: "white" }} label="About" />
          <Tab sx={{ color: "white" }} label="Service" />
          <Tab sx={{ color: "white" }} label="New Patients" />
        </Tabs>
        <Button
          sx={{ color: "blue", background: "white",  }}
          onClick={() => navigate("/newdoctor")}
        >
          Add Doctor
        </Button>
        
        <Button
          sx={{ color: "blue", background: "white", marginLeft: "auto" }}
          onClick={() => navigate("/listofdentists")}
        >
          BOOK ONLINE
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
