import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src={process.env.PUBLIC_URL + '/videos/comores.mp4'}
        autoPlay
        loop
        muted
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>LES COMORES,</h1>
      <br />
      <h1> nouvelle destination touristique</h1>
      <p>
        Les Iles des Comores sont parmi les iles qui ont les zones touristiques
        les plus attirantes au monde...
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          KARIBOU
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
