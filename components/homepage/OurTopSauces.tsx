
import Image from "next/image";
import { useMedia } from "../../utils/use-media";
import Router from "next/router";
import images from "../../utils/const";
import { shimmer, toBase64 } from "../../utils/image_data";
type Props = {};

const OurTopSources: React.FC<Props> = () => {
  const mobile = useMedia("(max-width: 600px)");
  return (
    <div className="ots_wrapper">
      <p className="ots_title" style={{ fontSize: mobile ? "32px" : "48px" }}>
        OUR SAUCES
      </p>
      <div className={mobile ? "ots_desc_mobile" : "ots_desc"}>
        <p>
          Vietnamese cuisine is widely known for it&rsquo;s huge variety of
          exquisite herbs and spices. CHIN-SU, the no.1 hot sauce in Vietnam,
          was born with a great mission - to spread our cuisine values to
          Vietnamese expatriates and global &ldquo;bon viveur&rdquo; alike.
        </p>
        <p>
          Freshly made from Vietnamese specialty hot chili peppers - “Chỉ
          Thiên”, CHIN-SU hot sauce is a Vietnamese bestseller sauce designed to
          satisfy sophisticated palates & enhance the delicate taste of culinary
          masterpieces. CHIN-SU is also a beloved Asian sauce in many countries.
          &ldquo;Si eres fannático de la organic, fresh salsa picante, te
          enamorarás de esta.&rdquo;
        </p>
      </div>
      {!mobile && (
        <div className={"ots_top"}>
          <div
            className="ots_item"
            onClick={() =>
              Router.push({
                pathname: "/item-detail",
                query: { id: 1 },
              })
            }
          >
            <Image
              src={images.homepage.original}
              layout="intrinsic"
              width={404}
              height={280}
              alt=""
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(404, 280))}`}
            />
            <p className={"ots_subTitle"}>ORIGINAL HOT SAUCE</p>
          </div>
          <div
            className="ots_item"
            onClick={() =>
              Router.push({
                pathname: "/item-detail",
                query: { id: 2 },
              })
            }
          >
            <Image
              src={images.homepage.pho}
              layout="intrinsic"
              width={404}
              height={280}
              alt=""
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(404, 280))}`}
            />
            <p className={"ots_subTitle"}>PHỞ HOT SAUCE</p>
          </div>
          <div
            className="ots_item"
            onClick={() =>
              Router.push({
                pathname: "/item-detail",
                query: { id: 3 },
              })
            }
          >
            <Image
              src={images.homepage.chithien}
              layout="intrinsic"
              width={404}
              height={280}
              alt=""
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(404, 280))}`}
            />
            <p className={"ots_subTitle"}>&ldquo;CHỈ THIÊN&rdquo; HOT SAUCE</p>
          </div>
          <div
            className="ots_item"
            onClick={() =>
              Router.push({
                pathname: "/item-detail",
                query: { id: 4 },
              })
            }
          >
            <Image
              src={images.homepage.truffle}
              layout="intrinsic"
              width={404}
              height={280}
              alt=""
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(404, 280))}`}
            />
            <p className={"ots_subTitle"}>TRUFFLE HOT SAUCE</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTopSources;
