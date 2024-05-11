import React, { useState } from 'react'
import './list.scss'
import {Pictures} from '../../../../data/pictures'
import { Comment, Delete, Download, Edit, HotTub, LocalActivity, Share, Timelapse, Warning } from '@mui/icons-material'
import FormAdd from './formAdd'


const ListArticles = () => {
  console.log(Pictures[0].lien)
   const [renderForm,setRenderForm]=useState(true);
  
  const LinkToForm=()=>{
    setRenderForm(false)
  }
  return (
      <>
        {
          !renderForm?<FormAdd/>:

          <div className='articlesContainer'>
     <div className="topElement">
       <h1>Liste des articles</h1>
       <span className='btnAdd' onClick={LinkToForm}>Ajouter</span>
    </div>
    <div className="container">
       <div className="articlesNav">
         <button className='articlesGroup'>
          <Timelapse className='Icon'/>
          <span>Les plus récents</span>
         </button>

         <button className='articlesGroup'>
          <LocalActivity className='Icon'/>
          <span>Les plus populaires</span>
         </button>

         <button className='articlesGroup'>
          <Warning className='Icon'/>
          <span>Non publier </span>
         </button>
       </div>

         <div className="cartBox">
          {
            Pictures.map((picture)=>{
                
              return(
                <div className="cart" key={picture.id}>
              <span className='imgPreview'>
                <img src={picture.lien} alt="artjj" />
              </span>
              <span className='cartDescription'>
                  <div className="cartHead">
                   <div className="cartTitle">
                    <h1>{picture.titre}</h1> <span className='IconShare'>...</span>
                   </div>
                    <div className="b2">
                     <span className='date'>Publier le 11 Janvier 2028 </span>
                     <span className='indice'><span>+20K</span> <Download className='Icons' /></span>
                     <span className='indice'><span>+20K </span><Comment className='Icons' /></span>
                     <span className='btnCommentaire'><u>Voir les commentaires</u></span>
                    </div>
                  </div>
                  <div className="boxDescription">
                    <h3>Description : </h3>
                    <p>{picture.description}</p>
                  </div>
                  <span className='btnContainer'>
                    <span className='btn btnEdit'> <Edit style={{color:'green',whidth:'20px', height:'20px'}}/> <span>Modifier</span></span>
                    <span className='btn btnDelete'> <Delete style={{color:'red',whidth:'20px', height:'20px'}}/> <span>Supprimer</span></span>
                  </span>

              </span>
            </div>
              )

            })
          }
         </div>
        </div>                                                                                                                                                                                                                                                                                   
    </div>
        }
      </>
  )
}

export default ListArticles
