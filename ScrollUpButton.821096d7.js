import{r as s}from"./chunks/index.fef0a09c.js";import{j as e}from"./chunks/jsx-runtime.5b9dda21.js";const d=()=>{const[r,o]=s.exports.useState(!1);s.exports.useEffect(()=>{window.addEventListener("scroll",i)},[]);const i=()=>{const t=document.documentElement.scrollTop;t>300?o(!0):t<=300&&o(!1)},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.exports.jsx(e.exports.Fragment,{children:r&&e.exports.jsx("div",{className:"w-12 h-12 fixed bottom-6 right-6 custom-border-gray rounded-xl  bg-customDarkBg2 hover:bg-customDarkBg3 cursor-pointer flex justify-center items-center transition z-50",onClick:n,children:e.exports.jsx("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"35px",height:"35px",viewBox:"0 0 20 20",children:e.exports.jsx("path",{d:"M4.16732 12.5L10.0007 6.66667L15.834 12.5",stroke:"#4F46E5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})};export{d as ScrollUpButton};
