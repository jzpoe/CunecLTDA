import "./footer.css";

const Footer = () => {
  return (
    <div className='container-footer'>
        <div className='content footer'>
            <ul className='container-ulista'>
                <li className='container-lista'><p>Dirección: calle 17 con carrera 4ta</p></li>
                <li className='container-lista'>Ciudad: Bogotá</li>
                <li className='container-lista'>&copy; 2024 Cunec LTDA. Todos los derechos reservados.</li>
            </ul>
        </div>
    </div>
  );
};

export default Footer;