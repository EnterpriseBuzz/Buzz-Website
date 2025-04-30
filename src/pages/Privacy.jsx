import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [activeSection, setActiveSection] = useState("introduction");
  const sectionRefs = {
    introduction: useRef(null),
    scope: useRef(null),
    role: useRef(null),
    collect: useRef(null),
    services: useRef(null),
    sharing: useRef(null),
    legal: useRef(null),
    rights: useRef(null),
    individuals: useRef(null),
    preferences: useRef(null),
    cookies: useRef(null),
    security: useRef(null),
    retention: useRef(null),
    transfers: useRef(null),
    updates: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionRefs[sectionId]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section in sectionRefs) {
        const element = sectionRefs[section].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <SEO
        title="Privacy Policies"
        description="EnterpriseBuzz AI is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriseBuzz AI"
        type="description"
      />
      <img src="../privacyHero.svg" alt="check" className="hidden lg:block" />
      <img src="../mprivacyHero.svg" alt="check" className="lg:hidden w-full" />

      <div className="flex flex-col md:flex-row lg:px-20 mx-auto px-4 py-8">
        {/* Sidebar Navigation */}
        <div className="pr-6 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-6">Information</h2>

          <nav className="flex flex-row lg:flex-col rtl:flex-row-reverse gap-x-2 space-y-3 w-[95vw] lg:w-full  overflow-x-auto scrollbar-hide inset-x-0">
            <button
              onClick={() => scrollToSection("introduction")}
              className={`flex-shrink-0 text-left py-2 w-[7rem] px-4 rounded-full text-sm ${
                activeSection === "introduction"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Introduction
            </button>
            <button
              onClick={() => scrollToSection("scope")}
              className={`flex-shrink-0 text-left py-2 w-[10rem] px-4 rounded-full text-sm ${
                activeSection === "scope"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Scope Of Coverage
            </button>
            <button
              onClick={() => scrollToSection("role")}
              className={`flex-shrink-0 text-left py-2 w-[6rem] px-4 rounded-full text-sm ${
                activeSection === "role"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Our Role
            </button>
            <button
              onClick={() => scrollToSection("collect")}
              className={`flex-shrink-0 text-left py-2 w-[12rem] px-4 rounded-full text-sm ${
                activeSection === "collect"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Information We Collect
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`flex-shrink-0 text-left py-2 w-[11rem] px-4 rounded-full text-sm ${
                activeSection === "services"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Third-Party Services
            </button>
            <button
              onClick={() => scrollToSection("sharing")}
              className={`flex-shrink-0 text-left py-2 w-[14rem] px-4 rounded-full text-sm ${
                activeSection === "sharing"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Data Sharing And Disclosure
            </button>
            <button
              onClick={() => scrollToSection("legal")}
              className={`flex-shrink-0 text-left py-2 w-[14rem] px-4 rounded-full text-sm ${
                activeSection === "legal"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Legal Bases For Processing
            </button>
            <button
              onClick={() => scrollToSection("rights")}
              className={`flex-shrink-0 text-left py-2 w-[13rem] px-4 rounded-full text-sm ${
                activeSection === "rights"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Your Rights And Choices
            </button>

            <button
              onClick={() => scrollToSection("preferences")}
              className={`flex-shrink-0 text-left py-2 w-[12rem] px-4 rounded-full text-sm ${
                activeSection === "preferences"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Marketing Preferences
            </button>
            <button
              onClick={() => scrollToSection("cookies")}
              className={`flex-shrink-0 text-left py-2 w-[17rem] px-4 rounded-full text-sm ${
                activeSection === "cookies"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Cookies And Tracking Technologies
            </button>
            <button
              onClick={() => scrollToSection("security")}
              className={`flex-shrink-0 text-left py-2 w-[9rem] px-4 rounded-full text-sm ${
                activeSection === "security"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Data Security
            </button>
            <button
              onClick={() => scrollToSection("retention")}
              className={`flex-shrink-0 text-left py-2 w-[9rem] px-4 rounded-full text-sm ${
                activeSection === "retention"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Data Retention
            </button>
            <button
              onClick={() => scrollToSection("transfers")}
              className={`flex-shrink-0 text-left py-2 w-[14rem] px-4 rounded-full text-sm ${
                activeSection === "transfers"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              International Data Transfers
            </button>
            <button
              onClick={() => scrollToSection("updates")}
              className={`flex-shrink-0 text-left py-2 w-[15rem] px-4 rounded-full text-sm ${
                activeSection === "updates"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Updates To This Privacy Policy
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`flex-shrink-0 text-left py-2 w-[9rem] px-4 rounded-full text-sm ${
                activeSection === "contact"
                  ? "bg-[#DA281C] text-white"
                  : "hover:bg-gray-100 bg-[#F9FAFA]"
              }`}
            >
              Contact Us
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="md:w-3/4 h-screen overflow-y-auto scrollbar-hide">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 text-sm lg:text-base">
              Last Updated: April 14, 2025
            </p>
            <button onClick={() => scrollToSection("contact")}>
              <img src="../buttons/Button.svg" className="w-[8rem]" alt="" />
            </button>
          </div>

          {/* Introduction Section */}
          <section
            ref={sectionRefs.introduction}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-700 mb-4">
              EnterpriseBuzz AI ("EnterpriseBuzz," "we," "us," or "our") is a
              B2B enterprise amplification and AI-driven marketing company. We
              are committed to protecting the privacy of individuals whose
              personal data we process. This Privacy Policy explains our data
              practices and how we collect, use, disclose, and protect personal
              information in the course of our business engagements with
              clients, partners, and affiliates.
            </p>
            <p className="text-gray-700 mb-4">
              We adhere to applicable privacy laws, including the EU General
              Data Protection Regulation (GDPR), the California Consumer Privacy
              Act (CCPA), and industry-specific regulations like CAN-SPAM for
              email communications. By using EnterpriseBuzz AI's websites or
              services, you acknowledge that you have read and understood this
              Privacy Policy. If you do not agree with our practices, please do
              not use our services.
            </p>
          </section>

          {/* Scope of Coverage Section */}
          <section
            ref={sectionRefs.scope}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Scope Of Coverage</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy applies to all personal data collected or
              processed by EnterpriseBuzz AI through our various digital
              platforms and services. It covers data gathered from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Websites and Apps: All websites we operate (including
                    enterprisebuzzai.com and subdomains) and any mobile or web
                    applications that link to this Policy.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Email Marketing and Communications: Our email marketing
                    campaigns, newsletters, and other electronic communications.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    CRM Systems and Analytics Dashboards: Our customer
                    relationship management (CRM) tools, client portals, AI
                    marketing platforms, and analytics dashboards used for
                    campaign management and reporting.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Other Services: Any other digital services, integrations, or
                    tools provided by EnterpriseBuzz AI in connection with our
                    marketing and amplification solutions.
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              This Policy encompasses information relating to our business
              clients, their authorized users, and any end users whose data we
              process on behalf of clients in the context of marketing
              campaigns. It is business-to-business (B2B) oriented and intended
              for clients, partners, and affiliates of EnterpriseBuzz AI, rather
              than individual consumers. Please note that our services are not
              directed to children or minors, and we do not knowingly collect
              personal data from individuals under the age of 16 (or applicable
              age of digital consent in your jurisdiction).
            </p>
          </section>

          {/* our role */}
          <section
            ref={sectionRefs.role}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Our Role</h2>
            <p className="text-gray-700 mb-4">
              EnterpriseBuzz AI may act either as a data controller or a data
              processor/service provider depending on the context of the data
              processing:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    EnterpriseBuzz AI as a Controller: We are the data
                    controller when we collect personal data for our own
                    purposes – for example, when you visit our website, fill out
                    a form, sign up for our newsletter, or engage with us as a
                    client or partner. In these cases, we determine the purposes
                    and means of processing your personal data (such as to
                    provide our services to you, to communicate about our
                    offerings, or to improve our platform).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    EnterpriseBuzz AI as a Processor/Service Provider: We act as
                    a data processor (or “service provider” under laws like
                    CCPA) when we process personal data on behalf of our clients
                    as part of our AI-driven marketing services. For instance,
                    clients may upload or integrate their contact lists or CRM
                    data into our platform for us to run marketing automation
                    campaigns. In such cases, our client is the data controller
                    and retains responsibility for the data; we will process
                    that data only under the client’s instructions and our
                    contractual agreement. We require our clients to ensure they
                    have an appropriate legal basis (e.g. consent or other
                    authorization) for any personal data they ask us to process
                    on their behalf. We do not use client-provided personal data
                    for our own purposes, except as necessary to provide the
                    services or as permitted by law or the client contract.
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              In summary, when you interact directly with EnterpriseBuzz AI
              (e.g., as a website visitor or client contact), we are likely the
              controller of your data. When we handle data that our client has
              entrusted to us for marketing campaigns, we are acting as a
              processor of that data. If you have questions about data we
              process for a client, we may refer you to the relevant client
              (controller) for further assistance.
            </p>
          </section>

          {/* Information We Collect */}
          <section
            ref={sectionRefs.collect}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect various types of information in the course of operating
              our websites and providing our services. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Personal and Business Contact Data: Identifiers such as
                    name, business email address, telephone number, job title,
                    company/organization name, postal address, and other contact
                    details. For example, if you fill out a contact form or
                    register for an EnterpriseBuzz AI service, we will collect
                    your name and contact information.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Account Credentials and Profile Information: If you create
                    an account on our platform or dashboard, we collect login
                    credentials (such as username and password, stored in
                    encrypted form) and any profile information you provide
                    (like your photo, bio, preferences, or communication
                    settings).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Client CRM Data: Information our clients provide to us about
                    their customers, leads, or marketing contacts. This can
                    include lists of contact details, demographic information,
                    business profile data, and any notes or tags from the
                    client’s CRM system. For example, a client may upload a list
                    of prospective business leads (names, work emails, company,
                    job role) into our platform for an email campaign. We
                    receive and store such data to perform services as a
                    processor on behalf of the client.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Marketing Engagement Data: Data relating to an individual’s
                    engagement with marketing content. This includes records of
                    email interactions (e.g. open rates, email bounce status,
                    link clicks, unsubscribe actions), responses to marketing
                    campaigns, event attendance, survey or form responses, and
                    social media or ad engagement metrics. For instance, we may
                    track that a particular email recipient opened an email
                    newsletter and clicked on a link, or that a user interacted
                    with one of our social media ads. This helps us measure
                    campaign performance and tailor follow-up actions.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Usage and Analytics Data: Information collected
                    automatically about how our websites and services are
                    accessed and used (“behavioral data”). This includes:
                    <ul className="list-outside list-disc px-5">
                      <li>
                        Device and Technical Data: IP address, browser type and
                        version, device identifiers, operating system, network
                        provider, and device type (desktop, mobile, tablet,
                        etc.).
                      </li>
                      <li>
                        Log and Interaction Data: Details of how you navigate
                        and interact with our websites or apps, such as the
                        pages or screens you viewed, the features you used, the
                        links you clicked, the time spent on pages, the
                        date/time of your visits, and the referring page or URL
                        that led you to our site. We also gather diagnostic and
                        performance data (e.g., errors, load times).
                      </li>
                      <li>
                        Cookies and Tracking Technologies Data: We (and
                        authorized third parties) use cookies, pixels, and
                        similar technologies to collect data about your device
                        and browsing actions. This may include cookie
                        identifiers, advertising IDs, and information about your
                        interactions with ads or email (such as whether an email
                        was opened). See the Cookies and Tracking Technologies
                        section below for more detail.
                      </li>
                    </ul>
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Third-Party Source Data: We may receive personal data about
                    you from third-party sources. For example, we might obtain
                    updated contact information or leads from marketing
                    partners, referrals from affiliates, or public profile
                    information from professional networking sites (such as
                    LinkedIn) in a B2B context. We may also collect information
                    about prospective client companies and contacts from
                    publicly available sources or data vendors to the extent
                    allowed by law. If we combine or use such data with personal
                    data we have collected, we will treat the combined
                    information in accordance with this Policy.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Communications and Support Data: If you correspond with us
                    directly (via email, phone, chat, or through social media),
                    we will collect the content of your communications along
                    with your contact details and our responses. For example, if
                    you send us an inquiry or a support request, we keep a
                    record of that correspondence and any information you
                    provide (such as your questions or feedback). Call
                    recordings or transcriptions may be retained if you
                    participate in a customer support call, for quality
                    assurance and training purposes (we will notify you where
                    required by law before recording calls).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Transactional and Financial Data: If you are a client,
                    partner, or vendor, and there are financial transactions
                    (such as payments for our services), we may collect billing
                    details. This can include invoicing information, payment
                    method details (credit card number or bank account
                    information, handled via secure payment processors), and
                    transaction history. Note: We typically rely on third-party
                    payment processors (e.g., Stripe) to handle sensitive
                    financial information, so we generally do not store full
                    credit card numbers ourselves. Any payment data collected
                    will be used only for payment processing and record-keeping.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Sensitive Personal Data: We do not intentionally collect any
                    sensitive personal data or special categories of data as
                    defined under GDPR (such as race, ethnicity, health
                    information, biometric data, political opinions, etc.) or
                    sensitive personal information as defined under laws like
                    CPRA (e.g., social security numbers, driver’s license
                    numbers, precise geolocation, etc.) in the ordinary course
                    of our marketing services. We ask that you do not provide us
                    with such information. If it becomes necessary to process
                    any sensitive data, we will do so in accordance with
                    applicable law and with appropriate safeguards.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Children’s Data: EnterpriseBuzz AI’s services and websites
                    are intended for business use by adults. We do not target or
                    knowingly collect personal information from children under
                    13 (or under 16 in certain jurisdictions). If we become
                    aware that we have inadvertently collected personal data
                    from a child, we will promptly delete such information.
                  </span>
                </span>
              </li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section
            ref={sectionRefs.services}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">
              Third-Party Services and Integrations
            </h2>
            <p className="text-gray-700 mb-4">
              EnterpriseBuzz AI utilizes a number of third-party services and
              integration tools to enhance our marketing capabilities and
              understand user interactions. These third-party providers may
              collect or receive certain data about you in the course of your
              use of our sites and services, as described below. We carefully
              select and contract with these providers to ensure they uphold
              privacy standards, and where required, we obtain your consent for
              their data collection (for example, via cookie consent banners).
              The key third-party analytics and marketing tools we use include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Google Analytics: We use Google Analytics, a web analytics
                    service provided by Google, to understand how visitors use
                    our website. Google Analytics uses cookies and similar
                    technologies to track website traffic and usage data. It
                    collects information such as your IP address, browser type,
                    pages visited, and time spent on our site, and compiles
                    reports for us on website activity. Google may also use the
                    data collected from our site for its own purposes, such as
                    improving Google services, benchmarking, and providing
                    targeted advertising (Google can associate the information
                    collected with your Google account if you are logged in). We
                    have enabled IP anonymization in Google Analytics where
                    required, to truncate IP addresses for visitors from the EU.
                    You can opt out of Google Analytics tracking by installing
                    the Google Analytics Opt-out Browser Add-on, or by adjusting
                    your cookie preferences as described in the Cookies section.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Google Ads (Ads Conversion & Remarketing): We use Google Ads
                    and associated tools (such as Google Ads conversion tracking
                    and Google Remarketing pixels) to measure the effectiveness
                    of our Google advertising campaigns and to reach audiences
                    that have visited our site. If you click on a Google ad
                    leading to our site, Google Ads sets a cookie on your device
                    that allows us to see if you perform certain actions (like
                    filling a form) – this helps us track ad conversions. We
                    also use Google’s remarketing features, which place a cookie
                    or pixel on our site to identify you as a past visitor so
                    that we (or our clients) can show you targeted ads on other
                    websites within Google’s ad network. For example, after you
                    visit our site, you might later see an EnterpriseBuzz AI ad
                    on a different website as part of Google’s remarketing
                    program. These technologies use cookies to serve ads based
                    on your past visits to our site. You can control ad
                    personalization through Google’s Ad Settings or opt out of
                    interest-based ads via resources like the Network
                    Advertising Initiative opt-out page.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Google Tag Manager: We use Google Tag Manager to manage
                    various scripts and tags on our website in a streamlined
                    way. Tag Manager does not collect personal information
                    itself; it is a tool that loads other analytics or marketing
                    tags which may collect data (such as Google Analytics, the
                    Meta Pixel, etc.). It helps us add and update tracking code
                    on our site efficiently. Any data collected through Tag
                    Manager’s deployed tags are governed by the respective
                    third-party tool’s policies.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Google Search Console: Our website is connected to Google
                    Search Console, a service that provides insights into our
                    site’s performance in Google Search. Search Console gives us
                    aggregated data on search queries, indexing status, and
                    website errors. While it does not directly collect personal
                    data from site visitors, it may incidentally show us query
                    terms (which could include personal names or other data if a
                    user typed that into Google). We use this information purely
                    to improve our website’s SEO and fix technical issues. No
                    identifiable user profile is created from Search Console
                    data on our end.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Meta Pixel (Facebook Pixel): We utilize the Meta Pixel
                    (formerly known as the Facebook Pixel) on our website. This
                    is a piece of code provided by Meta (Facebook) that enables
                    us to track user actions on our site and later retarget or
                    remarket to those users on Facebook and Instagram. For
                    example, if you visit our site or a specific landing page,
                    the Meta Pixel may log that event (e.g., “PageView” or
                    “Lead”) and we can use that to show you relevant ads on
                    Facebook’s platforms. The Pixel collects information such as
                    your Facebook User ID (if you are logged in to Facebook),
                    device information, and browsing information on our site. It
                    helps us measure ad campaign effectiveness and reach users
                    who have shown interest in our services. In essence,
                    retargeting means personal data collected from you is used
                    to show targeted adverts based on your past interactions.
                    Meta may combine data collected via the Pixel on our site
                    with data it holds about you to improve its advertising
                    services. We disclose our use of the Meta Pixel in our
                    cookie notice, and obtain consent where required (for
                    example, for EU visitors). You can opt out of Meta Pixel
                    data collection by adjusting your Facebook ad preferences,
                    using browser extensions or blockers, or through our cookie
                    management tool. For further details on how Meta (Facebook)
                    processes data, please see Meta’s Data Policy.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    SEMrush: We use SEMrush (or similar SEO analytics tools) to
                    gather information about our website’s search engine
                    rankings, traffic, and competitor analysis. SEMrush may
                    collect data about our site’s visitors and keywords through
                    integrations with Google Analytics or other sources we
                    authorize. The data we access through SEMrush is typically
                    aggregated website usage and traffic metrics (for example,
                    overall monthly visit counts, popular pages, and keyword
                    search volume) rather than personal information of specific
                    visitors. If any personal data is involved, it would likely
                    be in the form of online identifiers or cookie data used for
                    analytics. We use the insights from SEMrush to improve our
                    site content and SEO strategy.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    HubSpot: EnterpriseBuzz AI leverages HubSpot as a CRM and
                    marketing automation platform. HubSpot Analytics is active
                    on our website and marketing emails to help us track user
                    interactions. HubSpot may set cookies on our site (such as
                    the hubspotutk cookie) that collect usage data like pages
                    viewed, time spent, and return visits, and it may tie this
                    information to an individual’s contact profile in our CRM if
                    the person has identified themselves (for example, by
                    filling out a form). HubSpot also helps us manage email
                    marketing – it tracks email delivery, opens, and clicks for
                    emails we send through their system. The data HubSpot
                    collects on our behalf is used to analyze website use,
                    understand our audience (including aggregated demographic
                    analysis), and personalize marketing efforts. For instance,
                    HubSpot might alert us that a known contact visited our
                    pricing page, which our sales team can use for follow-up.
                    HubSpot may also use the collected data for its own
                    improvement and advertising, in accordance with its privacy
                    policy, but the data from our account is not shared with
                    other HubSpot customers. You can learn more in HubSpot’s
                    Privacy Policy (linked in our site footer). We ensure that
                    our use of HubSpot is compliant with GDPR (including
                    enabling appropriate consent notices for HubSpot’s tracking
                    cookies as needed).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Other Analytics and Marketing Tools: We may use additional
                    tools from time to time to support our marketing operations.
                    For example, we might implement LinkedIn Insight Tag (an
                    analytics and conversion tracking tool for LinkedIn ads) to
                    measure LinkedIn ad performance and retarget visitors on
                    LinkedIn. Similarly, we could use Twitter Ads tracking or
                    other social media pixels for ad campaigns on those
                    platforms. If we do so, those services may collect similar
                    usage data through cookies and pixels on our site. Any such
                    use will be disclosed in our cookie notice and will be done
                    in compliance with applicable laws (e.g., obtaining consent
                    where required). We also integrate with tools like HubSpot
                    (already described above) for lead capture and analysis, and
                    may use email delivery services or customer support tools
                    that process data on our behalf (for instance, an email
                    sending service that handles our outbound emails or a live
                    chat tool on our site that captures chat transcripts). All
                    third-party service providers act under our instructions and
                    are bound by contracts to protect your data and only use it
                    for the intended purposes.
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              Important: Wherever required by law, we will present you with a
              cookie consent banner or similar mechanism when you first visit
              our site, giving you the choice to accept or reject non-essential
              cookies (such as analytics and advertising cookies). You can also
              manage your cookie preferences through your browser settings at
              any time (for details, see the Cookies & Tracking section below).
              Additionally, many of these third-party services offer their own
              opt-outs (as noted above for Google and Meta). We encourage you to
              familiarize yourself with the privacy controls offered by these
              third-party platforms as well.
            </p>
          </section>

          {/* Data Sharing And Disclosure */}
          <section
            ref={sectionRefs.sharing}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">
              Data Sharing And Disclosure
            </h2>
            <p className="text-gray-700">
              We value your privacy and disclose personal information to third
              parties only in the ways described in this Policy or with your
              consent. We do not sell personal information to third parties for
              monetary consideration, and we do not share your personal data
              with unrelated third parties for their own direct marketing use
              without permission. However, we may share personal data in the
              following circumstances, for legitimate business purposes as
              allowed by law:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 pt-5">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Within the EnterpriseBuzz AI Group: We may share data with
                    affiliates and subsidiaries under common ownership or
                    control. Any such entity will use your information in a
                    manner consistent with this Policy. (For example, if
                    EnterpriseBuzz AI is part of a corporate group, we might
                    share client information with our parent company for
                    internal administrative purposes, or with a sister company
                    that provides supporting services, subject to
                    confidentiality.)
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Service Providers and Vendors: We share personal data with
                    trusted third-party service providers who perform services
                    on our behalf. These include hosting providers (for cloud
                    storage and servers), IT support and security services,
                    email delivery services, payment processors, analytics and
                    marketing tool providers, and other vendors that assist us
                    in operating our business. For instance, we may store data
                    on cloud servers provided by companies like Amazon Web
                    Services or Azure, use an email delivery vendor to send out
                    newsletters, or engage a data enrichment service to update
                    business contact info. In all cases, we contractually
                    require service providers to only use the personal data as
                    necessary to provide the services to us (and not for their
                    own purposes), and to safeguard the data with appropriate
                    security measures.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Client and Partner Sharing: If we are processing your data
                    on behalf of a business client (as a processor), we will
                    share relevant personal data and results back with that
                    client. For example, if you are an end-user or customer of
                    one of our clients and you interacted with a campaign we ran
                    for them, the information about your interaction (e.g., that
                    you opened an email or made a purchase) will be reported to
                    that client through our platform. Similarly, if we
                    collaborate with strategic partners, integrators, or
                    agencies in delivering our services to you (or your
                    organization), we might share data with those partners as
                    needed. For instance, a client’s marketing agency that works
                    jointly with us may receive campaign reports containing
                    personal data, or if we co-market an event with a partner,
                    we might share the attendee list with that partner. In all
                    such cases, we will only share data with partners who are
                    bound to use the information for the same purposes and to
                    protect it under confidentiality.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Third-Party Integrations: As described in the section above,
                    when you interact with our website and services, third-party
                    analytics and advertising partners (like Google,
                    Meta/Facebook, LinkedIn, etc.) may collect or receive
                    certain information about you. Technically, this is a form
                    of data sharing – for example, our site may send your device
                    and browsing data to Google Analytics, or the Meta Pixel may
                    send data to Facebook. <br />
                    These providers operate under their own privacy policies. We
                    ensure that such data sharing is disclosed and consented to
                    as required. To reiterate, we do not share data with these
                    providers beyond what is necessary for the functionality of
                    their tools on our site (and many of these interactions are
                    initiated by the user's browser when loading their scripts).
                    Where possible, we enable settings that minimize data
                    sharing – e.g., instructing Google Analytics to not share
                    data with other Google services, or configuring pixels to
                    limit the scope of data. For more details, see Third-Party
                    Services above.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Business Transfers: If EnterpriseBuzz AI is involved in a
                    corporate transaction such as a merger, acquisition,
                    reorganization, or sale of some or all of its assets,
                    personal data may be transferred to the acquiring entity or
                    successor as part of that transaction. We would ensure that
                    any such transfer is subject to confidentiality obligations
                    and that your personal data remains protected. If a change
                    of ownership occurs, we will provide notice to affected
                    individuals as required by law (for example, by posting an
                    update on our website or contacting you) so that you know
                    about the new controller of your data.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Legal Compliance and Protection: We may disclose personal
                    information to courts, law enforcement, regulatory
                    authorities, or other competent bodies when we believe
                    disclosure is necessary to comply with a legal obligation or
                    process (such as a court order, subpoena, or regulatory
                    request). We may also disclose data if we believe in good
                    faith that it is necessary to investigate or prevent fraud,
                    security issues, or other illegal activities, or to enforce
                    our contracts and protect the rights, property, or safety of
                    EnterpriseBuzz AI, our clients, our personnel, or others.
                    This includes sharing information with government agencies
                    if a law requires us to report information (for example, for
                    public health or safety, or in response to lawful requests
                    in national security matters).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    With Your Consent: We may share your personal data with
                    other third parties in cases where you have expressly
                    consented to or requested such sharing. For example, if you
                    ask us to introduce you to one of our partner companies or
                    you opt-in to receive communications from one of our
                    affiliates, we will share your contact information as needed
                    to fulfill your request. You have the right to withdraw your
                    consent at any time, and we will cease sharing in those
                    cases. <br />
                    When we share information with third parties, we only share
                    the minimum amount of data necessary for the specific
                    purpose and, whenever feasible, we anonymize or pseudonymize
                    data to protect your identity. We also maintain Data
                    Processing Agreements with recipients where required to
                    ensure they uphold privacy standards. If we ever need to
                    share personal data in a manner not covered above, we will
                    notify you and obtain consent if required.
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              Finally, as noted, we do not sell personal information as defined
              under applicable laws (we do not exchange your data for money). We
              also do not share personal information for targeted advertising in
              a way that would constitute a “sale” or “share” under CCPA/CPRA
              without proper opt-out mechanisms. If this policy changes in the
              future, we will update this Policy and provide required notices
              and choices. (See Your Rights below for how you can opt out of
              certain sharing.)
            </p>
          </section>

          {/* Legal Bases for Processing (GDPR Compliance) */}
          <section
            ref={sectionRefs.legal}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">
              Legal Bases for Processing (GDPR Compliance)
            </h2>
            <p className="text-gray-700">
              For individuals located in the European Economic Area (EEA),
              United Kingdom, Switzerland, or other regions with similar data
              protection laws, EnterpriseBuzz AI ensures that we have a valid
              legal basis for processing your personal data. Depending on the
              context, our processing may rely on one or more of the following
              bases as defined in Article 6 of the GDPR:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 pt-5">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Consent (Art. 6(1)(a) GDPR): We will request your consent
                    for specific processing when required. For instance, we rely
                    on consent to send marketing emails to individuals in the
                    EEA when such consent is required, or to drop certain
                    cookies and use analytics/advertising trackers (per ePrivacy
                    rules). Where we ask for consent, you have the right to
                    withdraw it at any time. Withdrawal of consent will not
                    affect the lawfulness of processing that occurred before you
                    withdrew consent. Examples: you tick a box to receive our
                    newsletter (consent for marketing), or you accept cookies
                    via our banner (consent for tracking).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Performance of a Contract (Art. 6(1)(b) GDPR): When we need
                    to process personal data to enter into or fulfill a contract
                    with you (or your organization) or to provide services
                    you’ve requested, this legal basis applies. For example, if
                    you sign up for our platform, we must process your name and
                    email to create your account and provide the service.
                    Likewise, if you’re a client representative, we use your
                    contact details to communicate and deliver our contracted
                    services. Processing is lawful because it’s necessary for
                    the contract’s performance or to take pre-contract steps at
                    your request.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Legitimate Interests (Art. 6(1)(f) GDPR): We process certain
                    personal data as necessary for EnterpriseBuzz AI’s
                    legitimate business interests, provided those interests are
                    not overridden by your data protection rights and interests.
                    We believe that our use of personal data for purposes such
                    as improving our services, understanding our client base,
                    and conducting B2B marketing is within our legitimate
                    interests. For instance, sending product updates to our
                    business customers, or using business contact information to
                    make an offer to a prospective client, might be considered
                    our legitimate interest in growing and developing our
                    business. We always consider the potential impact on your
                    rights and expectations: for example, we may rely on
                    legitimate interests to send B2B communications where it’s
                    permissible, but we will always provide a clear opt-out.
                    Other uses under this basis include: securing our services
                    (we have a legitimate interest in protecting our platform
                    against fraud), analytics and product improvement, and
                    intra-group administrative transfers. Recital 47 of the GDPR
                    explicitly notes that processing personal data for direct
                    marketing purposes may be regarded as carried out for a
                    legitimate interest. We will only rely on this basis after
                    assessing that our processing is proportionate and respects
                    your privacy, and you have the right to object to processing
                    based on legitimate interests (see Your Rights below).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Legal Obligation (Art. 6(1)(c) GDPR): When processing is
                    necessary for us to comply with a legal obligation, we will
                    do so under this basis. For example, retaining transaction
                    records for tax law compliance, or responding to valid data
                    subject requests as required by GDPR, would fall under legal
                    obligations. Similarly, if authorities legally require us to
                    retain or disclose certain data, we will process data as
                    needed to comply.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Other Bases: In very rare cases, we might rely on vital
                    interests (Art. 6(1)(d)) – for example, if processing a
                    person’s data is literally necessary to save someone’s life
                    – or public interest/official authority (Art. 6(1)(e)) if we
                    were ever carrying out a task in the public interest. These
                    bases are generally not applicable to our typical B2B
                    marketing activities and are mentioned here for
                    completeness. If they were to apply, we would ensure
                    compliance with all requirements and limitations of those
                    bases. Whenever we process special categories of data (which
                    we generally do not, as stated), we would ensure an Article
                    9 GDPR condition applies (such as explicit consent).
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              If you have questions about the specific legal basis for a
              particular processing activity, please contact us (see Contact Us
              section). Typically, the legal basis will be evident from context
              (e.g., we send you a service email = contract; we show you a
              cookie banner = consent; we email a prospect at their work address
              = legitimate interest with opt-out, etc.). We are happy to explain
              our assessments in more detail if needed.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section
            ref={sectionRefs.rights}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Your Rights And Choices</h2>
            <p className="text-gray-700">
              Depending on your location and applicable privacy laws, you have
              certain rights regarding your personal information. EnterpriseBuzz
              AI is committed to honoring your rights and providing you with
              control over your data. Below, we outline the rights granted under
              major privacy regimes and how you can exercise them. We treat your
              data with respect in all cases, so even if you are not in a region
              with specific statutory rights, we will do our best to accommodate
              your requests about your data.
              <br />
              <b className="pt-5">
                Rights of Individuals in the EEA, UK, and Other Jurisdictions
                (GDPR)
              </b>
              <br />
              If you are in the European Union, European Economic Area, United
              Kingdom, Switzerland, or other jurisdictions with similar laws,
              you have the following data subject rights under the GDPR or
              applicable data protection legislation:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 pt-5">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Be Informed: You have the right to receive clear
                    and transparent information about how we collect and use
                    your personal data (which is the purpose of this Privacy
                    Policy and any privacy notices we provide).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right of Access: You can request confirmation of whether we
                    are processing your personal data, and if so, ask for a copy
                    of the personal data we hold about you. This allows you to
                    know and verify the lawfulness of our processing. We will
                    provide a copy of your data, usually free of charge, within
                    the legally required timeframe (generally 1 month, unless an
                    extension applies). For additional copies, we may charge a
                    reasonable fee based on administrative costs.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Rectification: If any of your personal data that we
                    hold is inaccurate or incomplete, you have the right to
                    request that we correct or update it. Upon your request, we
                    will promptly make the corrections (taking into account the
                    purposes of processing, you have the right to have
                    incomplete data completed, which might involve providing a
                    supplementary statement).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Erasure (Right to be Forgotten): You have the right
                    to ask us to delete or remove your personal data in certain
                    circumstances. This right applies, for example, if the data
                    is no longer necessary for the purposes it was collected, if
                    you withdraw consent and no other legal basis exists, or if
                    you object to processing and we have no overriding
                    legitimate grounds to continue. We will also erase data if
                    we processed it unlawfully or if required to erase it to
                    comply with a legal obligation. Note that this right is not
                    absolute – sometimes we may retain certain information as
                    permitted by law (e.g., to comply with a legal obligation or
                    to establish/exercise a legal claim). If one of these
                    exceptions applies when you request erasure, we will inform
                    you accordingly.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Restrict Processing: You have the right to request
                    that we limit the processing of your personal data in
                    certain situations. For example, if you contest the accuracy
                    of your data, you can request we restrict processing while
                    we verify the accuracy; or if you object to our processing
                    based on legitimate interests, you can request restriction
                    pending verification of whose interests prevail. You can
                    also ask for restriction if our processing is unlawful but
                    you prefer restriction over deletion, or if we no longer
                    need the data but you need us to keep it to establish,
                    exercise, or defend a legal claim. While under restriction,
                    we will store your data securely and not use it (except to
                    the extent allowed, such as to protect rights or with your
                    consent). We will inform you before lifting a restriction.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Data Portability: You have the right, in certain
                    cases, to obtain the personal data you have provided to us
                    in a structured, commonly used, and machine-readable format,
                    and to transmit that data to another controller without
                    hindrance. This right applies when the processing is based
                    on your consent or a contract and is carried out by
                    automated means. Where technically feasible, you can also
                    request that we send the data directly to another company if
                    you want (though we are not required to adopt or maintain
                    processing systems that are technically compatible with
                    other organizations). The portable data will typically be a
                    subset of your information (for example, basic account info
                    and data you provided, not including our derived analytics).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Object: You have the right to object, on grounds
                    relating to your particular situation, to any processing of
                    your personal data that we conduct based on legitimate
                    interests. If you lodge an objection, we will evaluate
                    whether our legitimate grounds for processing override your
                    privacy rights. We will stop processing the data unless we
                    demonstrate compelling legitimate grounds for the processing
                    that override your interests, rights, and freedoms, or the
                    processing is for the establishment or defense of legal
                    claims. Important: You have an absolute right to object to
                    direct marketing at any time. This means if we are sending
                    you marketing emails or other direct marketing
                    communications under a legitimate interest basis, and you
                    object or opt-out, we will cease all such marketing to you.
                    (The easiest way to exercise this is to use the
                    “unsubscribe” link in our marketing communications, or to
                    contact us requesting to opt out of marketing, which we will
                    honor immediately.)
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Withdraw Consent: If we are processing your
                    personal data based on your consent, you have the right to
                    withdraw that consent at any time. This will not affect the
                    lawfulness of processing done prior to withdrawal. If you
                    withdraw consent for a specific purpose (e.g., for marketing
                    emails or for optional analytics cookies), we will stop the
                    processing for that purpose. For example, you can withdraw
                    your consent to our marketing emails by unsubscribing, or
                    withdraw consent to tracking by adjusting cookie settings.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right Not to be Subject to Automated Decisions: You have the
                    right not to be subject to a decision based solely on
                    automated processing, including profiling, which produces
                    legal effects or similarly significant effects on you.
                    EnterpriseBuzz AI does not generally make such automated
                    decisions without human involvement; our AI may tailor
                    content but does not make legally significant decisions
                    about individuals. In the event that we ever engage in
                    automated decision-making that has a significant effect, we
                    will ensure compliance with GDPR Article 22 – including
                    giving you the right to request human intervention, to
                    express your point of view, and to contest the decision.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Complain: If you believe that our processing of
                    your personal data infringes the GDPR or applicable law, you
                    have the right to lodge a complaint with a Supervisory
                    Authority in the EU/EEA or with the UK Information
                    Commissioner’s Office (ICO), as applicable. We would
                    appreciate the chance to address your concerns first by
                    contacting us, but you are entitled to complain directly to
                    the regulator. For example, EU individuals can contact the
                    supervisory authority in the country of their residence or
                    where the issue occurred; UK individuals can contact the
                    ICO. A list of EU data protection authorities is available
                    here. In Switzerland, you can contact the Federal Data
                    Protection and Information Commissioner (FDPIC). <br />
                    We will not charge you for exercising your rights, except in
                    exceptional cases where requests are manifestly unfounded or
                    excessive (in which case we may charge a reasonable fee or
                    refuse the request, as permitted by law). We will respond to
                    valid requests within one month, or inform you of any
                    extension or reason we cannot comply (such as inability to
                    verify your identity or applicable legal exceptions). To
                    exercise any of these rights, please reach out to us using
                    the contact details in the Contact Us section. We may need
                    to verify your identity to process certain requests (to
                    ensure we don’t disclose data to an unauthorized person).
                  </span>
                </span>
              </li>
            </ul>
            {/* Rights of California Residents (CCPA/CPRA) */}
            <p className="text-gray-700 pt-5">
              <b>Rights of California Residents (CCPA/CPRA)</b>
              <br />
              If you are a resident of California, you are entitled to specific
              rights under the California Consumer Privacy Act (CCPA), as
              amended by the California Privacy Rights Act (CPRA). These rights,
              subject to certain limitations and exceptions under the law,
              include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 py-3">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Know: You have the right to request that we
                    disclose the categories and specific pieces of personal
                    information we have collected about you. You also have the
                    right to know the categories of sources of that information,
                    the business or commercial purposes for collecting (or
                    selling/sharing, if applicable) the information, and the
                    categories of third parties with whom we have disclosed your
                    information. Essentially, you can ask for a report detailing
                    the personal data we have about you and how we have handled
                    it. Under CCPA, this is often called a “request to know” or
                    “access” request.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Access: Similar to the above, you can request a
                    copy of the specific personal information we maintain about
                    you, to be delivered either electronically or by mail. For
                    electronic delivery, the information will be in a portable
                    and (to the extent technically feasible) readily usable
                    format, allowing you to transmit it to another entity if you
                    desire.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Delete: You have the right to request that we
                    delete personal information we have collected from you and
                    retained, subject to certain exceptions. For example, we may
                    decline to delete information that we are required to keep
                    for legal purposes or that is needed to complete a
                    transaction you requested or to detect security incidents,
                    etc. If we must retain some data (per statutory exceptions),
                    we will inform you of that and will only retain it for the
                    allowed purpose. Otherwise, we will delete (and instruct our
                    service providers to delete) your personal information from
                    our records.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Correct: You have the right to request that we
                    correct inaccurate personal information that we hold about
                    you. Upon verification and consideration of the request, we
                    will correct the information where required by law.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Opt Out of “Sale” or “Sharing”: California law
                    gives you the right to opt out of the sale of your personal
                    information, or the sharing of your personal information for
                    cross-context behavioral advertising purposes. Sale is
                    broadly defined and may include certain data sharing for
                    advertising or analytics. As noted, EnterpriseBuzz AI does
                    not sell personal information in exchange for money. We also
                    do not share personal data for cross-context behavioral
                    advertising except possibly in the context of certain
                    third-party analytics/advertising cookies on our site. To
                    the extent we engage in any activity that falls under “sale”
                    or “sharing” as defined by CCPA (for example, allowing
                    third-party ad cookies that collect data), you have the
                    right to opt out. You can exercise this right by using the
                    “Do Not Sell or Share My Personal Information” link on our
                    website (if available) or by contacting us with your opt-out
                    request. Additionally, if you have enabled the Global
                    Privacy Control (GPC) or a similar browser-based opt-out
                    preference signal, we will treat that as a valid opt-out of
                    sale/sharing request for your browser/profile, to the extent
                    required by law. Once we process your opt-out, we will
                    instruct applicable service providers or third parties to
                    cease data sales/sharing for your browser or profile.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Limit Use of Sensitive Personal Information: The
                    CPRA gives Californians the right to limit how a business
                    uses “sensitive personal information” (SPI) if it’s used for
                    purposes beyond those permitted by law. In our case, we do
                    not collect or use sensitive personal data (as defined by
                    CPRA) for inferring characteristics or for purposes that
                    would trigger this right. Essentially, any SPI we might
                    collect (for example, account login credentials, which could
                    be considered SPI) is only used to provide the services
                    expected (i.e., account login) and not for additional
                    purposes. Therefore, this right is likely not applicable to
                    our processing. If that changes, we will provide a “Limit
                    Use of Sensitive Info” mechanism as required.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Right to Non-Discrimination: We will never discriminate or
                    retaliate against you for exercising any of your CCPA
                    rights. This means we will not deny you services, charge you
                    different prices, or provide a different level of quality
                    just because you exercised your privacy rights. (However,
                    note that if you request deletion of data that is necessary
                    to provide a service, we may not be able to continue
                    providing that service – e.g., if you ask us to delete your
                    account data entirely, you would no longer be able to use
                    the account. This is not discrimination; it’s a logical
                    consequence of the request, and we will inform you if such a
                    situation arises.)
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              Exercising Your California Rights: If you are a California
              resident and wish to exercise any of the above rights, you may
              contact us via the methods listed in Contact Us below. You can
              submit a verifiable request by email or through any web form or
              phone number we provide for this purpose. We will need to verify
              your identity to a reasonable degree of certainty before
              fulfilling certain requests (such as access or deletion) – this
              may involve matching information you provide with information we
              have on file (and in some cases, we may ask for additional
              information or a declaration to verify your identity). If you are
              making the request as an authorized agent of a consumer, we will
              require proof of your authorization and also verify the identity
              of the consumer you are acting for. We aim to respond to requests
              within 45 days as mandated (and may extend once for another 45
              days with notice if necessary). For access requests, our response
              will cover the 12-month period preceding your request, or can
              include additional periods if you ask and if required by law. For
              deletion, we will specify the result (confirm deletion or explain
              denial with valid reason). For opt-outs, we will comply as soon as
              feasibly possible.
            </p>
            <p className="text-gray-700">
              California “Shine the Light”: Separate from CCPA, California’s
              “Shine the Light” law (Civil Code §1798.83) allows residents to
              request a notice of what categories of personal information have
              been shared with third parties for those third parties’ direct
              marketing purposes in the preceding calendar year. <br />{" "}
              EnterpriseBuzz AI does not disclose personal information to third
              parties for their own direct marketing purposes without consent.
              Therefore, we do not have such third-party marketing data sharing
              to report. If you have questions about this, you can contact us.
            </p>
            <p className="text-gray-700 pt-5">
              <b>Other U.S. State Privacy Laws</b> <br />
              Several other U.S. states (such as Colorado, Connecticut, Utah,
              Virginia, and others) have passed privacy laws that grant
              consumers rights similar to those under the CCPA/CPRA. If you are
              a resident of one of these states, you may have the rights to
              access your data, correct inaccuracies, delete data, obtain a copy
              (portability), and opt out of certain processing (like targeted
              advertising or sales of personal data). EnterpriseBuzz AI will
              honor applicable state privacy rights in accordance with those
              laws. For example, residents of Virginia can opt out of targeted
              advertising or sale of personal data, and have rights to access,
              correct, delete, and obtain a copy of personal data. Our process
              for verification and response will generally follow the guidelines
              described above for California (which are similar to many other
              states’ requirements). We will not discriminate for the exercise
              of any such rights. If you are in any U.S. state with a privacy
              law, feel free to contact us with your request, and we will
              address it consistent with the applicable law’s requirements. We
              have one unified system for tracking and responding to data
              subject access requests (DSARs) across jurisdictions, so you can
              reach out to us at any time and we will guide you through the
              process relevant to your location.
            </p>
          </section>

          {/* Marketing Preferences and Consent Management */}
          <section
            ref={sectionRefs.preferences}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">
              Marketing Preferences and Consent Management
            </h2>
            <p className="text-gray-700">
              Aside from formal legal rights, EnterpriseBuzz AI provides all
              individuals with control over certain data uses:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 pt-5">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Email and Communications Opt-Out: You can opt out of
                    marketing or newsletter emails from us at any time by
                    clicking the “unsubscribe” link included in the footer of
                    our emails or by contacting us requesting to be removed.
                    Once you opt out, we will stop sending you promotional
                    emails. (Please note that even if you opt out of marketing
                    messages, we may still send you transactional or
                    service-related communications when necessary, such as
                    billing notices or security alerts, as these are not
                    promotional.) If you have multiple email addresses that you
                    use with us, please opt out from each or specify the
                    addresses, so we can ensure all are removed. For SMS
                    messages (if any), you may reply “STOP” or follow the
                    provided instructions to opt out. We process opt-out
                    requests promptly and in compliance with CAN-SPAM, CASL, and
                    other applicable regulations.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Cookie Preferences: On our website, you have control over
                    non-essential cookies and trackers. When you first visit,
                    you will see a cookie consent banner (for jurisdictions
                    where it’s required) allowing you to accept or reject
                    different categories of cookies (e.g., Analytics,
                    Advertising). You can manage your preferences there or at
                    any time by clicking the “Cookie Settings” link (often in
                    our website footer) to adjust which cookies are active.
                    Additionally, you can use your browser settings to refuse or
                    delete cookies. However, note that if you disable certain
                    cookies, parts of our site may not function optimally (for
                    example, video content might not load, or your preferences
                    might not be remembered). For more details on our cookie
                    usage and how to control them, see Cookies and Tracking
                    Technologies below.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Do Not Track: “Do Not Track” (DNT) is a preference you can
                    set in your web browser to signal that you do not want to be
                    tracked across websites. The online industry is currently
                    still working on defining what DNT means and how to honor
                    it. At this time, our websites do not respond to DNT browser
                    signals in a uniform way. However, as noted, we honor
                    specific opt-out mechanisms for cookies and advertising
                    (like the Global Privacy Control signal for CCPA opt-outs
                    and our cookie consent tools). We will continue to monitor
                    developments around DNT. In the meantime, using our cookie
                    management options or browser extensions is the best way to
                    control tracking.
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              We endeavor to make it easy for you to exercise these choices. If
              you ever have any trouble opting out or adjusting preferences,
              please contact us and we will assist.
            </p>
          </section>

          {/* cookies and tracking technologies */}
          <section
            ref={sectionRefs.cookies}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">
              Cookies And Tracking Technologies
            </h2>
            <p className="text-gray-700">
              Cookies and similar tracking technologies are used on our websites
              and through our services to provide functionality, analyze
              traffic, and for advertising purposes. This section provides an
              overview of our use of these technologies. For more detailed
              information, please see our separate Cookies Policy (if available)
              or reach out to us.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 pt-5">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    What Are Cookies: Cookies are small text files that websites
                    store on your device (computer, smartphone, etc.) when you
                    visit. They allow the website to recognize your device and
                    store certain information about your preferences or past
                    actions. There are also other similar technologies like web
                    beacons (clear GIFs), pixels, local storage, and device
                    fingerprinting techniques that can be used to recognize a
                    user.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Types of Cookies We Use: We use both session cookies (which
                    expire when you close your browser) and persistent cookies
                    (which remain on your device for a set period or until
                    deleted). Cookies on our site may be categorized as:
                    <ul className="list-outside list-disc px-5">
                      <li>
                        Strictly Necessary Cookies: These are essential for the
                        website to function properly (e.g., to log you in, keep
                        your session, or remember items in a cart). Without
                        these, certain services cannot be provided.
                      </li>
                      <li>
                        Analytics/Performance Cookies: These cookies collect
                        information about how visitors use our site (pages
                        visited, time spent, any errors encountered). We use
                        this aggregated data to improve our website’s
                        performance and your experience. (For instance, Google
                        Analytics cookies fall here; they help us see traffic
                        volumes and usage patterns.)
                      </li>
                      <li>
                        Functionality Cookies: These remember your choices and
                        preferences (such as language, region, or other
                        customizations) to provide a more personalized
                        experience. They may also be used to provide certain
                        functionalities, like live chat support or to remember
                        if you’ve seen a notification so as not to show it
                        again.
                      </li>
                      <li>
                        Advertising/Targeting Cookies: These cookies are used to
                        deliver relevant advertisements to you and measure the
                        effectiveness of ad campaigns. They may be set through
                        our site by advertising partners and social media
                        platforms (like the Meta Pixel or LinkedIn Insight tag).
                        They build a profile of your interests based on your
                        browsing on our site and other sites, which is used to
                        show you tailored ads on other websites. If you disable
                        these, you will still see ads, but they may be less
                        relevant to you.
                      </li>
                    </ul>
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Third-Party Cookies: Many of the cookies on our site are set
                    by third-party providers as described in the Third-Party
                    Services section. For example, when you load our site,
                    Google and HubSpot may set their own cookies to provide
                    analytics; Meta may set a cookie for the Pixel; LinkedIn may
                    set a cookie for its analytics, and so on. We do not have
                    direct control over the information collected by these
                    third-party cookies, but we ensure that we have appropriate
                    data processing agreements or terms in place with these
                    providers and that you are informed about their presence. We
                    also give you the ability to disable these cookies via our
                    cookie consent tool. Each third-party’s use of information
                    collected via cookies is subject to their own privacy
                    policies. We encourage you to review the privacy and cookie
                    policies of those providers (e.g., Google’s Privacy Policy,
                    Facebook/Meta’s Data Policy, HubSpot’s Privacy Policy, etc.)
                    to understand what they do with the data.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Your Choices for Cookies: When you first visit our site from
                    certain jurisdictions, you will be presented with an option
                    to accept or decline various types of cookies (except
                    strictly necessary cookies, which we’ll set regardless, as
                    they are needed for basic functionality). You can modify
                    your choices at any time by clicking the “Cookie Settings”
                    link (or similarly named link) on our site. Additionally,
                    most web browsers allow you to control cookies through their
                    settings (you can usually find these in the Options or
                    Preferences menu). You can set your browser to refuse all or
                    some cookies, or to prompt you before accepting. You can
                    also delete cookies that have already been set. Please
                    consult your browser’s help documentation for details on how
                    to do this. Keep in mind that if you block or delete
                    cookies, our site may not remember your preferences and some
                    features may not work properly (for example, you might have
                    to re-enter information or login details more frequently,
                    and some content might not be as tailored to your
                    interests).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Other Tracking Technologies: We (and our partners) may use
                    technologies like web beacons or pixels in conjunction with
                    cookies. For example, in our HTML emails, we may include a
                    tiny invisible image or a unique link that allows us to
                    determine whether you have opened the email or clicked on a
                    link (this helps us know if our communications are useful).
                    You can disable the downloading of images in your email
                    client to prevent this tracking in emails, though that may
                    affect the formatting of the messages you see.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Do Not Track: As mentioned earlier, browsers have a Do Not
                    Track feature; however, there isn’t an industry consensus on
                    how to respond to these signals, and our systems currently
                    do not respond to DNT headers specifically. Instead, use our
                    provided tools to manage cookies and trackers.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Global Privacy Control: If you use a browser or extension
                    that emits a Global Privacy Control (GPC) signal, and you
                    are a California resident, we will treat that as an opt-out
                    of sale/sharing signal (meaning we will disable third-party
                    advertising cookies for you). Outside of California, we
                    currently don’t act on GPC as a general rule except as noted
                    for known legal requirements.
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              We want to be transparent about our use of cookies and ensure you
              have control. For further information about cookies and how to see
              what cookies have been set on your device, you can visit resources
              like AllAboutCookies.org. If you have any specific questions or
              concerns about our cookie practices, please contact us.
            </p>
          </section>

          {/* data security */}
          <section
            ref={sectionRefs.security}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Data Security</h2>
            <p className="text-gray-700">
              EnterpriseBuzz AI takes the security of your personal data very
              seriously. We implement appropriate technical and organizational
              security measures to protect your information from unauthorized
              access, disclosure, alteration, and destruction. These measures
              are designed to provide a level of security appropriate to the
              risk of processing personal data. Some of the key security
              practices we employ include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 pt-5">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                     Encryption: We use encryption protocols to protect data in
                    transit and at rest. For example, our websites and
                    applications are secured via HTTPS using Transport Layer
                    Security (TLS) to encrypt data transmitted between your
                    browser and our servers. Sensitive data (like passwords or
                    authentication tokens) is stored encrypted or hashed. For
                    data at rest, we utilize encrypted storage solutions or
                    database encryption where applicable.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Access Controls: We limit access to personal data to
                    authorized personnel who have a business need to know such
                    information. Our employees, contractors, and agents who
                    process personal data are subject to confidentiality
                    obligations. We use role-based access controls in our
                    systems, ensuring that individuals can only access data
                    necessary for their role. Administrative access to systems
                    that contain personal data is logged and reviewed.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Pseudonymization and Minimization: Where feasible, we
                    pseudonymize personal data (replace identifying fields with
                    artificial identifiers) or anonymize data to reduce the risk
                    to individuals. We follow the principle of data
                    minimization, collecting and retaining only the personal
                    data that is relevant and necessary for our purposes. For
                    example, for analytics we may use aggregated data that does
                    not directly identify individuals.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Network & System Security: Our production systems are hosted
                    in secure data centers with strong physical security
                    controls. We use firewalls, intrusion detection/prevention
                    systems, and anti-malware tools to guard against external
                    threats. Regular security patches and updates are applied to
                    software and infrastructure. We perform periodic
                    vulnerability scans and penetration testing to identify and
                    address potential security weaknesses.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Monitoring and Incident Response: EnterpriseBuzz AI monitors
                    its systems for potential security breaches or anomalies. We
                    have an incident response plan in place to handle any
                    security incidents. In the event of a data breach affecting
                    personal data, we will act promptly to contain the issue,
                    assess the scope, and notify affected parties and regulators
                    as required by law (for example, GDPR requires notification
                    to authorities and possibly users within 72 hours for
                    certain breaches, and we are prepared to meet such
                    obligations).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Employee Training and Policies: We educate our staff about
                    the importance of data privacy and security. We have
                    internal policies and trainings on data protection,
                    including proper data handling procedures, recognizing
                    social engineering attempts, and reporting potential
                    security incidents. We also require our employees to adhere
                    to strong password practices and use multi-factor
                    authentication for access to critical systems.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Vendor Security: When we engage third-party service
                    providers (sub-processors) to process personal data, we
                    conduct diligence on their security measures and bind them
                    to contractual security requirements. We strive to choose
                    reputable providers (e.g., major cloud services) with
                    demonstrated commitments to security (such as compliance
                    certifications like ISO 27001, SOC 2, etc.).
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              While we employ these and other safeguards, it’s important to note
              that no method of transmission over the Internet or method of
              electronic storage is 100% secure. Therefore, we cannot guarantee
              absolute security of information. Internet-based data
              transmissions may have inherent security gaps, and there is always
              some risk that an unauthorized third party could find a way to
              thwart our security systems. We continue to evaluate and update
              our security measures to counter emerging threats. You also play a
              role in keeping your data secure. We encourage you to use strong,
              unique passwords for any accounts and to keep those passwords
              confidential. If you suspect any unauthorized access to your
              account or any security vulnerabilities on our part, please notify
              us immediately.
            </p>
          </section>

          {/* data retention */}
          <section
            ref={sectionRefs.retention}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Data Retention</h2>
            <p className="text-gray-700">
              We will retain your personal data only for as long as necessary to
              fulfill the purposes for which it was collected, as outlined in
              this Privacy Policy, and to comply with applicable legal or
              contractual requirements. The criteria we use to determine
              retention periods include: the duration of our relationship with
              you (for example, for as long as you have an account with us or
              continue to use our services), the nature of the data and the
              purpose for which it was collected, and our legal obligations
              (e.g., laws that require us to keep certain records for a set time
              such as financial/tax records, or to retain information in the
              event of a legal dispute). For instance:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 pt-5">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    If you are a client or partner, we will retain your business
                    contact information and account data for as long as your
                    account is active or as needed to provide you services.
                    After our relationship ends, we may retain certain
                    information for a period of time in case you return or to
                    fulfill legal obligations (like maintaining records of
                    transactions).
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    If you are a prospect who has not yet engaged our services,
                    we might retain your contact details for a reasonable period
                    to send marketing communications, unless you opt out. If we
                    note that you do not engage or respond over time, we may
                    remove your data from our active marketing lists. We retain
                    records of opt-outs indefinitely to ensure we respect those
                    going forward.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Information collected via cookies and similar tracking
                    technologies is retained for periods in line with their
                    purpose. For example, analytics cookies might persist for a
                    few months up to a couple of years (Google Analytics cookies
                    typically last 14 months by default). You can clear these at
                    any time via your browser. Advertising identifiers may last
                    until you clear them or they expire. We follow
                    industry-standard practices and provider guidance for such
                    retention.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    CRM data processed on behalf of clients (e.g., their contact
                    lists and campaign data) is retained according to our client
                    agreements. Typically, we will not delete or destroy
                    client-provided data without their instruction, as they may
                    need it for ongoing campaigns or compliance. When a client
                    terminates services with us, we either return or delete the
                    personal data we processed for them, as per our contract. We
                    may keep anonymized aggregates (like campaign statistics)
                    for our own purposes, but not data that identifies
                    individuals from former client campaigns.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    If you make a deletion request or exercise your right to
                    erasure (and no exception applies), we will remove your
                    personal data from our active systems. Some residual data
                    may remain in our backups or archives, but it will be purged
                    in accordance with our backup retention schedules. In the
                    interim, we will isolate it and not process it further.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    In certain cases, even if you request deletion, we may
                    retain minimal information to fulfill legal obligations or
                    prevent further contact – for example, keeping your email on
                    a suppression list to ensure we don’t send you marketing
                    emails anymore, or retaining a record of your request and
                    our response.
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              In summary, when we have no ongoing legitimate business need or
              legal reason to keep your personal data, we will either delete it
              or anonymize it. If deletion or anonymization is not immediately
              feasible (for instance, because your data is stored in secure
              archives), we will securely store your data and isolate it from
              any further use until deletion is possible. <br />
              We review the data we hold periodically and erase or anonymize
              data that is no longer needed. Our goal is not to keep personal
              data indefinitely unless there is a justified reason. If you have
              specific questions about how long a particular type of data is
              retained, you can contact us for more information.
            </p>
          </section>

          {/* international data transfer */}
          <section
            ref={sectionRefs.transfers}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">
              International Data Transfers
            </h2>
            <p className="text-gray-700">
              EnterpriseBuzz AI is a global company and, as such, the personal
              data we collect may be transferred to and stored in countries
              other than your own. Our primary operations are based in Canada,
              and our servers or service providers may be located in various
              jurisdictions. This means that if you are outside of the country
              where we are based, your personal information may be processed in
              a country with data protection laws that are different from (and
              potentially less protective than) those in your jurisdiction.
            </p>
            <p className="text-gray-700 pt-3">
              <b>European and UK Users:</b> If you are located in the European
              Economic Area (EEA), United Kingdom, or Switzerland, we comply
              with applicable data protection laws when transferring your
              personal data outside of these areas. In particular, we ensure
              that appropriate safeguards are in place to protect your
              information. These safeguards may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 pt-5">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Standard Contractual Clauses: We rely on the European
                    Commission’s Standard Contractual Clauses (SCCs) as a legal
                    mechanism for data transfers, where applicable. These are
                    contractual commitments between parties transferring
                    personal data, binding them to protect the data to EU
                    privacy standards. For example, if we store data on a U.S.
                    server or engage an American sub-processor, we have executed
                    SCCs (and any required UK or Swiss addenda) to ensure your
                    data receives a similar level of protection as in Europe.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Adequacy Decisions: Where we transfer data to a country that
                    the European Commission (or UK government) has determined
                    offers an adequate level of data protection, we may rely on
                    that adequacy decision. (For instance, if transferring data
                    to Canada for certain data or to another country deemed
                    adequate.)
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Additional Safeguards: We continually monitor the legal
                    landscape for international transfers (post-Schrems II,
                    etc.). In some cases, we may implement supplementary
                    measures on top of SCCs, such as encryption in transit and
                    at rest, and policies to handle government requests, in
                    order to ensure transferred data is secure. We also assess
                    on a case-by-case basis that the destination country’s laws
                    do not impinge on the protections afforded by the transfer
                    mechanism.
                  </span>
                </span>
              </li>
              <p className="text-gray-700">
                By using our services or providing us with your information, you
                understand that your personal data may be transferred to our
                facilities and third parties in other countries. However,
                wherever your data is transferred, we will protect it as
                described in this Privacy Policy and in accordance with
                applicable law. If we need to transfer your data for internal
                operations (for example, between our offices in different
                countries) or to our service providers in different countries,
                we do so under the safeguards mentioned. For example, our cloud
                provider might host data in data centers globally, but we have
                ensured through our contract and configurations that your data
                is protected and, where required, remains within certain
                geographies.
              </p>
              <p className="text-gray-700 pt-5">
                <b>Residents of Other Regions:</b> If you are in jurisdictions
                like Canada, Australia, or others with their own cross-border
                data transfer requirements, we also ensure compliance. For
                instance, for Canadian users, your data might be accessible by
                our U.S. parent company or providers, which means it could be
                subject to lawful access requests by U.S. authorities. We
                outline such practices and obtain consents as needed under
                Canadian law (PIPEDA). For transfers from countries with data
                localization or transfer restrictions, we will handle data in
                accordance with those rules (e.g., if certain data must remain
                in-country, we will respect that or seek proper consent). <br />
                If you have questions about international data transfers or need
                more specific information about the transfer mechanisms in place
                (for example, a copy of the SCCs we use), please contact us.
              </p>
            </ul>
          </section>

          {/* Updates to this Privacy Policy */}
          <section
            ref={sectionRefs.updates}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">
              Updates To This Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may update or revise this Privacy Policy from time to time to
              reflect changes in our data practices or to comply with new laws
              and regulations. If we make any material changes, we will notify
              you by appropriate means. For example, we may post a prominent
              notice on our website or send an email notification to clients if
              the changes are significant. We indicate the effective date of the
              latest version at the top of the Policy (see “Last Updated” date).
            </p>
            <p className="text-gray-700 pt-3">
              Your continued use of our websites or services after any such
              update constitutes your acknowledgment of the modified Privacy
              Policy. However, if the changes materially affect how we handle
              previously collected personal data (and we do not have your
              consent), we will seek your consent as required by law. We
              encourage you to review this Policy periodically to stay informed
              about how we are protecting your information. We maintain archives
              of previous versions of this Privacy Policy which can be provided
              upon request, so you can see how our practices have evolved.
            </p>
          </section>

          {/* contact us */}
          <section
            ref={sectionRefs.contact}
            className="mb-10 bg-[#F9FAFA] p-3 md:p-6 rounded-xl scroll-mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our handling of your personal data, please do
              not hesitate to contact us. Our data protection team (or Data
              Protection Officer) is here to help. You may reach us in the
              following ways:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 pt-5">
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                    Email: privacy@enterprisebuzz.ai – This is the dedicated
                    email address for privacy inquiries. Please include details
                    of your question or request, and for rights requests,
                    specify the right you wish to exercise.
                  </span>
                </span>
              </li>
              <li className="text-gray-700">
                <span className="flex items-start">
                  <span className="inline-block h-4 w-4 rounded-full bg-gray-800 mr-2 flex-shrink-0 mt-1"></span>
                  <span>
                     Mail: EnterpriseBuzz AI – Privacy Team – 100 King St W
                    #5700, Toronto, ON M5X 1C7. (If you are sending a physical
                    mail inquiry, please mark it Attn: Privacy Officer.)
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              We will respond to your inquiries as promptly as possible,
              generally within a few business days. If you are making a request
              to exercise your data rights, we may provide you with information
              on the next steps to verify your identity and process your request
              in a timely manner.
            </p>
            <p className="text-gray-700 py-5">
              <b>For individuals in the EU or UK:</b> You may additionally
              contact our designated EU Representative or Data Protection
              Officer if we have appointed one, as required by Article 27 GDPR
              or UK law. [If applicable, include the contact details of the EU
              representative or DPO here.]
            </p>
            <p className="text-gray-700">
              Your privacy is important to us, and we welcome your feedback. If
              you have any suggestions or believe that we have not complied with
              this Privacy Policy or your rights, please let us know and we will
              investigate the matter.
            </p>
          </section>
          <button onClick={() => scrollToSection("introduction")}>
            <img src="../buttons/ButtonT.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
