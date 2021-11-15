import React from "react";
import About from "./components/About";
import Feature from "./components/Feature";
import Header from "./components/Header";
import aboutimage from './images/Frame 19.png'
import aboutimage1 from './images/download.png'
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes With All You Need For Daily Life' button='Get The App'/>
      <Presentation/>
      <About image={aboutimage1} title='Download And Get The APP Now' button='Download'/>
      <Contact/>

    </div>
  );
}

export default App;
