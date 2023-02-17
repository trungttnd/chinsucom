import { NextPage } from "next";
import Subcribe from "../components/homepage/Subcribe";
import Image from "next/image";
import { useRouter } from "next/router";
import { shimmer, toBase64 } from "../utils/image_data";
import Relative from "../components/item/Relative";
import Ingredient from "../components/item/Ingredient";
import Description from "../components/item/Description";
import { useMedia } from "../utils/use-media";
import Variant from "../components/item/Variant";

import { useEffect, useState } from "react";
import images from "../utils/const";

const items = [
  {
    id: 1,
    title: "CHIN-SU ORIGINAL HOT SAUCE",
    subTitle: "THE ORIGINAL VIETNAMESE HOT SAUCE",
    description: null,
    color: "#A82F27",
    image: images.products.original_intro,
    image_mobile: images.products.original_intro_mobile,
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
    imageUrls: [
      images.products.original_detail_1,
      images.products.original_detail_2,
      images.products.original_detail_3,
      images.products.original_detail_4,
    ],
    desc_images: {
      topLeft: images.products.original_topLeft,
      bottomLeft: images.products.original_bottomLeft,
      right: images.products.original_right,
    },
    variant: [
      {
        id: 1,
        title: "8.80 ounce (Pack of 1)",
        price: "$2.49",
      },
      {
        id: 2,
        title: "17.65 ounce (Pack of 1)",
        price: "$3.49",
      },
    ],
    ingredient: [
      {
        id: 1,
        name: "HOT WINGS",
        image: images.products.org_seafood,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 2,
        name: "SCRAMBLED EGG",
        image: images.products.org_egg,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 3,
        name: "MAC & CHEESE",
        image: images.products.org_cheese,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 4,
        name: "POBOYS",
        image: images.products.org_poboys,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 5,
        name: "TACOS",
        image: images.products.org_tacos,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 6,
        name: "SANDWICH",
        image: images.products.org_sandwich,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
    ],
    ingredient_desc: '"Chỉ Thiên" hot chili peppers, salt & garlic',
    ingredient_title: "CHIN-SU ORIGINAL HOT SAUCE FEATURED RECIPES",
    relatives: [
      {
        itemId: 2,
        image: images.products.rel_pho,
        name: "PHỞ HOT SAUCE",
      },
      {
        itemId: 3,
        image: images.products.rel_chi_thien,
        name: "CHỈ THIÊN HOT SAUCE",
      },
      {
        itemId: 4,
        image: images.products.rel_truffle,
        name: "TRUFFLE HOT SAUCE",
      },
    ],
    bottom: images.products.bottom_original,
  },
  {
    id: 2,
    title: "CHIN-SU PHỞ HOT SAUCE",
    subTitle: "Speciality of Vietnamese cuisine",
    description: null,
    color: "#000000",
    image: images.products.pho_intro,
    image_mobile: images.products.pho_intro_mobile,
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
    imageUrls: [images.products.pho_detail_1, images.products.pho_detail_2, images.products.pho_detail_4, images.products.pho_detail_3],
    desc_images: {
      topLeft: images.products.pho_topLeft,
      bottomLeft: images.products.pho_bottomLeft,
      right: images.products.pho_right,
    },
    variant: [
      {
        id: 1,
        title: "8.30 ounce (Pack of 1)",
        price: "$2.49",
      },
      {
        id: 2,
        title: "16.60 ounce (Pack of 1)",
        price: "$3.49",
      },
    ],
    ingredient: [
      {
        id: 7,
        name: "PHỞ BÒ (BEEF NOODLE SOUP)",
        image: images.products.pho_beef1,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 8,
        name: "SPICY SHRIMP NOODLES",
        image: images.products.pho_shrimp,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 9,
        name: "VIETNAMESE PORK AND MUSHROOM NOODLE SOUP",
        image: images.products.pho_mushroom,
      },
      {
        id: 10,
        name: "PHỞ BÒ (BEEF NOODLE SOUP)",
        image: images.products.pho_beef2,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 11,
        name: "PHỞ GÀ (CHICKEN NOODLE SOUP)",
        image: images.products.pho_chicken,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 12,
        name: "SEAFOOD NOODLES",
        image: images.products.pho_seafood,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
    ],
    ingredient_desc:
      'Vietnamese hot chili peppers specialty "Chỉ Thiên" are hand-picked since the early morning, grinded and fermented with fresh garlic & salt, all-together tied with a hint of rice vinegar to create a delightful mix of sour and spicy taste of CHIN-SU Phở Hot Sauce.',
    ingredient_title: "CHIN-SU PHỞ HOT SAUCE FEATURED RECIPES",
    relatives: [
      {
        itemId: 1,
        image: images.products.rel_original,
        name: "ORIGINAL HOT SAUCE",
      },
      {
        itemId: 3,
        image: images.products.rel_chi_thien,
        name: "CHỈ THIÊN HOT SAUCE",
      },
      {
        itemId: 4,
        image: images.products.rel_truffle,
        name: "TRUFFLE HOT SAUCE",
      },
    ],
    bottom: images.products.bottom_pho,
  },
  {
    id: 3,
    title: 'CHIN-SU "CHỈ THIÊN" HOT SAUCE',
    subTitle: "EXTRA HOT - TRY & CRY",
    description: null,
    color: "#A82F27",
    image: images.products.chithien_intro,
    image_mobile: images.products.chithien_intro_mobile,
    content:
      'Fire up your "extra hot" profile with the brand-new pinnacle of heat from CHIN-SU spicy universe! Just a dash of CHIN-SU "Chỉ Thiên" Hot Sauce can go a long way in adding a good kick to your everyday meals!',
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
    imageUrls: [
      images.products.chithien_detail_1,
      images.products.chithien_detail_2,
      images.products.chithien_detail_4,
      images.products.chithien_detail_5,
    ],
    desc_images: {
      topLeft: images.products.chithien_topLeft,
      bottomLeft: images.products.chithien_bottomLeft,
      right: images.products.chithien_right,
    },
    variant: [
      {
        id: 1,
        title: "8.80 ounce (Pack of 1)",
        price: "$2.49",
      },
      {
        id: 2,
        title: "17.65 ounce (Pack of 1)",
        price: "$3.49",
      },
    ],
    ingredient: [
      {
        id: 13,
        name: "BURGER",
        image: images.products.chithien_burger,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 14,
        name: "BURRITO",
        image: images.products.chithien_burrito,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 15,
        name: "TACOS",
        image: images.products.chithien_tacos,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 16,
        name: "CARNE ASADA",
        image: images.products.chithien_asada,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 17,
        name: "BANH MI",
        image: images.products.chithien_banhmi,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 18,
        name: "SANDWICH & FRIES",
        image: images.products.chithien_sandwich,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
    ],
    ingredient_desc:
      'The Vietnamese gourmet hot chili peppers named "Chỉ Thiên" is the main ingredient in a bottle of CHIN-SU Chỉ Thiên Hot Sauce.',
    ingredient_title: "CHI THIEN HOT SAUCE FEATURED RECIPES",
    relatives: [
      {
        itemId: 1,
        image: images.products.rel_original,
        name: "ORIGINAL HOT SAUCE",
      },
      {
        itemId: 2,
        image: images.products.rel_pho,
        name: "PHỞ HOT SAUCE",
      },
      {
        itemId: 4,
        image: images.products.rel_truffle,
        name: "TRUFFLE HOT SAUCE",
      },
    ],
    bottom: images.products.bottom_chi_thien,
  },
  {
    id: 4,
    title: "CHIN-SU DELIGHT TRUFFLE HOT SAUCE",
    subTitle: "GOURMET HOT SAUCE WITH BLACK & WHITE TRUFFLES",
    description: null,
    color: "#000000",
    image: images.products.truffle_intro,
    image_mobile: images.products.truffle_intro_mobile,
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
    imageUrls: [
      images.products.truffle_detail_1,
      images.products.truffle_detail_2,
      images.products.truffle_detail_4,
      images.products.truffle_detail_5,
    ],
    desc_images: {
      topLeft: images.products.truffle_topLeft,
      bottomLeft: images.products.truffle_bottomLeft,
      right: images.products.truffle_right,
    },
    variant: [],
    ingredient: [
      {
        id: 22,
        name: "TOMAHAWK",
        image: images.products.truffle_tomahawk,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      
      {
        id: 20,
        name: "STEAKS",
        image: images.products.truffle_steaks,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 21,
        name: "PASTA",
        image: images.products.truffle_pasta,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 19,
        name: "FRENCH FRIES",
        image: images.products.truffle_french,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 23,
        name: "MAC & CHEESE",
        image: images.products.truffle_cheese,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
      {
        id: 24,
        name: "LAMB CHOPS",
        image: images.products.truffle_lamb_chops,
        ingredients: [
          "12 chicken Wings",
          "2 teaspoons of sugar",
          "1 cup all-purpose flour",
          "1 bottle of CHIN-SU Original Hot Sauce (8.8 Oz)",
          "2 quarts oil for frying",
        ],
        instructions: [
          "Step 1: Clean the chicken wings & slightly cut into 2 pieces.",
          "Step 2: Create your CHIN-SU sauce by mixing together flour, CHIN-SU Original Hot Sauce & sugar in a wide, shallow bowl. Press wings into flour mixture to coat and arrange wings onto a large plate with space between. Refrigerate coated wings for 15 to 30 minutes.",
          "Step 3: Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
          "Step 4: Fry chicken wings in hot oil until crisp and juices run clear.",
          "Step 5: Transfer fried wings to a large bowl. Drizzle CHIN-SU hot sauce over & enjoy your delicious wings.",
        ],
      },
    ],
    ingredient_desc:
      'Delight black & white truffle combined with "Chỉ Thiên" hot chili peppers to create each bottle of CHIN-SU Delight Truffle Hot Sauce.',
    ingredient_title: "TRUFFLE HOT SAUCE FEATURED RECIPES",
    relatives: [
      {
        itemId: 1,
        image: images.products.rel_original,
        name: "ORIGINAL HOT SAUCE",
      },
      {
        itemId: 2,
        image: images.products.rel_pho,
        name: "PHỞ HOT SAUCE",
      },
      {
        itemId: 3,
        image: images.products.rel_chi_thien,
        name: "CHỈ THIÊN HOT SAUCE",
      },
    ],
    bottom: images.products.bottom_truffle,
  },
];

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const mobile = useMedia("(max-width: 600px)");

  useEffect(() => {
    if (router && router.query) {
      const item = items.find((el) => el.id.toString() == router.query.id);
      setData(item);
    }
  }, [router]);
  if (!data) return null;
  return (
    <div>
      <div style={{ marginTop: mobile ? "0px" : "120px" }}>
        <Variant item={data} />
        <Description item={data} />
        <Ingredient item={data} />
        <Relative item={data} />
        {/* FOOTER BANNER */}
        <div style={{ width: "100%" }}>
          <Image
            className="footer_banner"
            src={data.bottom}
            width="1920"
            height="594"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1920, 594)
            )}`}
            alt=""
          />
        </div>
        <Subcribe />
      </div>
    </div>
  );
};

export default ItemDetail;
