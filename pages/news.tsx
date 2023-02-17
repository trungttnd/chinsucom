import { NextPage } from "next";
import { useMedia } from "../utils/use-media";
import Image from "next/image";
import images from "../utils/const";
import { shimmer, toBase64 } from "../utils/image_data";
import { Row } from "reactstrap";
import Subcribe from "../components/homepage/Subcribe";
import Link from "next/link";
const contents = [
  {
    title: "CHIN-SU ORIGINAL HOT SAUCE",
    desc: "Chili garlic sauce that offers a perfect harmony of sweetness & delicious spiciness. It goes well with all kinds of foods.",
    image: images.news.mobile1,
  },
  {
    title: "CHIN-SU TRUFFLE HOT SAUCE",
    desc: "Gourmet hot sauce with Black Truffles for real Asian & Western fine dining experiences.",
    image: images.news.mobile2,
  },
  {
    title: "CHIN-SU PHỞ HOT SAUCE",
    desc: "The staple hot sauce for authentic taste of Phở – Vietnam’s most-loved cuisine.",
    image: images.news.mobile3,
  },
  {
    title: "CHIN-SU CHỈ THIÊN HOT SAUCE",
    desc: 'Extra hot to heat up your palate, the right kind of "kick" that will make you crave for it even more!',
    image: images.news.mobile4,
  },
];
const News: NextPage = () => {
  const mobile = useMedia("(max-width: 600px)");
  return (
    <div style={{ marginTop: mobile ? "0px" : "120px" }}>
      <div style={{ marginBottom: mobile ? "0px" : "32px" }}>
        {mobile ? (
          <Image
            layout="responsive"
            width="360"
            height="250"
            placeholder="blur"
            src={images.news.banner_top_mobile}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(360, 250)
            )}`}
            alt=""
          />
        ) : (
          <Image
            layout="responsive"
            width="1920"
            height="1000"
            placeholder="blur"
            src={images.news.banner_top}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1920, 1000)
            )}`}
            alt=""
          />
        )}
      </div>
      <div>
        <p className="ots_title" style={{ fontSize: mobile ? "32px" : "48px" }}>
          NEWS
        </p>
        <div className={mobile ? "ots_desc_mobile" : "ots_desc"}>
          <p>
            Vietnamese cuisine is widely known for its huge variety of exquisite
            herbs and spices. CHIN-SU, the no.1 hot sauce in Vietnam, was born
            with a great mission - to spread our cuisine values to Vietnamese
            expatriates and global &lsquo;bon viveur&rsquo; alike.
          </p>
          <p>
            For the first time in the US market (Seattle), CHIN-SU proudly
            presents our new hot sauce portfolio, which includes 4 products that
            will amplify all Americans &lsquo;dishes with exciting flavors.
          </p>
        </div>
      </div>
      {mobile?
      <div>
        {contents.map((el, index)=>{
            return (<div key={index}>
            <div>
            <Image
            layout="responsive"
            width="360"
            height="600"
            placeholder="blur"
            src={el.image}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(360, 600)
            )}`}
            alt=""
          />
            </div>
            <div className="news_items_mobile">
                <div className="news_title">{el.title}</div>
                <div className="news_desc">
                  {el.desc}
                </div>
              </div>
            </div>)
        })}
      </div>:
      <div className="news_content">
        <div>
          <Image
            layout="responsive"
            width="1720"
            height="850"
            placeholder="blur"
            src={images.news.banner_content}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1720, 850)
            )}`}
            alt=""
          />
        </div>
        <div className="news_text">
          {contents.map((el, index) => {
            return (
              <div className="news_items" key={index}>
                <div className="news_title">{el.title}</div>
                <div className="news_desc">
                  {el.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>}

      <div className={mobile?"news_bottom_mobile":"news_bottom"}>
        <div className={mobile?"news_overlay_mobile":"news_overlay"}>
        <p>
          CHIN- SU believes the United States of America blossoms with
          opportunities to mark Vietnamese exclusive food traits on the global
          food map.
        </p>
        <p>
          Order now from <Link href="https://www.amazon.com/stores/CHIN-SU/page/7A03784E-A3CC-4F8C-B721-5C80F6884748?ref_=ast_bln"><a target="_blank"><u><strong>CHIN-SU official store on Amazon.com</strong></u></a></Link> or contact our
          hotline at <u><strong>(8333) CHIN-SU (Đăng Nguyễn)</strong></u>.
        </p>
        <p>
          Don&lsquo;t miss this the opportunity to enjoy a whole new level of culinary
          experience from CHIN-SU spicy universe!
        </p>
        </div>
      </div>
      <Subcribe />
    </div>
  );
};

export default News;
