import Link from "next/link"

export function Header() {
  return (
    <header className="px-[6vw] pt-6 pb-2">
      <nav className="flex items-center justify-between gap-5 flex-wrap">
        <div className="font-serif text-3xl text-[#3b2f2a]">טוסטיקה</div>
        <div className="flex gap-4 flex-wrap">
          <Link href="#menu" className="font-medium text-[#1f1a14] no-underline hover:text-[#c65b2a] transition-colors">
            תפריט
          </Link>
          <Link href="#about" className="font-medium text-[#1f1a14] no-underline hover:text-[#c65b2a] transition-colors">
            אודות
          </Link>
          <Link href="#gallery" className="font-medium text-[#1f1a14] no-underline hover:text-[#c65b2a] transition-colors">
            תמונות
          </Link>
          <Link href="#build" className="font-medium text-[#1f1a14] no-underline hover:text-[#c65b2a] transition-colors">
            הרכבה
          </Link>
          <Link href="#order" className="font-medium text-[#1f1a14] no-underline hover:text-[#c65b2a] transition-colors">
            הזמנה
          </Link>
          <Link href="#contact" className="font-medium text-[#1f1a14] no-underline hover:text-[#c65b2a] transition-colors">
            יצירת קשר
          </Link>
        </div>
        <Link
          href="#order"
          className="bg-[#3b2f2a] text-white px-5 py-2.5 rounded-full no-underline font-semibold hover:bg-[#c65b2a] transition-colors"
        >
          הזמנה מהירה
        </Link>
      </nav>
    </header>
  )
}
