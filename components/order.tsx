"use client"

import { useState } from "react"
import type { CartItem } from "@/app/page"

interface OrderProps {
  cart: CartItem[]
  removeFromCart: (index: number) => void
  clearCart: () => void
}

export function Order({ cart, removeFromCart, clearCart }: OrderProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  })

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (cart.length === 0) {
      alert("אנא הוסף פריטים לעגלה לפני השליחה.")
      return
    }

    const items = cart.map((item) => `${item.name} (₪${item.price})`).join("\n")
    const message = `הזמנה חדשה:\n\nשם: ${formData.name}\nטלפון: ${formData.phone}\nכתובת: ${formData.address}\n${formData.note ? `הערה: ${formData.note}\n` : ""}\nפריטים:\n${items}\n\nסה"כ: ₪${total}`

    alert("ההזמנה נקלטה!\n\n" + message)

    clearCart()
    setFormData({ name: "", phone: "", address: "", note: "" })
  }

  return (
    <section id="order" className="bg-white rounded-3xl p-8 shadow-lg flex flex-col gap-7">
      <div>
        <h2 className="text-3xl font-bold text-[#1f1a14] mb-2">מערכת הזמנות</h2>
        <p className="text-[#1f1a14]/70">
          בחרו טוסטים, עקבו אחרי העגלה ושלחו לנו פרטים. אנחנו כבר נכנסים לתנור.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="bg-[#fdf7ef] rounded-2xl p-5 border border-[#f3d5b2]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg text-[#1f1a14]">העגלה שלך</h3>
            <span className="bg-[#c65b2a] text-white rounded-full px-3 py-1 font-bold text-sm">
              {cart.length}
            </span>
          </div>
          <ul className="flex flex-col gap-2.5 mb-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white px-3 py-2.5 rounded-xl"
              >
                <span className="text-[#1f1a14]">
                  {item.name} - ₪{item.price}
                </span>
                <button
                  type="button"
                  onClick={() => removeFromCart(index)}
                  className="border-none bg-transparent text-[#c65b2a] font-bold cursor-pointer hover:underline"
                >
                  הסר
                </button>
              </li>
            ))}
            {cart.length === 0 && (
              <li className="text-[#1f1a14]/50 text-center py-4">העגלה ריקה</li>
            )}
          </ul>
          <div className="font-bold text-xl text-[#3b2f2a]">סה&quot;כ: ₪{total}</div>
          <p className="text-sm text-[#1f1a14]/60 mt-2">משלוח חינם מעל ₪70</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="name" className="font-medium text-[#1f1a14]">
            שם מלא
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="איך נקרא לך?"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-3 py-2.5 rounded-xl border border-[#e2d2c0] font-sans"
          />

          <label htmlFor="phone" className="font-medium text-[#1f1a14]">
            טלפון
          </label>
          <input
            type="tel"
            id="phone"
            required
            placeholder="050-0000000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="px-3 py-2.5 rounded-xl border border-[#e2d2c0] font-sans"
          />

          <label htmlFor="address" className="font-medium text-[#1f1a14]">
            כתובת
          </label>
          <input
            type="text"
            id="address"
            required
            placeholder="רחוב, מספר בית, עיר"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="px-3 py-2.5 rounded-xl border border-[#e2d2c0] font-sans"
          />

          <label htmlFor="note" className="font-medium text-[#1f1a14]">
            הערה להזמנה
          </label>
          <textarea
            id="note"
            rows={3}
            placeholder="למשל: בלי בצל, חריף בצד"
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="px-3 py-2.5 rounded-xl border border-[#e2d2c0] font-sans resize-none"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#c65b2a] text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-transform border-none cursor-pointer mt-2"
          >
            שליחת הזמנה
          </button>
          <p className="text-sm text-[#6b5b4a]">מיד לאחר שליחה תקבלו הודעת אישור.</p>
        </form>
      </div>
    </section>
  )
}
