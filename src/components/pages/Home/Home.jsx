import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

// homemade components
import MSquare from '../../tools/MSquare/MSquare'

const Home = () => {


    return (
        <div id='home'>
            <main>
                <MSquare type='one'>
                    <h1>Qui êtes-vous?</h1>
                </MSquare>
                    
                <MSquare type='three'>
                    <Link to='connexion?etudiant'>Professeur -&gt;</Link>
                </MSquare>

                <MSquare type='two'>
                    <Link to='connexion?etudiant'>Étudiant -&gt;</Link>
                </MSquare>       
            </main>

            <div className="timer">
                <p>17</p>
                <div className="right">
                    <p>jours <br />restants</p>
                    <p>CAMPAGNE H23</p>
                </div>
            </div>
            
            {/* vbackground elements */}
            <div className="background">
                {/* gray squares */}
                <div className="grey-square" id="1"></div>
                <div className="grey-square" id="2"></div>
                <div className="grey-square" id="3"></div>
                <div className="grey-square" id="4"></div>
                <div className="grey-square" id="5"></div>
                <div className="grey-square" id="6"></div>
                <div className="grey-square" id="7"></div>
                <div className="grey-square" id="8"></div>
                <div className="grey-square" id="9"></div>
                <div className="grey-square" id="10"></div>
                <div className="grey-square" id="11"></div>
                <div className="grey-square" id="12"></div>
                <div className="grey-square darker" id="13"></div>
                <div className="grey-square darker" id="14"></div>
                <div className="grey-square darker" id="15"></div>
                <div className="grey-square darker" id="16"></div>
                <div className="grey-square darker" id="17"></div>
                <div className="grey-square darker" id="18"></div>

                {/* yellow squares */}
                <div className="yellow-square" id="1"></div>
                <div className="yellow-square" id="2"></div>
                <div className="yellow-square" id="3"></div>
                <div className="yellow-square" id="4"></div>


            </div>
        </div>
    )
}

export default Home
