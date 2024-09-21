import "./footer.css";

const Footer = () => {
  return (
    <div className='container-footer'>
        <div className='content footer'>
            <ul className='container-ul'>
                <li className='container-li'><p>Dirección</p></li>
                <li className='container-li'>Ciudad</li>
                <li className='container-li'>Derechos Reservados</li>
            </ul>
        </div>
    </div>
  );
};

export default Footer;