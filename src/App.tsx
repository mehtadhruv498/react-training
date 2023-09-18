import { useState, useContext, createContext } from 'react'
import './App.css'
import { Container } from "react-bootstrap"
import ThemeContext from './themeContext'
import Layout from './Layout'
import { Body } from './Body'
import ThemeSwitcher from './themeSwitcher'

function App() {
  const [theme, setTheme] = useState<string>("light")
  //const value = { theme, setTheme }
  console.log("value of theme in Main File",theme)
  console.log("theme and setTheme",theme,setTheme)
  const setThemeChange = (theme:string) => {
    setTheme(theme);
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme,setThemeChange}}>
        <ThemeSwitcher />
        <Layout>
          <Body />
        </Layout>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
