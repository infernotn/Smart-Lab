import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const CreateUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call create user API
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Créer un utilisateur
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Rôle"
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Créer
        </Button>
      </form>
    </Container>
  );
};

export default CreateUserPage;
