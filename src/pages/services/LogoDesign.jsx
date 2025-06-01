import React, { useEffect } from "react";

function LogoDesign() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return <div>LogoDesign</div>;
}

export default LogoDesign;
