import React, {useContext} from 'react';
import Layout2 from './LayoutTwo';
import { ThemeContext } from './Context/ThemeContext';

const RecentTrip = () => {
    const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <Layout2 
        color={theme.text}
        toggle={toggleTheme}
        backgroundTheme={theme.background}
        textTheme={theme.text}
        elementTheme={theme.element}
        >

        </Layout2>
     );
}
 
export default RecentTrip;