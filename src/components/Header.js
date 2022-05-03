import React from "react";
import { useGlobalThemeContext } from "../contexts/ThemeContext";
import { ReactComponent as MoonLogo } from "../images/moon.svg"

export default function Header() {
  const { setDarkTheme } = useGlobalThemeContext()

  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme)
  }

  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <button className="btn" onClick={toggleTheme}>
        <MoonLogo className="moon"/>
        dark mode
      </button>
    </header>
  )
}