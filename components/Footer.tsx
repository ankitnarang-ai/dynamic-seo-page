import Container from "./Container";
import SafeImage from "./SafeImage";

const GLOBAL_OFFICES = [
  {
    country: "INDIA",
    address: "301, Syadwad Business Park, H32, Sector 63, Noida, (Head Office)",
    icon: (
      <svg className="w-8 h-8 mx-auto text-slate-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.5l5 4.5v7.5h-2v-6H9v6H7V10l5-4.5z"/>
      </svg>
    ),
  },
  {
    country: "UNITED STATES",
    address: "711 S Glendora Ave West Covina, CA",
    icon: (
      <svg className="w-8 h-8 mx-auto text-slate-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l-1 4h2l-1-4zm-4 5l1 3h6l1-3H8zm-2 5h12v9H6v-9zm2 2v5h8v-5H8z"/>
      </svg>
    ),
  },
  {
    country: "UNITED KINGDOM",
    address: "86-90, Paul Street, London, EC2A 4NE England",
    icon: (
      <svg className="w-8 h-8 mx-auto text-slate-300" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    country: "UAE",
    address: "Ontario Tower Dubai, UAE",
    icon: (
      <svg className="w-8 h-8 mx-auto text-slate-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 2H5v20h14V2zM7 4h10v16H7V4zm2 2h6v2H9V6zm0 4h6v2H9v-2zm0 4h6v2H9v-2z"/>
      </svg>
    ),
  },
  {
    country: "CANADA",
    address: "7168 179 ST, Surrey BC, V3S8C5",
    icon: (
      <svg className="w-8 h-8 mx-auto text-slate-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>
      </svg>
    ),
  },
];

export default function Footer({ brand }: { brand: string }) {
  return (
    <footer className="bg-[#050711] text-white pt-16 pb-10 border-t border-slate-800/60 font-sans">
      <Container>
        {/* Giant ABHIWAN Logo */}
        <div className="text-center mb-16">
          <SafeImage
            src="/images/abhiwan.svg"
            alt={brand || "Abhiwan Technology"}
            className="h-16 sm:h-24 lg:h-28 w-auto mx-auto object-contain max-w-full"
          />
        </div>

        {/* Global Presence Section */}
        <div className="mb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6] text-center mb-10">
            OUR GLOBAL PRESENCE
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            {GLOBAL_OFFICES.map((off, i) => (
              <div key={i} className={`${i > 0 ? "pt-6 md:pt-0" : ""} px-3 flex flex-col items-center justify-start space-y-3`}>
                <div className="h-10 flex items-center justify-center">{off.icon}</div>
                <div className="text-xs font-bold tracking-wider uppercase text-white">{off.country}</div>
                <div className="text-[12px] leading-relaxed text-slate-400 max-w-[190px] mx-auto font-normal">
                  {off.address}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-t border-slate-800/60 pt-16 pb-12">
          {/* Company Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6] mb-5">
              OUR COMPANY
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Careers <span>↗</span></a></li>
            </ul>
          </div>

          {/* Services Col 1 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6] mb-5">
              SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li><a href="#" className="hover:text-white transition-colors">Esports Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Adver Gaming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">3D Game Art</a></li>
              <li><a href="#" className="hover:text-white transition-colors">3D Product Modelling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Twin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Augmented Reality</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtual Reality</a></li>
            </ul>
          </div>

          {/* Services Col 2 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6] mb-5">
              SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li><a href="#" className="hover:text-white transition-colors">Blockchain Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interactive Kiosks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI / ML</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web3 Games Development</a></li>
            </ul>
          </div>

          {/* Follow Us On Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6] mb-5">
              FOLLOW US ON
            </h3>
            <div className="space-y-2.5">
              <a href="#" className="flex items-center gap-3 rounded-xl bg-[#0C1022] border border-slate-800/80 px-3.5 py-2 text-xs text-slate-300 hover:bg-[#151c38] transition-colors">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl bg-[#0C1022] border border-slate-800/80 px-3.5 py-2 text-xs text-slate-300 hover:bg-[#151c38] transition-colors">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl bg-[#0C1022] border border-slate-800/80 px-3.5 py-2 text-xs text-slate-300 hover:bg-[#151c38] transition-colors">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>X</span>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl bg-[#0C1022] border border-slate-800/80 px-3.5 py-2 text-xs text-slate-300 hover:bg-[#151c38] transition-colors">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6] mb-5">
              CONTACT US
            </h3>
            <ul className="space-y-3 text-xs text-slate-300 font-normal">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-slate-400 flex-none mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span><strong>For Sales :</strong> +91 - 95991458505</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-slate-400 flex-none mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span><strong>For HR :</strong> +91 - 9910655805</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-slate-400 flex-none mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span><strong>Mail Us :</strong> sales@abhiwan.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Privacy Policy <span>↗</span></a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Terms & Conditions <span>↗</span></a>
          </div>
          <div>©2026 All Rights Reserved by Abhiwan Technology</div>
        </div>
      </Container>
    </footer>
  );
}
