export function About() {
  return (
    <section id="about" className="bg-white rounded-3xl p-8 shadow-lg flex flex-col gap-7">
      <div>
        <h2 className="text-3xl font-bold text-[#1f1a14] mb-2">הסיפור שלנו</h2>
        <p className="text-[#1f1a14]/70">
          נולדנו מאהבה ללחם חם וריחות של גבינה שנמסה בדיוק בזמן. כל טוסט אצלנו מתחיל בבסיס איכותי ומסתיים בחיוך.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-[#1f1a14]/80 mb-4">
            אנחנו צוות קטן עם לב גדול שמאמין בטוסט מושלם: פריכות מבחוץ, רכות מבפנים ותוספות שמדויקות לטעם שלכם.
          </p>
          <p className="text-[#1f1a14]/80 mb-4">
            המטבח פתוח, הקצב מהיר, והכל נצלה במקום — כי טוסט טוב לא מחכה.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-4">
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-semibold text-sm">
              100% טרי כל יום
            </span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-semibold text-sm">
              ניצול מלא של חומרי גלם
            </span>
            <span className="bg-[#dcefe3] px-3 py-1.5 rounded-full font-semibold text-sm">
              מתכונים מקוריים
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="min-h-[180px] rounded-2xl shadow-lg bg-gradient-to-br from-[#c65b2acc] via-[#f7b05bcc] to-[#f2b776]" />
          <div className="min-h-[180px] rounded-2xl shadow-lg bg-gradient-to-br from-[#3b2f2acc] via-[#c65b2ab3] to-[#b98d68]" />
        </div>
      </div>
    </section>
  )
}
