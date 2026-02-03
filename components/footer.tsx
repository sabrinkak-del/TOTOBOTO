export function Footer() {
  return (
    <footer id="contact" className="bg-[#3b2f2a] text-white grid grid-cols-1 sm:grid-cols-3 gap-5 px-[6vw] py-10">
      <div>
        <h2 className="font-bold text-lg mb-2">בואו לבקר</h2>
        <p className="text-white/80">רחוב הטוסט 12, תל אביב</p>
        <p className="text-white/80">ראשון–חמישי: 10:00–22:30 | שישי: 10:00–16:00</p>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2">דברו איתנו</h2>
        <p className="text-white/80">טלפון: 03-5551234</p>
        <p className="text-white/80">אימייל: hello@toastika.co.il</p>
      </div>
      <div className="bg-white/10 px-4 py-3 rounded-full self-start">
        נפתח כל יום עם ריח של טוסט.
      </div>
    </footer>
  )
}
