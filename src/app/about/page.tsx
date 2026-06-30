import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Link href="/" className="text-purple-400 hover:text-purple-300 transition">
          ← Back Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-10">
          <div>
            <p className="text-purple-400 font-semibold tracking-[0.25em] text-sm mb-5">
              ABOUT NAJIDA TECH
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Security, Networking & Automation Done Right.
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Najida Tech provides professional CCTV, access control, networking,
              PBX, Wi-Fi, alarm, gate automation and IT infrastructure solutions
              throughout Trinidad & Tobago.
            </p>

            <p className="text-gray-400 leading-relaxed">
              With over 10 years of industry experience, we focus on clean
              installations, reliable equipment, practical troubleshooting and
              long-term support for residential and commercial clients.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-purple-700/20 blur-3xl rounded-full"></div>
            <Image
              src="/logo.png"
              alt="Najida Tech Logo"
              width={520}
              height={260}
              priority
              className="relative w-full max-w-[460px] h-auto object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mt-16">
          {[
            ["10+", "Years Experience"],
            ["100+", "Projects Completed"],
            ["T&T", "Nationwide Service"],
            ["Reliable", "After-Sales Support"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition"
            >
              <h2 className="text-3xl font-bold text-purple-400">{value}</h2>
              <p className="text-gray-400 mt-2">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-5 text-purple-400">
              What We Do
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✓ CCTV & Video Surveillance</li>
              <li>✓ Access Control Systems</li>
              <li>✓ Fire & Burglar Alarm Systems</li>
              <li>✓ Networking & Managed Wi-Fi</li>
              <li>✓ PBX & VoIP Phone Systems</li>
              <li>✓ Automatic Gates & Automation</li>
              <li>✓ IT Support & Infrastructure</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-5 text-purple-400">
              Our Approach
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5">
              We design solutions based on the actual site, the client’s needs
              and the long-term reliability of the system.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From cabling and configuration to testing and support, every
              installation is handled with a focus on proper workmanship and
              dependable performance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}