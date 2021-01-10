import Header from './Header';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop/Shop';
import Donation from './Components/Donation';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import CovidAlert from './Components/CovidAlert';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Shop' component={Shop} />
        <Route path='/Donation' component={Donation} />
        <Route path='/Contact' component={Contact} />
        <Route path='/CovidAlert' component={CovidAlert} />
      </BrowserRouter>

    </>
  );
}

export default App;
