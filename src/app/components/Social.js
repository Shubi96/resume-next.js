import React from "react";
import {
  IconButton,
  Typography,
  Slide,
  AppBar,
  Toolbar,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { LinkedIn, GitHub, Twitter, Facebook } from "@mui/icons-material";

const Social = () => {
  const socialLinks = [
    { icon: <LinkedIn />, text: "LinkedIn", color: "blue", href: "" },
    { icon: <GitHub />, text: "GitHub", color: "gray", href: "" },
    { icon: <Twitter />, text: "Twitter", color: "blue", href: "" },
    { icon: <Facebook />, text: "Facebook", color: "blue", href: "" },
  ];

  return (
    <div id="social" className="container mx-auto p-8">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 className="text-left text-3xl font-bold mb-4 lg:mb-6">
            My Social Hub
          </h1>
          <Grid container spacing={2} alignItems="center">
            {socialLinks.map((link, index) => (
              <Grid item key={index}>
                <IconButton
                  color="inherit"
                  aria-label={link.text}
                  component="a"
                  href={link.href} // Replace this with your actual social media URLs
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: link.color }}
                >
                  {link.icon}
                </IconButton>
                <Typography variant="subtitle1" className="font-bold">
                  {link.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Add any additional content or styling for the right side of the social component */}
      </Grid>
    </div>
  );
};

export default Social;
