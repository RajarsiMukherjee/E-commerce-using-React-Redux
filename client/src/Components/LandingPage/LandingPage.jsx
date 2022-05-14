import React from 'react'
import "./LandingPage.css";
import SimpleImageSlider from "react-simple-image-slider";

export default function LandingPage() {

    const images = [
        { url: "https://n.nordstrommedia.com/id/841a102d-0c7b-4620-a254-12c0c426c10c.jpeg?h=720&w=1608" },
        { url: "https://n.nordstrommedia.com/id/90f377d5-877c-4a24-b2a7-0fcfa84fcc6c.jpeg?h=720&w=1608" },
        { url: "https://n.nordstrommedia.com/id/d585341b-2a08-4f31-9043-743723c8ae56.jpeg?h=720&w=1608" },
          
    ];

  return (
    <div className='SlideShow'>
         <div>
      <SimpleImageSlider
        width={"100%"}
        height={504}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
      />
    </div>
      
    </div>
  )
}