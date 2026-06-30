import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "CCTV Systems",
      desc: "Professional surveillance systems with remote viewing, recording and intelligent monitoring.",
    },
    {
      title: "Access Control",
      desc: "Card, biometric, keypad and mobile access solutions for homes and businesses.",
    },
    {
      title: "Fire & Burglar Alarms",
      desc: "Reliable detection and notification systems designed to protect people and property.",
    },
    {
      title: "Automatic Gates",
      desc: "Sliding and swing gate automation solutions with remote and smartphone control.",
    },
    {
      title: "Networking & Managed Wi-Fi",
      desc: "Enterprise networking, structured cabling, wireless bridges, VLANs and managed Wi-Fi.",
    },
    {
      title: "PBX Phone Systems",
      desc: "Business phone systems, IVRs, call recording, extensions and remote communications.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Link href="/" className="text-purple-400">
          ← Back Home
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-6">Our Services</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {service.title}
              </h2>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}