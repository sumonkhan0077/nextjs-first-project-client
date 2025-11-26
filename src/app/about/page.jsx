import React from "react";

function Page() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* ABOUT SECTION */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#dbb83a26] shadow-xl rounded-2xl p-10 mb-16 border">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
            About Us
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Welcome to{" "}
              <span className="font-semibold">Your Store Name</span> — your
              trusted destination for premium luxury watches. We combine
              elegance, durability, and modern design to ensure you get the finest
              timepieces.
            </p>

            <p className="font-semibold text-gray-900">
              Our mission is to provide:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>High-quality, authentic products</li>
              <li>Premium customer support</li>
              <li>Honest & transparent pricing</li>
              <li>Fast and secure shopping experience</li>
            </ul>

            <p>
              Every watch tells a story — of personality, style, and confidence.
              Thank you for choosing us to be a part of your journey!
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#dbb83a26] shadow-xl rounded-2xl p-10 border">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Contact Us
          </h1>

          <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl mx-auto">
            Have questions? Feel free to reach out — we're here to help!
          </p>

          {/* CONTACT INFO */}
          <div className="grid md:grid-cols-2 gap-6 bg-[#dbb83a80] p-6 rounded-xl mb-10">
            <p>
              <span className="font-semibold text-gray-900">📧 Email:</span>{" "}
              support@yourstore.com
            </p>
            <p>
              <span className="font-semibold text-gray-900">📞 Phone:</span> +880
              1234-567890
            </p>
            <p>
              <span className="font-semibold text-gray-900">📍 Address:</span>{" "}
              Dhaka, Bangladesh
            </p>
            <p>
              <span className="font-semibold text-gray-900">⏱ Support Hours:</span>{" "}
              10 AM – 10 PM
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/30"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/30"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/30"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ac8d1cf1] text-white py-3 rounded-lg font-semibold active:scale-98 cursor-pointer  hover:bg-[#b99a2a] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Page;
