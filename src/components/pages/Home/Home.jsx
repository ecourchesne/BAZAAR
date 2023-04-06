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
                <div className="grey-square" id="a"></div>
                <div className="grey-square" id="b"></div>
                <div className="grey-square" id="c"></div>
                <div className="grey-square" id="d"></div>
                <div className="grey-square" id="e"></div>
                <div className="grey-square" id="f"></div>
                <div className="grey-square" id="g"></div>
                <div className="grey-square" id="h"></div>
                <div className="grey-square" id="i"></div>
                <div className="grey-square" id="j"></div>
                <div className="grey-square" id="k"></div>
                <div className="grey-square" id="l"></div>
                <div className="grey-square darker" id="m"></div>
                <div className="grey-square darker" id="n"></div>
                <div className="grey-square darker" id="o"></div>
                <div className="grey-square darker" id="p"></div>
                <div className="grey-square darker" id="q"></div>
                <div className="grey-square darker" id="r"></div>

                {/* yellow squares */}
                <div className="yellow-square" id="s"></div>
                <div className="yellow-square" id="t"></div>
                <div className="yellow-square" id="u"></div>
                <div className="yellow-square" id="v"></div>

                {/* hidden messages */}

                <p className="background-txt" id='w'>console.log{'("Hello World");'} </p>
                <p className="background-txt" id='x'>System.exit{'(0)'} </p>
                <p className="background-txt" id='y'>const social_life = null ;</p>
                <p className="background-txt" id='z'>{'<p>'} This is a Bootstrap Free Zone {'</p>'}</p>
                <p className="background-txt" id='aa'>{'DROP * DATABASE'}</p>
                <a href="" className="background-txt" id='ab'>{'<a href="'}shany_wan_kenobi.png"{'>'}Click Me{'</a>'}</a>

            </div>
        </div>
    )
}

export default Home
