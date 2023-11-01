import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";

const Spiner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "black",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default Spiner;
