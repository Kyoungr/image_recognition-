import React, { Component } from 'react';
import Navigation from './components/navigation/navigation'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin'
import Register from "./components/Register/register"
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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) =>{
   const clarifyFace = data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('inputImage');
   const width = Number(image.width);
   const height = Number(image.height);

   return{
     leftCol: clarifyFace.left_col * width,
     topRow: clarifyFace.top_row * height,
     rightCol: width - (clarifyFace.right_col * width),
     bottomRow: height - (clarifyFace.bottom_row * height)
    }
    
  }

  displayBox = (box) => {
    console.log({box});
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict( 
    Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => 
      this.displayBox(this.calculateFaceLocation(response))).catch(err => console.log(err));
    }

    onRouteChange = (route) => {
      if (route === "signout"){
        this.setState({isSignedIn: false})
      }else if (route === 'home'){
        this.setState({isSignedIn: true})
      }
      this.setState({route: route});
    }

  render(){
    const {isSignedIn, imageUrl, route, box } = this.state;
  return (
    <div className="App">
      <Particles className="particles" 
        params={{particlsOptions}} 
        />
    <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
     {route === 'home' 
     ? 
     <div>
       <Logo />
       <Rank />
       <ImageLinkForm 
     onInputChange={this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit} 
     />
     <FaceRecognition box={box} imageUrl={imageUrl}/>
     </div>
     : (
       this.state.route === 'signin'
       ? <Signin onRouteChange={this.onRouteChange} /> 
       : <Register onRouteChange={this.onRouteChange} />
     )
     }
     </div>
    );
  }
}


export default App;
