import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Header } from "./components/common/Header";
import { Container } from "@mui/material";
const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </Container>
    </div>
  );
};
export default App;
