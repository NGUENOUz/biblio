import React, { useRef } from 'react'
import './inscription.scss'

const ResetPassword = () => {
    const name=useRef();
    const Email=useRef();
    const Password=useRef();

  return (
    <div className='formInscription'>

    <div className="formContainer">
       <div className="topBar">
          <h1 className='Logo'>IA PIC</h1>
          <span className='formTitre'><span></span>Mot de passe oublier<span></span></span>
          
       </div>

       <form action="">
         <span className='inputBloc'>
          <label htmlFor="Email">Email</label>
          <input type="text" placeholder='Entrez votre adresse email ' ref={Email}/>
         </span>

         <span className='inputBloc'>
          <p>Vous allez recevoir un code de confirmation à cette adresse Email </p>
         </span>

          <span className='btnBottom'>
          <button type='submit' className='btnInscription'>Envoyer</button>
          <span>Vous avez déja un compte ? <span className='link'>Se connecter</span></span>
          </span>
       </form>
    </div>
    
  </div>
  )
}

export default ResetPassword
