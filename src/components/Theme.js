import React, { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
const Theme = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = async () => {
    setTheme(!theme);
    if (theme === true) {
      document.body.classList.add("class");
      document.body.classList.remove("dark");
      await localStorage.setItem("theme", "class");
    }
    if (theme === false) {
      document.body.classList.add("dark");
      document.body.classList.remove("class");
      await localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme") === "class") {
      document.body.classList.add("class");
    } else if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      setTheme(!theme);
    }
  }, []);

  return (
    <div className="fixed z-10 bottom-4 right-4">
      <Box onClick={toggleTheme} sx={{}}>
        <Fab size="medium" color="default" aria-label="dark">
          {
            theme && <IoSunny size={25} /> // render sunny when dark is true
          }
          {
            !theme && <IoMoon size={25} /> // render moon when dark is false
          }
        </Fab>
      </Box>
    </div>
  );
};

export default Theme;
