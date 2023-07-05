/* 3rd Party Components */
import React from "react";
import { Link } from "react-router-dom";

/* 3rd Party Components */
import { Box, Button } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <h1>Assignment</h1>

      <Link to="/users">
        <Button variant="contained">
          View Users
        </Button>
      </Link>
    </Box>
  );
};

export default HomePage;
