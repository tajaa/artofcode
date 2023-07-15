import { NavBar } from './components/NavBar';
import { ThemeProvider } from 'styled-components';
import { FONTS, COLORS } from "./theme"
import { WebsiteLogo } from './components/WebsiteLogo';
import { HomePage } from './pages/homepage';


function App() {
  return ( 
    <div className="App">
      <ThemeProvider theme={{ colors: COLORS, fonts: FONTS }}> 
        <WebsiteLogo/>
        <NavBar/>
       <HomePage/>
      </ThemeProvider>
    
    </div>
  );
}

export default App;
