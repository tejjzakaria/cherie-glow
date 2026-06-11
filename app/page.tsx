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

        <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
          {product.description}
        </p>

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

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    color: "#ffffff",
    fontSize: "18px",
    fontFamily: "inherit",
    padding: "14px 0",
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
            <span className="block text-white">ريحتكِ</span>
            <span className="block" style={{ color: "#E8408A" }}>سلاحكِ السري</span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-xs mb-12"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            دعيهم يتذكرونكِ دون أن تقولي كلمة
          </p>

          <a
            href="#order"
            className="inline-block bg-[#E8408A] text-white font-semibold px-10 py-4 rounded-full text-base hover:bg-[#d03578] transition-colors"
          >
            اطلبي الآن &mdash; 99 درهم
          </a>
        </div>
      </section>

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
        <div className="relative w-full md:w-1/2 min-h-[70vw] md:min-h-0 flex items-center justify-center p-12 md:p-16">
          <Image
            src={packOffer.image}
            alt={packOffer.nameAr}
            width={520}
            height={400}
            className="object-contain w-full"
            style={{ filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.7))" }}
          />
        </div>

        <div
          className="flex flex-col justify-center w-full md:w-1/2 px-8 md:px-14 lg:px-20 py-16 md:py-0"
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

          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            {packOffer.description}
          </p>

          <ul className="space-y-2 mb-10">
            {packOffer.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#E8408A" }} />
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

      {/* CTA — after pack, before form */}
      <CtaStrip
        headline={ctaStrips[5].headline}
        subtext={ctaStrips[5].subtext}
      />

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
            تواصلي معنا
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
              <form onSubmit={handleSubmit} className="space-y-0">
                {/* Offer selector */}
                <div className="grid grid-cols-2 gap-3 mb-12">
                  {(["single", "pack"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOffer(type)}
                      className="py-5 rounded-2xl text-[14px] font-medium transition-colors border"
                      style={
                        offer === type
                          ? { background: "#E8408A", borderColor: "#E8408A", color: "#fff" }
                          : { background: "transparent", borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)" }
                      }
                    >
                      {type === "single" ? "نكهة واحدة — 99 درهم" : "الباقة الكاملة — 299 درهم"}
                    </button>
                  ))}
                </div>

                {/* Flavor */}
                {offer === "single" && (
                  <div className="pb-8 mb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
                      النكهة
                    </label>
                    <select
                      value={flavor}
                      onChange={(e) => setFlavor(e.target.value)}
                      required
                      style={{ ...inputBase, cursor: "pointer" }}
                    >
                      <option value="" style={{ background: "#111111" }}>اختاري النكهة</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id} style={{ background: "#111111" }}>
                          {p.nameAr} &mdash; {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Name */}
                <div className="pb-8 mb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="أدخلي اسمكِ الكامل"
                    style={inputBase}
                  />
                </div>

                {/* Phone */}
                <div className="pb-8 mb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="06XXXXXXXX"
                    style={{ ...inputBase, direction: "ltr", textAlign: "right" }}
                  />
                </div>

                {/* City */}
                <div className="pb-8 mb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <label className="block text-[11px] tracking-[4px] uppercase font-medium mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
                    المدينة
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    placeholder="الدار البيضاء، الرباط، مراكش..."
                    style={inputBase}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E8408A] text-white font-semibold text-base py-5 rounded-full hover:bg-[#d03578] transition-colors"
                >
                  تأكيد الطلب
                </button>

                <p className="text-center text-xs mt-6" style={{ color: "rgba(255,255,255,0.2)" }}>
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
