import React, { useEffect, useState } from "react";

function About() {
  const [title, setTitle] = useState("");
  const [pod, setPod] = useState("");

  useEffect(() => {
    const indexUrl = "http://k8s.mikemiller.tech/api/";
    const fetchData0 = async () => {
      try {
        const response = await fetch(indexUrl);
        const text = await response.json();
        console.log(text);
        setTitle(text);
      } catch (error) {
        console.log("error", error);
      }
    };
    const podUrl = "http://k8s.mikemiller.tech/api/pod_name";
    const fetchData1 = async () => {
      try {
        const response = await fetch(podUrl);
        const text = await response.json();
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
    <div className="about py-5 bg-dark text-white">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <p>
              To the left, you'll see two pieces of information. Both pieces of
              information are coming from the Flask backend
            </p>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>API index message: {title}</p>
            <p>API is running in: {pod}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
