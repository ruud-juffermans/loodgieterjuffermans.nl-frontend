import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useActiveSection from "@hooks/useActiveSection";

import Logo from "@assets/logo.svg"

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Over Mij", id: "over-mij" },
  { label: "Reviews", id: "reviews" },
  { label: "Diensten", id: "diensten" },
  { label: "FAQ", id: "faq" }
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 100;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const sectionIds = NAV_ITEMS.map((n) => n.id);
  const active = useActiveSection(sectionIds);

  const onNavClick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        boxShadow: 0,
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(24px)',
        height: '100px',
        borderBottom: "1px solid #2222221f",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              pl: '10px',
            }}
          >
            <img
              src={Logo}
              style={{
                height: '70px',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              alt="logo of sitemark"
            />

          </Box>

          {/* <Box sx={{ flex: 1 }} /> */}

          {/* Desktop menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  sx={{
                    color: "black",
                    opacity: active === item.id ? 1 : 0.78,
                    borderRadius: 999,
                    px: 2,
                    fontSize: "20px",
                    transition: "opacity 150ms ease",
                    ...(active === item.id && {
                      backgroundColor: "rgba(255,255,255,0.10)",
                    }),
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{ color: "#3d3d3d" }}
            >
              <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: "#141414",
            color: "white",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Menu
          </Typography>
          <Box sx={{ flex: 1 }} />
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1 }}>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => onNavClick(item.id)}
              sx={{
                borderRadius: 2,
                mx: 1,
                ...(active === item.id && {
                  backgroundColor: "rgba(255,255,255,0.10)",
                }),
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
