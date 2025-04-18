import React from "react";
import { Helmet } from "react-helmet-async";
export default function SEO({ title, description, name, type }) {
  // Replace "your_verification_code" with the actual code from Google Search Console
  const googleVerificationCode = "google5486ab59ba630342";
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="google-site-verification" content={googleVerificationCode} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={'website'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
