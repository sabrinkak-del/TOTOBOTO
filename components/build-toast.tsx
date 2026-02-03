import Link from "next/link"

export function BuildToast() {
  return (
    <section id="build" className="bg-[#fffaf1] rounded-3xl p-8 shadow-lg flex flex-col gap-7">
      <div>
        <h2 className="text-3xl font-bold text-[#1f1a14] mb-2">בנה את הטוסט שלך</h2>
        <p className="text-[#1f1a14]/70">
          בחרו בסיס, גבינה ותוספות. אנחנו נקלען ונמיס בדיוק כמו שאתם אוהבים.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 shadow-lg">
          <h3 className="font-semibold text-lg text-[#1f1a14] mb-3">1. בסיס לחם</h3>
          <div className="flex flex-wrap gap-2.5">
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">מחמצת קראסט</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">בריוש חמאה</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">דגנים מלאים</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">כוסמין</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-lg">
          <h3 className="font-semibold text-lg text-[#1f1a14] mb-3">2. גבינות</h3>
          <div className="flex flex-wrap gap-2.5">
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">מוצרלה</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">צ׳דר</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">גאודה מיושנת</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">צ׳דר טבעונית</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-lg">
          <h3 className="font-semibold text-lg text-[#1f1a14] mb-3">3. תוספות</h3>
          <div className="flex flex-wrap gap-2.5">
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">עגבניות קלויות</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">פלפלים קלויים</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">אבוקדו</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">בצל מקורמל</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">פסטו ביתי</span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-medium text-sm">צ׳ילי עדין</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3 mt-5">
        <p className="text-[#1f1a14]/80 font-medium">מחיר בסיס: ₪22 + ₪3 לכל תוספת</p>
        <Link
          href="#order"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#c65b2a] text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-transform no-underline"
        >
          יאללה, להזמין
        </Link>
      </div>
    </section>
  )
}
