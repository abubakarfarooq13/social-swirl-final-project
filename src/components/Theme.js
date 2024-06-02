import React, { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
const Theme = () => {
  const [light, setDark] = useState(localStorage.getItem("theme") || false);
  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", light);
    localStorage.setItem("theme", light);
  }, [light]);

  const darkModeHandler = () => {
    setDark(!light);
  };

  return (
    <div className="fixed z-10 bottom-4 right-4">
      <Box onClick={() => darkModeHandler()} sx={{}}>
        <Fab size="medium" color="default" aria-label="dark">
          {
            light && <IoSunny size={25} /> // render sunny when dark is true
          }
          {
            !light && <IoMoon size={25} /> // render moon when dark is false
          }
        </Fab>
      </Box>
    </div>
  );
};

export default Theme;
