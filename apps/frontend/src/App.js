import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [pod, setPod] = useState("");

  useEffect(() => {
    const indexUrl = "http://k8s.mikemiller.tech/api"
    const fetchData0 = async () => {
      try {
        const response = await fetch(indexUrl);
        const text = await response.text();
        console.log(text);
        setTitle(text);
      } catch (error) {
        console.log("error", error);
      }
    };
    const podUrl = "http://k8s.mikemiller.tech/api/pod_name"
    const fetchData1 = async () => {
      try {
        const response = await fetch(podUrl);
        const text = await response.text();
        console.log(text);
        setPod(text);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData0();
    fetchData1();

  }, []);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Backend default message - {title}
        </p>
        <p>
          Current {pod}
        </p>
      </header>
    </div>
  );
}


export default App;
