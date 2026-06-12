"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const WA_NUMBER = "212600000000";

function ThankYouContent() {
  const params = useSearchParams();
  const name = params.get("name") ?? "";
  const flavors = params.get("flavors") ?? "";
  const total = params.get("total") ?? "";

  const waText = `مرحباً، طلبتُ للتو من Chérie Glow — ${flavors} — ${total} درهم. أودّ الاستفسار عن الطلب.`;

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,64,138,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <Link href="/" className="mb-12 block">
        <Image src="/cherie-glow-logo.png" alt="Chérie Glow" width={120} height={48} style={{ objectFit: "contain" }} />
      </Link>

      {/* Animated checkmark ring */}
      <div className="relative mb-10 flex items-center justify-center">
        <div
          className="absolute rounded-full"
          style={{
            width: 140,
            height: 140,
            background:
              "radial-gradient(circle, rgba(232,64,138,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 88,
            height: 88,
            border: "2px solid rgba(232,64,138,0.5)",
            background: "rgba(232,64,138,0.07)",
          }}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            stroke="#E8408A"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: 40, height: 40 }}
          >
            <polyline points="8,20 16,28 32,13" />
          </svg>
        </div>
      </div>

      {/* Headline */}
      <h1
        className="text-3xl md:text-4xl font-bold mb-3"
        style={{ color: "#fff", lineHeight: 1.3 }}
      >
        تمّ تسجيل طلبكِ!
      </h1>
      <p
        className="text-base md:text-lg mb-10 max-w-sm"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        شكراً{name ? ` ${name}` : ""}، سيتصل بكِ فريقنا قريباً لتأكيد الطلب والترتيب للتوصيل.
      </p>

      {/* Order summary card */}
      {(flavors || total) && (
        <div
          className="w-full max-w-sm rounded-2xl px-6 py-5 mb-10 text-right"
          style={{
            border: "1px solid rgba(232,64,138,0.2)",
            background: "rgba(232,64,138,0.04)",
          }}
        >
          <p
            className="text-[11px] tracking-[4px] uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            ملخص الطلب
          </p>

          {flavors && (
            <div className="flex items-start justify-between mb-3 gap-4">
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>النكهات</span>
              <span
                className="font-medium text-right"
                style={{ color: "#fff", fontSize: 14, flex: 1 }}
              >
                {flavors}
              </span>
            </div>
          )}

          {total && (
            <div
              className="flex items-center justify-between pt-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>المجموع</span>
              <span className="font-bold text-lg" style={{ color: "#E8408A" }}>
                {total} درهم
              </span>
            </div>
          )}
        </div>
      )}

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all"
          style={{
            background: "#25D366",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.553 4.13 1.521 5.873L0 24l6.335-1.502C8.056 23.459 10 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.84 0-3.591-.495-5.113-1.362l-.361-.215-3.762.893.925-3.653-.236-.376C2.55 15.685 2 13.91 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
          </svg>
          تواصل معنا على واتساب
        </a>

        <Link
          href="/"
          className="w-full flex items-center justify-center py-3 rounded-2xl font-semibold text-sm transition-all"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.55)",
            background: "transparent",
          }}
        >
          العودة للرئيسية
        </Link>
      </div>

      {/* Delivery note */}
      <p
        className="mt-12 text-xs"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        التوصيل خلال 24–48 ساعة في جميع أنحاء المغرب · الدفع عند الاستلام
      </p>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
