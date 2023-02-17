import { NextPage } from "next";
import Image from "next/image";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Row,
} from "reactstrap";
import Subcribe from "../components/homepage/Subcribe";
import VideoList from "../components/homepage/VideoList";
import { shimmer, toBase64 } from "../utils/image_data";
import { useMedia } from "../utils/use-media";
import { useState } from "react";
import images from "../utils/const";

const items = [
  { id: 1, url: images.gallery.original },
  { id: 2, url: images.gallery.pho },
  { id: 3, url: images.gallery.chi_thien },
  { id: 4, url: images.gallery.truffle },
];

const Gallery: NextPage = () => {
  const mobile = useMedia("(max-width: 600px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <Image src={item.url} width={430} height={430} alt="" />
      </CarouselItem>
    );
  });
  return (
    <div style={{ marginTop: mobile ? "0px" : "120px" }}>
      <div
        className="ots_wrapper"
        style={{ marginTop: mobile ? "0px" : "170px" }}
      >
        <p
          className="ots_title"
          style={{
            fontSize: mobile ? "32px" : "48px",
            textDecoration: "underline",
          }}
        >
          GALLERY
        </p>
      </div>
      {/* list product */}
      {!mobile ? (
        <Row md={4}>
          {items.map((it, index) => {
            return (
              <div key={index}>
                <Image
                  layout="intrinsic"
                  src={it.url}
                  width="430"
                  height={430}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(430, 430)
                  )}`}
                  alt=""
                />
              </div>
            );
          })}
        </Row>
      ) : (
        <>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            fade={true}
            // {...args}
          >
            
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
              className="ingre_carousel_indi"
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </>
      )}
      {/* banner top */}
      <div style={{ marginTop: "32px" }}>
        <Image
          layout="responsive"
          src={images.gallery.banner_top}
          width="1920"
          height={1120}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(1920, 1120)
          )}`}
          alt=""
        />
      </div>
      {/* gallery */}
      {!mobile ? (
        <>
          <Row md={2} style={{ padding: "32px 64px" }}>
            <div>
              <Image
                layout="responsive"
                width="840"
                height="1040"
                placeholder="blur"
                src={images.gallery.gallery1}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(840, 1040))}`}
                alt=""
              />
            </div>
            <Col>
              <div>
                <Image
                  layout="responsive"
                  width="840"
                  height="500"
                  placeholder="blur"
                  src={images.gallery.gallery5}
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(840, 500))}`}
                  alt=""
                />
              </div>
              <div style={{ marginTop: "38px" }}>
                <Image
                  layout="responsive"
                  width="840"
                  height="500"
                  placeholder="blur"
                  src={images.gallery.gallery2}
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(840, 500))}`}
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Row md={2} style={{ padding: "0px 64px" }}>
            <div>
              <Image
                layout="responsive"
                width="840"
                height="500"
                placeholder="blur"
                src={images.gallery.gallery3}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(840, 500))}`}
                alt=""
              />
            </div>
            <div>
              <Image
                layout="responsive"
                width="840"
                height="500"
                placeholder="blur"
                src={images.gallery.gallery4}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(840, 500))}`}
                alt=""
              />
            </div>
          </Row>
        </>
      ) : (
        <>
          <Row xs={2} style={{ padding: "8px 8px" }}>
            <div style={{ padding: "0 4px" }}>
              <Image
                layout="responsive"
                width="176"
                height="360"
                placeholder="blur"
                src={images.gallery.mobile1}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(176, 360))}`}
                alt=""
              />
            </div>
            <Col style={{ padding: "0 4px" }}>
              <div>
                <Image
                  layout="responsive"
                  width="176"
                  height="176"
                  placeholder="blur"
                  src={images.gallery.mobile2}
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(176, 176))}`}
                  alt=""
                />
              </div>
              <div style={{ marginTop: "8px" }}>
                <Image
                  layout="responsive"
                  width="176"
                  height="176"
                  placeholder="blur"
                  src={images.gallery.mobile3}
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(176, 176))}`}
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Row xs={2} style={{ padding: "0px 8px" }}>
            <div style={{ padding: "0 4px" }}>
              <Image
                layout="responsive"
                width="176"
                height="176"
                placeholder="blur"
                src={images.gallery.mobile4}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(176, 176))}`}
                alt=""
              />
            </div>
            <div style={{ padding: "0 4px" }}>
              <Image
                layout="responsive"
                width="176"
                height="176"
                placeholder="blur"
                src={images.gallery.mobile5}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(176, 176))}`}
                alt=""
              />
            </div>
          </Row>
          <div style={{ padding: "8px 0px" }}>
            <Image
              layout="responsive"
              width="360"
              height="251"
              placeholder="blur"
              src={images.gallery.mobile6}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(360, 251))}`}
              alt=""
            />
          </div>
        </>
      )}
      <div style={{ marginTop: mobile ? 16 : 32 }}></div>
      <VideoList />
      <Subcribe />
    </div>
  );
};

export default Gallery;
