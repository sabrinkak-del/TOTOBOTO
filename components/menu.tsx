import type { CartItem } from "@/app/page"

interface MenuProps {
  addToCart: (item: CartItem) => void
}

const menuItems = [
  {
    name: "טוסט קלאסיק",
    price: 26,
    description: "מוצרלה, צ׳דר, עגבנייה פרוסה, אורגנו, על חלה קלויה.",
  },
  {
    name: "טוסט ים תיכוני",
    price: 32,
    description: "גבינת פטה, זיתים שחורים, פלפל קלוי, בזיליקום, על לחם דגנים.",
  },
  {
    name: "טוסט בוקר",
    price: 29,
    description: "ביצת עין, מוצרלה, אבוקדו, סרירצ׳ה עדינה, על בריוש.",
  },
  {
    name: "טוסט עשן",
    price: 34,
    description: "טופו מעושן, צ׳דר טבעונית, בצל מקורמל, רוטב ברביקיו, על כוסמין.",
  },
  {
    name: "טוסט ירוקים",
    price: 30,
    description: "פסטו ביתי, מוצרלה, תרד טרי, קישוא צרוב, על חלה קלויה.",
  },
  {
    name: "טוסט שוקו-קראנץ׳",
    price: 24,
    description: "שוקולד מריר, בננה מקורמלת, אגוזי לוז קלויים.",
  },
]

export function Menu({ addToCart }: MenuProps) {
  return (
    <section id="menu" className="flex flex-col gap-7">
      <div>
        <h2 className="text-3xl font-bold text-[#1f1a14] mb-2">טוסטים מובילים</h2>
        <p className="text-[#1f1a14]/70">
          מבחר טוסטים שמאזנים בין קלאסי לנועז. כל אחד נצלה במקום ומוגש עם רוטב הבית.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {menuItems.map((item) => (
          <article
            key={item.name}
            className="bg-white p-5 rounded-2xl shadow-lg flex flex-col gap-3"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-lg text-[#1f1a14]">{item.name}</h3>
              <span className="font-bold text-[#c65b2a]">₪{item.price}</span>
            </div>
            <p className="text-[#1f1a14]/70 text-sm flex-1">{item.description}</p>
            <button
              onClick={() => addToCart({ name: item.name, price: item.price })}
              className="bg-[#3b2f2a] text-white border-none px-4 py-2.5 rounded-full cursor-pointer font-semibold hover:bg-[#c65b2a] transition-colors"
            >
              הוספה להזמנה
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
