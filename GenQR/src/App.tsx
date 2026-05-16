import { useState } from 'react';
// @ts-ignore: no declaration file for 'qrcode'
const QRCode = require('qrcode');

function App() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = () => {
    QRCode.toDataURL(url, (err: Error | null, dataUrl: string) => {
      if (err) return console.error(err);
      setQrCode(dataUrl);
    });
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text to generate QR code"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="button" onClick={generateQRCode}>
        Generate QR Code
      </button>
      {qrCode && <>
        <img src={qrCode}/>
        <a href={qrCode} download="qrcode.png">
          Download QR Code
        </a>
      </>}
    </div>
  );
}

export default App;
