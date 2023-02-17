import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Introduce from "../components/homepage/Introduce";
import OurTopSources from "../components/homepage/OurTopSauces";
import Slider from "../components/homepage/Slider";
import Subcribe from "../components/homepage/Subcribe";
import VideoList from "../components/homepage/VideoList";
import NoneSSRWrapper from "../components/NoneSSRWrapper";
import images from "../utils/const";
import { shimmer, toBase64 } from "../utils/image_data";

export const config = {
  unstable_runtimeJS: false,
};

const Home: NextPage = () => {
  return (
    <>
      <Slider />
      <OurTopSources />
      <Introduce />
      <VideoList />
      {/* FOOTER BANNER */}
      <div style={{ width: "100%" }}>
        <Image
          className="footer_banner"
          src={images.homepage.bottom}
          width="1920"
          height="594"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          alt=""
        />
      </div>
      <Subcribe />
    </>
  );
};

export default Home;
