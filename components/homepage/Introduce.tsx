import { Button, Col, Row } from "reactstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Image from "next/image";
import { useMedia } from "../../utils/use-media";
import { useState } from "react";
import ItemModal from "../ItemModal";
import Router from "next/router";
import images from "../../utils/const";
import { shimmer, toBase64 } from "../../utils/image_data";
const introduces = [
  {
    id: 1,
    title: "CHIN-SU ORIGINAL HOT SAUCE",
    subTitle: "THE ORIGINAL VIETNAMESE HOT SAUCE",
    description: null,
    color: "#A82F27",
    image: images.homepage.original_intro,
    image_mobile: images.homepage.original_intro_mobile,
    content:
      "Not just any typical boring hot sauces, this chili garlic sauce offers a harmony of flavors - spicy, salty, sour, and sweet that can elevate any dish and make you crave for it even more!",
    details: [
      {
        index: "01",
        title: "THE ONE SAUCE TO PUT ON EVERYTHING",
        note: "This sweet chili sauce perfectly matches all your meals. Whether you dip it with French fries, chicken nugget, buffalo chicken, or spread it on the sandwich bread, pizza, taco for breakfast; even use it with vegetables, meat, and seafood, this sauce certainly amplifies the taste of them all and brings you the best experience of sweet and spicy hot sauce.",
      },
      {
        index: "02",
        title: "NOT JUST ANY TYPICAL BORING HOT SAUCES",
        note: "Chin-su sweet chili sauce offers a harmony of flavors - spicy, salty, sour, and sweet. Mix it with Mayo; it turns into a delicious sandwich spread. Mix it with ranch; it turns into a yummy sauce for chicken strips. Whether you are a hot sauce lover or you have never tried one before, you will fall in love with it.",
      },
      {
        index: "03",
        title: "HIGHEST SPICY SAUCE QUALITY GUARANTEED",
        note: "Ripen chili peppers are hand-picked since the early morning, then carefully fermented with fresh garlic, salt, and pepper to create each bottle of CHIN-SU hot chili sauce. This high-quality garlic hot sauce can also be used as a perfect BBQ gift set for your beloved friends and family.",
      },
    ],
    variant: [
      {
        id: 1,
        title: "8.29 ounce (Pack of 1)",
        price: "$2.49",
      },
      {
        id: 2,
        title: "16,58 ounce (Pack of 1)",
        price: "$3.49",
      },
    ],

    ingredient_desc: '"Chỉ Thiên" hot chili peppers, salt & garlic',
    ingredient_title: "CHIN-SU ORIGINAL HOT SAUCE FEATURED RECIPES",
  },
  {
    id: 2,
    title: "CHIN-SU PHỞ HOT SAUCE",
    subTitle: "Speciality of Vietnamese cuisine",
    description: null,
    color: "#000000",
    image: images.homepage.pho_intro,
    image_mobile: images.homepage.pho_intro_mobile,
    content:
      "Designed to elevate the authentic taste of Vietnamese Phở, CHIN-SU Phở Hot Sauce is the original Vietnamese staple sauce to pair with our nation’s most loved cuisine, capturing every bit of fiery goodness to enhance the delicate Phở broth.",
    details: [
      {
        index: "01",
        title: "THE STAPLE HOT SAUCE FOR VIETNAMESE BEST LOVED CUISINE",
        note: "There's no better way to eat Vietnamese Phở like a Pro than to enjoy it with it's true companion - CHIN-SU Phở Hot Sauce. It has that “tangy and savory” flavor, it offers a pleasant spicy tingle in your mouth. And above all, it adds just the perfect balance of spiciness, acidity and natural sweetness to make your bowl of Phở interesting.",
      },
      {
        index: "02",
        title: "VIETNAMESE ORIGINAL HOT SAUCE FOR PHỞ",
        note: "Using traditional fermentation method, our Master chefs & Vietnamese folk craftsman have successfully created the one Asian hot sauce to go with Vietnamese traditional Phở, noodles & do them justice. As you drizzle this hot sauce bottle into the delicate broth of Phở or hot noodles, the first thing you'll notice is it's aromatic smell. Just like the savory spiciness that lingers in the air, so it will on your tastebuds as well.",
      },
    ],
    variant: [
      {
        id: 1,
        title: "8.29 ounce (Pack of 1)",
        price: "$2.49",
      },
      {
        id: 2,
        title: "16,58 ounce (Pack of 1)",
        price: "$3.49",
      },
    ],

    ingredient_desc:
      'Vietnamese hot chili peppers specialty "Chỉ Thiên" are hand-picked since the early morning, grinded and fermented with fresh garlic & salt, all-together tied with a hint of rice vinegar to create a delightful mix of sour and spicy taste of CHIN-SU Phở Hot Sauce.',
    ingredient_title: "CHIN-SU PHỞ HOT SAUCE FEATURED RECIPES",
  },
  {
    id: 3,
    title: 'CHIN-SU "CHỈ THIÊN" HOT SAUCE',
    subTitle: "EXTRA HOT - TRY & CRY",
    description: null,
    color: "#A82F27",
    image: images.homepage.chithien_intro,
    image_mobile: images.homepage.chithien_intro_mobile,
    content:
      'Fire up your "extra hot" profile with the brand-new pinnacle of heat from CHIN-SU spicy universe! Just a dash of CHIN-SU “Chỉ Thiên” Hot Sauce can go a long way in adding a good kick to your everyday meals!',
    details: [
      {
        index: "01",
        title: "HOT SAUCE TO HEAT UP YOUR PALATE",
        note: `Enough spicy as it is to make you cry, it is not the kind of hot sauce to upset your palate. The extra spiciness is so addictive that once you taste it, it's the one-way street towards liking it. So, if you're a fan of the "extra hot" profile, CHIN-SU Chỉ Thiên Hot Sauce is one you really must try!`,
      },
      {
        index: "02",
        title:
          "PUT IT ON ANYTHING, BEST ENJOYED WITH ASIAN & MEXICAN SPECIALITIES",
        note: "Add a surprising little kick to your salad dressing for Green Thai Papaya Salad; mix it with your dipping sauce for a mouthful taste of spicy delicious Spring rolls, Dim sum & Dumpling; use it as a glaze for your Korean Barbeque Chicken, squeeze it into your Taco, Burrito or Enchilada for a delightful flavor experience, etc. Anyhow you choose to pair it with, you should be prepared for an instant sensation.",
      },
    ],
    //imageUrls: [rel_chi_thien, chithien_detail_3, chithien_detail_4, chithien_detail_5],
    // desc_images: {
    //   topLeft: chithien_topLeft,
    //   bottomLeft: chithien_bottomLeft,
    //   right: chithien_right,
    // },
    variant: [
      {
        id: 1,
        title: "8.29 ounce (Pack of 1)",
        price: "$2.49",
      },
      {
        id: 2,
        title: "16,58 ounce (Pack of 1)",
        price: "$3.49",
      },
    ],
    ingredient_desc:
      'The Vietnamese gourmet hot chili peppers named "Chỉ Thiên" is the main ingredient in a bottle of CHIN-SU Chỉ Thiên Hot Sauce.',
    ingredient_title: "CHI THIEN HOT SAUCE FEATURED RECIPES",
  },
  {
    id: 4,
    title: "CHIN-SU DELIGHT TRUFFLE HOT SAUCE",
    subTitle: "GOURMET HOT SAUCE WITH BLACK & WHITE TRUFFLES",
    description: null,
    color: "#000000",
    image: images.homepage.truffle_intro,
    image_mobile: images.homepage.truffle_intro_mobile,
    content:
      'CHIN-SU Delight Truffle Hot Sauce is characterized by the refined sweet & earthy black & white Truffle flavor, balanced with just the right amount of “kick” from "Chỉ Thiên" chili peppers that aesthetically defines haute cuisine.',
    details: [
      {
        index: "01",
        title: "THE MUST-TRY HOT SAUCE FOR HOT SAUCE CONNOISSEURS",
        note: 'If you’re in for aesthetically balanced meals like those served in Michelin-starred restaurants, you’re in for a refined treat from CHIN-SU Delight Truffle Hot Sauce. We offer only real Truffle flavor combined with the right amount of "kick" that produces such a great synergy between the earthy spiciness and savory sweetness.',
      },
      {
        index: "02",
        title: "GREAT COMBINATION OF SAVORY SWEETNESS & DELICIOUS HEAT",
        note: 'This hot sauce bottle has that nice "kick" from "Chỉ Thiên" chili peppers, balanced with the earthy and buttery undertones that stay with you and make you happy; also a tiny bit of after burn - a pleasant reminder that CHIN-SU Original Truffle Hot Sauce just rocked your palate with a full-bodied umami flavor. What lingers afterwards is the complex flavor profile that dances around your mouth and teases your taste buds with delight.',
      },
      {
        index: "03",
        title: "LEVEL UP YOUR GOURMET DINING EXPERIENCE",
        note: "In case you wonder what to pair this hot sauce bottle with, just enjoy it with anything you want to serve on a fine dining table for your loved ones. Drizzle it on your Tomahawk, BBQ, for an instant Truffle flavor explosion; dip your French fries in it for a glamourous spicy Truffle touch, coat it on your gourmet lamb chops; compliments your yummy Pizza, Italian Pasta, Mac & Cheese with it. It makes the perfect companion for culinary masterpieces.",
      },
    ],
    variant: [],
    ingredient_desc:
      'Delight black & white truffle combined with "Chỉ Thiên" hot chili peppers to create each bottle of CHIN-SU Delight Truffle Hot Sauce.',
    ingredient_title: "TRUFFLE HOT SAUCE FEATURED RECIPES",
  },
];
type Props = {};

const Introduce: React.FC<Props> = () => {
  const mobile = useMedia("(max-width: 600px)");
  const [currentItem, setCurrentItem] = useState<any>();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      {introduces.map((el, index) => {
        if (mobile)
          return (
            <div className="_col" key={el.id}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "inherit",
                }}
              >
                <Image
                  layout="responsive"
                  src={el.image_mobile}
                  width={600}
                  height={600}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 600))}`}
                  alt=""
                />
              </div>
              <div
                className="introduce_padding_mobile"
                style={{ backgroundColor: `${el.color}` }}
              >
                <p className="introduce_title_mobile">{el.title}</p>
                <p className="introduce_des_mobile">{el.subTitle}</p>
                <p className="introduce_content_mobile">{el.content}</p>
                <div className="introduce_bottom" style={{ width: "226px" }}>
                  <Button
                    className="introduce_btn"
                    style={{
                      borderColor:
                        el.color === "#A82F27" ? "#FFFFFF" : "#A82F27",
                      fontSize: 32,
                    }}
                    // onClick={() => {
                    //   setCurrentItem(el);
                    //   toggle();
                    // }}
                    onClick={() =>
                      Router.push({
                        pathname: "/item-detail",
                        query: { id: el.id },
                      })
                    }
                    // onClick={() => { Router.push(`/item-detail?id=${el.id}`); }}
                  >
                    EXPLORE{" "}
                    <BsFillArrowRightCircleFill
                      className="introduct_icon"
                      style={{ fontSize: 28, marginLeft: "16px" }}
                    />
                  </Button>
                </div>
              </div>
            </div>
          );
        else
          return (
            <div className="_row" key={el.id}>
              {el.color === "#A82F27" && (
                <div
                  style={{
                    position: "relative",
                    width: "50%",
                    height: "inherit",
                  }}
                >
                  <Image
                    layout="responsive"
                    width={960}
                    height={960}
                    src={el.image}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(960, 960))}`}
                    alt=""
                  />
                </div>
              )}
              <div
                className="introduce_padding"
                style={{ backgroundColor: `${el.color}` }}
              >
                <div>
                  <p className="introduce_title" style={{ marginTop: "25%" }}>
                    {el.title}
                  </p>
                  <p className="introduce_des">{el.subTitle}</p>
                  <p className="introduce_content">{el.content}</p>
                  <div className="introduce_bottom">
                    <Button
                      className="introduce_btn"
                      style={{
                        borderColor:
                          el.color === "#A82F27" ? "#FFFFFF" : "#A82F27",
                      }}
                      // onClick={() => {
                      //   setCurrentItem(el);
                      //   toggle();
                      // }}
                      onClick={() =>
                        Router.push({
                          pathname: "/item-detail",
                          query: { id: el.id },
                        })
                      }
                    >
                      EXPLORE{" "}
                      <BsFillArrowRightCircleFill className="introduct_icon" />
                    </Button>
                  </div>
                </div>
              </div>
              {el.color !== "#A82F27" && (
                <div
                  style={{
                    position: "relative",
                    width: "50%",
                    height: "inherit",
                  }}
                >
                  <Image
                    layout="responsive"
                    src={el.image}
                    width={960}
                    height={960}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(960, 960))}`}
                    alt=""
                  />
                </div>
              )}
            </div>
          );
      })}
      <ItemModal isOpen={modal} toggle={toggle} item={currentItem} />
    </div>
  );
};

export default Introduce;
