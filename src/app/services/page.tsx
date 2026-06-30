import Link from "next/link";

export default function ServicesPage() {
  const premiumButton =
    "relative inline-block overflow-hidden rounded-xl px-7 py-3 font-semibold text-white bg-gradient-to-r from-purple-950 via-fuchsia-600 to-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.45)] transition hover:scale-105";

  const services = [
    {
      icon: "📹",
      title: "CCTV Systems",
      desc: "Professional camera systems for homes and businesses with mobile viewing, recording, alerts and reliable coverage.",
    },
    {
      icon: "🔐",
      title: "Access Control",
      desc: "Card, keypad, biometric and mobile access solutions for secure doors, offices and restricted areas.",
    },
    {
      icon: "🚨",
      title: "Fire & Burglar Alarms",
      desc: "Fire alarm, burglar alarm and detection systems designed to protect people, property and business operations.",
    },
    {
      icon: "🚪",
      title: "Automatic Gates",
      desc: "Sliding and swing gate automation with remotes, sensors, safety devices and smart control options.",
    },
    {
      icon: "🌐",
      title: "Networking & Wi-Fi",
      desc: "Structured cabling, VLANs, business Wi-Fi, wireless bridges, routers, switches and network troubleshooting.",
    },
    {
      icon: "☎️",
      title: "PBX Phone Systems",
      desc: "Business phone systems, IVRs, extensions, call recording, remote users and multi-site communication.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Link href="/" className="text-purple-400 hover:text-purple-300 transition">
          ← Back Home
        </Link>

        <div className="text-center mt-10 mb-14">
          <p className="text-purple-400 font-semibold tracking-[0.25em] text-sm mb-5">
            NAJIDA TECH SERVICES
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Technology Solutions
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Security, networking, communication and automation services built for
            residential and commercial clients throughout Trinidad & Tobago.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.22)] transition duration-300"
            >
              <div className="text-4xl mb-5">{service.icon}</div>

              <h2 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition">
                {service.title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                {service.desc}
              </p>

              <a
                href={`https://wa.me/18683522817?text=Hi%20Najida%20Tech,%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(
                  service.title
                )}`}
                target="_blank"
                className="text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                Request Quote →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://wa.me/18683522817" target="_blank" className={premiumButton}>
            Contact Najida Tech
          </a>
        </div>
      </section>
    </main>
  );
}