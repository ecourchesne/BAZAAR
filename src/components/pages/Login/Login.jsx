import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import MSquare from '../../tools/MSquare/MSquare'
import InputRow from '../../tools/InputRow/InputRow'
import Input from '../../tools/Input/Input'

const Login = ({ isTeacher }) => {
    const [isLogin, setIsLogin] = useState(isTeacher ? true : false)

    const toggleForm = () => {
        setIsLogin((prev) => !prev)
    }

    return (
        <div id='login'>
            <main>
                <MSquare type='three'>
                    <h1>{isLogin ? 'Se connecter' : 'Créer un compte'}</h1>
                </MSquare>

                <form autoComplete='new-password'>
                    {!isLogin && <InputRow>
                        <Input id='firstname' label='Prénom' />
                        <Input id='lastname' label='Nom' />
                    </InputRow>}

                    <InputRow>
                        <Input id='email' label='Email'/>
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

                    {/* backgound elements */}
                    <div className="grey-square" id='a'></div>
                    <div className="grey-square" id='b'></div>
                    <div className="grey-square" id='c'></div>
                    <div className="grey-square darker" id='d'></div>
                </form>

                {/* form switch button */}
                {!isTeacher &&
                <div className={`form-switch ${isLogin ? '' : 'create-account'}`}>
                    <p>{isLogin ? 'Nouveau sur BAZAAR?' : 'Vous avez déja un compte?'}</p>
                    <MSquare type='four'>
                        <button onClick={toggleForm}>{isLogin ? 'Créer un compte ->' : 'Se connecter ->'}</button>
                    </MSquare>
                </div>}

            </main>

            {/* background elements relative to page */}
            <div className="grey-square darker" id='e'></div>
            <div className="grey-square" id='f'></div>
            <div className="grey-square" id='g'></div>
        </div>
    )
}

export default Login