import React from 'react'
import { faSearch, faBook, faClock, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import ButtonNavHome from './components/ButtonNavHome'

const ButtonsHome = () => {
    const items = [
        { title: 'Quieres somos', icon: faSearch },
        { title: 'Actividades', icon: faBook },
        { title: 'Horarios', icon: faClock },
        { title: 'Contactanos', icon: faAddressBook },
    ]

    return (
        <div className="buttonsHomeContainer">
            {items.map(({ icon, title }) => <ButtonNavHome icon={icon} title={title} />)}
        </div>
    )
}
export default ButtonsHome