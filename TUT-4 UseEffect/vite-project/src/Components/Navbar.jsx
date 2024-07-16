import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  // case 1: Run on every render
  useEffect(() => {
    alert("Hey I will run on every render");
  });

    // case 2: Run only on first render
  useEffect(() => {
    alert("hey welcome to my page . this is first render"), [];
  });

  // case 3: Run only when certain value is change
  useEffect(() => {
    alert("Hey I am running because color was changed"), [color];
  });
  // Example of Cleanup code
  useEffect(() => {
    alert("hey welcome to my page . this is first render of app.jsx")
    return()=>{
      alert ("Component is Unmount")
    }
  });




  return (
    <>
      I am navbar of {color} color hehe..
  </>
  )
};

export default Navbar;
