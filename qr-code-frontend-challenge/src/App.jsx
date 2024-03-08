import qrCode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="disp">
          <img src={qrCode} alt="QR-Code" />
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <div className="attribution">
        Challenged by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          href="http://twitter.com/akon1703"
          target="_blank"
          rel="noopener noreferrer"
        >
          AKONKWA USHINDI Isaac
        </a>
      </div>
    </>
  );
}

export default App;
