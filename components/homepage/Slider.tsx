
import Image from "next/image";
import images from "../../utils/const";
import { shimmer, toBase64 } from "../../utils/image_data";
import { useMedia } from "../../utils/use-media";
type Props = {};

const Slider: React.FC<Props> = () => {
  const mobile = useMedia("(max-width: 600px)");
  return mobile ? (
    <div className="slider_mobile">
      <Image
        layout="intrinsic"
        width="600"
        height="600"
        placeholder="blur"
        src={images.homepage.slider_mobile}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 600))}`}
        alt=""
      />
    </div>
  ) : (
    <div className="slider">
      <Image
        layout="intrinsic"
        width="1920"
        height="1188"
        placeholder="blur"
        src={images.homepage.slider}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1188))}`}
        alt=""
      />
    </div>
  );
};
export default Slider;
