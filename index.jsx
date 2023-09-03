import { app } from "./firebase";
import {
  collection,
  addDoc,
  getFirestore,
  getDoc,
  doc,
  query,
} from "firebase/firestore";
import { useState } from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();
  const db = getFirestore(app);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    setIsSubmitting(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      const docRefId = await addDoc(collection(db, "emails"), {
        email,
      });
      if (docRefId.id) {
        setIsSubmitted(true);
      }
    } catch (e) {
      setError("Something went wrong. Please try again.");
    }
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <>
      {isSubmitted && (
        <Box
          sx={{
            position: "absolute",
            color: theme.palette.common.white,
          }}
        >
          <p>Thank you for subscribing!</p>
        </Box>
      )}
      <Box
        sx={{
          visibility: isSubmitted ? "hidden" : "visible",
        }}
      >
        <Box
          sx={{
            padding: "0.5rem 0",
          }}
        >
          <SubHeading>Sign Up For Our Newsletter.</SubHeading>
        </Box>
        <Box
          sx={{
            padding: "0.5rem 0",
          }}
        >
          {error && (
            <p style={{ color: theme.palette.common.white }}>{error}</p>
          )}
          <Input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            padding: "0.5rem 0",
          }}
        >
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            SUBSCRIBE
          </Button>
        </Box>
      </Box>
    </>
  );
}

const SubHeading = styled("h2")`
  color: #fff;
  font-size: 1.7rem;
  font-weight: 900;
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
  @media (min-width: 992px) {
    font-size: 1.9rem;
  }
`;

const Input = styled("input")`
  display: block;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  margin: 1.5rem 0;
  font-weight: 400;
  letter-spacing: 0.2rem;
  max-width: 480px;
  width: 75%;
  height: 40px;
  @media (min-width: 992px) {
    margin-bottom: 0.5rem;
  }
`;

const Button = styled("button")`
  background-color: #fff;
  color: #000;
  display: block;
  border: none;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  max-width: 200px;
  cursor: pointer;
  opacity: ${({ disabled }: any) => (disabled ? 0.5 : 1)};
  @media (min-width: 992px) {
    padding-bottom: 1.3rem;
    padding-top: 1.3rem;
    max-width: 400px;
  }
`;