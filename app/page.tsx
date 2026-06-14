"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { products, packOffer, ctaStrips, type Product } from "@/data/products";

const WA_NUMBER = "212764724608";

function fbqTrack(event: string, params?: Record<string, unknown>) {
  const w = window as Window & { fbq?: (...args: unknown[]) => void };
  if (typeof w.fbq === "function") w.fbq("track", event, params);
}

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

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <div className="flex items-center gap-1.5 mt-2 pr-1">
      <svg viewBox="0 0 16 16" fill="none" style={{ width: 13, height: 13, flexShrink: 0 }}>
        <circle cx="8" cy="8" r="7" stroke="#f87171" strokeWidth="1.5" />
        <path d="M8 5v3.5" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="11" r="0.8" fill="#f87171" />
      </svg>
      <span style={{ color: "#f87171", fontSize: 12 }}>{msg}</span>
    </div>
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
      id="how-to-use"
      dir="rtl"
      style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-14 md:py-28">
        <p
          className="text-[11px] tracking-[6px] uppercase font-medium text-center mb-5"
          style={{ color: "#E8408A" }}
        >
          طريقة الاستخدام
        </p>
        <h2
          className="font-bold text-white text-center mb-10 md:mb-16 leading-tight"
          style={{ fontSize: "clamp(30px, 5vw, 56px)" }}
        >
          ثلاث خطوات فقط
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-6 md:p-8 flex flex-col"
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
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-14 md:py-28">
        <p
          className="text-[11px] tracking-[6px] uppercase font-medium text-center mb-5"
          style={{ color: "#E8408A" }}
        >
          المكوّنات
        </p>
        <h2
          className="font-bold text-white text-center mb-3 leading-tight"
          style={{ fontSize: "clamp(30px, 5vw, 56px)" }}
        >
          طبيعية 100%
        </h2>
        <p className="text-center text-sm md:text-base mb-10 md:mb-16" style={{ color: "rgba(255,255,255,0.4)" }}>
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
      id="faq"
      dir="rtl"
      style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-14 md:py-28">
        <p
          className="text-[11px] tracking-[6px] uppercase font-medium text-center mb-5"
          style={{ color: "#E8408A" }}
        >
          الأسئلة الشائعة
        </p>
        <h2
          className="font-bold text-white text-center mb-8 md:mb-14 leading-tight"
          style={{ fontSize: "clamp(30px, 5vw, 56px)" }}
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
        <div className="text-center md:text-right">
          <p className="text-lg md:text-2xl font-semibold text-white">{headline}</p>
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
  const images = product.images;
  const [activeImg, setActiveImg] = useState(0);
  const prev = () => setActiveImg((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveImg((i) => (i + 1) % images.length);

  return (
    <section
      className="flex flex-col md:flex-row md:min-h-screen border-t border-white/[0.06]"
      style={{ direction: "ltr" }}
    >
      {/* Image column — always on top on mobile, alternates on desktop */}
      <div
        className={`relative overflow-hidden w-full md:w-[60%] min-h-[56vw] md:min-h-0 order-1 ${imageOnLeft ? "md:order-1" : "md:order-2"}`}
      >
        {/* Blurred atmospheric background — tracks active image */}
        <Image
          src={images[activeImg]}
          alt=""
          fill
          className="object-cover scale-110 transition-all duration-700"
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
            background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 12%, transparent 88%, #0a0a0a 100%)",
          }}
        />

        {/* Gallery card */}
        <div className="absolute inset-0 flex items-center justify-center px-5 py-4 md:p-0">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ width: "min(100%, 540px)", aspectRatio: "4 / 3", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}
          >
            {/* Images — all stacked, only active is visible */}
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${product.nameAr} ${i + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
                style={{ opacity: i === activeImg ? 1 : 0 }}
                sizes="(max-width: 768px) 80vw, 48vw"
                priority={i === 0}
              />
            ))}

            {/* Prev / Next arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="السابق"
                  className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                  style={{ width: 36, height: 36, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" style={{ width: 14, height: 14 }}>
                    <polyline points="10,3 5,8 10,13" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="التالي"
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                  style={{ width: 36, height: 36, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" style={{ width: 14, height: 14 }}>
                    <polyline points="6,3 11,8 6,13" />
                  </svg>
                </button>
              </>
            )}

            {/* Dot indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    aria-label={`صورة ${i + 1}`}
                    className="transition-all duration-300"
                    style={{
                      width: i === activeImg ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: i === activeImg ? "#E8408A" : "rgba(255,255,255,0.35)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 md:hidden">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveImg(i)}
                className="relative rounded-lg overflow-hidden transition-all duration-200 shrink-0"
                style={{
                  width: 48, height: 48,
                  border: `2px solid ${i === activeImg ? "#E8408A" : "rgba(255,255,255,0.15)"}`,
                  opacity: i === activeImg ? 1 : 0.55,
                }}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="52px" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Text column — always on bottom on mobile, alternates on desktop */}
      <div
        className={`flex flex-col justify-center w-full md:w-[40%] px-6 md:px-14 lg:px-20 py-10 md:py-0 order-2 ${imageOnLeft ? "md:order-2" : "md:order-1"}`}
        style={{ direction: "rtl" }}
      >
        <p className="text-[11px] tracking-[5px] uppercase font-medium mb-4 md:mb-8" style={{ color: "rgba(255,255,255,0.25)" }}>
          {String(index + 1).padStart(2, "0")} &mdash; {product.name}
        </p>

        <h2
          className="font-bold text-white leading-none mb-1"
          style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
        >
          {product.nameAr}
        </h2>
        <p
          className="text-xs md:text-sm font-semibold tracking-[3px] uppercase mb-4 md:mb-6"
          style={{ color: "rgba(255,255,255,0.22)", direction: "ltr", textAlign: "right" }}
        >
          {product.name}
        </p>

        <div className="w-8 h-[2px] bg-[#E8408A] mb-5 md:mb-7" />

        <p className="text-base md:text-xl font-semibold text-white leading-snug mb-3 md:mb-4">
          {product.tagline}
        </p>

        <p className="text-sm md:text-base leading-relaxed mb-5 md:mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
          {product.description}
        </p>

        <ul className="space-y-2 mb-6 md:mb-10">
          {product.highlights.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#E8408A" }} />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-2 mb-6 md:mb-8">
          <span className="text-4xl md:text-[42px] font-bold leading-none" style={{ color: "#E8408A" }}>
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
  const router = useRouter();
  const [offer, setOffer] = useState<"single" | "pack">("single");
  const [flavors, setFlavors] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleFlavor = (id: string) => {
    if (!flavors.includes(id)) {
      fbqTrack("AddToCart", { content_ids: [id], content_type: "product", currency: "MAD", value: 99 });
    }
    setFlavors((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  const handleOrder = (productId: string) => {
    fbqTrack("AddToCart", { content_ids: [productId], content_type: "product", currency: "MAD", value: 99 });
    setOffer("single");
    setFlavors((prev) => prev.includes(productId) ? prev : [...prev, productId]);
  };

  const handlePackOrder = () => {
    fbqTrack("AddToCart", { content_name: "Pack Complet", content_type: "product", currency: "MAD", value: 279 });
    setOffer("pack");
    setFlavors([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (offer === "single" && flavors.length === 0)
      newErrors.flavors = "اختاري نكهة واحدة على الأقل";
    if (!name.trim()) newErrors.name = "الاسم مطلوب";
    if (!phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    if (!city.trim()) newErrors.city = "المدينة مطلوبة";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstKey = Object.keys(newErrors)[0];
      document.getElementById(`field-${firstKey}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setErrors({});
    const total = offer === "pack" ? packOffer.price : flavors.length * 99 + 30;
    fbqTrack("InitiateCheckout", {
      value: total,
      currency: "MAD",
      num_items: offer === "pack" ? packOffer.includes.length : flavors.length,
    });
    const selectedFlavors =
      offer === "pack"
        ? packOffer.includes.join(", ")
        : products.filter((p) => flavors.includes(p.id)).map((p) => p.nameAr).join(", ");

    try {
      const payload = { offer, flavors: selectedFlavors, name, phone, city, total };
      console.log("[order] submitting payload:", payload);
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("[order] response status:", res.status, "body:", data);
    } catch (e) {
      console.error("[order] fetch error:", e);
    }

    const qs = new URLSearchParams({
      name,
      flavors: selectedFlavors,
      total: String(total),
    });
    router.push(`/thank-you?${qs.toString()}`);
  };

  const fieldBox = (id: string): React.CSSProperties => {
    const hasError = !!errors[id];
    const focused = focusedField === id;
    return {
    border: `1.5px solid ${hasError ? "#f87171" : focused ? "#E8408A" : "rgba(255,255,255,0.09)"}`,
    borderRadius: 14,
    background: hasError ? "rgba(248,113,113,0.04)" : focused ? "rgba(232,64,138,0.05)" : "rgba(255,255,255,0.03)",
    transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
    boxShadow: hasError ? "0 0 0 4px rgba(248,113,113,0.10)" : focused ? "0 0 0 4px rgba(232,64,138,0.10)" : "none",
    overflow: "hidden",
  };
  };

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
        className="fixed inset-x-0 top-0 z-50 px-6 md:px-10"
        style={{
          height: 68,
          background: "rgba(10,10,10,0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        dir="rtl"
      >
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="#" style={{ lineHeight: 0, flexShrink: 0, padding: "6px 10px" }}>
            <Image
              src="/cherie-glow-logo.png"
              alt="Chérie Glow"
              width={100}
              height={48}
              className="object-contain block"
              unoptimized
              priority
            />
          </a>

          {/* Nav links — desktop only */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "المنتجات", href: "#products" },
              { label: "طريقة الاستخدام", href: "#how-to-use" },
              { label: "الباقة الكاملة", href: "#pack" },
              { label: "الأسئلة الشائعة", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openWhatsApp()}
              className="hidden sm:flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              <WaIcon className="w-[17px] h-[17px]" />
              <span>واتساب</span>
            </button>
            <a
              href="#order"
              className="bg-[#E8408A] text-white font-semibold px-5 py-2 rounded-full text-sm hover:bg-[#d03578] transition-colors whitespace-nowrap"
            >
              اطلبي الآن
            </a>
          </div>

        </div>
      </header>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden"
        style={{ paddingTop: 68 }}
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
            className="text-[11px] tracking-[6px] uppercase font-medium mb-5 md:mb-10"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Gourmand Collection
          </p>

          <h1
            className="font-bold leading-none tracking-tight mb-4 md:mb-6"
            style={{ fontSize: "clamp(38px, 11vw, 150px)" }}
          >
            <span className="block text-white">خلي لحظاتكم الزوجية ألذ...</span>
            <span className="block" style={{ color: "#E8408A" }}>ما غيشبعش منك..</span>
          </h1>

          <p
            className="text-base md:text-xl max-w-sm px-2 mb-8 md:mb-12"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            نؤمن أن الحب الحقيقي يُبنى على الاهتمام والتقارب اليومي، لذلك صُممت منتجاتنا لتكون رفيقًا لحظاتكم الخاصة
          </p>

          <a
            href="#order"
            className="inline-block bg-[#E8408A] text-white font-semibold px-10 py-4 rounded-full text-base hover:bg-[#d03578] transition-colors"
          >
            اطلبي الآن &mdash; باك كاملة بـ 279 درهم فقط
          </a>
        </div>
      </section>

      <TrustBar />

      {/* CTA — after hero */}
      <CtaStrip
        headline={ctaStrips[0].headline}
        subtext={ctaStrips[0].subtext}
      />

      {/* ─── PACK OFFER ──────────────────────────────────────── */}
      <section
        id="pack"
        className="flex flex-col md:flex-row md:min-h-screen border-t border-white/[0.06]"
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
          <div className="absolute inset-0 flex items-center justify-center px-5 py-4 md:p-0">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ width: "min(100%, 540px)", aspectRatio: "4 / 3", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}
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
          className="flex flex-col justify-center w-full md:w-[40%] px-6 md:px-14 lg:px-20 py-10 md:py-0"
          dir="rtl"
        >
          <p className="text-[11px] tracking-[5px] uppercase font-medium mb-4 md:mb-8" style={{ color: "rgba(255,255,255,0.25)" }}>
            01 &mdash; عرض خاص
          </p>

          <h2
            className="font-bold text-white leading-none mb-4 md:mb-6"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
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

      {/* ─── PRODUCTS ────────────────────────────────────────── */}
      <div id="products">
        {products.map((product, i) => (
          <div key={product.id}>
            <ProductSection product={product} index={i} onOrder={handleOrder} />
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

      <Ingredients />

      {/* CTA — after products, before form */}
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

          <div
              className="rounded-2xl md:rounded-3xl px-4 md:px-12 py-8 md:py-10"
              style={{ border: "1px solid rgba(232,64,138,0.2)", background: "rgba(232,64,138,0.04)" }}
            >
              <form onSubmit={handleSubmit}>

                {/* ── Offer type tabs ── */}
                <div
                  className="flex rounded-2xl p-1 mb-8"
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
                      <span className="text-base font-bold">
                        {type === "single"
                          ? flavors.length > 0 ? `${flavors.length * 99 + 30}` : "129"
                          : "299"}
                      </span>
                      <span className="text-[11px] tracking-wide mt-0.5 opacity-80">
                        {type === "single"
                          ? flavors.length > 1 ? `${flavors.length} نكهات — درهم` : "نكهة — درهم"
                          : "الباقة الكاملة — درهم"}
                      </span>
                      <span className="text-[10px] mt-0.5" style={{ opacity: 0.6 }}>
                        {type === "single" ? "+ 30 درهم توصيل" : "توصيل مجاني"}
                      </span>
                    </button>
                  ))}
                </div>

                {/* ── Flavor picker (multi-select) ── */}
                {offer === "single" && (
                  <div id="field-flavors" className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[11px] tracking-[4px] uppercase font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
                        اختاري النكهات
                      </p>
                      {flavors.length > 0 && (
                        <p className="text-xs font-semibold" style={{ color: "#E8408A" }}>
                          {flavors.length} {flavors.length === 1 ? "نكهة" : "نكهات"} مختارة
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {products.map((p) => {
                        const selected = flavors.includes(p.id);
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => toggleFlavor(p.id)}
                            className="relative flex items-center gap-2 rounded-2xl p-2.5 text-right transition-all duration-200"
                            style={{
                              border: `1.5px solid ${selected ? "#E8408A" : "rgba(255,255,255,0.08)"}`,
                              background: selected ? "rgba(232,64,138,0.08)" : "rgba(255,255,255,0.02)",
                              boxShadow: selected ? "0 0 0 3px rgba(232,64,138,0.12)" : "none",
                            }}
                          >
                            <div className="relative shrink-0 rounded-xl overflow-hidden" style={{ width: 44, height: 44 }}>
                              <Image src={p.bottleImage} alt={p.nameAr} fill className="object-cover" sizes="52px" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-white text-sm leading-tight">{p.nameAr}</p>
                              <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{p.name}</p>
                            </div>
                            <div
                              className="shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200"
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
                    {/* Dynamic total */}
                    {flavors.length > 0 && (
                      <div
                        className="mt-4 flex flex-col gap-1.5 px-4 py-3 rounded-xl"
                        style={{ background: "rgba(232,64,138,0.08)", border: "1px solid rgba(232,64,138,0.2)" }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                            {flavors.length} × 99 درهم
                          </span>
                          <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{flavors.length * 99} درهم</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>التوصيل</span>
                          <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>30 درهم</span>
                        </div>
                        <div
                          className="flex items-center justify-between pt-1.5 mt-0.5"
                          style={{ borderTop: "1px solid rgba(232,64,138,0.25)" }}
                        >
                          <span className="text-sm font-semibold text-white">المجموع</span>
                          <span className="font-bold text-white">{flavors.length * 99 + 30} درهم</span>
                        </div>
                      </div>
                    )}
                    {errors.flavors && <ErrorMsg msg={errors.flavors} />}
                  </div>
                )}

                {/* ── Pack image ── */}
                {offer === "pack" && (
                  <div className="mb-8 rounded-2xl overflow-hidden relative" style={{ border: "1px solid rgba(232,64,138,0.2)", background: "rgba(232,64,138,0.04)" }}>
                    <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={packOffer.image}
                        alt="الباقة الكاملة"
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 480px"
                      />
                    </div>
                    <div className="px-4 pb-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                          {packOffer.includes.join(" · ")}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs line-through" style={{ color: "rgba(255,255,255,0.25)" }}>{packOffer.originalPrice} درهم</span>
                          <span className="font-bold text-base" style={{ color: "#E8408A" }}>{packOffer.price} درهم</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg viewBox="0 0 16 16" fill="none" style={{ width: 13, height: 13 }}>
                          <path d="M2 5h9l2 4H4L2 5z" stroke="#4ade80" strokeWidth="1.2" strokeLinejoin="round" />
                          <circle cx="5" cy="11" r="1.2" fill="#4ade80" />
                          <circle cx="11" cy="11" r="1.2" fill="#4ade80" />
                        </svg>
                        <span className="text-xs font-semibold" style={{ color: "#4ade80" }}>توصيل مجاني</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Text fields ── */}
                <div className="flex flex-col gap-4 mb-8">
                  {/* Name */}
                  <div id="field-name">
                    <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                      الاسم الكامل
                    </label>
                    <div style={fieldBox("name")}>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="أدخلي اسمكِ الكامل"
                        style={inputStyle}
                      />
                    </div>
                    {errors.name && <ErrorMsg msg={errors.name} />}
                  </div>

                  {/* Phone */}
                  <div id="field-phone">
                    <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                      رقم الهاتف
                    </label>
                    <div style={fieldBox("phone")}>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: "" })); }}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="06XXXXXXXX"
                        style={{ ...inputStyle, direction: "ltr", textAlign: "right" }}
                      />
                    </div>
                    {errors.phone && <ErrorMsg msg={errors.phone} />}
                  </div>

                  {/* City */}
                  <div id="field-city">
                    <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                      المدينة
                    </label>
                    <div style={fieldBox("city")}>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => { setCity(e.target.value); setErrors((p) => ({ ...p, city: "" })); }}
                        onFocus={() => setFocusedField("city")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="الدار البيضاء، الرباط، مراكش..."
                        style={inputStyle}
                      />
                    </div>
                    {errors.city && <ErrorMsg msg={errors.city} />}
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
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer
        className="py-12 px-6 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div
          className="inline-block mb-4"
          style={{ lineHeight: 0, opacity: 0.5 }}
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
