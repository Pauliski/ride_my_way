import React, {useContext} from 'react';
import { Available } from './Map';
import {AvailableRides} from './Array'
import Layout2 from './LayoutTwo';
import { ThemeContext } from './Context/ThemeContext';

const AvailableRide = () => {
    const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
    return ( 
        <Layout2 
        toggle={toggleTheme}
        backgroundTheme={theme.background}
        textTheme={theme.text}
        elementTheme={theme.element}
        >
            <Available items={AvailableRides}/>
        </Layout2>
        
     );
}
 
export default AvailableRide;
