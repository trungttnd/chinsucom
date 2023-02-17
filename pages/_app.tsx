import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import "../styles/overlaymenu.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout pageTitle="Chinsu">
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
