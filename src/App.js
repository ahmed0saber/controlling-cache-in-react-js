import React from 'react';
import { useState, useEffect } from "react"
import './App.css';

function App() {
  const [version, setVersion] = useState(1);
  const [started, setStarted] = useState(true);

  const getData = () => {
    const url = "https://ahmed0saber.github.io/controlling-cache-in-react-js/updates.json"
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(version != data.version){
        console.log("Cache Cleared")
        window.location.reload(true)
      }
    })
  }
  
  useEffect(() => {
    if(started){
      getData()
      setStarted(false)
    }
  },[])

  return (
    <main>
      <h1>This app version is {version}</h1>
    </main>
  );
}

export default App;
