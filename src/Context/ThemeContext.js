import React, {createContext, useState} from 'react';


export const ThemeContext = createContext()


const ThemeContextProvider=(props)=> {
      
     const defaultCombination ={
        isLightTheme: false,
        color:[{background: '#232B2B', element: 'transparent', text: '#FFF'}, {background: '#FF0035', element: 'transparent', text: '#fff' },{background: '#006BA6', element: 'transparent', text: '#fff' }, {background: '#5EF38C', element: 'transparent', text: '#333' }],
        // dark:{background: '#232B2B', element: '#A4BFEB', text: '#1B1B1E'},
        // light:{background: '#ECEAE0', element: '#4EB1BA', text: '#221E1D' },
    }
    const [displayTheme, setDisplayTheme] = useState(0)
    const [colorCombination, setColorCombination] = useState(defaultCombination)
    const toggleTheme = ()=>{
        console.log(colorCombination.color.length, displayTheme)
        if(displayTheme === colorCombination.color.length - 1){
            setDisplayTheme(0)
        }else{
            setDisplayTheme(prev => prev + 1)
        }
        // setColorCombination({dark:colorCombination.dark, light:colorCombination.light, isLightTheme: !colorCombination.isLightTheme})
    }
   
    return (
        <div>
            <ThemeContext.Provider value={{...colorCombination, toggleTheme:toggleTheme, displayTheme: displayTheme}}>
                {props.children}
            </ThemeContext.Provider>
            
        </div>
    )
}
export default ThemeContextProvider
