import { Button } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#001f3f",
          color: "#ffffff",
          transition: "background-color 0.3s, color 0.3s", // Added color transition
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#FFD700"; // Change to golden on hover
          e.target.style.color = "#000000"; // Change text color to black on hover
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#001f3f"; // Revert to dark blue on mouse out
          e.target.style.color = "#ffffff"; // Revert text color to white on mouse out
        }}
      >
        Contact Us
      </Button>
    </div>
  );
};

export default ContactUs;
