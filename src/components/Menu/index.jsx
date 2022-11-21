import React from 'react'
import { Conteiner } from './styles'
import { Link } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase'

import avatar from '../../asset/avatar.svg'


const Menu = ({ state, fun }) => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Conteiner state={state} >
            {state &&
                <>
                    {user &&
                        <>
                            <div style={{ marginTop: '80px', marginLeft: '20px', zIndex: 100 }}>
                                <h1>USUARIO LOGADO</h1>
                                <p>{user.email}</p>
                            </div>

                            <div className='avatar_content' style={{zIndex: 100}}>
                                <div className='avatar'>
                                    <img src={avatar} alt="avatar" />
                                </div>
                            </div>
                        </>
                    }



                    <ul style={{zIndex: 100}}>
                        <li>
                            <Link className='links' onClick={() => fun()} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='links' onClick={() => fun()} to="/access">Access</Link>
                        </li>
                        {user &&
                            <li>
                                <Link className='links' onClick={() => fun()} to="/minhaconta">Minha Conta</Link>
                            </li>
                        }
                        <li>
                            <Link className='links' onClick={() => fun()} to="/products">Produtos</Link>
                        </li>
                    </ul>
                </>
            }
        </Conteiner>
    )
}

export default Menu



