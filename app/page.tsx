"use client";

import Image from "next/image";
import { useState } from "react";
import { products, packOffer, ctaStrips, type Product } from "@/data/products";

const WA_NUMBER = "212600000000";

function openWhatsApp(text?: string) {
  const msg = text ?? "مرحباً، أودّ الطلب من Chérie Glow";
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function WaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.553 4.13 1.521 5.873L0 24l6.335-1.502C8.056 23.459 10 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.84 0-3.591-.495-5.113-1.362l-.361-.215-3.762.893.925-3.653-.236-.376C2.55 15.685 2 13.91 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
  );
}

function TrustBar() {
  const items = [
    {
      label: "آمن وقابل للأكل",
      sub: "مكوّنات طبيعية 100% صالحة للتذوق",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E8408A" strokeWidth={1.8}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9,12 11,14 15,10" />
        </svg>
      ),
    },
    {
      label: "خصوصية كاملة",
      sub: "تغليف سري وتوصيل خاص",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E8408A" strokeWidth={1.8}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      label: "الدفع عند الاستلام",
      sub: "لا دفع مسبق — ادفعي عند الوصول",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E8408A" strokeWidth={1.8}>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      label: "دعم 24/7",
      sub: "فريقنا دايما هنا من أجلكِ",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E8408A" strokeWidth={1.8}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="border-y"
      style={{ background: "#0d0d0d", borderColor: "rgba(255,255,255,0.06)" }}
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "rgba(232,64,138,0.1)" }}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">{item.label}</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowToUse() {
  const steps = [
    {
      number: "01",
      title: "ضعي القطرات",
      description: "ضعي بضع قطرات على المناطق الحساسة — الصدر، العنق، وأي منطقة تريدين. المنتج آمن وقابل للتذوق تماماً.",
    },
    {
      number: "02",
      title: "شاركي اللحظة",
      description: "دعيه يكتشف النكهة والعطر بنفسه — هذه اللحظة المشتركة هي ما يصنع التقارب الحقيقي بينكما.",
    },
    {
      number: "03",
      title: "استمتعا معاً",
      description: "ليست مجرد عناية — هي دعوة للاهتمام والتقارب. لحظات تبنيان الحب وتجعلان كلّ يوم استثنائياً.",
    },
  ];

  return (
    <section
      dir="rtl"
      style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p
          className="text-[11px] tracking-[6px] uppercase font-medium text-center mb-5"
          style={{ color: "#E8408A" }}
        >
          طريقة الاستخدام
        </p>
        <h2
          className="font-bold text-white text-center mb-16 leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          ثلاث خطوات فقط
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-6xl font-bold mb-8 leading-none"
                style={{ color: "#E8408A", opacity: 0.25 }}
              >
                {step.number}
              </p>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ingredients() {
  const items = [
    {
      emoji: "🍯",
      nameAr: "عسل حر طبيعي",
      benefit: "يُرطّب البشرة ويُغذّيها بعمق — طعمه حلو وملمسه ناعم، وهو المكوّن الأساسي الذي يجعل كلّ نكهة لذيذة وقابلة للتذوق.",
    },
    {
      emoji: "🍓",
      nameAr: "فواكه طازجة",
      benefit: "فراولة، مانجو، وفواكه طبيعية مختارة بعناية — تُعطي كلّ نكهة طابعها الفريد وعطرها المميّز الذي يُغوي الحواس.",
    },
    {
      emoji: "🍫",
      nameAr: "شوكولاتة ذائبة",
      benefit: "شوكولاتة طبيعية فاخرة تُضفي غنى وعمقاً على النكهة — دافئة، مُغرية، وآمنة تماماً للتذوق على البشرة.",
    },
    {
      emoji: "🌿",
      nameAr: "فانيليا نقية",
      benefit: "لمسة كريمية دافئة تُلطّف البشرة وتُكمل تناسق النكهات — عطر راقٍ يُذكّر بأجمل اللحظات ويُريح الروح.",
    },
  ];

  return (
    <section
      dir="rtl"
      style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p
          className="text-[11px] tracking-[6px] uppercase font-medium text-center mb-5"
          style={{ color: "#E8408A" }}
        >
          المكوّنات
        </p>
        <h2
          className="font-bold text-white text-center mb-3 leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          طبيعية 100%
        </h2>
        <p className="text-center text-base mb-16" style={{ color: "rgba(255,255,255,0.4)" }}>
          كلّ قطرة مصنوعة من خيرة المكوّنات الطبيعية — بدون كيماويات ضارة أو مواد حافظة اصطناعية
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item.nameAr}
              className="flex gap-5 rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="text-4xl shrink-0 leading-none mt-1">{item.emoji}</span>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.nameAr}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {item.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "هل المنتجات قابلة للأكل وآمنة على البشرة؟",
      a: "نعم تماماً — هذا هو الفرق الأساسي لـ Chérie Glow. كلّ منتج مصنوع من مكوّنات طبيعية 100% مختارة بعناية، آمنة على البشرة وقابلة للتذوق. لا توجد كيماويات ضارة ولا مواد حافظة اصطناعية.",
    },
    {
      q: "كيف أستخدم المنتج بشكل صحيح؟",
      a: "ضعي بضع قطرات على المناطق الحساسة كالصدر والعنق وأي منطقة تريدين — ثم شاركي اللحظة مع شريككِ. المنتج مصمّم ليكون تجربة مشتركة بين الزوجين، وليس فقط عطراً شخصياً.",
    },
    {
      q: "هل التوصيل سري؟ كيف يصل الطلب؟",
      a: "نعم، نضمن خصوصية كاملة. يُوصَّل طلبكِ في تغليف سري محكم لا يكشف عن محتواه. التوصيل لجميع مدن المغرب خلال 24–48 ساعة، والدفع عند الاستلام فقط.",
    },
    {
      q: "هل يمكن استخدامها يومياً؟",
      a: "بالتأكيد. المكوّنات الطبيعية المُرطّبة تجعلها مثالية للاستخدام اليومي. بل إن الاستخدام المنتظم يُعمّق التقارب بين الزوجين ويجعل كلّ يوم لحظة خاصة.",
    },
    {
      q: "ما الفرق بين النكهات الأربع؟",
      a: "كلّ نكهة تجربة مختلفة: الفراولة حلوة وأنثوية مُبهجة، المانجو دافئة ومُغرية، الشوكولاتة فاخرة وعميقة، والفانيليا ناعمة وكلاسيكية. جرّبي الباقة الكاملة لتكتشفي أيّها يُلهب أجواءكما أكثر.",
    },
  ];

  return (
    <section
      dir="rtl"
      style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p
          className="text-[11px] tracking-[6px] uppercase font-medium text-center mb-5"
          style={{ color: "#E8408A" }}
        >
          الأسئلة الشائعة
        </p>
        <h2
          className="font-bold text-white text-center mb-14 leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          كلّ ما تودّين معرفته
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: `1px solid ${isOpen ? "rgba(232,64,138,0.3)" : "rgba(255,255,255,0.08)"}`,
                  background: isOpen ? "rgba(232,64,138,0.04)" : "rgba(255,255,255,0.02)",
                  transition: "border-color 0.2s, background 0.2s",
                }}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-right gap-4"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-semibold text-white text-sm md:text-base leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen ? "#E8408A" : "rgba(255,255,255,0.08)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s, background 0.2s",
                    }}
                  >
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="white" strokeWidth={2.2}>
                      <line x1="6" y1="2" x2="6" y2="10" />
                      <line x1="2" y1="6" x2="10" y2="6" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaStrip({ headline, subtext }: { headline: string; subtext?: string }) {
  return (
    <div
      className="px-6 py-12 md:py-14"
      style={{
        background: "#0f0f0f",
        borderTop: "1px solid rgba(232,64,138,0.14)",
        borderBottom: "1px solid rgba(232,64,138,0.14)",
      }}
    >
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        dir="rtl"
      >
        <div>
          <p className="text-xl md:text-2xl font-semibold text-white">{headline}</p>
          {subtext && (
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              {subtext}
            </p>
          )}
        </div>
        <div className="flex gap-3 shrink-0">
          <a
            href="#order"
            className="bg-[#E8408A] text-white font-semibold px-7 py-3 rounded-full text-sm hover:bg-[#d03578] transition-colors whitespace-nowrap"
          >
            اطلبي الآن
          </a>
          <button
            onClick={() => openWhatsApp()}
            className="flex items-center gap-2 border rounded-full px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            <WaIcon className="w-4 h-4 shrink-0" />
            <span>واتساب</span>
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProductSectionProps {
  product: Product;
  index: number;
  onOrder: (id: string) => void;
}

function ProductSection({ product, index, onOrder }: ProductSectionProps) {
  const imageOnLeft = index % 2 === 0;

  return (
    <section
      className="flex flex-col md:flex-row min-h-screen border-t border-white/[0.06]"
      style={{ direction: "ltr" }}
    >
      {/* Image column */}
      <div
        className="relative overflow-hidden w-full md:w-[60%] min-h-[70vw] md:min-h-0"
        style={{ order: imageOnLeft ? 1 : 2 }}
      >
        {/* Blurred lips as atmospheric background */}
        <Image
          src={product.lipsImage}
          alt=""
          fill
          className="object-cover scale-110"
          style={{ filter: "blur(40px)", opacity: 0.18 }}
          sizes="60vw"
        />

        {/* Edge vignettes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: imageOnLeft
              ? "linear-gradient(to right, transparent 55%, #0a0a0a 100%)"
              : "linear-gradient(to left, transparent 55%, #0a0a0a 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #0a0a0a 0%, transparent 12%, transparent 88%, #0a0a0a 100%)",
          }}
        />

        {/* Bottle — fixed-size rounded card */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              width: "min(80%, 540px)",
              aspectRatio: "4 / 3",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src={product.bottleImage}
              alt={product.nameAr}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 48vw"
            />
          </div>
        </div>
      </div>

      {/* Text column */}
      <div
        className="flex flex-col justify-center w-full md:w-[40%] px-8 md:px-14 lg:px-20 py-16 md:py-0"
        style={{ order: imageOnLeft ? 2 : 1, direction: "rtl" }}
      >
        <p className="text-[11px] tracking-[5px] uppercase font-medium mb-8" style={{ color: "rgba(255,255,255,0.25)" }}>
          {String(index + 1).padStart(2, "0")} &mdash; {product.name}
        </p>

        <h2
          className="font-bold text-white leading-none mb-6"
          style={{ fontSize: "clamp(48px, 5.5vw, 80px)" }}
        >
          {product.nameAr}
        </h2>

        <div className="w-8 h-[2px] bg-[#E8408A] mb-7" />

        <p className="text-lg md:text-xl font-semibold text-white leading-snug mb-4">
          {product.tagline}
        </p>

        <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
          {product.description}
        </p>

        <ul className="space-y-2 mb-10">
          {product.highlights.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#E8408A" }} />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-[42px] font-bold leading-none" style={{ color: "#E8408A" }}>
            {product.price}
          </span>
          <span className="text-base" style={{ color: "rgba(255,255,255,0.4)" }}>درهم</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#order"
            onClick={() => onOrder(product.id)}
            className="flex-1 text-center bg-[#E8408A] text-white font-semibold py-[14px] rounded-full text-[15px] hover:bg-[#d03578] transition-colors"
          >
            اطلبي الآن
          </a>
          <button
            onClick={() => openWhatsApp(`مرحباً، أودّ طلب ${product.nameAr} — ${product.price} درهم`)}
            className="flex-1 flex items-center justify-center gap-2 border py-[14px] rounded-full text-[15px] font-medium transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.55)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
            }}
          >
            <WaIcon className="w-4 h-4 shrink-0" />
            <span>واتساب</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [offer, setOffer] = useState<"single" | "pack">("single");
  const [flavor, setFlavor] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleOrder = (productId: string) => {
    setOffer("single");
    setFlavor(productId);
  };

  const handlePackOrder = () => {
    setOffer("pack");
    setFlavor("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldBox = (id: string): React.CSSProperties => ({
    border: `1.5px solid ${focusedField === id ? "#E8408A" : "rgba(255,255,255,0.09)"}`,
    borderRadius: 14,
    background: focusedField === id ? "rgba(232,64,138,0.05)" : "rgba(255,255,255,0.03)",
    transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
    boxShadow: focusedField === id ? "0 0 0 4px rgba(232,64,138,0.10)" : "none",
    overflow: "hidden",
  });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    color: "#ffffff",
    fontSize: "16px",
    fontFamily: "inherit",
    padding: "16px 20px",
    outline: "none",
    direction: "rtl",
  };

  return (
    <div className="bg-[#0a0a0a] text-white font-sans">

      {/* ─── HEADER ─────────────────────────────────────────── */}
      <header
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-10"
        style={{
          height: 64,
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <button
          onClick={() => openWhatsApp()}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: "rgba(255,255,255,0.5)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
        >
          <WaIcon className="w-[18px] h-[18px]" />
          <span>واتساب</span>
        </button>

        <div style={{ background: "#fff", borderRadius: 10, padding: "4px 10px", lineHeight: 0 }}>
          <Image
            src="/cherie-glow-logo.png"
            alt="Chérie Glow"
            width={110}
            height={52}
            className="object-contain block"
            unoptimized
            priority
          />
        </div>
      </header>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden"
        style={{ paddingTop: 64 }}
      >
        <Image
          src="/all-flavours3.png"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.55 }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.55) 35%, rgba(10,10,10,0.55) 65%, #0a0a0a 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <p
            className="text-[11px] tracking-[6px] uppercase font-medium mb-10"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Gourmand Collection
          </p>

          <h1
            className="font-bold leading-none tracking-tight mb-6"
            style={{ fontSize: "clamp(72px, 13vw, 150px)" }}
          >
            <span className="block text-white"> خلي لحظاتكم الزوجية ألذ...</span>
            <span className="block" style={{ color: "#E8408A" }}> ما غيشبعش منك..</span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-xs mb-12"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            نؤمن أن الحب الحقيقي يُبنى على الاهتمام والتقارب اليومي، لذلك صُممت منتجاتنا لتكون رفيقًا لحظاتكم الخاصة
          </p>

          <a
            href="#order"
            className="inline-block bg-[#E8408A] text-white font-semibold px-10 py-4 rounded-full text-base hover:bg-[#d03578] transition-colors"
          >
            اطلبي الآن &mdash; 99 درهم
          </a>
        </div>
      </section>

      <TrustBar />

      {/* CTA — after hero */}
      <CtaStrip
        headline={ctaStrips[0].headline}
        subtext={ctaStrips[0].subtext}
      />

      {/* ─── PRODUCTS ────────────────────────────────────────── */}
      <div id="products">
        {products.map((product, i) => (
          <div key={product.id}>
            <ProductSection product={product} index={i} onOrder={handleOrder} />
            {/* CTA between products (after each except the last) */}
            {i < products.length - 1 && (
              <CtaStrip
                headline={ctaStrips[i + 1].headline}
                subtext={ctaStrips[i + 1].subtext}
              />
            )}
          </div>
        ))}
      </div>

      <HowToUse />

      {/* CTA — after products, before pack */}
      <CtaStrip
        headline={ctaStrips[4].headline}
        subtext={ctaStrips[4].subtext}
      />

      {/* ─── PACK OFFER ──────────────────────────────────────── */}
      <section
        id="pack"
        className="flex flex-col md:flex-row min-h-screen border-t border-white/[0.06]"
        style={{ direction: "ltr", background: "#0d0d0d" }}
      >
        <div className="relative overflow-hidden w-full md:w-[60%] min-h-[70vw] md:min-h-0">
          <Image
            src={packOffer.image}
            alt=""
            fill
            className="object-cover scale-110"
            style={{ filter: "blur(40px)", opacity: 0.18 }}
            sizes="60vw"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent 55%, #0a0a0a 100%)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 12%, transparent 88%, #0a0a0a 100%)" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ width: "min(80%, 540px)", aspectRatio: "4 / 3", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}
            >
              <Image
                src={packOffer.image}
                alt={packOffer.nameAr}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 48vw"
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center w-full md:w-[40%] px-8 md:px-14 lg:px-20 py-16 md:py-0"
          dir="rtl"
        >
          <p className="text-[11px] tracking-[5px] uppercase font-medium mb-8" style={{ color: "rgba(255,255,255,0.25)" }}>
            05 &mdash; عرض خاص
          </p>

          <h2
            className="font-bold text-white leading-none mb-6"
            style={{ fontSize: "clamp(48px, 5.5vw, 80px)" }}
          >
            {packOffer.nameAr}
          </h2>

          <div className="w-8 h-[2px] bg-[#E8408A] mb-7" />

          <p className="text-lg md:text-xl font-semibold text-white mb-4">{packOffer.tagline}</p>

          <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
            {packOffer.description}
          </p>

          <ul className="space-y-2 mb-6">
            {packOffer.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#E8408A" }} />
                {item}
              </li>
            ))}
          </ul>

          <ul className="space-y-1.5 mb-10">
            {packOffer.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "rgba(232,64,138,0.5)" }} />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-baseline gap-3 mb-8">
            <span
              className="font-bold leading-none"
              style={{ fontSize: "clamp(48px, 5vw, 64px)", color: "#E8408A" }}
            >
              {packOffer.price}
            </span>
            <span className="text-xl" style={{ color: "rgba(255,255,255,0.4)" }}>درهم</span>
            <span className="text-base line-through" style={{ color: "rgba(255,255,255,0.2)" }}>
              {packOffer.originalPrice} درهم
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#order"
              onClick={handlePackOrder}
              className="flex-1 text-center bg-[#E8408A] text-white font-semibold py-[14px] rounded-full text-[15px] hover:bg-[#d03578] transition-colors"
            >
              اطلبي الباقة
            </a>
            <button
              onClick={() => openWhatsApp(`مرحباً، أودّ طلب ${packOffer.nameAr} — ${packOffer.price} درهم`)}
              className="flex-1 flex items-center justify-center gap-2 border py-[14px] rounded-full text-[15px] font-medium transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.color = "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              }}
            >
              <WaIcon className="w-4 h-4 shrink-0" />
              <span>واتساب</span>
            </button>
          </div>
        </div>
      </section>

      <Ingredients />

      {/* CTA — after pack, before form */}
      <CtaStrip
        headline={ctaStrips[5].headline}
        subtext={ctaStrips[5].subtext}
      />

      <FaqSection />

      {/* ─── ORDER FORM ──────────────────────────────────────── */}
      <section
        id="order"
        className="px-6 py-20 md:py-28"
        style={{ background: "#111111", borderTop: "3px solid #E8408A" }}
        dir="rtl"
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="text-[11px] tracking-[6px] uppercase font-medium text-center mb-6"
            style={{ color: "#E8408A" }}
          >
            اطلبي الآن &mdash; الدفع عند الاستلام
          </p>

          <h2
            className="font-bold leading-none text-center mb-4"
            style={{ fontSize: "clamp(52px, 8vw, 88px)" }}
          >
              جاهزة لتتألقي؟
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>
            سنوصّل إليكِ في جميع أنحاء المغرب
          </p>

          {submitted ? (
            <div
              className="text-center py-16 rounded-3xl"
              style={{ border: "1px solid rgba(232,64,138,0.25)", background: "rgba(232,64,138,0.04)" }}
            >
              <p className="text-2xl font-semibold mb-3" style={{ color: "#E8408A" }}>
                تم تسجيل طلبكِ
              </p>
              <p style={{ color: "rgba(255,255,255,0.4)" }}>
                سيتصل بكِ فريقنا قريباً لتأكيد طلبكِ
              </p>
            </div>
          ) : (
            <div
              className="rounded-3xl px-8 md:px-12 py-10"
              style={{ border: "1px solid rgba(232,64,138,0.2)", background: "rgba(232,64,138,0.04)" }}
            >
              <form onSubmit={handleSubmit}>

                {/* ── Offer type tabs ── */}
                <div
                  className="flex rounded-2xl p-1 mb-10"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {(["single", "pack"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOffer(type)}
                      className="flex-1 flex flex-col items-center py-4 rounded-xl text-sm font-semibold transition-all duration-200"
                      style={
                        offer === type
                          ? { background: "#E8408A", color: "#fff", boxShadow: "0 4px 20px rgba(232,64,138,0.35)" }
                          : { background: "transparent", color: "rgba(255,255,255,0.35)" }
                      }
                    >
                      <span className="text-base font-bold">{type === "single" ? "99" : "299"}</span>
                      <span className="text-[11px] tracking-wide mt-0.5 opacity-80">
                        {type === "single" ? "نكهة واحدة — درهم" : "الباقة الكاملة — درهم"}
                      </span>
                    </button>
                  ))}
                </div>

                {/* ── Flavor picker ── */}
                {offer === "single" && (
                  <div className="mb-8">
                    <p className="text-[11px] tracking-[4px] uppercase font-medium mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
                      اختاري نكهتكِ
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {products.map((p) => {
                        const selected = flavor === p.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setFlavor(p.id)}
                            className="relative flex items-center gap-3 rounded-2xl p-3 text-right transition-all duration-200"
                            style={{
                              border: `1.5px solid ${selected ? "#E8408A" : "rgba(255,255,255,0.08)"}`,
                              background: selected ? "rgba(232,64,138,0.08)" : "rgba(255,255,255,0.02)",
                              boxShadow: selected ? "0 0 0 3px rgba(232,64,138,0.12)" : "none",
                            }}
                          >
                            <div className="relative shrink-0 rounded-xl overflow-hidden" style={{ width: 52, height: 52 }}>
                              <Image src={p.bottleImage} alt={p.nameAr} fill className="object-cover" sizes="52px" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-white text-sm leading-tight">{p.nameAr}</p>
                              <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{p.name}</p>
                            </div>
                            <div
                              className="shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200"
                              style={{
                                borderColor: selected ? "#E8408A" : "rgba(255,255,255,0.18)",
                                background: selected ? "#E8408A" : "transparent",
                              }}
                            >
                              {selected && (
                                <svg viewBox="0 0 10 8" className="w-2.5 h-2.5" fill="none" stroke="white" strokeWidth={2.2}>
                                  <polyline points="1,4 3.5,6.5 9,1" />
                                </svg>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {/* Hidden required field to enforce selection */}
                    <input type="text" value={flavor} required readOnly tabIndex={-1} style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, width: 0 }} />
                  </div>
                )}

                {/* ── Text fields ── */}
                <div className="flex flex-col gap-4 mb-8">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                      الاسم الكامل
                    </label>
                    <div style={fieldBox("name")}>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="أدخلي اسمكِ الكامل"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                      رقم الهاتف
                    </label>
                    <div style={fieldBox("phone")}>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="06XXXXXXXX"
                        style={{ ...inputStyle, direction: "ltr", textAlign: "right" }}
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                      المدينة
                    </label>
                    <div style={fieldBox("city")}>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onFocus={() => setFocusedField("city")}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="الدار البيضاء، الرباط، مراكش..."
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E8408A] text-white font-semibold text-base py-5 rounded-2xl hover:bg-[#d03578] transition-colors"
                  style={{ boxShadow: "0 8px 32px rgba(232,64,138,0.3)" }}
                >
                  تأكيد الطلب
                </button>

                <p className="text-center text-xs mt-5" style={{ color: "rgba(255,255,255,0.2)" }}>
                  الدفع عند الاستلام &nbsp;&middot;&nbsp; التوصيل خلال 24&ndash;48 ساعة &nbsp;&middot;&nbsp; لا دفع مسبق
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer
        className="py-12 px-6 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div
          className="inline-block mb-4"
          style={{ background: "#fff", borderRadius: 8, padding: "3px 8px", lineHeight: 0, opacity: 0.5 }}
        >
          <Image
            src="/cherie-glow-logo.png"
            alt="Chérie Glow"
            width={90}
            height={43}
            className="object-contain block"
            unoptimized
          />
        </div>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
          &copy; 2025 Ch&eacute;rie Glow &mdash; جميع الحقوق محفوظة
        </p>
      </footer>

      {/* ─── FLOATING WHATSAPP ───────────────────────────────── */}
      <button
        onClick={() => openWhatsApp()}
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
      >
        <WaIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
