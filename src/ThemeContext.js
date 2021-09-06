import React, {useContext, useState} from 'react'


const ThemeContext = React.createContext()
const ButtonThemeContext = React.createContext()

export function ThemeContextFunction(){
    return useContext(ThemeContext)
}

export function ToggleButtonContextFunction(){
    return useContext(ButtonThemeContext)
}
export default function ThemeProvider({children}){

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleButton(){
        setDarkTheme(darkTheme => !darkTheme)
      }

      return(
          <div>
          <ThemeContext.Provider value={darkTheme}>
              <ButtonThemeContext.Provider value={toggleButton}>
                {children}
              </ButtonThemeContext.Provider>
          </ThemeContext.Provider>
          </div>
      )
}