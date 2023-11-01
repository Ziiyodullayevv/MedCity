import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
} from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "./styled";
import { navbar } from "../../utils/navbar";
import SubNavbar from "../SubNavbar";
import "./style.css";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/signin");
  };

  // Menu:

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          height: "100vh",
        }}
      >
        {navbar.map(
          ({ id, title, hidden, path }) =>
            !hidden && (
              <Link key={id} to={path}>
                {title}
              </Link>
            )
        )}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <SubNavbar />

      <Box className="box-shadow" component={"header"}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              style={{ padding: "15px 0" }}
              src="https://7oroof.com/demos/medcity/assets/images/logo/logo-dark.png"
              alt="logo-dark"
            />
            <Box
              sx={{
                display: "flex",
                gap: "25px",
                alignItems: "center",
              }}
              component={"nav"}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "25px",
                  alignItems: "center",
                }}
              >
                {navbar.map(
                  ({ id, title, hidden, path }) =>
                    !hidden && (
                      <Link sx={{ padding: "30px 0" }} key={id} to={path}>
                        {title}
                        <span className="line"></span>
                      </Link>
                    )
                )}
                <Button
                  sx={{
                    backgroundColor: "var(--secondary-light)",
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "14px",
                    fontWeight: "700",
                    padding: "12px 40px",
                    borderRadius: "100px",
                    "&:hover ": {
                      backgroundColor: "var(--primary-main)",
                    },
                  }}
                >
                  Register
                </Button>
              </Box>

              <Box
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton
                      size="large"
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <Menu fontSize="large" />
                    </IconButton>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
