import { NextPage } from "next";
import Subcribe from "../components/homepage/Subcribe";
import { useMedia } from "../utils/use-media";
import Image from "next/image";
import { shimmer, toBase64 } from "../utils/image_data";
import NavItem from "../components/NavItem";
import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  Col,
  Row,
} from "reactstrap";
import { useState } from "react";

import ScrollMenu from "react-horizontal-scrolling-menu";
import Router from "next/router";
import images from "../utils/const";

const data = [
  {
    id: 1,
    ingredient: [
      { id: 1, name: "HOT WINGS", image: images.recipes.org_seafood },
      { id: 2, name: "SCRAMBLED EGG", image: images.recipes.org_egg },
      { id: 3, name: "MAC & CHEESE", image: images.recipes.org_cheese },
      { id: 4, name: "POBOYS", image: images.recipes.org_poboys },
      { id: 5, name: "TACOS", image: images.recipes.org_tacos },
      { id: 6, name: "SANDWICH", image: images.recipes.org_sandwich },
    ],
    list1: [
      { id: 1, name: "HOT WINGS", image: images.recipes.org_seafood },
      { id: 2, name: "SCRAMBLED EGG", image: images.recipes.org_egg },
      { id: 3, name: "MAC & CHEESE", image: images.recipes.org_cheese },
    ],
    list2: [
      { id: 4, name: "POBOYS", image: images.recipes.org_poboys },
      { id: 5, name: "TACOS", image: images.recipes.org_tacos },
      { id: 6, name: "SANDWICH", image: images.recipes.org_sandwich },
    ],
  },
  {
    id: 2,
    ingredient: [
      { id: 7, name: "PHỞ BÒ (BEEF NOODLE SOUP)", image: images.recipes.pho_beef1 },
      { id: 8, name: "SPICY SHRIMP NOODLES", image: images.recipes.pho_shrimp },
      {
        id: 9,
        name: "VIETNAMESE PORK AND MUSHROOM NOODLE SOUP",
        image: images.recipes.pho_mushroom,
      },
      { id: 10, name: "PHỞ BÒ (BEEF NOODLE SOUP)", image: images.recipes.pho_beef2 },
      { id: 11, name: "PHỞ GÀ (CHICKEN NOODLE SOUP)", image: images.recipes.pho_chicken },
      { id: 12, name: "SEAFOOD NOODLES", image: images.recipes.pho_seafood },
    ],
    list1: [
      { id: 7, name: "PHỞ BÒ (BEEF NOODLE SOUP)", image: images.recipes.pho_beef1 },
      { id: 8, name: "SPICY SHRIMP NOODLES", image: images.recipes.pho_shrimp },
      {
        id: 9,
        name: "VIETNAMESE PORK AND MUSHROOM NOODLE SOUP",
        image: images.recipes.pho_mushroom,
      },
    ],
    list2: [
      { id: 10, name: "PHỞ BÒ (BEEF NOODLE SOUP)", image: images.recipes.pho_beef2 },
      { id: 11, name: "PHỞ GÀ (CHICKEN NOODLE SOUP)", image: images.recipes.pho_chicken },
      { id: 12, name: "SEAFOOD NOODLES", image: images.recipes.pho_seafood },
    ],
  },
  {
    id: 3,
    ingredient: [
      { id: 13, name: "BURGER", image: images.recipes.chithien_burger },
      { id: 14, name: "BURRITO", image: images.recipes.chithien_burrito },
      { id: 15, name: "TACOS", image: images.recipes.chithien_tacos },
      { id: 16, name: "CARNE ASADA", image: images.recipes.chithien_asada },
      { id: 17, name: "BANH MI", image: images.recipes.chithien_banhmi },
      { id: 18, name: "SANDWICH & FRIES", image: images.recipes.chithien_sandwich },
    ],
    list1: [
      { id: 13, name: "BURGER", image: images.recipes.chithien_burger },
      { id: 14, name: "BURRITO", image: images.recipes.chithien_burrito },
      { id: 15, name: "TACOS", image: images.recipes.chithien_tacos },
    ],
    list2: [
      { id: 16, name: "CARNE ASADA", image: images.recipes.chithien_asada },
      { id: 17, name: "BANH MI", image: images.recipes.chithien_banhmi },
      { id: 18, name: "SANDWICH & FRIES", image: images.recipes.chithien_sandwich },
    ],
  },
  {
    id: 4,
    ingredient: [
      { id: 22, name: "TOMAHAWK", image: images.recipes.truffle_tomahawk },
      
      { id: 20, name: "STEAKS", image: images.recipes.truffle_steaks },
      { id: 21, name: "PASTA", image: images.recipes.truffle_pasta },
      { id: 19, name: "FRENCH FRIES", image: images.recipes.truffle_french },
      { id: 23, name: "MAC & CHEESE", image: images.recipes.truffle_cheese },
      { id: 24, name: "LAMB CHOPS", image: images.recipes.truffle_lamb_chops },
    ],
    list1: [
      { id: 22, name: "TOMAHAWK", image: images.recipes.truffle_tomahawk },
      
      { id: 20, name: "STEAKS", image: images.recipes.truffle_steaks },
      { id: 21, name: "PASTA", image: images.recipes.truffle_pasta },
    ],
    list2: [
      { id: 19, name: "FRENCH FRIES", image: images.recipes.truffle_french },
      { id: 23, name: "MAC & CHEESE", image: images.recipes.truffle_cheese },
      { id: 24, name: "LAMB CHOPS", image: images.recipes.truffle_lamb_chops },
    ],
  },
];
const Recipes: NextPage = () => {
  const mobile = useMedia("(max-width: 600px)");
  const [items, setItems] = useState(data[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [sliders, setSliders] = useState([
    { list: data[0]?.list1, id: 0, itemId: 1,  },
    { list: data[0]?.list2, id: 1, itemId: 1, },
  ]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === sliders.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? sliders.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = sliders.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        {item?.list?.map((ig: any, index: number) => {
          return (
            <Col key={index} style={{ textAlign: "left",cursor: "pointer" }}
            onClick={() => {              
              if (ig.id === 1 || ig.id == 7|| ig.id == 10|| ig.id == 13|| ig.id == 22)
                Router.push({
                  pathname: "/recipe-detail",
                  query: { itemId: item.itemId, recipeId: ig.id },
                });
            }}>
              <div
                style={{
                  marginTop: "16px",
                  marginLeft: "8px",
                  marginRight: "8px",
                }}
              >
                <Image src={ig.image} alt="" width={540} height={400}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(540, 400)
                )}`} />
              </div>
              <span
                className="desc_item_name"
                style={{ fontSize: "24px", marginLeft: 8 }}
              >
                {ig.name}
              </span>
            </Col>
          );
        })}
      </CarouselItem>
    );
  });
  const menu = [
    <NavItem key={1}
      text="ORIGINAL HOT SAUCE"
      href="#recipes"
      fontSize="20px"
      space={true}
      active={items.id === 1}
      onClick={() => {
        setItems(data[0]);
        setSliders([
          { list: data[0]?.list1, id: 0, itemId: 1, },
          { list: data[0]?.list2, id: 1, itemId: 1, },
        ]);
      }}
    />,
    <NavItem key={2}
      text="PHỞ HOT SAUCE"
      href="#recipes"
      fontSize="20px"
      space={true}
      active={items.id === 2}
      onClick={() => {
        setItems(data[1]);
        setSliders([
          { list: data[1]?.list1, id: 0, itemId: 2, },
          { list: data[1]?.list2, id: 1, itemId: 2, },
        ]);
      }}
    />,
    <NavItem key={3}
      text="CHỈ THIÊN HOT SAUCE"
      href="#recipes"
      fontSize="20px"
      space={true}
      active={items.id === 3}
      onClick={() => {
        setItems(data[2]);
        setSliders([
          { list: data[2]?.list1, id: 0, itemId: 3, },
          { list: data[2]?.list2, id: 1, itemId: 3, },
        ]);
      }}
    />,
    <NavItem key={4}
      text="TRUFFLE HOT SAUCE"
      href="#recipes"
      fontSize="20px"
      space={true}
      active={items.id === 4}
      onClick={() => {
        setItems(data[3]);
        setSliders([
          { list: data[3]?.list1, id: 0, itemId: 4, },
          { list: data[3]?.list2, id: 1, itemId: 4, },
        ]);
      }}
    />,
  ];
  return (
    <div id="recipes" style={{ marginTop: mobile ? "0px" : "120px" }}>
      {/* banner */}
      <div>
      {mobile?<Image
          layout="responsive"
          width="360"
          height="360"
          placeholder="blur"
          src={images.recipes.banner_top_mobile}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(360, 360)
          )}`}
          alt=""
        />:<Image
          layout="responsive"
          width="1920"
          height="1188"
          placeholder="blur"
          src={images.recipes.banner_top}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(1920, 1188)
          )}`}
          alt=""
        />}
      </div>
      {/* navigation */}
      {mobile ? (
        <div className="recipes_nav_mobile">
          <nav className="nav__pc">
            <div className="menu_list">
              <ScrollMenu dragging={true} data={menu} menuStyle={{maxWidth: "fit-content", width: "inherit"}}/>
            </div>
          </nav>
        </div>
      ) : (
        <div className="recipes_nav">
          <nav className="nav__pc">
            <div className="menu_list">
              <NavItem
                text="ORIGINAL HOT SAUCE"
                href="#recipes"
                active={items.id === 1}
                onClick={() => {
                  setItems(data[0]);
                  setSliders([
                    { list: data[0]?.list1, id: 0, itemId: 1, },
                    { list: data[0]?.list2, id: 1, itemId: 1, },
                  ]);
                }}
              ></NavItem>
              <NavItem
                text="PHỞ HOT SAUCE"
                href="#recipes"
                active={items.id === 2}
                onClick={() => {
                  setItems(data[1]);
                  setSliders([
                    { list: data[1]?.list1, id: 0, itemId: 2, },
                    { list: data[1]?.list2, id: 1, itemId: 2, },
                  ]);
                }}
              ></NavItem>
              <NavItem
                text="CHỈ THIÊN HOT SAUCE"
                href="#recipes"
                active={items.id === 3}
                onClick={() => {
                  setItems(data[2]);
                  setSliders([
                    { list: data[2]?.list1, id: 0, itemId: 3, },
                    { list: data[2]?.list2, id: 1, itemId: 3, },
                  ]);
                }}
              ></NavItem>
              <NavItem
                text="TRUFFLE HOT SAUCE"
                href="#recipes"
                active={items.id === 4}
                onClick={() => {
                  setItems(data[3]);
                  setSliders([
                    { list: data[3]?.list1, id: 0, itemId: 4, },
                    { list: data[3]?.list2, id: 1, itemId: 4, },
                  ]);
                }}
              ></NavItem>
            </div>
          </nav>
        </div>
      )}
      <div style={{ marginTop: "32px", marginBottom: "32px" }}>
        {!mobile ? (
          <Row xs="3" style={{ justifyContent: "center", margin: "0 5%" }}>
            {items?.ingredient.map((ig: any, index: number) => {
              return (
                <Col key={index} style={{cursor: "pointer"}} onClick={() => {
                  if (ig.id === 1 || ig.id == 7 || ig.id == 10|| ig.id == 13|| ig.id == 22)
                    Router.push({
                      pathname: "/recipe-detail",
                      query: { itemId: items.id, recipeId: ig.id },
                    });
                }}>
                  <div
                    style={{
                      marginTop: "16px",
                      marginLeft: "8px",
                      marginRight: "8px",
                    }}
                  >
                    <Image src={ig.image} alt="" width={540} height={400}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(540, 400)
                    )}`}
                     />
                  </div>
                  <span className="desc_item_name">{ig.name}</span>
                </Col>
              );
            })}
          </Row>
        ) : (
          <>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              // fade={true}
              // {...args}
            >
              {slides}
              <CarouselIndicators
                items={sliders}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                className="ingre_carousel_indi"
              />
            </Carousel>
          </>
        )}
      </div>

      <Subcribe />
    </div>
  );
};

export default Recipes;
