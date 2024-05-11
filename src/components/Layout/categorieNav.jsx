import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Layout.scss"

function categorieNav(props) {

 const { Datas , nbrItem}=props;

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: nbrItem,
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
    <div className="slider-container">
       <div className="container">
       <Slider {...settings}>
        {
            Datas.map((categorie,id)=>{
                return(
                  
                   <div key={id}>
                    {categorie.name}
                   </div>
                   
                )
            })
        }
      </Slider>
       </div>
    </div>
  );
}

export default categorieNav;
