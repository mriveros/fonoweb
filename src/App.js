import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Prices from './components/Prices/Prices';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';
import Who from './components/Who/Who';
import Works from './components/Works/Works';

function App() {
  return (
    <>
      <Welcome />
      <About />
      <Who />
      <Services />
      <Prices />
      <Feedback />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
