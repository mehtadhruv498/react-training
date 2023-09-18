import React, { createContext, useContext, useState } from 'react';
import { Button } from "react-bootstrap"
import ThemeContext from './themeContext';

//const ThemeContext = createContext('light');

function ThemeSwitcher() {
    const { theme, setThemeChange } = useContext(ThemeContext)
    console.log("Value inside Themeswitcher",theme);
  
    return (
      <Button
        onClick={() => setThemeChange(theme == "dark" ? "light" : "dark")}
        className="button-theme"
      >
      Switch Theme  
      </Button>
    )
  }
  
  export default ThemeSwitcher
  

