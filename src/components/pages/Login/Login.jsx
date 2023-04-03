import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import './styles.css'

import MSquare from '../../tools/MSquare/MSquare'
import InputRow from '../../tools/InputRow/InputRow'
import Input from '../../tools/Input/Input'

const Login = ({ isTeacher }) => {
    const [isLogin, setIsLogin] = useState(isTeacher ? true : false)


    return (
        <div id='login'>
            <main>
                <MSquare type='three'>
                    <h1>{isLogin ? 'Se connecter' : 'Créer un compte'}</h1>
                </MSquare>

                <form autoComplete='new-password'>
                    {!isLogin && <InputRow>
                        <Input id='firstname' label='Prénom' />
                        <Input id='lastname' label='Nom' down />
                    </InputRow>}

                    <InputRow>
                        <Input id='email' label='Email' down={isLogin ? true : false}/>
                    </InputRow>

                    <InputRow>
                        <Input id='password' label='Mot de passe' type='password' down={isLogin ? false : true}/>
                    </InputRow>

                    {!isLogin && <InputRow>
                        <Input id='confirmPassword' label='Confirmer le mot de passe' type='password'/>
                    </InputRow>}

                    <MSquare type='two'>
                        <button type='button'>Entrer -&gt;</button>
                    </MSquare>


                    {isLogin && !isTeacher &&
                    <MSquare type='one'>
                        <Link to='/connexion#s-inscrire'>Créer un compte -&gt;</Link>
                    </MSquare>}

                    {/* backgound elements */}
                    <div className="grey-square" id='a'></div>
                    <div className="grey-square" id='b'></div>
                    <div className="grey-square" id='c'></div>
                    <div className="grey-square darker" id='d'></div>
                </form>
            </main>

            {/* background elements relative to page */}
            <div className="grey-square darker" id='e'></div>
            <div className="grey-square" id='f'></div>
            <div className="grey-square" id='g'></div>
        </div>
    )
}

export default Login