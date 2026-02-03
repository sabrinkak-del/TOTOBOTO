import Link from "next/link"
import type { CartItem } from "@/app/page"

interface HeroProps {
  addToCart: (item: CartItem) => void
}

export function Hero({ addToCart }: HeroProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <span className="inline-block bg-[#dcefe3] text-[#3b2f2a] px-4 py-1.5 rounded-full font-semibold">
          חם, פריך, מדויק
        </span>
        <h1 className="font-serif text-4xl md:text-5xl my-4 text-[#1f1a14]">
          בית לטוסטים נדיבים עם נשמה עירונית
        </h1>
        <p className="text-lg text-[#1f1a14]/80 max-w-lg">
          לחם טרי, גבינות שנמסות בדיוק, ותוספות שמרימות. הכל מוכן במקום ומוגש תוך דקות.
        </p>
        <div className="flex gap-4 my-6 flex-wrap">
          <Link
            href="#menu"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#c65b2a] text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-transform no-underline"
          >
            לגלות את התפריט
          </Link>
          <Link
            href="#build"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#3b2f2a] text-[#3b2f2a] font-semibold hover:-translate-y-0.5 transition-transform no-underline"
          >
            לבנות טוסט אישי
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <span className="block text-2xl font-bold text-[#c65b2a]">12</span>
            <span className="text-sm text-[#1f1a14]/70">תוספות טריות ביום</span>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <span className="block text-2xl font-bold text-[#c65b2a]">5</span>
            <span className="text-sm text-[#1f1a14]/70">סוגי לחם פריכים</span>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <span className="block text-2xl font-bold text-[#c65b2a]">8</span>
            <span className="text-sm text-[#1f1a14]/70">דקות בממוצע למשלוח</span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-white to-[#ffe6c7] rounded-3xl p-7 shadow-lg">
        <p className="uppercase tracking-widest text-xs text-[#1f1a14]/60">הכי נמכר השבוע</p>
        <h2 className="font-serif text-2xl mt-2 mb-2 text-[#1f1a14]">טוסט &quot;מדורה&quot;</h2>
        <p className="text-[#1f1a14]/70">
          צ׳דר מעושנת, מוצרלה, עגבניות קלויות, בצל סגול, צ׳ילי עדין, על לחם מחמצת.
        </p>
        <div className="text-2xl font-bold text-[#c65b2a] my-4">₪38</div>
        <button
          onClick={() => addToCart({ name: "טוסט מדורה", price: 38 })}
          className="bg-[#3b2f2a] text-white border-none px-5 py-2.5 rounded-full cursor-pointer font-semibold hover:bg-[#c65b2a] transition-colors"
        >
          הוספה להזמנה
        </button>
      </div>
    </section>
  )
}
