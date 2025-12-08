import Link from "next/link"

export function Footer() {
  return (
      <footer className="relative bg-[#0c345f] text-primary-foreground py-16 px-4 sm:px-6 lg:px-8 mt-48">
        {/* --- WAVE SVG SECTION START --- */}
        <div className="absolute top-0 left-0 right-0 w-full -translate-y-[99%] overflow-hidden leading-[0] z-10">
          <svg
              className="w-full h-[150px] sm:h-[200px] md:h-[250px]"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
          >
            {/* --- PERUBAHAN UTAMA: HAPUS GRADIENT PUTIH --- */}
            {/* <defs>...</defs> telah dihapus karena tidak diperlukan lagi */}

            {/* Layer 1: Biru Muda (Posisi paling belakang & paling tinggi) */}
            {/* Ini adalah gelombang yang "menanjak tinggi ke kanan" dengan warna #34aade */}
            <path
                fill="#34aade"
                d="M0,192 C 480,320 960,64 1440,96 L 1440,320 L 0,320 Z"
            />

            {/* Layer 2: Biru Tua (Posisi paling depan & menyatu dengan footer) */}
            {/* Bentuk sama dengan layer 1, tapi diturunkan 32px agar biru muda terlihat sebagai border tebal */}
            {/* Warna #0c345f menyatu dengan background footer */}
            <path
                fill="#0c345f"
                d="M0,224 C 480,352 960,96 1440,240 L 1440,320 L 0,320 Z"
            />
          </svg>
        </div>
        {/* --- WAVE SVG SECTION END --- */}

        <div className="max-w-6xl mx-auto relative z-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
                <img src="/logo.png" alt="Hedrize" className="w-[150px] h-auto rounded-lg" />
              </h3>
              <p className="text-blue-100/80 mb-4 text-sm leading-relaxed">
                Your trusted partner in connecting visionary leaders with organizations that shape the future.
              </p>
              <div className="flex gap-4">
                {['LinkedIn'].map((social) => (
                    <a key={social} href="https://www.linkedin.com/company/hedrize" className="text-blue-200 hover:text-white transition-colors text-sm">
                      {social}
                    </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              {/*<h4 className="font-semibold mb-6 text-white">Services</h4>*/}
              {/*<ul className="space-y-3 text-sm">*/}
              {/*  {['Executive Search', 'Specialized Recruitment', 'Contract Staffing', 'Career Coaching'].map((item) => (*/}
              {/*      <li key={item}>*/}
              {/*        <Link href="#" className="text-blue-100/70 hover:text-white transition-colors">*/}
              {/*          {item}*/}
              {/*        </Link>*/}
              {/*      </li>*/}
              {/*  ))}*/}
              {/*</ul>*/}
            </div>

            {/* Company */}
            <div>
              {/*<h4 className="font-semibold mb-6 text-white">Company</h4>*/}
              {/*<ul className="space-y-3 text-sm">*/}
              {/*  {['About Us', 'Services', 'Contact', 'Blog'].map((item) => (*/}
              {/*      <li key={item}>*/}
              {/*        <Link href="#" className="text-blue-100/70 hover:text-white transition-colors">*/}
              {/*          {item}*/}
              {/*        </Link>*/}
              {/*      </li>*/}
              {/*  ))}*/}
              {/*</ul>*/}
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Contact Info</h4>
              <ul className="space-y-3 text-sm text-blue-100/70">
                <li className="flex items-center gap-2">
                  <span>📧</span> info@hedrize.com
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span> +62-8177-6900-656
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">📍</span>
                  <span>
                    Skynindo Building 3rd Floor
                    Jl. DR. Susilo Raya No. 23,<br />
                    Jakarta Barat - Indonesia
                </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-200/60">
              <p>&copy; 2025 Hedrize. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
