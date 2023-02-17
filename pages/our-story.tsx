import { NextPage } from "next";
import Subcribe from "../components/homepage/Subcribe";
import { useMedia } from "../utils/use-media";
import Image from "next/image";
import { Row } from "reactstrap";
import { shimmer, toBase64 } from "../utils/image_data";
import images from "../utils/const";

const items = [
  { id: 1, url: images.ourStory.original },
  { id: 2, url: images.ourStory.pho },
  { id: 3, url: images.ourStory.chi_thien },
  { id: 4, url: images.ourStory.truffle },
];
const OurStory: NextPage = () => {
  const mobile = useMedia("(max-width: 600px)");
  return (
    <div style={{ marginTop: mobile ? "0px" : "120px" }}>
      <div style={{ marginBottom: mobile ? "0px" : "32px" }}>
        <Image
          layout="responsive"
          width="1920"
          height="1188"
          placeholder="blur"
          src={images.ourStory.banner1}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(1920, 1188)
          )}`}
          alt=""
        />
      </div>
      <div
        className="ourStory_container"
        style={{ marginBottom: mobile ? "16px" : "32px" }}
      >
        <div>
          {mobile ? (
            <Image
              layout="responsive"
              width="360"
              height="1285"
              placeholder="blur"
              src={images.ourStory.banner_mobile1}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(360, 1285)
              )}`}
              alt=""
            />
          ) : (
            <Image
              layout="responsive"
              width="1920"
              height="600"
              placeholder="blur"
              src={images.ourStory.banner2}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(1920, 600)
              )}`}
              alt=""
            />
          )}
        </div>
        <div
          className={mobile ? "ourStory_banner2_mobile" : "ourStory_banner2"}
        >
          Vietnamese cuisine is widely known for its huge variety of exquisite
          herbs and spices. CHIN-SU, the no.1 hot sauce in Vietnam, was born
          with a great mission - to spread our cuisine values to Vietnamese
          expatriates and global &lsquo;bon viveur&rsquo; alike. <br />
          <br />
          Freshly made from Vietnamese specialty hot chili peppers -{" "}
          <strong>&ldquo;Chỉ Thiên&rdquo;, CHIN-SU hot sauce</strong> is a
          Vietnamese bestseller sauce designed to satisfy sophisticated palates
          & enhance the delicate taste of culinary masterpieces. CHIN-SU is also
          a beloved Asian sauce in many countries. &ldquo;Si eres fannático de
          la organic, fresh salsa picante, te enamorarás de esta.&rdquo; <br />
          <br />
          CHIN-SU hot sauce offers the perfect balance of savory sweetness &
          delicious spiciness in each bottle, the pleasant kind of
          &ldquo;kick&rdquo; that lingers in your taste buds even after you have
          finished eating. Once you taste it, it&rsquo;s the one-way ticket
          towards liking it. It&rsquo;s that good to put on any of your favorite
          meals!
        </div>
      </div>
      <div style={{ marginBottom: mobile ? "16px" : "32px" }}>
        {mobile ? (
          <Image
            layout="responsive"
            width="360"
            height="360"
            placeholder="blur"
            src={images.ourStory.banner_mobile2}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(360, 360))}`}
            alt=""
          />
        ) : (
          <Image
            layout="responsive"
            width="1920"
            height="596"
            placeholder="blur"
            src={images.ourStory.banner3}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 596))}`}
            alt=""
          />
        )}
      </div>
      {mobile && (
        <div>
          <Image
            layout="responsive"
            width="360"
            height="606"
            placeholder="blur"
            src={images.ourStory.banner_mobile3}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(360, 606))}`}
            alt=""
          />
        </div>
      )}
      <div
        className="ourStory_container"
        style={{ marginBottom: mobile ? "0px" : "32px" }}
      >
        <div>
          {mobile ? (
            <Image
              layout="responsive"
              width="360"
              height="514"
              placeholder="blur"
              src={images.ourStory.banner_mobile4}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(360, 514))}`}
              alt=""
            />
          ) : (
            <Image
              layout="responsive"
              width="1920"
              height="1188"
              placeholder="blur"
              src={images.ourStory.banner4}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1188))}`}
              alt=""
            />
          )}
        </div>
        <div
          className={mobile ? "ourStory_banner4_mobile" : "ourStory_banner4"}
        >
          Chỉ Thiên hot chili peppers is the main ingredient in a bottle of
          CHIN-SU hot sauce. This arrow-shaped chili peppers is as small as your
          little finger & always grows toward the sky to absorb the largest
          amount of sunlight. Hence, it possesses the fiery heat that can go up
          to 250,000SHU! <br />
          <br />
          Ripen &ldquo;Chỉ Thiên&rdquo; chili peppers are hand-picked since the
          early morning, then carefully fermented with fresh garlic, salt, and
          pepper to create each bottle of CHIN-SU hot sauce.
        </div>
      </div>
      {mobile && (
        <div style={{ marginBottom: "16px" }}>
          <Image
            layout="responsive"
            width="360"
            height="640"
            placeholder="blur"
            src={images.ourStory.banner_mobile5}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(360, 640))}`}
            alt=""
          />
        </div>
      )}
      {/* list products */}
      <Row md={4} xs={2} style={{ padding: "0" }}>
        {items.map((it, index) => {
          return (
            <div key={index} style={{ padding: "0 4px" }}>
              <Image
                layout="intrinsic"
                width="464"
                height="466"
                placeholder="blur"
                src={it.url}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(464, 466))}`}
                alt=""
              />
            </div>
          );
        })}
      </Row>
      {/* bottom */}
      <div style={{ marginTop: mobile ? "16px" : "32px" }}>
        <div>
          <Image
            layout="responsive"
            width="1920"
            height="960"
            placeholder="blur"
            src={images.ourStory.bottom}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 960))}`}
            alt=""
          />
        </div>
      </div>
      <Subcribe />
    </div>
  );
};

export default OurStory;
