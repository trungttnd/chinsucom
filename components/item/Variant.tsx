import { useMedia } from "../../utils/use-media";
import Image from "next/image";
import { Col, Row } from "reactstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import { shimmer, toBase64 } from "../../utils/image_data";
type Props = {
  item: any;
};
const Variant: React.FC<Props> = (props) => {
  const { item } = props;
  const mobile = useMedia("(max-width: 600px)");
  const [image, setImage] = useState(item?.imageUrls[0]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    setImage(item?.imageUrls[0]);
  }, [item]);

  return (
    <>
      <div className={mobile ? "_col" : "_row"}>
        <div className={mobile ? "modal_col_mobile" : "modal_col"}>
          <Image
            className="modal_img_main"
            src={image}
            alt=""
            width={960}
            height={960}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(960, 960)
            )}`}
          />
          <div className="modal_list_img" style={{ cursor: "pointer" }}>
            {item?.imageUrls.map((im: any, index: number) => {
              if (index === 4) return null;
              return (
                <div key={index} className="variant_img">
                  <Image
                    layout="intrinsic"
                    className="modal_img"
                    src={im}
                    alt=""
                    width={180}
                    height={180}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(180, 180)
                    )}`}
                    onClick={() => setImage(im)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={mobile ? "modal_col_mobile" : "modal_col"}
          style={{
            marginTop: mobile ? "16px" : "100px",
            padding: mobile ? "0 16px" : "0 54px",
          }}
        >
          <span className={mobile ? "modal_title_mobile" : "modal_title"}>
            {item?.title}
          </span>
          <span className={mobile ? "modal_subTitle_mobile" : "modal_subTitle"}>
            {item?.subTitle}
          </span>
          <span
            className={mobile ? "modal_content_mobile" : "modal_content"}
            style={{ marginTop: "16px" }}
          >
            {item?.content}
          </span>
          <Row
            xs="3"
            style={{ marginTop: "14px", justifyContent: "flex-start" }}
          >
            {item?.variant?.map((va: any, index: number) => {
              return (
                <Col
                  key={index}
                  className={
                    mobile ? "detail_variant_mobile" : "detail_variant"
                  }
                  style={{
                    border:
                      va.id === current
                        ? "2px solid #A82F27"
                        : "2px solid #EEDCDC",
                    cursor: "pointer",
                  }}
                  onClick={() => setCurrent(va.id)}
                >
                  <span
                    className={
                      mobile
                        ? "modal_variant_title_mobile"
                        : "modal_variant_title"
                    }
                  >
                    {va.title}
                  </span>
                  <br />
                  <span
                    className={
                      mobile
                        ? "modal_variant_price_mobile"
                        : "modal_variant_price"
                    }
                  >
                    {va.price}
                  </span>
                </Col>
              );
            })}
          </Row>
          {item?.variant.length === 0 && (
            <div className={mobile ? "amazon_area_mobile" : "amazon_area"}>
              <Link href="https://www.amazon.com/ORIGINAL-VIETNAMESE-CHIN-Gourmet-Fermented/dp/B0B8DK8CVK/ref=sr_1_3?keywords=chinsu%2Btuong%2Bot&qid=1661501397&sr=8-3&th=1">
                <a>
                  <span
                    className={
                      mobile
                        ? "modal_variant_title_mobile"
                        : "modal_variant_title"
                    }
                  >
                    8.80 ounce(Pack of 1)
                  </span>
                  <div
                    className={
                      mobile
                        ? "modal_variant_price_mobile"
                        : "modal_variant_price"
                    }
                  >
                    Available on Amazon only
                  </div>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Variant;
