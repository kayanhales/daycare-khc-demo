'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="bg-white text-gray-800 scroll-smooth font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-rose-600">Little Steps Academy</h1>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-rose-600 focus:outline-none"
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-4 md:space-x-6 text-lg font-semibold text-gray-800 items-center">
            <a href="#about" className="hover:text-rose-500 transition">About</a>
            <a href="#programs" className="hover:text-rose-500 transition">Programs</a>
            <a href="#calendar" className="hover:text-rose-500 transition">Calendar</a>
            <a href="#enrollment" className="hover:text-rose-500 transition">Enrollment</a>
            <a href="#contact" className="hover:text-rose-500 transition">Contact</a>
            <a
              href="https://form.jotform.com/252055728049157"
              className="bg-rose-600 text-white px-4 py-2 rounded-full shadow hover:bg-rose-700 transition"
            >
              Enroll Now
            </a>
            <a
              href="#contact"
              className="bg-rose-600 text-white px-4 py-2 rounded-full shadow hover:bg-rose-700 transition"
            >
              Schedule a Tour
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden px-4 pb-4 space-y-2 bg-white text-gray-800 font-medium">
            <a href="#about" className="block">About</a>
            <a href="#programs" className="block">Programs</a>
            <a href="#calendar" className="block">Calendar</a>
            <a href="#enrollment" className="block">Enrollment</a>
            <a href="#contact" className="block">Contact</a>
            <a
              href="https://form.jotform.com/252055728049157"
              className="block bg-rose-600 text-white text-center px-4 py-2 rounded-full shadow hover:bg-rose-700 transition"
            >
              Enroll Now
            </a>
            <a
              href="#contact"
              className="block bg-rose-600 text-white text-center px-4 py-2 rounded-full shadow hover:bg-rose-700 transition"
            >
              Schedule a Tour
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold text-rose-700 leading-tight">Welcome to Little Steps Academy</h2>
          <p className="mt-4 text-lg text-gray-700">A joyful space where little minds grow big ideas.</p>
          <Link
            href="#contact"
            className="mt-6 inline-block text-white bg-rose-600 px-6 py-3 rounded-full shadow-lg hover:bg-rose-700 transition"
          >
            Contact Us to Enroll
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/tina-floersch-CcbnSarTldQ-unsplash.jpg"
            alt="Black children playing"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-cover ring-4 ring-white"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-rose-600 mb-4">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Little Steps Academy, we believe in nurturing the whole child — emotionally, socially, and academically.
          Our licensed daycare provides a warm, structured environment where children feel seen, celebrated, and supported every day.
        </p>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-6 bg-gradient-to-tr from-blue-50 via-indigo-50 to-pink-50 max-w-5xl mx-auto rounded-2xl shadow-inner">
        <h2 className="text-4xl font-bold text-rose-600 mb-4">Our Programs</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>👶 Infants (6 weeks – 12 months)</li>
          <li>🚼 Toddlers (1 – 2 years)</li>
          <li>🎓 Preschool Prep (3 – 4 years)</li>
        </ul>
        <p className="mt-4 text-gray-600">
          We offer full-time care with age-appropriate activities, daily updates for parents, and nutritious meals included.
        </p>
        <div className="mt-8">
          <center><Image
            src="/images/cai-fang-HDjVjyVHMbk-unsplash.jpg"
            alt="Daycare children learning"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover ring-4 ring-white"
          /></center>
        </div>
      </section>

      {/* Calendar of Events Section */}
      <section id="calendar" className="py-20 px-6 bg-gradient-to-tr from-indigo-50 via-blue-50 to-pink-50 max-w-5xl mx-auto rounded-2xl shadow-inner mt-12">
        <h2 className="text-4xl font-bold text-rose-600 mb-8 text-center">Annual Calendar of Events</h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {/* Example month */}
          <div>
            <h3 className="text-2xl font-semibold text-rose-700 mb-2">September 2025</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Sept 7 – Labor Day (Center Closed)</li>
              <li>Sept 14 – Fall Welcome Picnic</li>
              <li>Sept 25 – Parent-Teacher Conferences</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-rose-700 mb-2">October 2025</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Oct 15 – Field Trip to Pumpkin Patch</li>
              <li>Oct 31 – Halloween Costume Party</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-rose-700 mb-2">November 2025</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Nov 26 – Thanksgiving Holiday (Center Closed)</li>
              <li>Nov 28 – Family Story Time</li>
            </ul>
          </div>

          {/* Add more months as needed */}
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enrollment" className="py-20 px-6 bg-yellow-50 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-rose-600 mb-4">Enrollment</h2>
        <p className="text-gray-700 text-lg">
          We are currently accepting applications for Fall 2025! Secure your child’s spot with our easy online form.
        </p>
        <center><a
          href="https://form.jotform.com/252055728049157"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-rose-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-rose-700 transition"
        >
          Start Enrollment
        </a></center>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-rose-600 mb-4">Contact Us</h2>
        <p className="text-gray-700 text-lg space-y-1"> Call or email us to get more information, or to schedule a tour.<br />
          <span className="block">📍 Detroit, MI</span>
          <span className="block">📧 hello@yourdaycare.com</span>
          <span className="block">📞 (313) 555-1234</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-rose-600 text-white py-6 text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Little Steps Academy. All rights reserved.</p>
      </footer>
    </main>
  )
}
