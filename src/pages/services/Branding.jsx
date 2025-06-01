import React, { useEffect } from "react";

function Branding() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return <div>Branding</div>;
}

export default Branding;
