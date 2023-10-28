import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import "./style.css";

const SignIn = () => {
  const montserrat = {
    fontFamily: "Montserrat, sans-serif",
    color: "var(--text-1)",
  };

  return (
    <Box className="signin" component={"section"}>
      <div className="container">
        <div className="signin-card-wrapper">
          <div className="signin-card">
            <div className="signin-card__center signin-card-bg w-50">
              <div className="singin-card__shadow"></div>
            </div>
            <div className="signin-card__center w-50">
              <Box sx={{ textAlign: "center" }} component={"form"}>
                <Typography
                  style={montserrat}
                  fontWeight={500}
                  color={"whitesmoke"}
                  variant="h4"
                >
                  Welcome
                </Typography>

                <TextField
                  className="color-1"
                  sx={{ marginTop: "15px", width: "100%", color: "white" }}
                  variant="standard"
                  required
                  id="outlined-required"
                  label="Email"
                  size="small"
                  InputProps={{
                    style: {
                      backgroundColor: "transparent",
                      color: "white",
                      borderBottom: "1px solid white",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "grey",
                      fontSize: "16px",
                      padding: "0 5px",
                    },
                  }}
                />

                <TextField
                  className="color-1"
                  sx={{ marginTop: "15px", width: "100%", color: "white" }}
                  variant="standard"
                  required
                  id="outlined-required"
                  label="Password"
                  type="password"
                  size="small"
                  InputProps={{
                    style: {
                      backgroundColor: "transparent",
                      color: "white",
                      borderBottom: "1px solid white",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "grey",
                      fontSize: "16px",
                      padding: "0 5px",
                    },
                  }}
                />

                <Button
                  sx={{
                    mt: "30px",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "100px",
                    color: "white",
                    transition: ".3s all lianer",
                    padding: "6px 30px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: ".7",
                    },
                  }}
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>
                <Box sx={{ marginTop: "20px" }} component={"div"}>
                  <Typography style={montserrat} variant="subtitle2">
                    Don't have an account?{" "}
                    <Box href="" component={"a"}>
                      Sign Up
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SignIn;
