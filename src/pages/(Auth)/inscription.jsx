import React, { useRef } from 'react'
import './inscription.scss'
import { supabaseConfig } from '../../utils/supabaseConfig';
import {motion} from 'framer-motion'

const Inscription = () => {

  async function handleSignInWithGoogle(response) {
    console.log('clic effectuer');
    const { data, error } = await supabaseConfig.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
  }
   
    const name=useRef();
    const Email=useRef();
    const Password=useRef();

  return (
    <motion.div className='formInscription'
     
     initial={{x:"-100vw" ,opacity:0 }}
     animate={{x:"0" , opacity:1}}
     transition={{delay:0.3 , type:"spring" }}
    >

      <div className="formContainer">
       <div className="topBar">
            <h1 className='Logo'>IA PIC</h1>
            <span className='formTitre'><span></span>Inscription<span></span></span>
            

         <div className="topBtn">
           <span className='btnGoogle'>
                <img src="./assets/icons/icon-google.png" alt="google" />
                <span onClick={handleSignInWithGoogle}>S'inscrire avec Google</span>
            </span>

            <span className='btnGoogle'>
                <img src="./assets/icons/icon-facebook.png" alt="FACEBOOK" />
                <span> S'inscrire avec Facebook</span>
            </span>
         </div>

         </div>

         <form action="">
           <span className='inputBloc'>
            <label htmlFor="Nom">Nom</label>
            <input type="text" placeholder='Entrez votre nom ' ref={name}/>
           </span>

           <span className='inputBloc'>
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder='Entrez votre nom ' ref={Email}/>
           </span>

           <span className='inputBloc'>
            <label htmlFor="Nom">Mot de passe </label>
            <input type="password" placeholder='Entrez votre mot de passe 'ref={Password}/>
           </span>

            <span className='btnBottom'>
            <button type='submit' className='btnInscription'>M'inscrire</button>
            <span>Vous avez déja un compte ? <span className='link'>Se connecter</span></span>
            </span>
         </form>
      </div>
      
    </motion.div>
  )
}

export default Inscription
