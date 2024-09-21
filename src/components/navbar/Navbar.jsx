import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa"; // Importa el ícono de hamburguesa

import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  
   
};
  
  

const closeMenu =()=>{
  setIsOpen(false)
}


  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) { // Cambia el número según necesites
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  return (
    <nav className= {`container-navbar ${isScrolled ? 'scrolled' : '' }`} >
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars size={24} color="white" /> {/* Ícono de hamburguesa */}
      </div>
      
      <ul className={` container-ul ${isOpen ? "active" : ""}`}>
        <Link to={"/"} className="container-li" onClick={closeMenu}>
          CUNEC
        </Link>
        {/* <Link to={"/quienessomos"} className="container-li">Quienes somos</Link> */}
        <Link to={"/asesoramiento"} className="container-li" onClick={closeMenu}>
          ASESORAMIENTO
        </Link>
        
        <Link to={"/infografia"} className="container-li" onClick={closeMenu}  >INFOGRAFIA</Link>
      </ul>
    </nav>
  );
};


