import React from "react";

function Home() {
  return (
    <div className="home py-5 bg-dark text-white">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/logo512.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              This is a basic React app, to test and play around with
              Kubernetes. Check out About
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
