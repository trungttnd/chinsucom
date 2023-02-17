import original_topLeft from "../public/detail/original_desc_left1_new.jpg";
import original_bottomLeft from "../public/detail/original_desc_left2_new.jpg";
import original_right from "../public/detail/original_desc_right1.jpg";
import pho_topLeft from "../public/detail/pho_desc_left1.jpg";
import pho_bottomLeft from "../public/detail/pho_desc_left2.jpg";
import pho_right from "../public/detail/pho_desc_right1.jpg";
import org_seafood from "../public/detail/original_chickend_wing.jpg";
import org_egg from "../public/detail/original_scrambled_egg.jpg";
import org_cheese from "../public/detail/original_cheese.jpg";
import org_poboys from "../public/detail/original_poboys.jpg";
import org_tacos from "../public/detail/original_tacos.jpg";
import org_sandwich from "../public/detail/original_sandwich.jpg";
import rel_original from "../public/product_original_1.jpg";
import rel_pho from "../public/product_pho_1.jpg";
import rel_chi_thien from "../public/product_chi_thien_1.jpg";
import rel_truffle from "../public/product_truffle_1.jpg";
import original_intro from "../public/original_intro.jpg";
import pho_intro from "../public/pho_intro_new.png";
import chithien_intro from "../public/chi_thien_intro_new.png";
import truffle_intro from "../public/truffle_intro_new.png";
import original_intro_mobile from "../public/original_intro_mobile.jpg";
import pho_intro_mobile from "../public/pho_intro_mobile.jpg";
import chithien_intro_mobile from "../public/chi_thien_intro_mobile.jpg";
import truffle_intro_mobile from "../public/truffle_intro_mobile.jpg";

const items = [
  {
    id: 1,
    title: "CHIN-SU ORIGINAL HOT SAUCE",
    subTitle: "THE ORIGINAL VIETNAMESE HOT SAUCE",
    description: null,
    color: "#A82F27",
    image: original_intro,
    image_mobile: original_intro_mobile,
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
    imageUrls: [rel_original, rel_original, rel_original, rel_original],
    desc_images: {
      topLeft: original_topLeft,
      bottomLeft: original_bottomLeft,
      right: original_right,
    },
    variant: [
      {
        title: "8.82 ounce (Pack of 1)",
        price: "$7.99",
      },
      {
        title: "17.6 ounce (Pack of 1)",
        price: "$11.99",
      },
      {
        title: "35.3 ounce (Pack of 1)",
        price: "$21.99",
      },
    ],
    ingredient: [
      { name: "HOT WINGS", image: org_seafood },
      { name: "SCRAMBLED EGG", image: org_egg },
      { name: "MAC & CHEESE", image: org_cheese },
      { name: "POBOYS", image: org_poboys },
      { name: "TACOS", image: org_tacos },
      { name: "SANDWICH", image: org_sandwich },
    ],
    ingredient_desc: '"Chỉ Thiên" hot chili peppers, salt & garlic',
    ingredient_title: "CHIN-SU ORIGINAL HOT SAUCE FEATURED RECIPES",
    relatives: [
      {
        image: rel_pho,
        name: "PHỞ HOT SAUCE",
      },
      {
        image: rel_chi_thien,
        name: "CHỈ THIÊN HOT SAUCE",
      },
      {
        image: rel_truffle,
        name: "TRUFFLE HOT SAUCE",
      },
    ],
  },
  {
    id: 2,
    title: "CHIN-SU PHỞ HOT SAUCE",
    subTitle: "Speciality of Vietnamese cuisine",
    description: null,
    color: "#000000",
    image: pho_intro,
    image_mobile: pho_intro_mobile,
    content:
      "Designed to elevate the authentic taste of Vietnamese Phở, CHIN-SU Phở Hot Sauce is the original Vietnamese staple sauce to pair with our nation’s most loved cuisine, capturing every bit of fiery goodness to enhance the delicate Phở broth.",
    details: [
      {
        index: "01",
        title: "THE STAPLE HOT SAUCE FOR VIETNAMESE BEST LOVED CUISINE",
        note: `There’s no better way to eat Vietnamese Phở like a Pro than to enjoy it with it's true companion - CHIN-SU Phở Hot Sauce. It has that “tangy and savory” flavor, it offers a pleasant spicy tingle in your mouth. And above all, it adds just the perfect balance of spiciness, acidity and natural sweetness to make your bowl of Phở interesting.`,
      },
      {
        index: "02",
        title: "VIETNAMESE ORIGINAL HOT SAUCE FOR PHỞ",
        note: "Using traditional fermentation method, our Master chefs & Vietnamese folk craftsman have successfully created the one Asian hot sauce to go with Vietnamese traditional Phở, noodles & do them justice. As you drizzle this hot sauce bottle into the delicate broth of Phở or hot noodles, the first thing you’ll notice is it's aromatic smell. Just like the savory spiciness that lingers in the air, so it will on your tastebuds as well.",
      },
    ],
    imageUrls: [rel_pho, rel_pho, rel_pho, rel_pho],
    desc_images: {
      topLeft: pho_topLeft,
      bottomLeft: pho_bottomLeft,
      right: pho_right,
    },
    variant: [
      {
        title: "8.82 ounce (Pack of 1)",
        price: "$7.99",
      },
      {
        title: "17.6 ounce (Pack of 1)",
        price: "$11.99",
      },
      {
        title: "35.3 ounce (Pack of 1)",
        price: "$21.99",
      },
    ],
    ingredient: [
      { name: "HOT WINGS", image: org_seafood },
      { name: "SCRAMBLED EGG", image: org_egg },
      { name: "MAC & CHEESE", image: org_cheese },
      { name: "POBOYS", image: org_poboys },
      { name: "TACOS", image: org_tacos },
      { name: "SANDWICH", image: org_sandwich },
    ],
    ingredient_desc:
      'Vietnamese hot chili peppers specialty "Chỉ Thiên" are hand-picked since the early morning, grinded and fermented with fresh garlic & salt, all-together tied with a hint of rice vinegar to create a delightful mix of sour and spicy taste of CHIN-SU Phở Hot Sauce.',
    ingredient_title: "CHIN-SU PHỞ HOT SAUCE FEATURED RECIPES",
    relatives: [
      {
        image: rel_original,
        name: "ORIGINAL HOT SAUCE",
      },
      {
        image: rel_chi_thien,
        name: "CHỈ THIÊN HOT SAUCE",
      },
      {
        image: rel_truffle,
        name: "TRUFFLE HOT SAUCE",
      },
    ],
  },
  {
    id: 3,
    title: 'CHIN-SU "CHỈ THIÊN" HOT SAUCE',
    subTitle: "EXTRA HOT - TRY & CRY",
    description: null,
    color: "#A82F27",
    image: chithien_intro,
    image_mobile: chithien_intro_mobile,
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
        title: "",
        note: "Add a surprising little kick to your salad dressing for Green Thai Papaya Salad; mix it with your dipping sauce for a mouthful taste of spicy delicious Spring rolls, Dim sum & Dumpling; use it as a glaze for your Korean Barbeque Chicken, squeeze it into your Taco, Burrito or Enchilada for a delightful flavor experience, etc. Anyhow you choose to pair it with, you should be prepared for an instant sensation.",
      },
    ],
    imageUrls: [rel_chi_thien, rel_chi_thien, rel_chi_thien, rel_chi_thien],
    desc_images: {
      topLeft: original_topLeft,
      bottomLeft: original_bottomLeft,
      right: original_right,
    },
    variant: [
      {
        title: "8.82 ounce (Pack of 1)",
        price: "$7.99",
      },
      {
        title: "17.6 ounce (Pack of 1)",
        price: "$11.99",
      },
      {
        title: "35.3 ounce (Pack of 1)",
        price: "$21.99",
      },
    ],
    ingredient: [
      { name: "HOT WINGS", image: org_seafood },
      { name: "SCRAMBLED EGG", image: org_egg },
      { name: "MAC & CHEESE", image: org_cheese },
      { name: "POBOYS", image: org_poboys },
      { name: "TACOS", image: org_tacos },
      { name: "SANDWICH", image: org_sandwich },
    ],
    ingredient_desc: '"Chỉ Thiên" hot chili peppers, salt & garlic',
    ingredient_title: "CHIN-SU ORIGINAL HOT SAUCE FEATURED RECIPES",
    relatives: [
      {
        image: rel_original,
        name: "ORIGINAL HOT SAUCE",
      },
      {
        image: rel_pho,
        name: "PHỞ HOT SAUCE",
      },
      {
        image: rel_truffle,
        name: "TRUFFLE HOT SAUCE",
      },
    ],
  },
  {
    id: 4,
    title: "CHIN-SU DELIGHT TRUFFLE HOT SAUCE",
    subTitle: "GOURMET HOT SAUCE WITH BLACK & WHITE TRUFFLES",
    description: null,
    color: "#000000",
    image: truffle_intro,
    image_mobile: truffle_intro_mobile,
    content:
      'CHIN-SU Delight Truffle Hot Sauce is characterized by the refined sweet & earthy black & white Truffle flavor, balanced with just the right amount of “kick” from "Chỉ Thiên" chili peppers that aesthetically defines haute cuisine',
    details: [
      {
        index: "01",
        title: "",
        note: 'The rare delicious "black diamond" & also king of the Western culinary - "Truffle" is now paired with the Asian cornerstone - "Chỉ Thiên" hot chili peppers to create the staple hot sauce for haute cuisine.',
      },
      {
        index: "02",
        title: "",
        note: 'It has that nice kick from "Chỉ Thiên" chili peppers, but really well-balanced, with delicious earthy and buttery undertones that stay with you and make you happy. It offers a tiny bit of after burn - a pleasant reminder that CHIN-SU Original Truffle Hot Sauce just rocked your palate with a full-bodied umami flavor. The synergy between spiciness and savory sweetness captured in one sophisticated hot sauce bottle lasts from start to finish. What lingers afterwards is the complex flavor profile riches in Truffle aroma and delicious heat that dances around your mouth and teases your taste buds with delight.',
      },
      {
        index: "03",
        title: "",
        note: "Best enjoyed with Tomahawk, BBQ, grilled meat & all kinds of culinary masterpieces for refined gourmet dining experiences.",
      },
    ],
    imageUrls: [rel_truffle, rel_truffle, rel_truffle, rel_truffle],
    desc_images: {
      topLeft: original_topLeft,
      bottomLeft: original_bottomLeft,
      right: original_right,
    },
    variant: [
      {
        title: "8.82 ounce (Pack of 1)",
        price: "$7.99",
      },
      {
        title: "17.6 ounce (Pack of 1)",
        price: "$11.99",
      },
      {
        title: "35.3 ounce (Pack of 1)",
        price: "$21.99",
      },
    ],
    ingredient: [
      { name: "HOT WINGS", image: org_seafood },
      { name: "SCRAMBLED EGG", image: org_egg },
      { name: "MAC & CHEESE", image: org_cheese },
      { name: "POBOYS", image: org_poboys },
      { name: "TACOS", image: org_tacos },
      { name: "SANDWICH", image: org_sandwich },
    ],
    ingredient_desc: '"Chỉ Thiên" hot chili peppers, salt & garlic',
    ingredient_title: "CHIN-SU ORIGINAL HOT SAUCE FEATURED RECIPES",
    relatives: [
      {
        image: rel_original,
        name: "ORIGINAL HOT SAUCE",
      },
      {
        image: rel_pho,
        name: "PHỞ HOT SAUCE",
      },
      {
        image: rel_chi_thien,
        name: "CHỈ THIÊN HOT SAUCE",
      },
    ],
  },
];

export default items;