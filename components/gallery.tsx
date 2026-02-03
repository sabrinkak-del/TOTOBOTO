export function Gallery() {
  return (
    <section id="gallery" className="bg-[#fff7ea] rounded-3xl p-8 shadow-lg flex flex-col gap-7">
      <div>
        <h2 className="text-3xl font-bold text-[#1f1a14] mb-2">תמונות שמריחות טעים</h2>
        <p className="text-[#1f1a14]/70">
          רמזים קטנים למה שקורה בפנים: שכבות, גבינות, פריכות, וצילחות נקי.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="min-h-[180px] rounded-2xl shadow-lg bg-gradient-to-br from-white/50 via-[#c65b2a99] to-[#c65b2a]" />
        <div className="min-h-[180px] rounded-2xl shadow-lg bg-gradient-to-br from-[#3b2f2a99] via-[#f7b05bb3] to-[#f1a85a]" />
        <div className="min-h-[180px] rounded-2xl shadow-lg bg-gradient-to-br from-[#dcefe3cc] via-[#3b2f2a80] to-[#83624c]" />
        <div className="min-h-[180px] rounded-2xl shadow-lg bg-gradient-to-br from-white/50 via-[#f7b05b99] to-[#e07d3b]" />
        <div className="min-h-[180px] rounded-2xl shadow-lg bg-gradient-to-br from-[#3b2f2ab3] via-[#c65b2a99] to-[#b2572f]" />
      </div>
    </section>
  )
}
