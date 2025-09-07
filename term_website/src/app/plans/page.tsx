"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle, X } from "lucide-react";

export default function PlansPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#0d0d0d",
        color: "#d1d5db",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Topbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
        style={{
          background: "linear-gradient(to bottom, #0d0d0d, rgba(13,13,13,0.7))",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16 sm:h-20 relative">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold"
            style={{ color: "#a78bfa" }}
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
              backgroundColor: "#a78bfa",
              color: "#0d0d0d",
            }}
          >
            Try Term
          </Link>
        </div>
      </header>

      <main className="pt-28 px-4">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Choose Your <span style={{ color: "#a78bfa" }}>Plan</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Flexible pricing for every student. Start free and upgrade anytime
            for premium features.
          </p>
        </section>

        {/* Plans Grid */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free */}
            <div
              className="p-8 rounded-2xl flex flex-col text-center"
              style={{
                backgroundColor: "#141414",
                border: "1px solid #2a2a2a",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <p className="text-gray-400 mb-6">
                Manual solving with Solve Button
              </p>
              <p
                className="text-3xl font-bold mb-6"
                style={{ color: "#a78bfa" }}
              >
                $0<span className="text-lg text-gray-400"> /mo</span>
              </p>
              {/* Features → left aligned */}
              <ul className="space-y-3 text-gray-300 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} style={{ color: "#10b981" }} /> Solve
                  Button
                </li>
                <li className="flex items-center gap-2">
                  <X size={18} style={{ color: "#ef4444" }} /> AutoSolve
                </li>
                <li className="flex items-center gap-2">
                  <X size={18} style={{ color: "#ef4444" }} /> AutoAnswer
                </li>
              </ul>
              <Link
                href="/signup"
                className="px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{
                  border: "2px solid #a78bfa",
                  color: "#a78bfa",
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Monthly */}
            <div
              className="p-8 rounded-2xl flex flex-col text-center relative"
              style={{
                backgroundColor: "#141414",
                border: "2px solid #a78bfa",
              }}
            >
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full font-semibold"
                style={{ backgroundColor: "#a78bfa", color: "#0d0d0d" }}
              >
                Popular
              </span>
              <h3 className="text-2xl font-bold mb-4">Monthly</h3>
              <p className="text-gray-400 mb-6">Best for short-term use</p>
              <p
                className="text-3xl font-bold mb-6"
                style={{ color: "#a78bfa" }}
              >
                $5<span className="text-lg text-gray-400"> /mo</span>
              </p>
              {/* Features → left aligned */}
              <ul className="space-y-3 text-gray-300 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} style={{ color: "#10b981" }} /> Solve
                  Button
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} style={{ color: "#10b981" }} />{" "}
                  AutoSolve
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} style={{ color: "#10b981" }} />{" "}
                  AutoAnswer
                </li>
              </ul>
              <Link
                href="/signup"
                className="px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#a78bfa",
                  color: "#0d0d0d",
                }}
              >
                Purchase
              </Link>
            </div>

            {/* Yearly */}
            <div
              className="p-8 rounded-2xl flex flex-col text-center"
              style={{
                backgroundColor: "#141414",
                border: "1px solid #2a2a2a",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Yearly</h3>
              <p className="text-gray-400 mb-6">
                Save more with yearly billing
              </p>
              <p
                className="text-3xl font-bold mb-6"
                style={{ color: "#a78bfa" }}
              >
                $36<span className="text-lg text-gray-400"> /yr</span>
              </p>
              {/* Features → left aligned */}
              <ul className="space-y-3 text-gray-300 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} style={{ color: "#10b981" }} /> Solve
                  Button
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} style={{ color: "#10b981" }} />{" "}
                  AutoSolve
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} style={{ color: "#10b981" }} />{" "}
                  AutoAnswer
                </li>
              </ul>
              <Link
                href="/signup"
                className="px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{
                  border: "2px solid #a78bfa",
                  color: "#a78bfa",
                }}
              >
                Purchase
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
