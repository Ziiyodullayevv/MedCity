import React from "react";
import "./style.css";
import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Grow,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";

import {
  AccessTime,
  FacebookRounded,
  Instagram,
  KeyboardArrowDown,
  KeyboardArrowUp,
  LocationOn,
  Phone,
  RingVolume,
  Telegram,
} from "@mui/icons-material";

// styles:
const iconStyle = {
  fontSize: "14px",
  color: "var(--primary-light)",
  cursor: "pointer",
};
const subtTitle = {
  display: "flex",
  fontSize: "11px",
  fontWeight: "300",
  gap: "5px",
  color: "white",
  alignItems: "center",
  cursor: "pointer",
};
const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const SubNavbar = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box
      sx={{ display: { xs: "none", md: "block" } }}
      className="sub-navbar"
      component={"div"}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <div>
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{
                  padding: "5px 10px 2px 10px",
                  marginBottom: "-5px",
                  borderRadius: "5px 5px 0 0",
                  backgroundColor: "white",
                  fontSize: "11px",
                  color: "black",
                  textTransform: "capitalize",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                24/7 Emergency
                {open ? (
                  <KeyboardArrowUp sx={{ fontSize: "15px", padding: 0 }} />
                ) : (
                  <KeyboardArrowDown sx={{ fontSize: "15px", padding: 0 }} />
                )}
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{ position: "relative", zIndex: 99999 }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper
                      sx={{
                        borderRadius: "0 0 5px 5px",
                        boxShadow: "0 0 30px rgba(0,0,0,0.1)",
                      }}
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "10px",
                              padding: "10px",
                            }}
                          >
                            <RingVolume
                              sx={{
                                color: "var(--secondary-light)",
                                fontSize: "40px",
                              }}
                            />
                            <Typography
                              className="tel"
                              sx={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                fontWeight: "500",
                              }}
                              variant="h6"
                            >
                              <Phone
                                className="tel__icon"
                                sx={{
                                  transition: "all .4s ease",

                                  color: "var(--primary-main)",
                                }}
                              />
                              <a
                                href="tel:+998995476202"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  transition: "all .4s ease",
                                  color: "var(--primary-main)",
                                }}
                              >
                                +99899 547 62 02
                              </a>
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: "center",
                                maxWidth: "230px",
                                fontSize: "12px",
                              }}
                              variant="body2"
                            >
                              Please feel free to contact our friendly reception
                              staff with any general or medical enquiry.
                            </Typography>
                          </Box>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>

            <Typography sx={subtTitle}>
              <Phone sx={iconStyle} /> Emergency Line: +99899 547 62 02
            </Typography>
            <Typography sx={subtTitle}>
              <LocationOn sx={iconStyle} /> Location: Tashkent, Chilonzor
            </Typography>
            <Typography sx={subtTitle}>
              <AccessTime sx={iconStyle} /> Mon - Fri: 8:00 am - 7:00 pm
            </Typography>
          </Box>

          <Box sx={{ ...center, gap: "5px" }}>
            <Box
              className="sub-nav__icon"
              sx={{
                ...center,
                padding: "4px",
                backgroundColor: "var(--secondary-light)",
                borderRadius: "50%",
              }}
            >
              <FacebookRounded
                sx={{ ...iconStyle, color: "var(--primary-dark)" }}
              />
            </Box>
            <Box
              className="sub-nav__icon"
              sx={{
                ...center,
                padding: "4px",
                backgroundColor: "var(--secondary-light)",
                borderRadius: "50%",
              }}
            >
              <Telegram sx={{ ...iconStyle, color: "var(--primary-dark)" }} />
            </Box>
            <Box
              className="sub-nav__icon"
              sx={{
                ...center,
                padding: "4px",
                backgroundColor: "var(--secondary-light)",
                borderRadius: "50%",
              }}
            >
              <Instagram sx={{ ...iconStyle, color: "var(--primary-dark)" }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubNavbar;
