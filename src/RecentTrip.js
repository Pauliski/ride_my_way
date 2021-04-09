import React, {useContext} from 'react';
import Layout2 from './LayoutTwo';
import { ThemeContext } from './Context/ThemeContext';
import { MapRecentTrips } from './Map';
import { Recent } from './Array';

const RecentTrip = () => {
    // const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;
    const { toggleTheme, displayTheme, color } = useContext(ThemeContext);
  let theme = color[displayTheme]
    return ( 
        <Layout2 
        color={theme.text}
        toggle={toggleTheme}
        backgroundTheme={theme.background}
        textTheme={theme.text}
        elementTheme={theme.element}
        >
            <div>
                <MapRecentTrips items={Recent} />
            </div>
        </Layout2>
     );
}
 
export default RecentTrip;