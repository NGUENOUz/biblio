import React from 'react'
import Header from '../../components/header/header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './details.scss'
import Bouton from '../../components/Layout/bouton'
import { Pictures } from '../../data/pictures';
import BtnLove from '../btnContainer';
import { Download, Favorite, Send, Share } from '@mui/icons-material';



const Details = () => {

  const btnTitle="Enregistrer"
 
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='detailContainer'>
       <Header/>
      <section className='pictDetails'>
        <div className="preview">
          
             <div className="cart">
              <span className='imgPreview'>
                  <img src="./assets/medias/image8.jpeg" alt="" />
              </span>
              <span className='imgDescription'>
                <span className='btnContainer'>
                   <div className="bloc1">
                  <span className='btn'> <Download className='Icon'/><span>Telecharger</span></span>
                  <span className='btn'> <Share className='Icon'/> <span>Partager</span></span>
                  <span className='btn'><Favorite className='Icon'/><span>Ajouter aux favoris</span></span>

                   </div>

                   <div className="bloc2">
                    <span>...</span>
                   </div>
               </span>
               <>
               <h1>Description</h1>
                 <p style={{paddingRight:"10px"}}>  <span className='Titre'>Titre de l'image </span>
                  est une representation qui met en avant le contexte artistique et hmourisque des acteurs du cinemat africain . Cette image peux etre utiliser dans plusieurs contexte et situalition artistique .
                 </p>
               </>
               <div className="author">
                   <div className="bloc1">
                     <span className='authorPic'>
                       <img src="./assets/medias/kl.jpeg" alt="profil piture" />
                     </span>

                     <span className='authorInfos'>
                        <span>AuthorName</span>
                        <span>+237 Followers</span>
                     </span>
                   </div>

                   <div className="bloc2">
                      <button className='btnStyle'>S'abonner</button>
                   </div>
                 </div>
                 <div className="comment">
                  <h1>Commentaires</h1>
                  <div className="container">
                   <p>Pas de commentaire pour le momment </p>
                  </div>
                 </div>

                 <div className="cartComment">
                  <p>Que pensez vous ?</p>
                   <div className="Bloc">
                     <h3>WD</h3>
                     <input type="text" placeholder='Ajoutez un commentaire' />
                    <span className='btnComment'>
                      <Send/>
                    </span>
                   </div>
          
                 </div>
              </span>
            </div>

        </div>
      </section>

      <section className='cartPaginationLine'>
        <h1>Autres photos qui peuvent vous interesser</h1>
          
          <div className="cartContainer">
          <Slider {...settings}>

          {
          Pictures.map((picture,id)=>{
           return(
            <div className="otherCart" key={id}>
             <span className='pictBan'>
               <img src={picture.lien} alt="imageS" />
             </span>
             
          </div>
           )
          })
        }
             
            </Slider> 
          </div>
      </section>
      
    </div>
  )
}

export default Details
