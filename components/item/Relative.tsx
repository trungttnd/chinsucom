import Image from "next/image";
import Router from "next/router";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { toBase64, shimmer } from "../../utils/image_data";
import { useMedia } from "../../utils/use-media";
type Props = {
  item: any;
};
const Relative: React.FC<Props> = (props) => {
  const { item } = props;
  const mobile = useMedia("(max-width: 600px)");
  return (
    <>
      <div style={{ paddingBottom: 50, width: "100%" }}>
        <p className={mobile ? "relative_title_mobile" : "relative_title"}>
          {" "}
          YOU MIGHT ALSO LIKE
        </p>
        <div className={mobile ? "relative_col" : "relative_row"}>
          {item?.relatives.map((rl: any, index: number) => {
            return (
              <div
                key={index}
                className={
                  mobile ? "relative_wrapper_mobile" : "relative_wrapper"
                }
                onClick={() =>
                  Router.push({
                    pathname: "/item-detail",
                    query: { id: rl.itemId },
                  })
                }
              >
                <div>
                  <Image
                    layout="responsive"
                    width={545}
                    height={545}
                    src={rl.image}
                    alt=""
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(545, 545)
                    )}`}
                  />
                </div>
                <div
                  className={mobile ? "relative_btn_mobile" : "relative_btn"}
                >
                  <span
                    className={
                      mobile ? "relative_text_mobile" : "relative_text"
                    }
                  >
                    {rl.name}
                  </span>
                  <BsFillArrowRightCircleFill
                    className={
                      mobile ? "relative_icon_mobile" : "relative_icon"
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Relative;
