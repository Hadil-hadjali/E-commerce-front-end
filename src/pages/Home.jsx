import React from 'react'
import Slider from '../Slider/Slider';
import FeatureCards from '../Slider/FeatureCards';
import ParallaxSection from '../Slider/ParallaxStyles';
import Testimonials from '../Slider/Testimonials';
import './Home.css';



const Home = () => {
 
  return (
    <div> 
  <Slider/>
  <FeatureCards/>
  <div className="container">
  <h1>MEILLEURES VENTES </h1>
  <div className='img-products'>
   <img className="img2" src="images\decor for accessory (12).PNG" alt="img1"/>
<img className="img3" src="images\Home Décor (14).PNG" alt="img1"/>
  <img className="img4" src="images\Home Décor (6).PNG" alt="img4"/> <br/>
  <img className="img5" src="images\mugs (3).PNG" alt="img5"/>
  <img className="img7" src="images\Home Décor (5).PNG" alt="img7"/>
</div>
</div>


  <ParallaxSection/>
  <Testimonials/>
    

    
   
    </div>
  )
}

export default Home
