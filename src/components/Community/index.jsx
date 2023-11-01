import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Community = () => {
  return (
    <Box component={"section"}>
      <Container maxWidth="md">
        <Box className="heading__wrapper">
          <Typography className="heding__subtitle" variant="subtitle1">
            The Best Medical And General Practice Care!
          </Typography>
          <Typography variant="h4" className="heding__title">
            Providing Medical Care For The Sickest In Our Community.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Community;
