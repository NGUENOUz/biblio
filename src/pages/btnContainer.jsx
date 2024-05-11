import React from 'react'
import { useState } from 'react';

function BtnLove  ({id}) {


  const [isfavori , setIsfavori]=useState(false);
  

   
  const favori_icon ="./assets/icons/icon-love.png";
  const not_favori_icon ="./assets/icons/icon-love2.png";

 let favoris= ({})=>{
setIsfavori(!isfavori)

 }

  return (
    <div className='btns'>

      <span className='btn-love' > 
        <img src={!isfavori ?not_favori_icon:favori_icon} alt="icon" onClick={favoris} />
      </span>
       <a  className='btnTelecharger'>
           <span>Titre de mon produit </span>
      </a>
      
    </div>
  )
}

export default BtnLove
