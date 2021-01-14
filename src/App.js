import Header from './Components/Header/Header';
import './App.css';
import Home from '../src/Components/Home/Home';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Donation from './Components/Donation';
import Contact from './Components/Contact/Contact';
import CovidAlert from './Components/CovidAlert/CovidAlert';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';

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
        <Route path='/productdetail/:pId' component={ProductDetail} />
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
