import React from 'react'

const Container = () => {
  return (
        
    <div className="dashboard-container">
     <div className="bloc1">

      <div className="boxTrafic">
        <h1>Activité sur le site</h1>
        <img src="./assets/medias/tendance.png" alt="tendance" />
      </div>

      <div className="boxTelechargement">
        <h1>Nombre de telechargements</h1>
        <img src="./assets/medias/graphT.png" alt="tendance" /> 
      </div>
    </div>

    <div className="bloc2">
          <div className="boxHot">
           <span className='hotBan'> <img src="./assets/medias/image7.jpeg" alt="ban" /> </span>
          <div className="hotsItems">
            <h2>Les meilleurs de la semaine</h2>
            <table>
              <tbody>
                <tr>
                  <td>01</td>
                  <td><img src="./assets/medias/bb.jpeg" alt="imgProfil" /></td>
                  <td>Monsieur Matheo</td>
                  <br />
                  <tr> <span className='niv1'>tt<span className='niv2'></span></span></tr>
                </tr>
              </tbody>
            </table>

          </div>
          </div>

          <div className="categorieHot">

          </div>
    </div>
    </div>
  )
}

export default Container
