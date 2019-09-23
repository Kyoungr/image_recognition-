import React, { Component } from 'react';
import Navigation from './components/navigation/navigation'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';


import './App.css';

const particlsOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800
       }
     }
    }
  }

class App extends Component {
  render(){
  return (
    <div className="App">
      <Particles className="particles" 
        params={{particlsOptions}} 
        />
    <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm />
      {/*<FaceRecognition />
      */}
      </div>
    );
  }
}


export default App;
