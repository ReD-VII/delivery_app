import React, { useState, useEffect } from 'react'
import { AccessContent } from './styles'
import './styles.css'
import LogoGrande from '../../asset/logo-315x247.svg'
import { auth } from '../../services/firebase'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'




const AccessComp = () => {

   

    const [screen, setScreen] = useState(0)
    // 0 = Tela de login 
    // 1 = tela de registro


    // Dados do formulario
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
        nome: '',
        contato: ''
    })


    //AUTH
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    // Controle de inputs
    useEffect(() => {
        if (screen === 0) { //Tratamento area de login
            console.log('Area de login')
        } else if (screen === 1) {//tratamento area de registro
            console.log('Area de registro')
        }
    }, [screen])


    //Submit formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(formData.email, formData.senha)
    }

    // REdirecionamento
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            console.log('Usuario logado: ' + user.user.email)
        }
    }, [user])

    if(user){
        navigate('/')
    }





    if (loading) {
        return <p>Loading...</p>;
    }




    








    if (screen === 0) { // Tela de Login ↓
        return (
            <>
                <div className='logo_access'>
                    <img src={LogoGrande} alt="Logo" />
                </div>
                <AccessContent>

                    <h1>Log in</h1>


                    <form onSubmit={handleSubmit}>
                        <label>

                            <input type="email" placeholder='E-mail' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </label>

                        <label>

                            <input type="password" placeholder='Senha' onChange={(e) => setFormData({ ...formData, senha: e.target.value })} />
                        </label>

                        <button>Entrar</button>
                    </form>




                    <p className='access_link' onClick={() => setScreen(1)}>Registrar</p>
                </AccessContent>
            </>
        )
    } else if (screen === 1) { // Tela de Cadastro ↓
        return (
            <>
                <div className='logo_access'>
                    <img className='logo' src={LogoGrande} alt="Logo" onClick={''}/>
                </div>
                <AccessContent>

                    <h1>Register</h1>


                    <form onSubmit={handleSubmit}>
                        <label>

                            <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder='E-mail' />
                        </label>

                        <label>

                            <input type="password" placeholder='Senha' onChange={(e) => setFormData({ ...formData, senha: e.target.value })} />
                        </label>

                        <label>

                            <input value={formData.nome} type="text" placeholder='Seu nome' onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
                        </label>

                        <label>

                            <input value={formData.contato} type="tel" placeholder='(98) 9 8195-8534' onChange={(e) => setFormData({ ...formData, contato: e.target.value })} />
                        </label>


                        <button>Registrar</button>
                    </form>





                    <p className='access_link' onClick={() => setScreen(0)}>Entrar</p>
                </AccessContent>


            </>
        )
    } else {
        console.log('[ERRO] Erro ao selecionar screen. ')
        setScreen(0)
    }





}

export default AccessComp