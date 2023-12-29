import { Routes,Route } from 'react-router-dom'
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/shop' element={<Shop/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
