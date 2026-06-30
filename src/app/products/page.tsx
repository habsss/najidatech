import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const outlineButton =
    "relative inline-block overflow-hidden rounded-xl px-7 py-3 font-semibold text-purple-300 border border-purple-500/70 transition hover:scale-105 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]";

  const products = [
    {
      name: "Smart Wi-Fi Relay",
      price: "TT$150",
      image: "/products/smart-wifi-relay.jpg",
      desc: "Smart relay module for controlling gates, lights, pumps and other devices remotely.",
    },
    {
      name: "7-Day Timer Relay",
      price: "TT$150",
      image: "/products/timer-relay.jpg",
      desc: "Programmable timer relay for scheduling lights, pumps, signage and equipment.",
    },
    {
      name: "Reflective Photocell",
      price: "TT$585",
      image: "/products/reflective-photocell.jpg",
      desc: "Long-range reflective sensor for automatic gates, barriers and vehicle detection.",
    },
    {
      name: "Tone & Probe Cable Tester",
      price: "TT$435",
      image: "/products/tone-probe.jpg",
      desc: "Cable tracing tool for network, telephone and low-voltage installations.",
    },
    {
      name: "Universal Rolling Code Remote",
      price: "TT$200",
      image: "/products/universal-remote.jpg",
      desc: "Slim 4-button universal remote for compatible gate and garage automation systems.",
    },
    {
      name: "BFT 4-Button Remote",
      price: "TT$200",
      image: "/products/bft-4-button-remote.jpeg",
      desc: "Replacement remote for compatible BFT automatic gate systems.",
    },
    {
      name: "BFT 2-Button Remote",
      price: "TT$200",
      image: "/products/bft-2-button-remote.jpg",
      desc: "Compact 2-button replacement remote for compatible BFT gate systems.",
    },
    {
      name: "RJ45 Pass-Through Connectors",
      price: "TT$100",
      image: "/products/rj45-pass-through.jpg",
      desc: "Pass-through RJ45 connectors for Cat5e/Cat6 network cable terminations.",
    },
    {
      name: "Pass-Through Crimper",
      price: "TT$250",
      image: "/products/pass-through-crimper.jpg",
      desc: "Professional crimping tool for RJ45 pass-through connectors.",
    },
    {
      name: "Digital Caliper",
      price: "TT$150",
      image: "/products/digital-caliper.jpg",
      desc: "Digital measuring tool for technical, electronic and installation work.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Link href="/" className="text-purple-400">
          ← Back Home
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">Products</h1>

        <p className="text-gray-400 mb-12">
          Quality tools, remotes, automation and networking accessories available from Najida Tech.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition"
            >
              <div className="bg-white h-56 flex items-center justify-center p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={220}
                  className="max-h-48 w-auto object-contain"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <p className="text-2xl font-bold text-purple-400 mb-5">
                  {product.price}
                </p>

                <a
                  href={`https://wa.me/18683522817?text=Hi%20Najida%20Tech,%20I'm%20interested%20in%20the%20${encodeURIComponent(
                    product.name
                  )}`}
                  target="_blank"
                  className={outlineButton}
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}