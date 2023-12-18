# React QR Code Scanner Demo

A React component for reading QR codes from the webcam. It uses the WebRTC standards for reading webcam data and jsQR is used for detecting QR codes in that data.

![demo](demos/qr-code-scanner-demo.gif)

### Installation

```
npm i react-qr-reader
```

### Sample code

```
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  );
};
```

For more: https://github.com/JodusNodus/react-qr-reader