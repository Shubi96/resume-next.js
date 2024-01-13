import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

// ... (imports)

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validateMessage = (value: string): boolean => {
    return value.length >= 5 && value.length <= 512;
  };

  const handleSubmit = async () => {
    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    // Validate message
    if (!validateMessage(message)) {
      setMessageError("Message must be between 5 and 512 characters.");
      return;
    } else {
      setMessageError("");
    }

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
          border: 2,
          borderRadius: 3,
        }}
      >
        <h2>Contact Us</h2>
        <TextField
          error={!!emailError}
          helperText={emailError}
          disabled={loading}
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          error={!!messageError}
          helperText={messageError}
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
            backgroundColor: "#001FFA",
            color: "#FFCC33",
            transition: "background-color 0.3s, color 0.3s",
            marginTop: 2,
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
