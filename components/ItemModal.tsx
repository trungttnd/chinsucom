import Link from "next/link";
import { Button, Col, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import Image from "next/image";
import { useMedia } from "../utils/use-media";
type Props = {
  isOpen: boolean;
  className?: string;
  toggle: () => void;
  item: any;
};

const ItemModal: React.FC<Props> = (props) => {
  const { isOpen, className, toggle, item } = props;
  const tablet_lans = useMedia("(max-width: 820px)");
  const mobile = useMedia("(max-width: 600px)");

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="modal_wrapper"
      backdrop="static"
      size="xl"
      fullscreen={tablet_lans || mobile ? true : false}
    >
      <ModalBody>
        <span onClick={toggle} className="modal_close">
          &times;
        </span>
        <div className={!mobile ? "_row" : "_col"} style={{ marginTop: 24 }}>
          <div className={mobile ? "modal_col_mobile" : "modal_col"}>
            <Image
              className="modal_img_main"
              src={item?.image}
              alt=""
              width={550}
              height={550}
            />
            <div className="modal_list_img">
              <div>
                <Image
                  layout="intrinsic"
                  className="modal_img"
                  src={item?.image}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
              <div style={{ margin: 4 }}></div>
              <div>
                <Image
                  layout="intrinsic"
                  className="modal_img"
                  src={item?.image}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
              <div style={{ margin: 4 }}></div>
              <div>
                <Image
                  layout="intrinsic"
                  className="modal_img"
                  src={item?.image}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
              <div style={{ margin: 4 }}></div>
              <div>
                <Image
                  layout="intrinsic"
                  className="modal_img"
                  src={item?.image}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
          <div
            className={mobile ? "modal_col_mobile" : "modal_col"}
            style={{ paddingLeft: mobile ? "1%" : "3%" }}
          >
            <span className={mobile ? "modal_title_mobile" : "modal_title"}>
              {item?.title}
            </span>
            <span
              className={mobile ? "modal_subTitle_mobile" : "modal_subTitle"}
            >
              {item?.subTitle}
            </span>
            <span className={mobile ? "modal_content_mobile" : "modal_content"}>
              {item?.content}
            </span>
            <Row xs="2" style={{ marginTop: "14px" }}>
              <Col
                className={mobile ? "modal_variant_mobile" : "modal_variant"}
              >
                <span
                  className={
                    mobile
                      ? "modal_variant_title_mobile"
                      : "modal_variant_title"
                  }
                >
                  8.82 ounce (Pack of 1)
                </span>
                <br />
                <span
                  className={
                    mobile
                      ? "modal_variant_price_mobile"
                      : "modal_variant_price"
                  }
                >
                  $7.99
                </span>
              </Col>
              <Col
                className={mobile ? "modal_variant_mobile" : "modal_variant"}
                style={{ border: "2px solid #EEDCDC" }}
              >
                <span
                  className={
                    mobile
                      ? "modal_variant_title_mobile"
                      : "modal_variant_title"
                  }
                >
                  8.82 ounce (Pack of 1)
                </span>
                <br />
                <span
                  className={
                    mobile
                      ? "modal_variant_price_mobile"
                      : "modal_variant_price"
                  }
                >
                  $7.99
                </span>
              </Col>
              <Col
                className={mobile ? "modal_variant_mobile" : "modal_variant"}
                style={{ border: "2px solid #EEDCDC" }}
              >
                <span
                  className={
                    mobile
                      ? "modal_variant_title_mobile"
                      : "modal_variant_title"
                  }
                >
                  8.82 ounce (Pack of 1)
                </span>
                <br />
                <span
                  className={
                    mobile
                      ? "modal_variant_price_mobile"
                      : "modal_variant_price"
                  }
                >
                  $7.99
                </span>
              </Col>
            </Row>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ItemModal;
