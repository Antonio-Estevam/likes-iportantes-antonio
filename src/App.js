import './styles/styleApp.scss';

import logo from './assets/logo.jpg';
import gitLogo from './assets/github.svg';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import whatsapp from './assets/whatsapp.svg';

import {Button} from './componets/Button';


function App() {
  
  function toLink(link){
    window.location.href = link; 
  }
  
  return (
    <div className="conteiner">
      <main>
        <header>
          <div className="perfil-img">
            <img src={logo} alt="Antonio Estevam" />
          </div>

          <h1>Antonio Estevam </h1>
          <h2>@antoniowebdev</h2>
        </header>

        <section>

          <Button 
            onClick={()=>{toLink('https://github.com/Antonio-Estevam')}}
            type='button'
          > 
            <img src={gitLogo} alt="GitHub"/>
            GitHub
          </Button > 

          <Button 
            onClick={()=>{toLink('https://www.linkedin.com/in/antonio-e-filho/')}}
            type='button'
          > 
            <img src={linkedin} alt="Linkedin"/>
            Linkedin
          </Button > 

          <Button 
            onClick={()=>{toLink('https://www.instagram.com/antoniowebdev/')}}
            type='button'
          > 
            <img src={instagram} alt="Instagram"/>
            Instagram
          </Button > 

          <Button 
            onClick={()=>{toLink('#')}}
            type='button'
          > 
            <img src={whatsapp} alt="Whatsapp"/>
            Whatsapp
          </Button > 

        </section>
            
      </main>
    </div>
  );
}

export default App;
