import React from 'react'
import './styles.css'

const MainNav = () => {


    return (
        <nav id='main-nav'>
            <div className="left">
                <p>BAZAAR</p>
                <p>Plateforme de précommandes</p>
            </div>

            <div className="right">
                <p>Département Informatique</p>
                <p>Cégep de Trois-Rivières</p>
            </div>
        </nav>
    )
}

export default MainNav
