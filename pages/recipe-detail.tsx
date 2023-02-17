import { NextPage } from "next";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMedia } from "../utils/use-media";
import Image from "next/image";

import Subcribe from "../components/homepage/Subcribe";
import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  Col,
  Row,
} from "reactstrap";
import { shimmer, toBase64 } from "../utils/image_data";
import images from "../utils/const";
const items = [
  {
    id: 1,
    ingredient_title: "CHIN-SU ORIGINAL HOT SAUCE FEATURED RECIPES",
    ingredient: [
      {
        id: 1,
        name: "HOT WINGS",
        image: images.recipes.org_seafood,
        banner: images.recipes.banner_detail,
        banner_mobile: images.recipes.banner_detail_mobile,
        ingredient_html: `
        <li>12 chicken Wings</li>
        <li>2 teaspoons of sugar</li>
        <li>1 cup all-purpose flour</li>
        <li><strong>1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)</strong></li>
        <li>2 quarts oil for frying</li>
        `,
        instruction_html: `
        <li>Step 1: Clean the chicken wings & slightly cut into 2 pieces.</li>
        <li>Step 2: Create your CHIN-SU sauce by mixing flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.</li>
        <li>Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).</li>
        <li>Step 4: Fry chicken wings in hot oil until crisp and juices run clear.</li>
        <li>Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.</li>
        `,
      },
      {
        id: 2,
        name: "SCRAMBLED EGG",
        image: images.recipes.org_egg,
      },
      {
        id: 3,
        name: "MAC & CHEESE",
        image: images.recipes.org_cheese,
      },
      {
        id: 4,
        name: "POBOYS",
        image: images.recipes.org_poboys,
      },
      {
        id: 5,
        name: "TACOS",
        image: images.recipes.org_tacos,
      },
      {
        id: 6,
        name: "SANDWICH",
        image: images.recipes.org_sandwich,
      },
    ],
    list1: [
      {
        id: 1,
        name: "HOT WINGS",
        image: images.recipes.org_seafood,
        ingredient_html: `
        <li>12 chicken Wings</li>
        <li>2 teaspoons of sugar</li>
        <li>1 cup all-purpose flour</li>
        <li><strong>1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)</strong></li>
        <li>2 quarts oil for frying</li>
        `,
        instruction_html: `
        <li>Step 1: Clean the chicken wings & slightly cut into 2 pieces.</li>
        <li>Step 2: Create your CHIN-SU sauce by mixing flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.</li>
        <li>Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).</li>
        <li>Step 4: Fry chicken wings in hot oil until crisp and juices run clear.</li>
        <li>Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.</li>
        `,
      },
      {
        id: 2,
        name: "SCRAMBLED EGG",
        image: images.recipes.org_egg,
      },
      {
        id: 3,
        name: "MAC & CHEESE",
        image: images.recipes.org_cheese,
      },
    ],
    list2: [
      {
        id: 4,
        name: "POBOYS",
        image: images.recipes.org_poboys,
      },
      {
        id: 5,
        name: "TACOS",
        image: images.recipes.org_tacos,
      },
      {
        id: 6,
        name: "SANDWICH",
        image: images.recipes.org_sandwich,
      },
    ],
  },
  {
    id: 2,
    ingredient_title: "CHIN-SU PHỞ HOT SAUCE FEATURED RECIPES",
    ingredient: [
      {
        id: 7,
        name: "PHỞ BÒ (BEEF NOODLE SOUP)",
        image: images.recipes.pho_beef1,
        banner: images.recipes.banner_detail_pho,
        banner_mobile: images.recipes.banner_detail_pho_mobile,
        ingredient_html: `
        <b>For the broth</b>
        <li>1.5kg / 3 lb brisket</li> 
        <li>1kg / 2 lb meaty bones</li>
        <li>1kg / 2 lb marrow bones</li> 
        <li>4-inch piece of fresh ginger, halved lengthwise</li>
        <li>2 cinnamon sticks</li>
        <li>1 black cardamom pod</li>
        <li>1 tablespoon coriander seeds</li> 
        <li>6 Star anise</li>
        <li>2 medium onions, quartered</li> 
        <li>½ teaspoon salt</li> 
        <li>½ teaspoon sugar</li> 
        <li>¼ cup fish sauce</li> 
        <br/><b>Assembly</b>
        <li>1 pound (1/8-inch wide) dried or fresh "banh pho" noodles</li>
        <li>1/2-pound raw eye of round, sirloin, or tri-tip steak, thinly sliced across</li> 
        <li>1/4 cup chopped cilantro leaves</li>        
        `,
        instruction_html: `
        <li>Step 1: Quick boil - Remove impurities from beef with a 5-minute boil, it's the path to a beautiful clear soup</li>
        <li>Step 2: Wash the bones to get all the icky scum off</li>
        <li>Step 3: Simmer for 7 to 10 hours - bones, beef, water, onion, ginger and spices (cinnamon, cardamom, coriander, star anise);</li>
        <li>Step 4: Ladle into bowls over noodles and pile on Toppings.</li>
        <li>Step 5: Serve with sprigs of fresh mint, Asian basil, bean sprouts and enjoy CHIN-SU PhởHot Sauce</li>
        `,
      },
      {
        id: 8,
        name: "SPICY SHRIMP NOODLES",
        image: images.recipes.pho_shrimp,
      },
      {
        id: 9,
        name: "VIETNAMESE PORK AND MUSHROOM NOODLE SOUP",
        image: images.recipes.pho_mushroom,
      },
      {
        id: 10,
        name: "PHỞ BÒ (BEEF NOODLE SOUP)",
        image: images.recipes.pho_beef2,
        banner: images.recipes.banner_detail_pho,
        banner_mobile: images.recipes.banner_detail_pho_mobile,
        ingredient_html: `
        <b>For the broth</b>
        <li>1.5kg / 3 lb brisket</li> 
        <li>1kg / 2 lb meaty bones</li>
        <li>1kg / 2 lb marrow bones</li> 
        <li>4-inch piece of fresh ginger, halved lengthwise</li>
        <li>2 cinnamon sticks</li>
        <li>1 black cardamom pod</li>
        <li>1 tablespoon coriander seeds</li> 
        <li>6 Star anise</li>
        <li>2 medium onions, quartered</li> 
        <li>½ teaspoon salt</li> 
        <li>½ teaspoon sugar</li> 
        <li>¼ cup fish sauce</li> 
        <br/><b>Assembly</b>
        <li>1 pound (1/8-inch wide) dried or fresh "banh pho" noodles</li>
        <li>1/2-pound raw eye of round, sirloin, or tri-tip steak, thinly sliced across</li> 
        <li>1/4 cup chopped cilantro leaves</li>        
        `,
        instruction_html: `
        <li>Step 1: Quick boil - Remove impurities from beef with a 5-minute boil, it's the path to a beautiful clear soup</li>
        <li>Step 2: Wash the bones to get all the icky scum off</li>
        <li>Step 3: Simmer for 7 to 10 hours - bones, beef, water, onion, ginger and spices (cinnamon, cardamom, coriander, star anise);</li>
        <li>Step 4: Ladle into bowls over noodles and pile on Toppings.</li>
        <li>Step 5: Serve with sprigs of fresh mint, Asian basil, bean sprouts and enjoy CHIN-SU PhởHot Sauce</li>
        `,
      },
      {
        id: 11,
        name: "PHỞ GÀ (CHICKEN NOODLE SOUP)",
        image: images.recipes.pho_chicken,
      },
      {
        id: 12,
        name: "SEAFOOD NOODLES",
        image: images.recipes.pho_seafood,
      },
    ],
    list1: [
      {
        id: 7,
        name: "PHỞ BÒ (BEEF NOODLE SOUP)",
        image: images.recipes.pho_beef1,
        ingredient_html: `
        <b>For the broth</b>
        <li>1.5kg / 3 lb brisket</li> 
        <li>1kg / 2 lb meaty bones</li>
        <li>1kg / 2 lb marrow bones</li> 
        <li>4-inch piece of fresh ginger, halved lengthwise</li>
        <li>2 cinnamon sticks</li>
        <li>1 black cardamom pod</li>
        <li>1 tablespoon coriander seeds</li> 
        <li>6 Star anise</li>
        <li>2 medium onions, quartered</li> 
        <li>½ teaspoon salt</li> 
        <li>½ teaspoon sugar</li> 
        <li>¼ cup fish sauce</li> 
        <br/><b>Assembly</b>
        <li>1 pound (1/8-inch wide) dried or fresh "banh pho" noodles</li>
        <li>1/2-pound raw eye of round, sirloin, or tri-tip steak, thinly sliced across</li> 
        <li>1/4 cup chopped cilantro leaves</li>        
        `,
        instruction_html: `
        <li>Step 1: Quick boil - Remove impurities from beef with a 5-minute boil, it's the path to a beautiful clear soup</li>
        <li>Step 2: Wash the bones to get all the icky scum off</li>
        <li>Step 3: Simmer for 7 to 10 hours - bones, beef, water, onion, ginger and spices (cinnamon, cardamom, coriander, star anise);</li>
        <li>Step 4: Ladle into bowls over noodles and pile on Toppings.</li>
        <li>Step 5: Serve with sprigs of fresh mint, Asian basil, bean sprouts and enjoy CHIN-SU PhởHot Sauce</li>
        `,
      },
      {
        id: 8,
        name: "SPICY SHRIMP NOODLES",
        image: images.recipes.pho_shrimp,
      },
      {
        id: 9,
        name: "VIETNAMESE PORK AND MUSHROOM NOODLE SOUP",
        image: images.recipes.pho_mushroom,
      },
    ],
    list2: [
      {
        id: 10,
        name: "PHỞ BÒ (BEEF NOODLE SOUP)",
        image: images.recipes.pho_beef2,
        ingredient_html: `
        <b>For the broth</b>
        <li>1.5kg / 3 lb brisket</li> 
        <li>1kg / 2 lb meaty bones</li>
        <li>1kg / 2 lb marrow bones</li> 
        <li>4-inch piece of fresh ginger, halved lengthwise</li>
        <li>2 cinnamon sticks</li>
        <li>1 black cardamom pod</li>
        <li>1 tablespoon coriander seeds</li> 
        <li>6 Star anise</li>
        <li>2 medium onions, quartered</li> 
        <li>½ teaspoon salt</li> 
        <li>½ teaspoon sugar</li> 
        <li>¼ cup fish sauce</li> 
        <br/><b>Assembly</b>
        <li>1 pound (1/8-inch wide) dried or fresh "banh pho" noodles</li>
        <li>1/2-pound raw eye of round, sirloin, or tri-tip steak, thinly sliced across</li> 
        <li>1/4 cup chopped cilantro leaves</li>        
        `,
        instruction_html: `
        <li>Step 1: Quick boil - Remove impurities from beef with a 5-minute boil, it's the path to a beautiful clear soup</li>
        <li>Step 2: Wash the bones to get all the icky scum off</li>
        <li>Step 3: Simmer for 7 to 10 hours - bones, beef, water, onion, ginger and spices (cinnamon, cardamom, coriander, star anise);</li>
        <li>Step 4: Ladle into bowls over noodles and pile on Toppings.</li>
        <li>Step 5: Serve with sprigs of fresh mint, Asian basil, bean sprouts and enjoy CHIN-SU PhởHot Sauce</li>
        `,
      },
      {
        id: 11,
        name: "PHỞ GÀ (CHICKEN NOODLE SOUP)",
        image: images.recipes.pho_chicken,
      },
      {
        id: 12,
        name: "SEAFOOD NOODLES",
        image: images.recipes.pho_seafood,
      },
    ],
  },
  {
    id: 3,
    ingredient_title: "CHI THIEN HOT SAUCE FEATURED RECIPES",
    ingredient: [
      {
        id: 13,
        name: "BURGER",
        image: images.recipes.chithien_burger,
        banner: images.recipes.banner_detail_burger,
        banner_mobile: images.recipes.banner_detail_burger_mobile,
        ingredient_html: `
        <li>625g minced beef</li>
        <li>1/2 teaspoon salt</li>
        <li>3/4 teaspoon freshly ground black pepper</li>
        <li>3 portobello mushrooms, stems trimmed</li>
        <li>3 tablespoon olive oil</li>
        <li>125ml mayonnaise</li>
        <li>2 teaspoons fresh lemon juice</li>
        <li>1/2 teaspoon minced garlic</li>
        <li>4 (10-cm) square or round ciabatta or foccacia squares, halved horizontally</li>
        <li>200g fresh rocket</li>
        `,
        instruction_html: `
        <li>Step 1: Combine the minced beef, salt, and pepper in a medium bowl. Shape the mixture into four (about 2cm-thick) patties.</li>
        <li>Step 2: Lightly drizzle both sides of the mushrooms with the oil. Sprinkle with salt and pepper.</li>
        <li>Step 3: Mix the mayonnaise, lemon juice, and garlic in a small bowl to blend. (The patties, mushrooms, and garlic mayonnaise can be prepared up to this point one day ahead. Cover them separately and refrigerate.)</li>
        <li>Step 4: Prepare the barbecue (medium-high heat). Griddle the burgers until cooked to desired doneness, about four minutes per side for medium-rare. Griddle the mushrooms until just tender, about five minutes per side. Griddle the focaccia squares cut side down, until lightly toasted, about two minutes.</li>
        <li>Step 5: Spread the garlic mayonnaise over the roll bottoms. Cut the mushrooms into strips and arrange the mushroom strips over the mayonnaise. Place the burgers atop the mushrooms. Spread garlic mayonnaise on the cut side of the tops and arrange a handful of rocket on each. Cover the burger with the roll tops and serve with CHIN-SU ChỉThiên Hot Sauce.</li>
        `,
      },
      {
        id: 14,
        name: "BURRITO",
        image: images.recipes.chithien_burrito,
      },
      {
        id: 15,
        name: "TACOS",
        image: images.recipes.chithien_tacos,
      },
      {
        id: 16,
        name: "CARNE ASADA",
        image: images.recipes.chithien_asada,
      },
      {
        id: 17,
        name: "BANH MI",
        image: images.recipes.chithien_banhmi,
      },
      {
        id: 18,
        name: "SANDWICH & FRIES",
        image: images.recipes.chithien_sandwich,
      },
    ],
    list1: [
      {
        id: 13,
        name: "BURGER",
        image: images.recipes.chithien_burger,
        ingredient_html: `
        <li>625g minced beef</li>
        <li>1/2 teaspoon salt</li>
        <li>3/4 teaspoon freshly ground black pepper</li>
        <li>3 portobello mushrooms, stems trimmed</li>
        <li>3 tablespoon olive oil</li>
        <li>125ml mayonnaise</li>
        <li>2 teaspoons fresh lemon juice</li>
        <li>1/2 teaspoon minced garlic</li>
        <li>4 (10-cm) square or round ciabatta or foccacia squares, halved horizontally</li>
        <li>200g fresh rocket</li>
        `,
        instruction_html: `
        <li>Step 1: Combine the minced beef, salt, and pepper in a medium bowl. Shape the mixture into four (about 2cm-thick) patties.</li>
        <li>Step 2: Lightly drizzle both sides of the mushrooms with the oil. Sprinkle with salt and pepper.</li>
        <li>Step 3: Mix the mayonnaise, lemon juice, and garlic in a small bowl to blend. (The patties, mushrooms, and garlic mayonnaise can be prepared up to this point one day ahead. Cover them separately and refrigerate.)</li>
        <li>Step 4: Prepare the barbecue (medium-high heat). Griddle the burgers until cooked to desired doneness, about four minutes per side for medium-rare. Griddle the mushrooms until just tender, about five minutes per side. Griddle the focaccia squares cut side down, until lightly toasted, about two minutes.</li>
        <li>Step 5: Spread the garlic mayonnaise over the roll bottoms. Cut the mushrooms into strips and arrange the mushroom strips over the mayonnaise. Place the burgers atop the mushrooms. Spread garlic mayonnaise on the cut side of the tops and arrange a handful of rocket on each. Cover the burger with the roll tops and serve with CHIN-SU ChỉThiên Hot Sauce.</li>
        `,
      },
      {
        id: 14,
        name: "BURRITO",
        image: images.recipes.chithien_burrito,
      },
      {
        id: 15,
        name: "TACOS",
        image: images.recipes.chithien_tacos,
      },
    ],
    list2: [
      {
        id: 16,
        name: "CARNE ASADA",
        image: images.recipes.chithien_asada,
      },
      {
        id: 17,
        name: "BANH MI",
        image: images.recipes.chithien_banhmi,
      },
      {
        id: 18,
        name: "SANDWICH & FRIES",
        image: images.recipes.chithien_sandwich,
      },
    ],
  },
  {
    id: 4,
    ingredient_title: "TRUFFLE HOT SAUCE FEATURED RECIPES",
    ingredient: [
      {
        id: 22,
        name: "TOMAHAWK",
        image: images.recipes.truffle_tomahawk,
        banner: images.recipes.banner_detail_tomahawk,
        banner_mobile: images.recipes.banner_detail_tomahawk_mobile,
        ingredient_html: `
        <li>2 Tomahawk steaks</li>
        <li>Salt</li>
        <li>Pepper</li>
        <li>1 bottle of CHIN-SU Truffle Hot Sauce(8.8 Oz)
        <br><strong>Compound Butter</strong><ul>
        <li>8 tablespoons salted butter room temperature</li>
        <li>2 teaspoons minced garlic</li>
        <li>2 teaspoons parsley finely chopped</li>
        <li>1 teaspoon rosemary finely chopped</li>
        <li>1 teaspoon salt</li>
        <li>1 teaspoon black pepper</li></ul></li>
        `,
        instruction_html: `
        <li>Step 1: Heat up your oven or grill to 375 degrees.</li>
        <li>Step 2: Season steaks on both sides with salt and pepper. Use approximately 1 teaspoon of salt and pepper per pound of steak.</li>
        <li>Step 3: Sear the steak for 3 to 4 minutes on each side.</li>
        <li>Step 4: Transfer the steak to a baking sheet. Bake in the preheated oven until the steak reaches an internal temperature of 130 degrees.</li>
        <li>Step 5: Let the steaks rest for 5-10 minutes. Spoon 1-2 tablespoons of compound butter onto the steak.</li>
        <strong>Compound Butter:</strong>
        <br/>In a bowl, mix together butter, garlic, parsley, rosemary, salt, pepper until they are perfectly blended.
        <li>Step 6: Drizzle CHIN-SU hot sauce over the steaks& enjoy.</li>
        `,
      },
      
      {
        id: 20,
        name: "STEAKS",
        image: images.recipes.truffle_steaks,
      },
      {
        id: 21,
        name: "PASTA",
        image: images.recipes.truffle_pasta,
      },
      {
        id: 19,
        name: "FRENCH FRIES",
        image: images.recipes.truffle_french,
      },
      {
        id: 23,
        name: "MAC & CHEESE",
        image: images.recipes.truffle_cheese,
      },
      {
        id: 24,
        name: "LAMB CHOPS",
        image: images.recipes.truffle_lamb_chops,
      },
    ],
    list1: [
      {
        id: 22,
        name: "TOMAHAWK",
        image: images.recipes.truffle_tomahawk,
        ingredient_html: `
        <li>2 Tomahawk steaks</li>
        <li>Salt</li>
        <li>Pepper</li>
        <li>1 bottle of CHIN-SU Truffle Hot Sauce(8.8 Oz)
        <br><strong>Compound Butter</strong><ul>
        <li>8 tablespoons salted butter room temperature</li>
        <li>2 teaspoons minced garlic</li>
        <li>2 teaspoons parsley finely chopped</li>
        <li>1 teaspoon rosemary finely chopped</li>
        <li>1 teaspoon salt</li>
        <li>1 teaspoon black pepper</li></ul></li>
        `,
        instruction_html: `
        <li>Step 1: Heat up your oven or grill to 375 degrees.</li>
        <li>Step 2: Season steaks on both sides with salt and pepper. Use approximately 1 teaspoon of salt and pepper per pound of steak.</li>
        <li>Step 3: Sear the steak for 3 to 4 minutes on each side.</li>
        <li>Step 4: Transfer the steak to a baking sheet. Bake in the preheated oven until the steak reaches an internal temperature of 130 degrees.</li>
        <li>Step 5: Let the steaks rest for 5-10 minutes. Spoon 1-2 tablespoons of compound butter onto the steak.</li>
        <strong>Compound Butter:</strong>
        <br/>In a bowl, mix together butter, garlic, parsley, rosemary, salt, pepper until they are perfectly blended.
        <li>Step 6: Drizzle CHIN-SU hot sauce over the steaks& enjoy.</li>
        `,
      },
      
      {
        id: 20,
        name: "STEAKS",
        image: images.recipes.truffle_steaks,
      },
      {
        id: 21,
        name: "PASTA",
        image: images.recipes.truffle_pasta,
      },
    ],
    list2: [
      {
        id: 19,
        name: "FRENCH FRIES",
        image: images.recipes.truffle_french,
      },
      {
        id: 23,
        name: "MAC & CHEESE",
        image: images.recipes.truffle_cheese,
      },
      {
        id: 24,
        name: "LAMB CHOPS",
        image: images.recipes.truffle_lamb_chops,
      },
    ],
  },
];
const RecipeDetail: NextPage = () => {
  const router = useRouter();
  const [item, setItem] = useState<any>();
  const [data, setData] = useState<any>();
  const mobile = useMedia("(max-width: 600px)");

  const sliders = [
    { list: item?.list1, id: 0, itemId: item?.id },
    { list: item?.list2, id: 1, itemId: item?.id },
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
                <Image src={ig.image} alt="" width={540} height={400} placeholder="blur"
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

  useEffect(() => {
    if (router && router.query) {
      const item: any = items.find(
        (el) => el.id.toString() == router.query.itemId
      );
      const ingredient = item?.ingredient?.find(
        (el: any) => el.id.toString() == router.query.recipeId
      );
      setItem(item);
      setData(ingredient);
    }
  }, [router]);
  if (!data) return null;

  return (
    <div style={{ marginTop: mobile ? "0px" : "120px" }}>
      <div>
        {mobile ? (
          <Image
            layout="responsive"
            width="360"
            height="360"
            placeholder="blur"
            src={data?.banner_mobile}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(360, 360)
            )}`}
            alt=""
          />
        ) : (
          <Image
            layout="responsive"
            width="1920"
            height="600"
            placeholder="blur"
            src={data?.banner}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1920, 600)
            )}`}
            alt=""
          />
        )}
      </div>
      {mobile ? (
        <div className="recipes_nav_mobile">
          <div className="recipe_head_mobile">{data.name}</div>
        </div>
      ) : (
        <div className="recipes_nav">
          <div className="recipe_head">{data.name}</div>
        </div>
      )}
      <div className={mobile ? "_col" : "_row"} style={{ padding: "2% 10%" }}>
        {data?.ingredient_html && (
          <div className={mobile ? ".recipe_content_mobile" : "recipe_content"}>
            <div className={mobile ? "recipe_title_mobile" : "recipe_title"}>
              INGREDIENTS
            </div>
            <ul className={mobile ? "recipe_text_mobile" : "recipe_text"}>
              {/* {data?.ingredients?.map((ig: any, index: number) => {
                return <li key={index}>{ig}</li>;
              })} */}
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.ingredient_html,
                }}
              ></div>
            </ul>
          </div>
        )}
        {data?.instruction_html && (
          <div className={mobile ? ".recipe_content_mobile" : "recipe_content"}>
            <div className={mobile ? "recipe_title_mobile" : "recipe_title"}>
              INSTRUCTIONS
            </div>
            <ul className={mobile ? "recipe_text_mobile" : "recipe_text"}>
              {/* {data?.instructions?.map((ig: any, index: number) => {
                return (
                  <li style={{ marginBottom: "12px" }} key={index}>
                    {ig}
                  </li>
                );
              })} */}
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.instruction_html,
                }}
              ></div>
            </ul>
          </div>
        )}
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
                        <Image src={ig.image} alt="" width={540} height={400}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                          shimmer(960, 960)
                        )}`} />
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
      <Subcribe />
    </div>
  );
};

export default RecipeDetail;
