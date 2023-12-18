import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const App = (props) => {
  const [data, setData] = useState("No result");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        textAlign: "center",
        flexDirection:'column'
      }}
    >
      <h3>QR Code Scanner Demo</h3>
      <div style={{ padding: "20px", width: "40%", height: "40%" }}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }
            if (!!error) {
              console.info(error);
            }
          }}
        />
        <p>{data}</p>
      </div>
    </div>
  );
};
export default App;
