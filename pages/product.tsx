import { NextPage } from "next";
import Introduce from "../components/homepage/Introduce";
import Image from "next/image";
import Subcribe from "../components/homepage/Subcribe";
import { shimmer, toBase64 } from "../utils/image_data";
import { useMedia } from "../utils/use-media";
import images from "../utils/const";

const Product: NextPage = () => {
  const mobile = useMedia("(max-width: 600px)");
  return (
    <>
      <div className="ots_wrapper" style={{marginTop: mobile?"0px":"170px"}}>
        <p className="ots_title" style={{ fontSize: mobile ? "32px" : "48px", textDecoration: "underline" }}>
          PRODUCTS
        </p>
      </div>
      <Introduce />
      <div style={{ width: "100%" }}>
        <Image
          className="footer_banner"
          src={images.products.bottom}
          width="1920"
          height="594"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(1920, 594)
          )}`}
          alt=""
        />
      </div>
      <Subcribe />
    </>
  );
};

export default Product;
