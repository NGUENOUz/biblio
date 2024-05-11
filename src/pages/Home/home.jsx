import React from 'react'
import { useState,useEffect } from 'react'
import './home.scss'
import Header from '../../components/header/header.jsx'
import { Pictures } from '../../data/pictures'
import BtnLove from '../btnContainer'
import CategorieNav from '../../components/Layout/categorieNav'
import { categories } from '../../data/categorie'
import {color, motion} from 'framer-motion'



const Home = () => {
 
  const [like , setLike]=useState();
  const cartVariante={
    initial:{
      opacity:0,
      x:[-10,10],
      
    },
    animer:{
      opacity:1,
      x:0
    },
    focus:{
   

    }
    }
    
  
  const setting={
    Datas:categories,
    nbrItem:10,
  };
  
 let activeLove=()=>{
  setLike(!like);
 }

 const containerVariants={
  hiden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transiton:{ delay:1.5 , duration:1.5}

  }
 }


  return (
    <div>
    
      <div className="home-container">
        
      <Header/> 
         <CategorieNav {...setting}/>

       <div className="banniere">
       <h1 data-heading="IA-PIC">
		     <span contenteditable data-heading="IA-PIC">IA-PIC</span>
	    </h1>
       </div>
        <motion.h2 animate={{fontSize:50 , textShadow:"2px 2Px 9px gray" , padding:"3%"}}>
         <h2>Nos images les plus populaires</h2>
        </motion.h2>
       <div className="All-carts">
       
        {
          Pictures.map((picture,id)=>{
           return(
            <motion.div className="cart" key={id}
            variants={cartVariante}
             initial="initial"
             animate="animer"
             transition={{duration:1.2}}
             whileHover={{   y:10,
              transform:{scale:1.2},
        
              boxShadow:"2px 2px 9bx black"}}
             
           
            >
              <span className='pictBan'>
               <img src={picture.lien} alt="imageS" />
             </span>
             <BtnLove id={picture.id}/>
          </motion.div>
           )
          })
        }
       </div>


      </div>

      
    </div>
  )
}

export default Home
