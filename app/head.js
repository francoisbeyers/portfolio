import Script from "next/script";

export default function Head() {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <>
      <title>Francois Beyers - Web Development and SEO | beyers.tech</title>
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
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Transform your online presence with personalised web development & SEO services. Experienced freelancer, Francois Beyers crafts custom websites for top search engine performance. Let's bring your vision to life."
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
