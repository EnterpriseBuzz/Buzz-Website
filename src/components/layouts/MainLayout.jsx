import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import PaymentOptions from "./PaymentOptions";

export default function MainLayout() {
  const location = useLocation();
  const MEASUREMENT_ID = "G-71LW17H5QC"; // Replace with your actual GA4 Measurement ID

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, MEASUREMENT_ID]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
