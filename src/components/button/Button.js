import React from 'react'

const Button = ({bheight, bwidth, btext="Button", bgcolor="blue",imgSrc, imgHeight="25px", imgWidth="25px" } ) => {
  return (
    
    <>
    <button className="custom-button" style={{background:bgcolor, height:bheight, width:bwidth, 
      margin:"10px",
      color:"white", 
      padding:"10px", 
      position:"relative",
      display:"inline-flex",
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center",
      textDecoration:"none",
      verticalAlign:"middle",
      cursor:"pointer",
      userSelect:"none",
      borderRadius:"0.4rem",
      boxShadow: "0 5px #9999",
      fontFamily:"Inter, sans-serif",
      fontWeight:500,
      border:"1px solid transparent"
      }}

      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#0066cc";
        e.target.style.color = "black"; // Change text color on hover
      }}

      onMouseOut={(e) => {
        e.target.style.backgroundColor = bgcolor;
        e.target.style.color = "white"; // Revert text color on mouse out
      }}>
          {btext} 
          {imgSrc && <img src={imgSrc} alt="Button Icon" style={{ margin: '5px', height:imgHeight, width:imgWidth }} />} </button>
      
      <style>
        {`
          .custom-button:active {
            transform: scale(0.95);
          }
        `}
      </style>
    </>
  )
}

export default Button