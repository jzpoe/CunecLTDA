
import './App.css'
import Asesoramiento from './components/body/asesoramiento/Asesoramiento';
import Body from './components/body/body/Body';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Infografia from './components/infografia/Infografia';
import Navbar from './components/navbar/Navbar';


function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/'element={<Body/>}/>
      <Route path='/asesoramiento'element={<Asesoramiento/>}/>
      <Route path='/infografia' element={<Infografia/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
