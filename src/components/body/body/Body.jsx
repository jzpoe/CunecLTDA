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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eaque.</p>
            <div className="container-img">
              <img src="imgBody/_ad1831f7-712d-4fd1-9588-86181bed82ab.jpeg" alt="" />
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card">
            <h1>Visión</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eaque.</p>
            <div className="container-img">
              <img src="imgBody/_c8793dd3-cd37-4c76-bbc7-5babb8b3c3eb.jpeg" alt="" />
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