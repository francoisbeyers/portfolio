import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Script from "next/script";

export default function Document() {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}');
          `}
        </Script>
        <meta
          name="google-site-verification"
          content="Nosr2IBs_5qu2iZfClz5YndbSpsbh0waBvBBcC4rrKc"
        />
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
