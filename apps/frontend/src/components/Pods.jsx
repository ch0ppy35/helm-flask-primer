import React, { useEffect, useState } from "react";

function Pods() {
  const host = "http://" + window.location.hostname + "/api";
  // const host = "http://k8s.mikemiller.tech/api"
  // const host = "http://127.0.0.1:5000"
  const [indexMessage, setindexMessage] = useState("");
  const [message, setMessage] = useState("");
  const [pod, setPod] = useState("");

  useEffect(() => {
    const indexUrl = host + "/";
    const fetchData0 = async () => {
      try {
        const response = await fetch(indexUrl);
        const json = await response.json();
        console.log(json);
        setindexMessage(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    const podUrl = host + "/pod_name";
    const fetchData1 = async () => {
      try {
        const response = await fetch(podUrl);
        const json = await response.json();
        console.log(json);
        setPod(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    const messageUrl = host + "/message";
    const fetchData2 = async () => {
      try {
        const response = await fetch(messageUrl);
        const json = await response.json();
        console.log(json);
        setMessage(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData0();
    fetchData1();
    fetchData2();

  }, []);

  return (
    <div className="about py-5 bg-dark text-white">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <p>
              To the left, you'll see three pieces of data, that
              are coming from the Flask API
            </p>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Pods</h1>
            <p>Default API index message (/): {indexMessage.message}</p>
            <p>API is running in: {pod.podName}</p>
            <p>My message: {message.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pods;
