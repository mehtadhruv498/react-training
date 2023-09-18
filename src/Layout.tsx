import React, { useContext } from "react"
import Header from "./Header"
import { Helmet } from "react-helmet"
import ThemeContext from "./themeContext"

const Layout = ({ children }) => {
  const contextValue = useContext(ThemeContext)
  console.log(contextValue?.theme);
  const bg =
    contextValue?.theme == "dark"
      ? "body {background-color: #404042; color: gray;}"
      : "body {background-color: #fff; color: #000;}" 
  return (
    <>
      <Helmet>
        <style>{bg}</style>
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout