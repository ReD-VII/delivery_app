import React from 'react'
import { auth } from '../../services/firebase'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';



const MinhaConta = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, signOutLoading, signOutError] = useSignOut(auth);

  const navigate = useNavigate()



  const sair = async () => {
    const sucess = await signOut()
    if (sucess) {
      alert('You are sign out');
    }
  }

  if (!user) {
    return(
      <>
        <p>Faça o login ates de acessar essa pagina</p>
        {}
      </>
    )
    
  } else if (user) {

    return (
      <div style={{ marginTop: '50px', background: 'blue' }}>
        <p>TESTE</p>
        <p>{user && user.email}</p>
        <button style={{ marginTop: '150px' }} onClick={sair}>SAIR</button>
      </div>
    )
  }
}

export default MinhaConta