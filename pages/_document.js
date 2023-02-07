import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
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
