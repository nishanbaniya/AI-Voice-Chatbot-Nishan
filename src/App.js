import React from "react";
import Button from "./components/button/Button"
import imageSource1 from "./components/button/help.png"
import imageSource2 from "./components/button/first.png"

function App() {
  
  return (
    <>
    Hi

    <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"10px"}}>

    <Button bgcolor="purple" btext="Warning Button" bwidth="50%" bheight="60px" imgSrc={imageSource1} imgHeight="25px" imgWidth="25px" > </Button>
    <Button bgcolor="grey" btext="Primary" imgSrc={imageSource2}>  </Button>
    <Button bgcolor="green" btext="Secondary"></Button>
    <Button bgcolor="red" btext="Info" padding="10px 30px" hoverColor="black">  </Button>
    <Button bgcolor="black" btext="Alert">  </Button>
    </div>
    </>
  );
}

export default App;
