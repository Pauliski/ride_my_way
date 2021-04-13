import React, {createContext, useState} from 'react';


export const ThemeContext = createContext()


const ThemeContextProvider=(props)=> {
      
     const defaultCombination ={
        isLightTheme: false,
        color:[{background: '#232B2B', element: 'transparent', text: '#FFF'}, {background: '#FF0035', element: 'transparent', text: '#fff' },{background: '#006BA6', element: 'transparent', text: '#fff' }, {background: '#5EF38C', element: 'transparent', text: '#333' }],
       
    }
    const [displayTheme, setDisplayTheme] = useState(0)
    const [colorCombination, setColorCombination] = useState(defaultCombination)
    const toggleTheme = ()=>{
        if(displayTheme === colorCombination.color.length - 1){
            setDisplayTheme(0)
        }else{
            setDisplayTheme(prev => prev + 1)
        }
    
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
