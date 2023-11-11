import React from "react";
import Button from "./components/button/Button"
import "./components/button/help.png"

function App() {
  return (
    <>
    Hi
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"10px"}}>
    <Button variant="success" size="lg" photo="help.png"> Success Button </Button>
    <Button variant="danger" size="sm"> Danger Button </Button>
    <Button variant="warning"> Warning Button </Button>
    <Button variant="primary"> Primary Button </Button>
    <Button variant="secondary"> Secondary Button </Button>
    <Button variant="info"> Info Button </Button>
    </div>
    </>
  );
}

export default App;
