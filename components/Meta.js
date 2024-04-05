import Head from "next/head";

export default ({ title }) => (
  <Head>
    <meta charSet="utf-8" />

    <meta
      name="google-site-verification"
      content="ZciyDhrj54UAkOkFBeIpP5wwO_A5D-fvdu_I6odsH98"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
    />
    {/* <meta
      httpEquiv="Content-Security-Policy"
      content="default-src img-src * 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'unsafe-inline'; media-src *;**script-src 'self' http://onlineerp.solution.quebec 'unsafe-inline' 'unsafe-eval';** "
    /> */}
    <meta
      httpEquiv="Content-Security-Policy"
      content="default-src * 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: https:; script-src * 'self' http://* https://* 'unsafe-inline' 'unsafe-eval'; style-src  'self' 'unsafe-inline' *"
    ></meta>
    <title>{title}</title>
    <link rel="prefetch" href="https://checkout.razorpay.com/v1/checkout.js" />
    <link rel="prerender" href="https://checkout.razorpay.com/v1/checkout.js" />
    <link rel="prefetch" src="https://checkout.razorpay.com/v1/checkout.js" />
    <link rel="prerender" src="https://checkout.razorpay.com/v1/checkout.js" />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/static/favicons/apple-touch-icon-57x57.png?v=E6bjzNL6ob"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/static/favicons/apple-touch-icon-60x60.png?v=E6bjzNL6ob"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/static/favicons/apple-touch-icon-72x72.png?v=E6bjzNL6ob"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/static/favicons/apple-touch-icon-76x76.png?v=E6bjzNL6ob"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/static/favicons/apple-touch-icon-114x114.png?v=E6bjzNL6ob"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/static/favicons/apple-touch-icon-120x120.png?v=E6bjzNL6ob"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/static/favicons/apple-touch-icon-144x144.png?v=E6bjzNL6ob"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/static/favicons/apple-touch-icon-152x152.png?v=E6bjzNL6ob"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicons/apple-touch-icon-180x180.png?v=E6bjzNL6ob"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicons/favicon-32x32.png?v=E6bjzNL6ob"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicons/favicon-194x194.png?v=E6bjzNL6ob"
      sizes="194x194"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicons/android-chrome-192x192.png?v=E6bjzNL6ob"
      sizes="192x192"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicons/favicon-16x16.png?v=E6bjzNL6ob"
      sizes="16x16"
    />
    <link rel="manifest" href="/static/favicons/manifest.json?v=E6bjzNL6ob" />
    <link
      rel="mask-icon"
      href="/static/favicons/safari-pinned-tab.svg?v=E6bjzNL6ob"
      color="#2196F3"
    />
    <link
      rel="shortcut icon"
      href="/static/favicons/favicon.ico?v=E6bjzNL6ob"
    />
    <meta name="msapplication-TileColor" content="#2196F3" />
    <meta
      name="msapplication-TileImage"
      content="/mstile-144x144.png?v=E6bjzNL6ob"
    />
    <meta name="theme-color" content="#2196F3" />
    <meta description="Our Expert Tutor are available 24x7 for your Homework/Assignment Help, Online Classes or Test Preparation with Zero Plagiarism." />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="https://www.tutorbro.com" />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/vinaypuppal/image/upload/v1471407715/tutorbro/icon2.png"
    />
    <meta property="og:site_name" content="TutorBro" />
    <meta
      property="og:description"
      content="Our Expert Tutor are available 24x7 for your Homework/Assignment Help, Online Classes or Test Preparation with Zero Plagiarism."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@tutorbro" />
    <meta
      name="twitter:title"
      content="TutorBro | Get Personal Tutor For Homework Help"
    />
    <meta
      name="twitter:description"
      content="Our Expert Tutor are available 24x7 for your Homework/Assignment Help, Online Classes or Test Preparation with Zero Plagiarism."
    />
    <meta
      name="twitter:image:src"
      content="https://res.cloudinary.com/vinaypuppal/image/upload/v1471407715/tutorbro/icon2.png"
    />
  </Head>
);
