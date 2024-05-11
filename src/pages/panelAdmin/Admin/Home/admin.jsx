import React, { useEffect, useState } from 'react'
import './admin.scss'
import './iconMode.scss'
import { motion, spring } from 'framer-motion';
import { Dashboard ,Article , People ,  LocalFireDepartment, Settings, Logout, DocumentScannerRounded} from '@mui/icons-material';
import Container from './container';
import ListArticles from '../PageArticles/listArticles';



const Admin = () => {

  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [menuMOde,setMenuMode]=useState(true)

  const handleMenu=()=>{
    if(menuMOde){
      console.log("desactiver")
      setMenuMode(false)
    }
    else{
      console.log("activer")
      setMenuMode(true)
    }
  }

  const handleClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  return (
    <div className='admin-panel'>
       <div className="container">

         {/* Partie pour la nav à gauche */}
        <div className={menuMOde?'left-nav':'iconMode'}>

          <div className="head">
            <span className='Logo '>IA-PIC</span>
            <span className='Menu' onClick={handleMenu}>
              <span className='trait trait1'></span><span className='trait trait2'></span><span className='trait trait3'></span>
            </span>
          </div>

          <div className="optionMenu">
            <ul>
             <motion.li className={activeMenu === 'dashboard' ? 'ItemSelect' : 'menuItem'}
              onClick={() => handleClick('dashboard')}
              initial={{x:-90 ,scale:1.2}}
              animate={{x:0,scale:1}}
              transition={{type:spring, duration:0.5}}
              >
                 <Dashboard className='Icon'/><span className='iconM'>Tableau de Bord</span>
             </motion.li>

             <motion.li className={activeMenu === 'article' ? 'ItemSelect' : 'menuItem'} 
              onClick={() => handleClick('article')}
              initial={{x:-100}}
              animate={{x:0}}
              transition={{type:spring, duration:0.7}}
              >
                <Article className='Icon'/><span className='iconM'>Articles</span>
             </motion.li>

               <motion.li className={activeMenu === 'createur' ? 'ItemSelect' : 'menuItem'} 
               onClick={() => handleClick('creators')}
               initial={{x:-110}}
               animate={{x:0}}
               transition={{type:spring, duration:0.9}}
               > {/* Assuming you meant 'creators' */}
                <People className='Icon' />
                <span className='iconM'>Createurs</span>
               </motion.li>

                <motion.li className={activeMenu === 'rapport' ? 'ItemSelect' : 'menuItem'} 
                onClick={() => handleClick('rapport')}
                initial={{x:-120}}
                animate={{x:0}}
                transition={{type:spring, duration:1.2}}
                > {/* Assuming you meant 'rapport' */}
                <DocumentScannerRounded className='Icon' />
                <span className='iconM'>Rapports</span>
                 </motion.li>

                <motion.li className={activeMenu === 'Boost' ? 'ItemSelect' : 'menuItem'} 
                onClick={() => handleClick('boost')}
                initial={{x:-130}}
                animate={{x:0}}
                transition={{type:spring, duration:1.4}}
                >
                <LocalFireDepartment className='Icon' />
                <span className='iconM'>Boost</span>
                </motion.li>

                <motion.li className={activeMenu === 'parametre' ? 'ItemSelect' : 'menuItem'}
                 onClick={() => handleClick('parametre')}
                 initial={{x:-140}}
                 animate={{x:0}}
                 transition={{type:spring, duration:1.6}}
                 >
                <Settings className='Icon' />
                <span className='iconM'>Parametre</span>
                </motion.li>

                <motion.li className={activeMenu === 'Deconnexion' ? 'ItemSelect' : 'menuItem'} 
                onClick={() => handleClick('deconnexion')}
                initial={{x:-150}}
                animate={{x:0}}
                transition={{type:spring, duration:1.8}}
                >
                <Logout className='Icon' />
                <span className='iconM'>Deconnexion</span>
                </motion.li>
            </ul>
          </div>

        </div>

        {/* Partie pour la nav au dessus */}
        <div className={`"top-nav" ${!menuMOde?"bigTopBar":"top-nav"}`  }>
          <nav>
            <span className='hello'>
              Hello <span className='userName'>Matheo</span>
            </span>

            <span className='search'>
              <input type="text" name="" id="" placeholder='Que recherchez vous ?' />
              <img src="./assets/icons/icon-search.png" alt="icon" />
            </span>
            <span className='btnPremieum'>Dévenir premieum</span>
            <span className='notifications'>
              <img src="./assets/icons/icon-notification.png" alt="notif" />
              <span className='nbr'>+10</span>
            </span>
            <span className='imgProfil'>
              <img src="./assets/medias/bb.jpeg" alt="imgProfil" />
            </span>
          </nav>
        </div>

        <motion.div className={menuMOde?"menuGroup":"bigMenuGroup"}
          
          initial={{x:-100}}
          animate={{x:0}}
          transition={{type:spring, duration:1.5}}
        >
          {activeMenu === 'article' && <ListArticles />} {/* Render ListArticles conditionally */}
          {activeMenu === 'dashboard' && <Container />} {/* Render default content if dashboard is active */}
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
