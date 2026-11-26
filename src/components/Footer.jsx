import React from "react";
import logo from "../assets/Frame.png";
import footerBanner from "../assets/ChatGPT Image Jul 15, 2026, 02_54_13 PM copy 1.png";

function Footer() {
  const categories = [
    "Food Delivery",
    "Grocery Delivery",
    "Parcel Delivery",
    "Medicine Delivery",
  ];

  return (
    <footer className="bg-white pt-4 overflow-hidden">
      {/* FULL-WIDTH ILLUSTRATION SHOWING THE COMPLETE IMAGE WITHOUT CROPPING */}
      <div className="relative w-full">
        <img
          src={footerBanner}
          alt="Delifo citywide delivery coverage"
          className="w-full h-auto object-contain block select-none"
        />
      </div>

      {/* MAIN FOOTER NAVIGATION ROW */}
      <div className="relative z-10 max-w-[1214.5px] mx-auto px-6 md:px-10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LEFT LOGO */}
          <a href="#" className="shrink-0">
            <img
              src={logo}
              alt="Delifo Delivery App"
              className="w-[116px] h-[32px] object-contain"
            />
          </a>

          {/* CENTER CATEGORY LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs font-semibold text-[#222222]">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
                className="hover:text-[#ff2e3d] transition-colors"
              >
                {category}
              </a>
            ))}
          </div>

          {/* RIGHT SOCIAL ICONS */}
          <div className="flex items-center gap-4 text-[#222222]">
            <a
              href="#twitter"
              aria-label="X"
              className="hover:text-[#ff2e3d] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="#facebook"
              aria-label="Facebook"
              className="hover:text-[#ff2e3d] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.6V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.5v3h2.8v8h3.2z" />
              </svg>
            </a>

            <a
              href="#instagram"
              aria-label="Instagram"
              className="hover:text-[#ff2e3d] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4 1.3-.1 1.6-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.8.3 4 .6c-.8.3-1.5.7-2.2 1.4C1.1 2.7.7 3.4.4 4.2.1 5 0 5.9 0 7.2 0 8.5 0 8.9 0 12s0 3.5.1 4.8c.1 1.3.2 2.2.5 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.5 3 .5 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.3-.1 2.2-.2 3-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.7.5-3 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.3-.2-2.2-.5-3-.3-.8-.7-1.5-1.4-2.2C21.3 1.1 20.6.7 19.8.4c-.8-.3-1.7-.5-3-.5C15.5 0 15.1 0 12 0zm0 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-11.8a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
              </svg>
            </a>

            <a
              href="#github"
              aria-label="GitHub"
              className="hover:text-[#ff2e3d] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#777777]">
          <p>
            © Copyright 2026, All Rights Reserved - Crafted by{" "}
            <a
              href="https://lilacinfotech.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#222222] hover:text-[#ff2e3d]"
            >
              lilacinfotech.com
            </a>
          </p>

          <div className="flex items-center gap-6">
            <a href="#faqs" className="hover:text-[#ff2e3d] transition-colors">
              FAQs
            </a>
            <a
              href="#privacy-policy"
              className="hover:text-[#ff2e3d] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-[#ff2e3d] transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;