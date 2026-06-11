export interface Product {
  id: string;
  name: string;
  nameAr: string;
  tagline: string;
  description: string;
  price: number;
  bottleImage: string;
  lipsImage: string;
}

export interface PackOffer {
  nameAr: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  includes: string[];
}

export const products: Product[] = [
  {
    id: "strawberry",
    name: "Strawberry Glow",
    nameAr: "ستروبيري قلو",
    tagline: "ناعمة كالعسل، جذّابة منذ النظرة الأولى",
    description: "عطر الفراولة الطازجة يجعلكِ حاضرة في كل مكان — رائحة أنثوية لا تُقاوَم",
    price: 99,
    bottleImage: "/strawberry.png",
    lipsImage: "/Gemini_Generated_Image_x9u7vix9u7vix9u7.png",
  },
  {
    id: "mango",
    name: "Mango Glow",
    nameAr: "مانقو قلو",
    tagline: "دافئة كالشمس، مُغرية منذ اللمسة الأولى",
    description: "خلاصة المانجو الاستوائية — عطر يُشعل الأجواء ويجعله لا يستطيع الابتعاد",
    price: 99,
    bottleImage: "/mango.png",
    lipsImage: "/Gemini_Generated_Image_7rzmhf7rzmhf7rzm.png",
  },
  {
    id: "chocolat",
    name: "Chocolat Glow",
    nameAr: "شوكولا قلو",
    tagline: "غنيّة، عميقة، تجعله يأتي من تلقاء نفسه",
    description: "الشوكولاتة الداكنة الفاخرة — تتركين أثراً لا يُنسى على جلدكِ وفي ذاكرته",
    price: 99,
    bottleImage: "/chocolat.png",
    lipsImage: "/Gemini_Generated_Image_dhm80tdhm80tdhm8.png",
  },
  {
    id: "vanilla",
    name: "Vanilla Glow",
    nameAr: "فانيلا قلو",
    tagline: "ناعمة، حلوة، تبقين في ذاكرته بعد رحيلكِ",
    description: "دفء الفانيليا الكريمية — عطر يسكن القلوب ويجعلهم يعودون إليكِ دائماً",
    price: 99,
    bottleImage: "/vanilla.png",
    lipsImage: "/Gemini_Generated_Image_e4j4pve4j4pve4j4.png",
  },
];

export const packOffer: PackOffer = {
  nameAr: "الباقة الكاملة",
  tagline: "أربع نكهات في علبة واحدة",
  description: "المجموعة الكاملة من Chérie Glow — جميع النكهات في علبة تقديم فاخرة",
  price: 299,
  originalPrice: 396,
  image: "/all-flavours1.png",
  includes: ["Strawberry Glow", "Mango Glow", "Chocolat Glow", "Vanilla Glow"],
};

export const ctaStrips = [
  {
    id: "after-hero",
    headline: "اكتشفي مجموعة Chérie Glow",
    subtext: "أربع نكهات فاخرة — تجربة حسية لا تُنسى",
  },
  {
    id: "after-p1",
    headline: "ريحتكِ تتحدث قبلكِ",
    subtext: "اختاري نكهتكِ الآن وأضيفيها إلى طلبكِ",
  },
  {
    id: "after-p2",
    headline: "لا تكتفي بنكهة واحدة",
    subtext: "جرّبي المجموعة كاملة ووفّري أكثر",
  },
  {
    id: "after-p3",
    headline: "كلّ نكهة قصة مختلفة",
    subtext: "أيّها يعكس شخصيّتكِ الحقيقية؟",
  },
  {
    id: "after-products",
    headline: "المجموعة الكاملة بسعر استثنائي",
    subtext: "اشتري الأربع نكهات معاً ووفّري 97 درهماً",
  },
  {
    id: "after-pack",
    headline: "الطلب سهل — الدفع عند الاستلام",
    subtext: "التوصيل في جميع أنحاء المغرب خلال 24–48 ساعة",
  },
];
