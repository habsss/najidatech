"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const premiumButton =
    "relative overflow-hidden rounded-xl px-7 py-3 font-semibold text-white bg-gradient-to-r from-purple-950 via-fuchsia-600 to-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.45)] transition hover:scale-105 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition before:duration-700 hover:before:translate-x-full";

  const outlineButton =
    "relative overflow-hidden rounded-xl px-7 py-3 font-semibold text-purple-300 border border-purple-500/70 transition hover:scale-105 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-purple-400/30 before:to-transparent before:transition before:duration-700 hover:before:translate-x-full";

  const services = [
    {
      icon: "📹",
      title: "CCTV Systems",
      desc: "Professional surveillance systems with remote viewing, recording and intelligent monitoring.",
    },
    {
      icon: "🔐",
      title: "Access Control",
      desc: "Card, biometric, keypad and mobile access solutions for homes and businesses.",
    },
    {
      icon: "🚨",
      title: "Fire & Burglar Alarms",
      desc: "Reliable detection and notification systems designed to protect people and property.",
    },
    {
      icon: "🚪",
      title: "Automatic Gates",
      desc: "Sliding and swing gate automation solutions with remote and smartphone control.",
    },
    {
      icon: "🌐",
      title: "Networking & Managed Wi-Fi",
      desc: "Enterprise networking, structured cabling, wireless bridges, VLANs and managed Wi-Fi.",
    },
    {
      icon: "☎️",
      title: "PBX Phone Systems",
      desc: "Business phone systems, IVRs, call recording, extensions and remote communications.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    <div className="relative">
      <div className="absolute inset-0 bg-purple-600/30 blur-xl rounded-full"></div>
      <Image
        src="/logo-icon.png"
        alt="Najida Tech"
        width={100}
        height={100}
        priority
        className="relative h-16 md:h-20 w-auto object-contain float-logo"
      />
    </div>

    <div className="hidden md:flex items-center gap-10 text-sm font-medium">
      <a href="#services" className="hover:text-purple-400 transition">Services</a>
      <a href="#products" className="hover:text-purple-400 transition">Products</a>
      <a href="#about" className="hover:text-purple-400 transition">About</a>
      <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
    </div>

    <div className="hidden md:block">
      <a href="https://wa.me/18683522817" target="_blank" className={premiumButton}>
        WhatsApp
      </a>
    </div>

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-white text-3xl"
      aria-label="Toggle menu"
    >
      {menuOpen ? "×" : "☰"}
    </button>
  </div>

  {menuOpen && (
    <div className="md:hidden border-t border-zinc-800 bg-black px-6 py-5 space-y-4">
      <a onClick={() => setMenuOpen(false)} href="#services" className="block hover:text-purple-400">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#products" className="block hover:text-purple-400">
        Products
      </a>
      <a onClick={() => setMenuOpen(false)} href="#about" className="block hover:text-purple-400">
        About
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact" className="block hover:text-purple-400">
        Contact
      </a>

      <a
        href="https://wa.me/18683522817"
        target="_blank"
        className="inline-block mt-2 bg-gradient-to-r from-purple-950 via-fuchsia-600 to-purple-500 px-6 py-3 rounded-xl font-semibold"
      >
        WhatsApp
      </a>
    </div>
  )}
</nav>

      <section className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-96px)] grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col justify-center">
          <Image
            src="/logo.png"
            alt="Najida Tech"
            width={620}
            height={260}
            priority
            className="w-full max-w-[460px] h-auto mb-8 object-contain"
          />

          <span className="text-purple-400 font-semibold tracking-[0.25em] text-sm mb-5">
            SECURITY • NETWORKING • AUTOMATION
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Protect.
            <br />
            Connect.
            <br />
            Automate.
          </h1>

          <p className="text-gray-300 text-lg mt-7 max-w-xl leading-relaxed">
            Professional CCTV, Access Control, Networking, Managed Wi-Fi, PBX
            Systems, Fire Alarms, Gate Automation and IT Solutions throughout
            Trinidad & Tobago.
          </p>

          <div className="flex flex-wrap gap-5 mt-9">
  <div className="float-button-1">
    <a href="#contact" className={premiumButton}>
      Get A Quote
    </a>
  </div>

  <div className="float-button-2">
    <a
      href="https://wa.me/18683522817"
      target="_blank"
      className={outlineButton}
    >
      WhatsApp Us
    </a>
  </div>
</div>

        <div className="flex justify-center lg:justify-end items-end h-full">
          <Image
            src="/mascot.png"
            alt="Najida Tech Mascot"
            width={500}
            height={700}
            priority
            unoptimized
            className="w-auto max-h-[720px] object-contain drop-shadow-[0_0_55px_rgba(168,85,247,0.5)]"
          />
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-400 mb-12">
          Complete technology and security solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-4">Featured Products</h2>

  <p className="text-center text-gray-400 mb-12">
    Quality tools, remotes, automation and networking accessories available from Najida Tech.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
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
    ].map((product) => (
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
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {product.desc}
          </p>

          <p className="text-2xl font-bold text-purple-400 mb-5">
            {product.price}
          </p>

          <a
            href={`https://wa.me/18683522817?text=Hi%20Najida%20Tech,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
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
<section id="about" className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid lg:grid-cols-2 gap-12 items-center">

    <div>
      <h2 className="text-4xl font-bold mb-6">
        Why Choose Najida Tech?
      </h2>

      <p className="text-gray-400 leading-relaxed mb-8">
        Najida Tech provides professional security, networking,
        telecommunications and automation solutions throughout
        Trinidad & Tobago. With over 10 years of industry
        experience, we deliver reliable installations, responsive
        support and quality products for residential and commercial
        clients.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <h3 className="text-3xl font-bold text-purple-400">10+</h3>
          <p className="text-gray-400">Years Experience</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <h3 className="text-3xl font-bold text-purple-400">100+</h3>
          <p className="text-gray-400">Projects Completed</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <h3 className="text-3xl font-bold text-purple-400">Reliable</h3>
          <p className="text-gray-400">After-Sales Support</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <h3 className="text-3xl font-bold text-purple-400">T&T</h3>
          <p className="text-gray-400">Nationwide Service</p>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
      <h3 className="text-2xl font-bold mb-6 text-purple-400">
        Our Expertise
      </h3>

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

  </div>
</section>

      <section id="contact" className="bg-zinc-950 border-t border-zinc-800 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready To Get Started?</h2>
          <p className="text-gray-400 mb-4">
            Contact Najida Tech today for a quotation, consultation or site visit.
          </p>

          <div className="space-y-2 mb-10 text-gray-300">
            <p>📱 WhatsApp: +1 (868) 352-2817</p>
            <p>✉️ Email: najidatech@gmail.com</p>
            <p>📍 Trinidad & Tobago</p>
          </div>

          <a href="https://wa.me/18683522817" target="_blank" className={premiumButton}>
            Contact on WhatsApp
          </a>
        </div>
      </section>
      <footer className="bg-black border-t border-zinc-800 py-8">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
    <p>© 2025 Najida Tech. All rights reserved.</p>
    <p>Security • Networking • Automation</p>
  </div>
</footer>
    </main>
  );
}