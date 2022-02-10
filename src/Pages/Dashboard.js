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


function Dashboard() {
  return (
    <Router>
        
    <Bottom />
    <Footer />

    </Router>
  );
}

export default Dashboard;
