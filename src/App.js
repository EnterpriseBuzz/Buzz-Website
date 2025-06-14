import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import MainLayout from "./components/layouts/MainLayout";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Why from "./pages/Why";
import SMMarketing from "./pages/services/SMMarketing";
import SEOMarketing from "./pages/services/SEOMarketing";
import Web from "./pages/services/Web";
import Branding from "./pages/services/Branding";
import EmailMarketing from "./pages/services/EmailMarketing";
import LogoDesign from "./pages/services/LogoDesign";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="font-inter">
      {/* <TawkMessengerReact
        propertyId="653384a2f2439e1631e6acd6"
        widgetId="1hd8js7fu"
      /> */}
      <Router>
        <Routes>
          {/* Not Found */}
          <Route path="*" element={<NotFoundPage />} />
          
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="why-us" element={<Why />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            {/* SERVICES +++++++++++++++++++++++++++++++++ */}
            <Route path="social-media-marketing" element={<SMMarketing />} />
            <Route path="seo-marketing" element={<SEOMarketing />} />
            <Route path="web" element={<Web />} />
            <Route path="branding" element={<Branding />} />
            <Route path="email-marketing" element={<EmailMarketing />} />
            <Route path="logo-design" element={<LogoDesign />} />
          </Route>

          {/* SERVICES +++++++++++++++++++++++++++++++++ */}
          <Route path="services" element={<MainLayout />}>
            <Route path="social-media-marketing" element={<SMMarketing />} />
            <Route path="seo-marketing" element={<SEOMarketing />} />
            <Route path="web" element={<Web />} />
            <Route path="branding" element={<Branding />} />
            <Route path="email-marketing" element={<EmailMarketing />} />
            <Route path="logo-design" element={<LogoDesign />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
