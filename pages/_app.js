import MyourHead from "@/src/layouts/MyourHead";
import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import Script from 'next/script';
import { Fragment, useEffect, useState } from "react";
import Hotjar from '@hotjar/browser';

const siteId = 5111272;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <MyourHead />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-80THPPEDXY`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-80THPPEDXY', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {loader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
