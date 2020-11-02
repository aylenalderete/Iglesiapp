import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/home/buttonNav.scss'
const ButtonNavHome = ({ icon, title }) => {
    return (
        <div className="ButtonNavHomeContainer">
            <div className="iconContainer">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h5 className='title'>{title}</h5>
        </div>
    )
}
export default ButtonNavHome