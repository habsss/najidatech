import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/" className="text-purple-400">
          ← Back Home
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-8">
          About Najida Tech
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Najida Tech provides professional security, networking,
          telecommunications and automation solutions throughout
          Trinidad & Tobago.
        </p>

        <p className="text-gray-400 leading-relaxed mb-8">
          With over 10 years of industry experience, we specialize
          in CCTV systems, access control, PBX phone systems,
          networking, Wi-Fi deployments, gate automation,
          fire alarms and IT infrastructure.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-purple-400">
              10+
            </h2>
            <p className="text-gray-400">
              Years Industry Experience
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-purple-400">
              100+
            </h2>
            <p className="text-gray-400">
              Successful Projects
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}