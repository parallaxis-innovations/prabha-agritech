import FeedbackForm from '@/components/FeedbackForm';

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF6]">
      {/* ---------- Header ---------- */}
      <section className="bg-[#5E8E3E] py-28 lg:py-28 px-4 text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
          Share Your Feedback
        </h1>
        <p className="text-base sm:text-lg text-white/90 max-w-2xl">
          We value your insights — help us improve your experience with
          agriculture technology.
        </p>
      </section>

      {/* ---------- Image + Form Card ---------- */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Mobile: Image first | Desktop: Grid */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden flex flex-col md:flex-row-reverse">
            {/* ---- IMAGE (top on mobile, right on desktop) ---- */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
              <img
                src="https://cdn.prod.website-files.com/6857d47abda1c16e19f1bbf2/685e6ff9dd4de0827a215713_Iot%20Agriculture.png"
                alt="Smart agriculture"
                className="absolute inset-0 w-full h-full object-cover rounded-t-3xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-tl-none"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:from-black/60" />

              {/* Text overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1 drop-shadow">
                  Thank You for Helping Us Grow
                </h3>
                <p className="text-xs sm:text-sm text-white/90 drop-shadow-sm">
                  Your feedback empowers innovation in smart agriculture
                  technology.
                </p>
              </div>
            </div>

            {/* ---- FORM (bottom on mobile, left on desktop) ---- */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex-1">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#5E8E3E] mb-6">
                We’d Love to Hear From You!
              </h2>
              <FeedbackForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}