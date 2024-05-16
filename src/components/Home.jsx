import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";


const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechNova</h1>
            <p>Solution to all your problem</p>
        </main>
    </div>

    <div className="home2">
      <img src={vg} alt="Graphics" />

      <div>
        <p>
        Ignite Your Imagination. Unleashing the future of tech brilliance in one pulsating hub. Experience the next wave, where innovation meets intensity, only at TechNova.
        </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit incidunt quos nulla ut cum similique veniam, doloribus adipisci unde ex provident fuga molestias sed voluptatem maiores odit sapiente numquam esse dolorem suscipit blanditiis voluptatum officia? Omnis sint quibusdam nulla. Quaerat suscipit iusto dolores dolorum, dignissimos amet! Sint, molestiae ducimus.
        </p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube />
            <p>Youtube</p>
          </div>

          <div style={{animationDelay:"1s"}}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home