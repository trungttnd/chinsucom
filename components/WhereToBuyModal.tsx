import { Modal, ModalBody } from "reactstrap";
import { useMedia } from "../utils/use-media";
import Image from "next/image";
import { shimmer, toBase64 } from "../utils/image_data";
import images from "../utils/const";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Router from "next/router";

type Props = {
  isOpen: boolean;
  className?: string;
  toggle: () => void;
};

const WhereToBuyModal: React.FC<Props> = (props) => {
  const { isOpen, className, toggle } = props;
//   const mobile = useMedia("(max-width: 600px)");
  const mobile = useMedia("(max-width: 820px)");

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="modal_wrapper"
      backdrop="static"
      size="xl"
    //   size={tablet_lans|| mobile?"xl":"lg"}
      // fullscreen={ mobile ? true : false}
    >
      <ModalBody>
        <span onClick={toggle} className="modal_close">
          &times;
        </span>
        <div className="wtb_modal_wrapper">
          <div className="wtb_title">WHERE TO TRY</div>
          <div className={mobile?"_col":"_row"}>
            <div className={mobile?"wtb_col_mobile":"wtb_col"}>
              <div className="wtb_shop_img" style={{}}>
                <Image
                  layout="responsive"
                  width="331"
                  height="196"
                  placeholder="blur"
                  src={images.wtb.jenny_pho}
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(331, 196)
                  )}`}
                  alt=""
                  className="wtb_image"
                />
              </div>
              <div className="wtb_shop_title">Jenny Phở</div>
              <div className="wtb_shop_info">
                <u>Address</u>: 1810 12th Ave NW D, Issaquah, WA 98027, United States
                <br />
                <u>Phone</u>: <a href="tel: +1 425-427-0057">+1 425-427-0057</a>
              </div>
            </div>
            <div className={mobile?"wtb_col_mobile":"wtb_col"}>
              <div className="wtb_shop_img">
                <Image
                  layout="responsive"
                  width="331"
                  height="196"
                  placeholder="blur"
                  src={images.wtb.lemongrass}
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(331, 196)
                  )}`}
                  alt=""
                  className="wtb_image"
                />
              </div>
              <div className="wtb_shop_title">Lemongrass</div>
              <div className="wtb_shop_info">
                <u>Address</u>: 365 S Grady Way, Renton, WA 98057, United States{" "}
                <br />
                <u>Phone</u>: <a href="tel:+1 425-228-2000">+1 425-228-2000</a>
              </div>
            </div>
          </div>
          <div className="_row" style={{marginTop: 24}}>
            <div className="wtb_title">WHERE TO TRY</div>
            <div>
              <Image
                layout="intrinsic"
                width={145}
                height={36}
                src={images.wtb.amazon_logo}
                alt=""
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(145, 36)
                )}`}
              />
            </div>
          </div>
          <div className={mobile?"_col":"_row"} style={{ justifyContent: "space-between" }}>
            <div
              className={mobile?"wtb_item_mobile":"wtb_item"}
              onClick={() => {
                Router.push(
                  "https://www.amazon.com/stores/page/CFF3F816-9E26-4AA1-8591-309E21417560?ingress=0&visitId=f77f78c6-002d-445a-842b-c5370c16cc9a&ref_=ast_bln"
                );
              }}
            >
              <div>
                <Image
                  layout="responsive"
                  width={240}
                  height={240}
                  src={images.wtb.original}
                  alt=""
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(240, 240)
                  )}`}
                />
              </div>
              <div className="wtb_btn">
                <span className={mobile?"wtb_btn_text_mobile":"wtb_btn_text"}>ORIGINAL HOT SAUCE</span>
                <BsFillArrowRightCircleFill className={mobile?"wtb_icon_mobile":"wtb_icon"} />
              </div>
            </div>

            <div
              className={mobile?"wtb_item_mobile":"wtb_item"}
              onClick={() => {
                Router.push(
                  "https://www.amazon.com/stores/page/DCCA2642-170D-4FB0-A9AF-67E705F2BAD0?ingress=2&visitId=f77f78c6-002d-445a-842b-c5370c16cc9a&ref_=ast_bln"
                );
              }}
            >
              <div>
                <Image
                  layout="responsive"
                  width={240}
                  height={240}
                  src={images.wtb.pho}
                  alt=""
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(240, 240)
                  )}`}
                />
              </div>
              <div className="wtb_btn">
                <span className={mobile?"wtb_btn_text_mobile":"wtb_btn_text"}>PHỞ HOT SAUCE</span>
                <BsFillArrowRightCircleFill className={mobile?"wtb_icon_mobile":"wtb_icon"} />
              </div>
            </div>

            <div
              className={mobile?"wtb_item_mobile":"wtb_item"}
              onClick={() => {
                Router.push(
                  "https://www.amazon.com/stores/page/CA4FDA78-F6CD-4C19-86C9-3540C66D7E07?ingress=2&visitId=f77f78c6-002d-445a-842b-c5370c16cc9a&ref_=ast_bln"
                );
              }}
            >
              <div>
                <Image
                  layout="responsive"
                  width={240}
                  height={240}
                  src={images.wtb.chi_thien}
                  alt=""
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(240, 240)
                  )}`}
                />
              </div>
              <div className="wtb_btn">
                <span className={mobile?"wtb_btn_text_mobile":"wtb_btn_text"}>CHỈ THIÊN HOT SAUCE</span>
                <BsFillArrowRightCircleFill className={mobile?"wtb_icon_mobile":"wtb_icon"} />
              </div>
            </div>

            <div
              className={mobile?"wtb_item_mobile":"wtb_item"}
              onClick={() => {
                Router.push(
                  "https://www.amazon.com/stores/page/66822041-FBFF-4288-89A1-23843AB8F994?ingress=2&visitId=f77f78c6-002d-445a-842b-c5370c16cc9a&ref_=ast_bln"
                );
              }}
            >
              <div>
                <Image
                  layout="responsive"
                  width={240}
                  height={240}
                  src={images.wtb.truffle}
                  alt=""
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(240, 240)
                  )}`}
                />
              </div>
              <div className="wtb_btn">
                <span className={mobile?"wtb_btn_text_mobile":"wtb_btn_text"}>TRUFFLE HOT SAUCE</span>
                <BsFillArrowRightCircleFill className={mobile?"wtb_icon_mobile":"wtb_icon"} />
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default WhereToBuyModal;
