import React from 'react'
import styled from 'styled-components';

const ButtonComponent=styled.button`
position:relative;
display:inline-flex;
align-items:center;
justify-content:center;
text-align:center;
text-decoration:none;
vertical-align:middle;
cursor:pointer;
user-select:none;
border-radius:0.3rem;
box-shadow: 0 3px #9999;
padding:0 
${props => 
  props.size ==="sm" 
   ? "1.1rem"
   : props.size ==="md" 
   ? "1.4rem" 
   : props.size ==="lg" 
   ? "1.6rem" 
   : "1.1rem"};
  height: ${props=>
     props.size ==="sm"
      ? "34px" 
      : props.size ==="md" 
     ? "37px" 
     : props.size === "lg" 
     ? "40px" 
     : "34px"};
     width:  ${props=>
      props.size ==="sm"
       ? "5%" 
       : props.size ==="md" 
      ? "12%" 
      : props.size === "lg" 
      ? "50%" 
      : "10%"
  };       

font-family:"Inter", sans-serif;
font-weight:500;
border:1px solid transparent;
background-color:${props =>
   props.variant === "light" 
   ? "#f8f9fa" 
   : props.variant === "dark" 
   ? "#212529" 
   : props.variant === "primary" 
   ? "#0d6efd" 
   : props.variant === "secondary" 
   ? "#6c757d" 
   : props.variant === "success" 
   ? "#198754" 
   : props.variant === "info" 
   ? "#odcaf0" 
   : props.variant === "warning" 
   ? "#ffc107" 
   : props.variant ==="danger" 
   ? "#dc3545" 
   : "#f8f9fa"};

   &:hover {
    background-color: ${props =>
      props.variant === 'light'
        ? '#e2e6ea'
        : props.variant === 'dark'
        ? '#343a40'
        : props.variant === 'primary'
        ? '#0a58ca'
        : props.variant === 'secondary'
        ? '#5a6268'
        : props.variant === 'success'
        ? '#155724'
        : props.variant === 'info'
        ? '#0da5e0'
        : props.variant === 'warning'
        ? '#d39e00'
        : props.variant === 'danger'
        ? '#c82333'
        : '#e2e6ea'};

     &:active {
       background-color: ${props =>         
       props.variant === 'light'
              ? '#059DC0'
              : props.variant === 'dark'
              ? '#059DC0'
              : props.variant === 'primary'
              ? '#059DC0'
              : props.variant === 'secondary'
              ? '#059DC0'
              : props.variant === 'success'
              ? '#059DC0'
              : props.variant === 'info'
              ? '#059DC0'
              : props.variant === 'warning'
              ? '#059DC0'
              : props.variant === 'danger'
              ? '#059DC0'
              : '#059DC0'};   

color:${props =>
    props.variant === "light" 
    ? "#212529" 
    : props.variant === "dark" 
    ? "#ffffff" 
    : props.variant === "primary" 
    ? "#ffffff" 
    : props.variant === "secondary" 
    ? "#ffffff" 
    : props.variant === "success" 
    ? "#ffffff" 
    : props.variant === "info" 
    ? "#000000" 
    : props.variant === "warning" 
    ? "#ffffff" 
    : props.variant ==="danger" 
    ? "#ffffff" 
    : "#212529"};   
`;

function Button({ type, variant, className, id , onClick, children, size, photo}) {
  return (
    <>
     <ButtonComponent type={type ? type:"button"} variant={variant} className={className ? `btn-component ${className}`:"btn-component"} id={id} onClick={onClick} size={size}> {children} {photo && <img src={photo} alt="Button Icon" styles="height:20px , width:20px"/>} </ButtonComponent>
    </>
  )
}

export default Button
