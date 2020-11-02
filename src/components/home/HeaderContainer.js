import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="headerContainer">

            <FontAwesomeIcon icon={faCross} />
            <h5>Bienvenido a nuestra iglesia!</h5>
        </div>
    )
}
export default Header