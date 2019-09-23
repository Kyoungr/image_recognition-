import React, { Component } from 'react';
import Navigation from './components/navigation/navigation'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: "991498937e1545cc87f7ff20ede7d8cb"
});

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
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
  app.models.predict( 
    Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(function(response) {
    console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      console.log(err);
  }
  );
  }


  render(){
  return (
    <div className="App">
      <Particles className="particles" 
        params={{particlsOptions}} 
        />
    <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm 
     onInputChange={this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit} />

      <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}


export default App;
