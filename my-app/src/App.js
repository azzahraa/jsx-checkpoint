import React from 'react';
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

import './style.css';

function App() {
  return ( 

    <>
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
    <br/> 
    <h1 className="title red">BRUCE BANNER</h1>  
    <img src='/imageInPublic.jpg'/>
    <br/>
    <img src={require('./img/imageInSrc.jpg')} alt="hulkred" />
    </div>
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </>
  );
}

export default App;
