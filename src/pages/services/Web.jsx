import React, { useEffect } from "react";

function Web() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return <div>Web</div>;
}

export default Web;
