export default function Home() {
  const faqs = [
    {
      q: "Which POS systems do you support?",
      a: "We integrate with Square and Toast via webhooks. Sales data syncs automatically so your margins are always up to date."
    },
    {
      q: "How do I track ingredient costs and waste?",
      a: "Enter ingredient costs manually or import from your supplier. Set waste percentages and prep time per dish — we factor it all into the real profit number."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. No contracts, no lock-in. Cancel from your account dashboard and you won't be charged again."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Independent Restaurant Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track real profit margins<br />
          <span className="text-[#58a6ff]">per menu item</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your POS and ingredient costs to see exactly which dishes make you money — after waste, prep time, and every hidden cost.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">14-day free trial · No credit card required</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Square & Toast POS", "Ingredient Cost Tracking", "Waste Adjustments", "Prep Time Costing", "Real-Time Margins"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to know your real margins</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited menu items",
              "Square & Toast POS sync",
              "Ingredient cost database",
              "Waste & prep time adjustments",
              "Real-time profit dashboard",
              "Email alerts for low-margin dishes"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started — $19/mo
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">14-day free trial included</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} DishProfit. All rights reserved.
      </footer>
    </main>
  );
}
