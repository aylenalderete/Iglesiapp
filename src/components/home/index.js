import React from 'react'
import Header from './HeaderContainer'
import News from './NewsContainer'
import ButtonsHome from './ButtonsNavContainer';
import BottomNavigation from './BottomNavegation'
import '../styles/home/home.scss'

const Home = (props) => {
    return (
        <div className="homeContainer">
            <Header />
            <ButtonsHome />
            <News />
            <BottomNavigation />
        </div>
    )
}
export default Home