"use client";
import React from "react";
import Link from "next/link";
import {
  Zap,
  Shield,
  Code,
  Clock,
  Star,
  PlayCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

// Centralized theme colors
const theme = {
  background: "#0f0f0f",
  surface: "#1a1a1a",
  border: "#2a2a2a",
  gradient: "linear-gradient(to bottom, #0d0d0d, rgba(13,13,13,0.7))",
  text: {
    primary: "#d1d5db",
    secondary: "#9ca3af",
    muted: "#6b7280",
    heading: "#e5e7eb",
  },
  brand: {
    primary: "#a78bfa", // purple
    secondary: "#10b981", // green
    accent: "#ef4444", // red
    light: "#c4b5fd", // light purple
  },
};

export default function Page() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.text.primary,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Topbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
        style={{
          background: theme.gradient,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16 sm:h-20 relative">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold"
            style={{ color: theme.brand.primary }}
          >
            term
          </Link>

          {/* Nav (centered) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="hover:text-gray-300 transition-colors"
                >
                  Plans
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/yourinvite"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <Link
            href="/signup"
            className="px-4 py-2 rounded-lg font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: theme.brand.primary,
              color: theme.background,
            }}
          >
            Try Term
          </Link>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{
                  backgroundColor: "#141414",
                  border: `1px solid ${theme.border}`,
                }}
              >
                <Star size={16} style={{ color: theme.brand.primary }} />
                <span
                  className="text-sm"
                  style={{ color: theme.text.secondary }}
                >
                  Smarter Learning, Made Simple
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span style={{ color: theme.brand.primary }}>
                  Learn Smarter
                </span>
                <span className="block text-gray-200">
                  Save Time & Build Confidence
                </span>
              </h1>

              <p
                className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
                style={{ color: theme.text.secondary }}
              >
                Term is your AI study companion for instant step-by-step
                explanations and smarter learning support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  href="/plans"
                  className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90 flex items-center gap-3"
                  style={{
                    backgroundColor: theme.brand.primary,
                    color: theme.background,
                  }}
                >
                  <ArrowRight size={20} />
                  View Plans
                </Link>
                <button
                  className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-80"
                  style={{
                    border: `2px solid ${theme.border}`,
                    color: theme.text.heading,
                    backgroundColor: "transparent",
                  }}
                >
                  <PlayCircle size={20} className="inline mr-2" />
                  View Demo
                </button>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm"
                style={{ color: theme.text.secondary }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    style={{ color: theme.brand.secondary }}
                  />
                  <span>Step-by-step guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={16} style={{ color: theme.brand.primary }} />
                  <span>Secure & Safe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                Why Students{" "}
                <span style={{ color: theme.brand.primary }}>Love Term</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <Zap size={32} style={{ color: theme.brand.primary }} />
                  ),
                  title: "Instant Help",
                  desc: "Get clear explanations whenever you're stuck.",
                },
                {
                  icon: (
                    <Shield
                      size={32}
                      style={{ color: theme.brand.secondary }}
                    />
                  ),
                  title: "Confidence Boost",
                  desc: "Learn concepts step by step, without the stress.",
                },
                {
                  icon: <Code size={32} style={{ color: theme.brand.light }} />,
                  title: "AI-Powered",
                  desc: "Smarter learning with adaptive support.",
                },
                {
                  icon: (
                    <Clock size={32} style={{ color: theme.brand.accent }} />
                  ),
                  title: "Always Available",
                  desc: "Study support, day or night, whenever you need it.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl text-center transition-all hover:scale-105 h-full flex flex-col justify-between"
                  style={{
                    backgroundColor: theme.surface,
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  <div className="mx-auto mb-4">{f.icon}</div>
                  <h3 className="font-semibold mb-2 text-gray-200">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                Works Alongside{" "}
                <span style={{ color: theme.brand.primary }}>
                  Your Homework Tools
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "DeltaMath", color: theme.brand.primary },
                { name: "IXL Learning", color: theme.brand.secondary },
                { name: "More Coming Soon", color: theme.text.muted },
              ].map((p, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl text-center transition-all hover:scale-105 h-full flex flex-col justify-center"
                  style={{
                    backgroundColor: theme.surface,
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  <h3
                    className="font-semibold text-gray-200 text-lg sm:text-xl"
                    style={{ color: p.color }}
                  >
                    {p.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="px-4 py-12"
        style={{ borderTop: `1px solid ${theme.border}` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="text-2xl font-bold"
                style={{ color: theme.brand.primary }}
              >
                term
              </Link>
              <p className="text-gray-400">
                Your AI-powered study companion for smarter learning.
              </p>
            </div>
            <div className="flex gap-8">
              <a
                href="/privacy"
                className="hover:opacity-80 transition-opacity text-gray-400"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:opacity-80 transition-opacity text-gray-400"
              >
                Terms of Service
              </a>
              <a
                href="/support"
                className="hover:opacity-80 transition-opacity text-gray-400"
              >
                Support
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6 text-center">
            Term is an independent learning assistant and is not affiliated with
            or endorsed by DeltaMath, IXL, or any other educational platform.
          </p>
        </div>
      </footer>
    </div>
  );
}
