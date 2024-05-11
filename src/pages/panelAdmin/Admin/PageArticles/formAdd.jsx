import { Add, Article, Description, Info, Link, SettingsSuggest, Title } from '@mui/icons-material'
import React from 'react'
import { categories } from '../../../../data/categorie'
import './formAdd.scss'

const FormAdd = () => {
  return (
    <div className='formContainer'>

       <div className="topNav">
        <span className='articleLink'><Article/><span>Articles / </span></span>
        <span className='actuPage'>Ajouter un articles</span>
       </div>

       <div className="boxContainer">
        <form action="">
          
         <span className='inputItem'>
         <label htmlFor="titre"><Title/><span>Titre de l'article</span></label>
          <input type="text" name="" id="" placeholder="Entrez le titre de l'image" />
         </span>

         <span className='inputItem'>
          <label htmlFor="Description"><Description/><span> Description</span></label>
          <textarea name="" id="" cols="30" rows="10" placeholder='entrez la descritption de cette article ' ></textarea>
         </span>
           
         <span className='inputItem'>
          <label htmlFor="Description"><Link/><span> Lien de l'image</span></label>
          <input type='text' className='inputLink' placeholder= "Exemple : Https://www.google.png" />
         </span>

         <span className="categories">
            <span>Quelle est la categorie de cette article ?</span>
             
             {
                categories.map((categorie,id)=>{
                    return( 
                       <span className='categorie' key={id}>{categorie.name}</span>
                    )
                })
             }

         </span>





        </form>

        <div className="assistances">
            <div className="conseils">
                <span style={{alignContent:"center",display:"flex"}}><Info className="Icon"/> <span>Conseils</span></span>
                <p>Nous vous conseillons d'utiliser des images de qualitéq et des mots plus explicite , pour que les utilisateurs retrouvent facilement vos images </p>

            </div>

            <div className="suggestion">
                <span><SettingsSuggest/>Suggestions</span>
                <span className='Titre'>
                    <span>Titre :</span>
                     <div className="Container">
                     <span className='suggT'>
                        <>Suddestion de titre 1</>
                        <Add className="Icon"/>
                    </span>
                    <span className='suggT'>
                        <>Suddestion de titre 1</>
                        <Add className="Icon"/>
                    </span>
                     </div>
                </span>

                <span className='Description'>
                    <span>Description :</span>
                    <div className="Container">
                    <span className='suggT'>
                        <>Suddestion de description pour cette image</>
                        <Add className="Icon"/>
                    </span>
                    </div> 
                </span>

                <span className='Image'>
                    <img src="./assets/medias/bb.jpeg" alt="" />
                </span>
            </div>

            <div className="btnSubmit">
                <span>Publier</span>
            </div>
        </div>
       </div>
      
    </div>
  )
}

export default FormAdd
