import React, { useContext, useState } from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider({ children })  {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <ThemeContext.Provider
      value={{
        setDarkTheme,
      }}
    >
      <div className={`${darkTheme ? 'dark-theme': ''}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useGlobalThemeContext() {
  return useContext(ThemeContext)
}

export { ThemeContextProvider }