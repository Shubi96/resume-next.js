import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    // Implement API call to save data
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });
    setLoading(false);

    // Handle the response as needed

    // Close the modal
    if (response.ok) {
      setEmail("");
      setMessage("");
    }
    onClose();
  };
  console.log({ email, message });

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Contact Us</h2>
        <TextField
          disabled={loading}
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          disabled={loading}
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#001f3f",
            color: "#ffffff",
            transition: "background-color 0.3s, color 0.3s", // Added color transition
          }}
          onClick={handleSubmit}
        >
          {loading ? <CircularProgress /> : "Submit"}
        </Button>
      </Box>
    </Modal>
  );
};

export default ContactModal;
