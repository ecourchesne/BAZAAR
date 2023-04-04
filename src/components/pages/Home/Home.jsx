import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

// homemade components
import MSquare from '../../tools/MSquare/MSquare'
import Plus from '../../tools/svgs/Plus/Plus' 
import Bar from '../../tools/svgs/Bar/Bar'
import Square from '../../tools/svgs/Square/Square'

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
                <a href="../../assets/Shany-Wan_Kenobi-1.png" className="background-txt" id='ab'>{'<a href="'}shany_wan_kenobi.png"{'>'}Click Me{'</a>'}</a>


                {/*Plus Box*/}
                <Plus top='18.5%' left='47.7%'/>
                <Plus bottom='19.5%' left='32.8%'/>

                <Plus bottom='7%' right='40%'/>
                <Plus bottom='7%' right='36%'/>
                <Plus bottom='7.5%' right='25.8%'/>

                <Plus bottom='63.5%' right='3.7%'/>
                <Plus bottom='67.5%' right='3.7%'/>
                <Plus bottom='49%' right='3.7%'/>
                

                {/*Bar Box*/}

                <Bar left='3%' top='17%' type='one'/>
                <Bar bottom='17%' left='7.3%' type='one'/>

                <Bar bottom='30%' right='7.3%' type='two'/>
                <Bar bottom='22%' right='7.3%' type='two'/>
                <Bar bottom='12%' right='7.3%' type='two'/>
                <Bar bottom='8%' right='7.3%' type='two'/>


                {/*small squares*/}

                <Square left='3.5%' top='40%'/>

                <Square left='3.5%' top='63%'/>
                <Square left='3.5%' top='67%'/>

                <Square left='3.5%' top='80%'/>

                


            </div>
        </div>
    )
}

export default Home
