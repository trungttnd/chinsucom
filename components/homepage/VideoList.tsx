import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useMedia } from "../../utils/use-media";
import { BsFillPlayCircleFill } from "react-icons/bs";
import VideoModal from "../VideoModal";
import images from "../../utils/const";
import { shimmer, toBase64 } from "../../utils/image_data";
import video1 from "../../public/video1.webp";
import video2 from "../../public/video2.webp";
import video3 from "../../public/video3.webp";
import video4 from "../../public/video4.webp";
type Props = {};
// const videoUrl = "https://www.youtube.com/embed/q3F3131WdVc?autoplay=1&mute=1&showinfo=0&loop=1&playlist=q3F3131WdVc";
// const videoUrl = "https://www.youtube.com/embed/sKhzvDLe09I";
const listVideo = [
  {
    id: 0,
    url: "https://www.youtube.com/embed/sKhzvDLe09I",
    thumbnail: video1,
  },
  {
    id: 1,
    url: "https://www.youtube.com/embed/7KZSCp0qt6g",
    thumbnail: video2,
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/CTDRd7Gy1qY",
    thumbnail: video3,
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/9tdvGwUg1kE",
    thumbnail: video4,
  },
];
const VideoList: React.FC<Props> = () => {
  const mobile = useMedia("(max-width: 600px)");
  const [videoUrl,setVideoUrl] = useState("https://www.youtube.com/embed/sKhzvDLe09I");

  const [currentItem, setCurrentItem] = useState<any>();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ backgroundColor: "black" }}>
      <p className={mobile ? "video_title_mobile" : "video_title"}>
        {" "}
        THE ORIGINAL VIETNAMESE HOT SAUCE
      </p>
      {!mobile && (
        <div className="video_desc">
          <p>
          The most-loved hot sauce in Vietnam shall add a kick of heat and robust flavor to your everyday meals!
          </p>
        </div>
      )}
      {/* <div id="videoFrame" className={mobile?"video_frame_mobile":"video_frame"}>
        <iframe
          width="100%"
          height="100%"
        //   style={{ maxHeight: "720px" }}
          src={videoUrl}
          title="Video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
      <div className={mobile ? "video_frame_mobile" : "video_frame"}>
        <ReactPlayer
          url={videoUrl}
          controls={true}
          playing={playing}
          onPlay={()=>setPlaying(true)}
          loop={false}
          width={mobile ? "100%" : "60%"}
          // height={500}
          style={{ display: "block", margin: "0 auto" }}
        />
      </div>
      <div>
        <div
          className="_row"
          style={{ justifyContent: "center", paddingBottom: 32, marginTop: 16 }}
        >
          {listVideo?.map((li, index) => {
            return (
              <div key={index} className="video_wrapper" style={{margin: mobile? "4px":"16px"}}>
                <div style={{border: "double"}}>
                  <Image
                    layout="responsive"
                    placeholder="blur"
                    src={li.thumbnail}
                    width={580}
                    height={306}
                    alt=""
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(580, 306))}`}
                    onClick={() => {
                      setVideoUrl(li.url);
                      setPlaying(true)
                    }}
                    // onClick={() => {
                    //   setPlaying(false);
                    //   setCurrentItem(li.url);
                    //   toggle();
                    // }}
                  />
                  <div className="video_center">
                    <BsFillPlayCircleFill className="video_btn" 
                    style={{fontSize: mobile?"20px":"32px"}}
                    onClick={() => {
                      setVideoUrl(li.url);
                      setPlaying(true)
                    }}
                    // onClick={() => {
                    //   setPlaying(false)
                    //   setCurrentItem(li.url);
                    //   toggle();
                    // }}
                    />
                    </div>
                </div>
              </div>
            );
          })}

          
        </div>
      </div>
      {/* <VideoModal isOpen={modal} toggle={toggle} url={currentItem} /> */}
    </div>
  );
};

export default VideoList;
