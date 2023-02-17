import { useMedia } from "../../utils/use-media";
import Image from "next/image";
import { shimmer, toBase64 } from "../../utils/image_data";
type Props = {
  item: any;
};

const Description: React.FC<Props> = (props) => {
  const { item } = props;
  const mobile = useMedia("(max-width: 600px)");
  return (
    <div>
      <div className={mobile ? "_col" : "_row"}>
        {!mobile && (
          <div
            className={
              mobile ? "introduce_padding_mobile" : "introduce_padding"
            }
            style={{
              backgroundColor: "#000000",
              paddingLeft: "24px",
            }}
          >
            <div
              style={{
                paddingBottom: mobile ? "16px" : 0,
                paddingTop: mobile ? "16px" : 0,
              }}
            >
              <p className="introduce_title" style={{}}>
                PRODUCT DESCRIPTION
              </p>
              {item?.details?.map((dt: any, index: number) => {
                return (
                  <div style={{ marginTop: "24px" }} key={index}>
                    <div className="introduce_mark">
                      <p className="number">{dt.index}</p>
                    </div>

                    <p className="introduce_content_detail">
                      <span className="description_sub">{dt.title}</span>
                      <br />
                      <span className="description_note">{dt.note}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div
          style={{
            position: "relative",
            width: mobile ? "100%" : "50%",
            height: "inherit",
            marginTop: mobile ? "16px" : 0,
          }}
        >
          <div className="_row">
            <div
              className="_col"
              style={{
                position: "relative",
                width: "50%",
                height: "inherit",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "50%",
                }}
              >
                <Image
                  layout="fill"
                  src={item.desc_images?.topLeft}
                  width={514}
                  height={480}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(514, 480)
                  )}`}
                  alt=""
                />
              </div>
              <div
                style={{
                  position: "relative",
                  height: "50%",
                }}
              >
                <Image
                  layout="fill"
                  src={item.desc_images?.bottomLeft}
                  width={514}
                  height={480}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(514, 480)
                  )}`}
                  alt=""
                />
              </div>
            </div>
            <div
              style={{
                position: "relative",
                width: "50%",
                height: "inherit",
              }}
            >
              <Image
                layout="responsive"
                src={item.desc_images?.right}
                width={446}
                height={960}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(446, 960)
                )}`}
                alt=""
              />
            </div>
          </div>
        </div>
        {mobile && (
          <div
            className={
              mobile ? "introduce_padding_mobile" : "introduce_padding"
            }
            style={{
              backgroundColor: "#000000",
              paddingLeft: "24px",
            }}
          >
            <div
              style={{
                paddingBottom: mobile ? "16px" : 0,
                paddingTop: mobile ? "16px" : 0,
              }}
            >
              <p
                className={
                  mobile ? "introduce_title_mobile" : "introduce_title"
                }
              >
                PRODUCT DESCRIPTION
              </p>
              {item?.details?.map((dt: any, index: number) => {
                return (
                  <div
                    style={
                      mobile
                        ? {
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "16px",
                          }
                        : { marginTop: "16px" }
                    }
                    key={index}
                  >
                    <div className="introduce_mark">
                      <p className="number">{dt.index}</p>
                    </div>

                    <p
                      className={
                        mobile
                          ? "introduce_content_mobile"
                          : "introduce_content"
                      }
                    >
                      <span
                        className={
                          mobile ? "description_sub_mobile" : "description_sub"
                        }
                      >
                        {dt.title}
                      </span>
                      {!mobile && <br />}
                      <span
                        className={
                          mobile
                            ? "description_note_mobile"
                            : "description_note"
                        }
                      >
                        {dt.note}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
