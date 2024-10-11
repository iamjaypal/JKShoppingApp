import React from 'react'
import '../Styles/home.css'
import Popular from './Popular'
import Offer from './Offer'
function Home() {
  return (
    <>
     <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVELS ONLY</h2>
          <div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-button">
             <div>latest collections</div>
          </div>
        </div>
        <div className="hero-right">
          <img src="https://github.com/iamjaypal/image-data-project/raw/master/images/hero_image.png" alt="" />
        </div>
     </div>
     <Popular/>
     <Offer/>
    </>
  )
}

export default Home
