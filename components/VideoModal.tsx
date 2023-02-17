import ReactPlayer from "react-player";
import { Modal, ModalBody } from "reactstrap";
import { useMedia } from "../utils/use-media";

type Props = {
  isOpen: boolean;
  className?: string;
  toggle: () => void;
  url?: string;
};

const VideoModal: React.FC<Props> = (props) => {
  const { isOpen, className, toggle, url } = props;
  const mobile = useMedia("(max-width: 600px)");
  const tablet_lans = useMedia("(max-width: 820px)");
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="modal_wrapper"
      backdrop="static"
      size="lg"
    //   fullscreen={tablet_lans || mobile ? true : false}
    >
      <ModalBody style={{backgroundColor:"#000"}}>
        <span onClick={toggle} className="modal_close" style={{color: "#FFF"}}>
          &times;
        </span>
        <br/>
        <div className={mobile ? "video_frame_mobile" : "video_frame"}>
          <ReactPlayer
            url={url}
            controls={true}
            playing={true}
            // light={true}
            loop={false}
            width="100%"
            // height={500}
            style={{ display: "block", margin: "0 auto", backgroundColor: "#000000" }}
          />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default VideoModal;
