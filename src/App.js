import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';

import { Order } from './Pages/Order';
import { AllRoutes } from './Pages/AllRoutes';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <AllRoutes/>
      
      <Footer />
      
     
      {/* <Order/> */}
    </div>
  );
}

export default App;
