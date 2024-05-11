import React from 'react'
import './splach.scss'

const Splach = () => {
  return (
    <div>
      <div className="splach-container">
        <div className="item-left">

            <img src="./assets/medias/image1.jpeg" alt="icon" />

            <img src="./assets/medias/image2.jpeg" alt="icon" />

        </div>

        <div className="item-right">

            <h1>Bienvenue sur notre site ! Nous vous offrons les meilleurs images génerer par l'IA que vous pouvez utiliser gratuitement dans vos projets ...</h1>

            <div className="btn">
                <button>S'inscrire</button>
                <button>Explorer la Gallerie</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Splach
