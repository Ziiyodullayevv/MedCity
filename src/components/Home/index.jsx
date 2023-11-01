import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import homeBanner from "../../assets/img/home-banner.jpg";
import {
  Masks,
  MedicalInformation,
  MonitorHeart,
  Vaccines,
} from "@mui/icons-material";
import Community from "../Community";

const homeIcon = { fontSize: "34px", color: "var(--secondary-light)" };

const Home = () => {
  return (
    <React.Fragment>
      <Box
        sx={{ backgroundImage: `url(${homeBanner})`, backgroundSize: "cover" }}
        className="home"
        component={"section"}
      >
        <Container maxWidth={"md"}>
          <Box sx={{ maxWidth: "500px", padding: "20px 0" }}>
            <Typography
              sx={{
                fontFamily: "var(--Quicksand)",
                color: "var(--primary-dark)",
                fontWeight: "700",
              }}
              variant="h4"
              component={"h1"}
            >
              Providing Care For The Sickest In Community.
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                maxWidth: "400px",
                marginTop: "20px",
                fontWeight: "700",
                color: "var(--primary-main)",
              }}
            >
              Medcity has been present in Europe since 1990, offering innovative
              solutions, specializing in medical services for treatment of
              medical infrastructure.
            </Typography>
            <Box sx={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <Box className="home-icon__box">
                <Vaccines sx={homeIcon} />
              </Box>
              <Box className="home-icon__box">
                <MedicalInformation sx={homeIcon} />
              </Box>
              <Box className="home-icon__box">
                <MonitorHeart sx={homeIcon} />
              </Box>
              <Box className="home-icon__box">
                <Masks sx={homeIcon} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Community />
    </React.Fragment>
  );
};

export default Home;
