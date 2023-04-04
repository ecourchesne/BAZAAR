import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import MSquare from '../../tools/MSquare/MSquare'
import InputRow from '../../tools/InputRow/InputRow'
import Input from '../../tools/Input/Input'
import Plus from '../../tools/svgs/Plus/Plus' 
import Bar from '../../tools/svgs/Bar/Bar'
import Square from '../../tools/svgs/Square/Square' 

const Login = ({ isTeacher }) => {
    const [isLogin, setIsLogin] = useState(isTeacher ? true : false)

    const toggleForm = () => {
        setIsLogin((prev) => !prev)
    }

    return (
      <div id="login">
        <main>
          <MSquare type="three">
            <h1>{isLogin ? "Se connecter" : "Créer un compte"}</h1>
          </MSquare>

          <form autoComplete="new-password">
            {!isLogin && (
              <InputRow>
                <Input id="firstname" label="Prénom" />
                <Input id="lastname" label="Nom" />
              </InputRow>
            )}

            <InputRow>
              <Input id="email" label="Email" />
            </InputRow>

            <InputRow>
              <Input
                id="password"
                label="Mot de passe"
                type="password"
                down={isLogin ? false : true}
              />
            </InputRow>

            {!isLogin && (
              <InputRow>
                <Input
                  id="confirmPassword"
                  label="Confirmer le mot de passe"
                  type="password"
                />
              </InputRow>
            )}

            <MSquare type="two">
              <button type="button">Entrer -&gt;</button>
            </MSquare>

            {/* backgound elements */}
            <div className="grey-square" id="a"></div>
            <div className="grey-square" id="b"></div>
            <div className="grey-square" id="c"></div>
            <div className="grey-square darker" id="d"></div>
          </form>

                  {/* form switch button */}
        {!isTeacher && (
          <div className={`form-switch ${isLogin ? "" : "create-account"}`}>
            <p>
              {isLogin ? "Nouveau sur BAZAAR?" : "Vous avez déja un compte?"}
            </p>
            <MSquare type="four">
              <button onClick={toggleForm}>
                {isLogin ? "Créer un compte ->" : "Se connecter ->"}
              </button>
            </MSquare>
          </div>
        )}

        </main>



        {/* background elements relative to page */}
        <div className="grey-square darker" id="e"></div>
        <div className="grey-square" id="f"></div>
        <div className="grey-square" id="g"></div>

        <div className="grey-square" id="h"></div>
        <div className="grey-square" id="i"></div>
        <div className="grey-square" id="j"></div>
        <div className="grey-square" id="k"></div>
        <div className="grey-square" id="l"></div>
        <div className="grey-square" id="m"></div>
        <div className="grey-square" id="n"></div>
        <div className="grey-square" id="o"></div>
        <div className="grey-square" id="p"></div>
        <div className="grey-square" id="q"></div>
        <div className="grey-square" id="r"></div>
        <div className="grey-square" id="s"></div>
        <div className="grey-square" id="t"></div>

        <div className="grey-square darker" id="u"></div>

        <div className="yellow-square" id="v"></div>
        <div className="yellow-square" id="w"></div>
        <div className="yellow-square" id="x"></div>
        
        {/*hidden messages*/}
        <p className="background-txt" id='y'>if{'(wifi && exam)'} </p>
        <p className="background-txt" id='z'>useChatGpt{'()'};</p>

        <p className="background-txt" id='aa'>{'<p>'}Frank the Scrum Master{'</p>'}</p>
        
        <p className="background-txt" id='ab'>if{'(nb_cour_manqués > 3)'} </p>
        <p className="background-txt" id='ac'>cours = échoué;</p>

        
        
        <div className="background-svgs">

                        {/*Plus Box*/}

            <Plus left='2.3%' top='35.3%'  z={3} />
            <Plus left='18.5%' top='59%'  z={3} />
            <Plus left='9.8%' bottom='9.4%'  z={3} />

            <Plus right='7%' bottom='35%'  z={3} />
            <Plus right='7%' bottom='45%'  z={3} />
            <Plus right='7%' bottom='3%'  z={3} />

                        {/*Small Squares*/}

            <Square right='4%' top='17.5%'/>
            <Square right='12%' top='17.5%'/> 
            <Square right='14%' top='17.5%'/> 
            <Square right='25%' top='17.5%'/>  


            <Square left='33%' top='54%'/>

            <Square left='45%' bottom='13%'/>
            <Square left='47%' bottom='13%'/>

                        {/*Bar Box*/}

            <Bar top='45%' left='8%' type='one'/>
            <Bar top='50.5%' left='32.6%' type='one' rotate/>

        </div>
        

      </div>
    );
}

export default Login