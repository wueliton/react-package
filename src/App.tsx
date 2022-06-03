import { ButtonProps } from "@mui/material";
import React from "react";
import "./App.css";
import { Dashboard } from "./lib/components/Dashboard";

function App() {
  const buttons: ButtonProps[] = [
    {
      variant: "contained",
      children: "Exemplo",
    },
    {
      variant: "outlined",
      children: "Exemplo",
    },
    {
      variant: "text",
      children: "Exemplo",
    },
  ];
  return <Dashboard buttons={buttons}></Dashboard>;
}

export default App;
