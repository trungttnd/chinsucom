import Head from "next/head";
import Script from "next/script";
import React, { Fragment } from "react";
import Header from "./Header";
import Bottom from "./homepage/Bottom";
import NoneSSRWrapper from "./NoneSSRWrapper";

type Props = {
  pageTitle?: string;
  children?: any;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        /> */}
        <Fragment>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XDBDEBEQW3"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XDBDEBEQW3');
        `}
          </Script>
        </Fragment>
      </Head>
      <NoneSSRWrapper>
        <div className="wrap-page">
          <div className="zoom-page">
            <Header />
            <div>{props.children}</div>
            <Bottom />
          </div>
        </div>
      </NoneSSRWrapper>
    </>
  );
};
export default Layout;
