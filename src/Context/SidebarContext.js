import React, {createContext, useState} from 'react';
export const SidebarContext = createContext()

const SidebarContextProvider = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
        }
    return ( 
        <SidebarContext.Provider value={{isOpen:isOpen, toggle:toggle}}>
            {props.children}
        </SidebarContext.Provider>
     );
}
 
export default SidebarContextProvider;