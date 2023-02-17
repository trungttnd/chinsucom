import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Row,
} from "reactstrap";
import Image from "next/image";
import { useMedia } from "../../utils/use-media";
import { useState } from "react";
import Router from "next/router";
import { shimmer, toBase64 } from "../../utils/image_data";

type Props = {
  item: any;
};

const Ingredient: React.FC<Props> = (props) => {
  const { item } = props;
  const mobile = useMedia("(max-width: 600px)");
  let list1: any[] = [];
  let list2: any[] = [];
  item?.ingredient.forEach((element: any, index: number) => {
    if (index < 3) list1.push(element);
    if (index >= 3) list2.push(element);
  });
  const sliders = [
    { list: list1, id: 0, itemId: item.id },
    { list: list2, id: 1, itemId: item.id },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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
            <Col
              key={index}
              style={{ textAlign: "left", cursor: "pointer" }}
              onClick={() => {
                if (ig.id === 1 || ig.id == 7|| ig.id == 10|| ig.id == 13|| ig.id == 22)
                  Router.push({
                    pathname: "/recipe-detail",
                    query: { itemId: item.itemId, recipeId: ig.id },
                  });
              }}
            >
              <div
                style={{
                  marginTop: "16px",
                  marginLeft: "8px",
                  marginRight: "8px",
                }}
              >
                <Image
                  src={ig.image}
                  alt=""
                  width={540}
                  height={400}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(540, 400)
                  )}`}
                />
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
  return (
    <>
      <div
        className={mobile ? "_col" : "_row"}
        style={{ marginBottom: "32px" }}
      >
        <div className={mobile ? "divider_mobile" : "divider_"}>
          <p className={mobile ? "ingredient_mobile" : "ingredient"}>
            INGREDIENTS
          </p>
          <div
            className={mobile ? "line_divider_mobile" : "line_divider"}
          ></div>
        </div>
        <div className={mobile ? "divider_mobile" : "divider_"}>
          <p className={mobile ? "des_content_mobile" : "des_content"}>
            {item.ingredient_desc}
          </p>
        </div>
      </div>
      <div className={mobile ? "wrap_feature_mobile" : "wrap_feature"}>
        <div className="bg">
          <p className={mobile ? "desc_title_mobile" : "desc_title"}>
            {" "}
            {item.ingredient_title}
          </p>
          <div
            className={mobile ? "desc_sub_mobile" : "desc_sub"}
            style={{ color: "white", paddingBottom: "48px" }}
          >
            <p>Try our top suggestions</p>
            {!mobile ? (
              <Row xs="3" style={{ justifyContent: "center", margin: "0 5%" }}>
                {item?.ingredient?.map((ig: any, index: number) => {
                  return (
                    <Col
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (ig.id === 1 || ig.id == 7|| ig.id == 10|| ig.id == 13|| ig.id == 22)
                          Router.push({
                            pathname: "/recipe-detail",
                            query: { itemId: item.id, recipeId: ig.id },
                          });
                      }}
                    >
                      <div
                        style={{
                          marginTop: "16px",
                          marginLeft: "8px",
                          marginRight: "8px",
                        }}
                      >
                        <Image
                          src={ig.image}
                          alt=""
                          width={540}
                          height={400}
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
        </div>
      </div>
    </>
  );
};

export default Ingredient;
