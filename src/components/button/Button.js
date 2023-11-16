import React from 'react'
import "./button.css"

const Button = ({bheight, bwidth, btext="Button", bgcolor="blue",imgSrc, imgHeight="25px", imgWidth="25px", padding="10px", bradius="12px", hoverColor="aqua" } ) => {
  return (
    
    <>
    <button className="button" style={{backgroundColor:bgcolor, height:bheight, width:bwidth, padding:padding ,borderRadius:bradius}}
          
          onMouseOver={(e) => {
            e.target.style.backgroundColor = hoverColor;
          }}
    
          onMouseOut={(e) => {
            e.target.style.backgroundColor = bgcolor;
          }}>
      
          {btext} 
          {imgSrc && <img src={imgSrc} alt="Button Icon" style={{margin:"0 10px", height:imgHeight, width:imgWidth }} />} </button>
      </>
  )
}

export default Button

