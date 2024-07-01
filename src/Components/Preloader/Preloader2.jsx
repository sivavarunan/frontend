import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import * as location from "./earth.json";
import * as success from "./success.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function PreLoader2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setLoading(true);

          setTimeout(() => {
            setCompleted(true);
          }, 1000);
        });
    }, 1000);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      {!completed ? (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1} height={200} width={200} />
          ) : (
            <Lottie options={defaultOptions2} height={100} width={100} />
          )}
        </>
      ) : (
        <>
          <h1>Your Data</h1>
          <br />
          <h6 style={{ position: "absolute", right: "5rem", bottom: "0" }}>
            <a
              style={{ color: "white" }}
              href="https://lottiefiles.com/ijum4kzkmt"
            >
              Earth Animation by Hanina Kahfi on LottieFiles
            </a>
            <br />
            <a style={{ color: "white" }} href="https://lottiefiles.com/darius">
              Success Animation by Chris Gannon on LottieFiles
            </a>
          </h6>
        </>
      )}
    </div>
  );
}

export default PreLoader2;
