import React, { useRef } from 'react'
import './inscription.scss'

const Connexion = () => {
   
    const name=useRef();
    const Email=useRef();
    const Password=useRef();

  return (
    <div className='formInscription'>

      <div className="formContainer">
       <div className="topBar">
            <h1 className='Logo'>IA PIC</h1>
            <span className='formTitre'><span></span>Connexion<span></span></span>
            

         <div className="topBtn">
           <span className='btnGoogle'>
                <img src="./assets/icons/icon-google.png" alt="google" />
                <span>Se connecter avec Google</span>
            </span>

            <span className='btnGoogle'>
                <img src="./assets/icons/icon-facebook.png" alt="google" />
                <span> Se connecter avec Facebook</span>
            </span>
         </div>

         </div>

         <form action="">


           <span className='inputBloc'>
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder='Entrez votre nom ' ref={Email}/>
           </span>

           <span className='inputBloc'>
            <label htmlFor="Password" className='itemPassword'><span>Mot de passe </span> <span className='notPassword'>Mot de passe oublier ?</span></label>
            <input type="password" placeholder='Entrez votre mot de passe 'ref={Password}/>
           </span>

            <span className='btnBottom'>
            <button type='submit' className='btnInscription'>M'inscrire</button>
            <span>Vous n'avez pas encore  un compte ? <span className='link'>S'inscrire</span></span>
            </span>
         </form>
      </div>
      
    </div>
  )
}

export default Connexion
