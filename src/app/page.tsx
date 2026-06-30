"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const premiumButton =
    "relative inline-block overflow-hidden rounded-xl px-7 py-3 font-semibold text-white bg-gradient-to-r from-purple-950 via-fuchsia-600 to-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.45)] transition hover:scale-105 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition before:duration-700 hover:before:translate-x-full";

  const outlineButton =
    "relative inline-block overflow-hidden rounded-xl px-7 py-3 font-semibold text-purple-300 border border-purple-500/70 transition hover:scale-105 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-purple-400/30 before:to-transparent before:transition before:duration-700 hover:before:translate-x-full";

  const services = [
    "CCTV Systems",
    "Access Control",
    "Fire & Burglar Alarms",
    "Automatic Gates",
    "Networking & Managed Wi-Fi",
    "PBX Phone Systems",
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
            <a href="/services" className="hover:text-purple-400 transition">
              Services
            </a>
            <a href="/products" className="hover:text-purple-400 transition">
              Products
            </a>
            <a href="/about" className="hover:text-purple-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/18683522817"
              target="_blank"
              className={premiumButton}
            >
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
            <a onClick={() => setMenuOpen(false)} href="/services" className="block hover:text-purple-400">
              Services
            </a>
            <a onClick={() => setMenuOpen(false)} href="/products" className="block hover:text-purple-400">
              Products
            </a>
            <a onClick={() => setMenuOpen(false)} href="/about" className="block hover:text-purple-400">
              About
            </a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="block hover:text-purple-400">
              Contact
            </a>

            <a
              href="https://wa.me/18683522817"
              target="_blank"
              className={premiumButton}
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
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-400 mb-12">
          Complete technology and security solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/services" className={premiumButton}>
            View All Services
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Products</h2>

        <p className="text-gray-400 mb-10">
          Explore our range of networking, automation and security products.
        </p>

        <a href="/products" className={premiumButton}>
          View All Products
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Najida Tech?
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              With over 10 years of industry experience, Najida Tech provides
              professional security, networking, telecommunications and automation
              solutions throughout Trinidad & Tobago.
            </p>

            <a href="/about" className={outlineButton}>
              Learn More About Us
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["10+", "Years Experience"],
              ["100+", "Projects Completed"],
              ["Reliable", "After-Sales Support"],
              ["T&T", "Nationwide Service"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
              >
                <h3 className="text-3xl font-bold text-purple-400">{value}</h3>
                <p className="text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-zinc-950 border-t border-zinc-800 py-20"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready To Get Started?</h2>
          <p className="text-gray-400 mb-4">
            Contact Najida Tech today for a quotation, consultation or site
            visit.
          </p>

          <div className="space-y-2 mb-10 text-gray-300">
            <p>📱 WhatsApp: +1 (868) 352-2817</p>
            <p>✉️ Email: najidatech@gmail.com</p>
            <p>📍 Trinidad & Tobago</p>
          </div>

          <a
            href="https://wa.me/18683522817"
            target="_blank"
            className={premiumButton}
          >
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