import './App.css';
import Home from './Pages/Home';
import Navbar from './Componets/navbar';
import Bottom from './Componets/Bottom';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import Footer from './Componets/Footer';
import About from './Pages/About';
import Signin from './Pages/Signin';
import Contact from './Pages/Contact';
import Register from './Pages/register';
import Dashboard from './Pages/Dashboard';
import FasionD from './Componets/fasionD';
import EventsD from './Componets/eventsD';
import CorporateD from './Componets/corporateD';
import WeddingD from './Componets/weddingD';
import PotraitD from './Componets/potraitD';
import CommerciaD from './Componets/comerciaD';
import Admin from './Pages/Admin';

function App() {
  return (
    <div>
    <Router> 
    <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/signin"  element={<Signin />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/dashboard"  element={<Dashboard />} />
          <Route path='/dashboard/fasion' element={<FasionD />} />
          <Route path='/dashboard/events' element={<EventsD />} />
          <Route path='/dashboard/corporate' element={<CorporateD />} />
          <Route path='/dashboard/wedding' element={<WeddingD />} />
          <Route path='/dashboard/potrait' element={<PotraitD />} />
          <Route path='/dashboard/commercia' element={<CommerciaD />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>  
         
    <Bottom />
    <Footer />

    </Router>
      
    </div>
   
  );
}

export default App;
