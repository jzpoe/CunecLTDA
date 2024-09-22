import Main from "../main/Main";
import "./body.css";

const Body = () => {
  return (
    <>
      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/aMUyKC2zWtU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container-card">
        <div className="content-card">
          <div className="card">
            <h1>Misión</h1>
            <p>
              En Cunec LTDA, nuestra misión es proporcionar asesoramiento
              estratégico y capacitaciones de alta calidad para empresas,
              apoyándolas en el desarrollo y optimización de sus procesos
              administrativos. A través de la inducción, reinducción y programas
              de mejora continua, trabajamos para asegurar que cada organización
              cuente con un equipo capacitado y alineado con sus objetivos. Nos
              enfocamos en ofrecer un servicio personalizado, destacándonos por
              nuestra amabilidad y compromiso con las necesidades de cada
              cliente, buscando siempre la excelencia en cada proyecto.
            </p>
            <div className="container-img">
              <img
                src="imgBody/_ad1831f7-712d-4fd1-9588-86181bed82ab.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card">
            <h1>Visión</h1>
            <p>
              Nuestra visión en Cunec LTDA es ser reconocidos como una empresa
              líder en asesoramiento empresarial a nivel nacional, destacada por
              transformar los procesos gerenciales y administrativos de las
              organizaciones a través de soluciones innovadoras y efectivas.
              Aspiramos a convertirnos en el aliado estratégico preferido de las
              empresas, impulsando su éxito y crecimiento sostenido, y siendo un
              referente en la creación de valor para nuestros clientes mediante
              una atención cercana, profesional y confiable.
            </p>
            <div className="container-img">
              <img
                src="imgBody/_c8793dd3-cd37-4c76-bbc7-5babb8b3c3eb.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Main />
      </div>
    </>
  );
};

export default Body;
