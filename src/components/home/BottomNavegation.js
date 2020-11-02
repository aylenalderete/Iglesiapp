import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBible, faHome, faMusic, faAmbulance } from '@fortawesome/free-solid-svg-icons'

const BottomNavegation = () => {
    return (
        <div className="bottomNavegationContainer">
            <BottomNavigation showLabels>
                <BottomNavigationAction label="Musica" value="musica" icon={<FontAwesomeIcon icon={faMusic} />} />
                <BottomNavigationAction label="Home" value="home" icon={<FontAwesomeIcon icon={faHome} />} />
                <BottomNavigationAction label="Biblia" value="bible" icon={<FontAwesomeIcon icon={faBible} />} />
            </BottomNavigation>
        </div>
    )
}
export default BottomNavegation