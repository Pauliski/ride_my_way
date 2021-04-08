import React, {createContext, useState} from 'react';


export const ThemeContext = createContext()


const ThemeContextProvider=(props)=> {
       
     const defaultCombination ={
        isLightTheme: false,
        dark:{background: '#232B2B', element: '#DC3D24', text: '#FFF'},
        light:{background: '#ECEAE0', element: '#4EB1BA', text: '#221E1D' },
    }
    const [colorCombination, setColorCombination] = useState(defaultCombination)
    const toggleTheme = ()=>{
        setColorCombination({dark:colorCombination.dark, light:colorCombination.light, isLightTheme: !colorCombination.isLightTheme})
    }
   
    return (
        <div>
            <ThemeContext.Provider value={{...colorCombination, toggleTheme:toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
            
        </div>
    )
}
export default ThemeContextProvider
