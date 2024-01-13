"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import ContactModal from "./ContactModal";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
const sections = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const divId = "scroll-" + id;
    const element = document.getElementById(divId);
    if (element) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.log("div not found");
    }
  };

  const handleContactUs = () => {
    setOpen(true);
  };
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const renderDrawerItems = () => {
    return (
      <List sx={{ minWidth: 250, mt: 2 }}>
        {sections.map((section) => (
          <ListItem
            button
            key={section.id}
            onClick={() => handleDrawerItemClick(section.id)}
          >
            {section.label}
          </ListItem>
        ))}
      </List>
    );
  };

  const handleDrawerItemClick = (id: string) => {
    scrollToSection(id);
    handleDrawerClose();
  };
  // 013466
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#013466",
        }}
      >
        <Toolbar>
          {/* Hamburger Icon for Drawer */}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo (You can replace the src attribute with your logo URL) */}

          <div style={{ flexGrow: 1 }}>
            <Image src="/shubiji.jpg" alt="logo" width={100} height={50} />
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <nav className="w-full  flex items-center p-4 lg:px-10 gap-4 hidden md:flex">
              {sections.map((section) => (
                <a
                  href={`#${section.id}`}
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="cursor-pointer text-white hover:bg-blue-500 px-4 py-2 rounded-md transform hover:scale-105">
                    {section.label}
                  </span>
                </a>
              ))}
            </nav>
          </Typography>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#001FFA",
              color: "#FFCC33",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onClick={handleContactUs}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          width: "80%", // Adjust the width as needed
          marginTop: "75px", // Add top margin to avoid overlapping with AppBar
        }}
        variant="temporary"
      >
        {renderDrawerItems()}
      </Drawer>

      <Toolbar />

      {/* Desktop Navbar */}

      <div style={{ height: 75 }}></div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default Navbar;
