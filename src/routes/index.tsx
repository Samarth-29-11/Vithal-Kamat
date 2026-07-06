import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logoAsset from "@/assets/logo.asset.json";
import logoTransparent from "@/assets/logo-transparent.png";
import { menu } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: "/vithal-kamat-circle.jpg",
      },
      {
        name: "twitter:image",
        content: "/vithal-kamat-circle.jpg",
      },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const heroBg = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=60`;

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SectionDivider />
      <MenuSection />
      <SectionDivider />
      <RateUs />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <ConnectSection />
    </main>
  );
}

function Hero() {
  const bgImages = [
    "photo-1567337710282-00832b415979",
    "photo-1585937421612-70a008356fbe",
    "photo-1541167760496-1628856ab772",
    "photo-1668236543090-82eba5ee5976",
    "photo-1596797038530-2c107229654b",
    "photo-1606491956689-2ea866880c84",
  ];
  return (
    <section className="relative flex items-start justify-center overflow-hidden px-0 pt-0 pb-0">
      {/* Blurred food background collage */}
      <div className="absolute inset-0 grid grid-cols-3 opacity-25">
        {bgImages.map((id, i) => (
          <div
            key={i}
            className="h-full w-full bg-cover bg-center blur-2xl scale-110"
            style={{ backgroundImage: `url(${heroBg(id)})` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, white 85%)" }} />

      <div className="relative z-10 w-full flex flex-col items-center text-center -mt-4 sm:-mt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
            scale: { type: "spring", stiffness: 90, damping: 12 },
          }}
          className="w-full max-w-[640px] md:max-w-[768px]"
        >
          <img
            src="/Screenshot_20260706_141905_Drive.jpg.jpeg"
            alt="Vithal Kamat Original Family Restaurant"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="w-full py-2 sm:py-3 md:py-4 overflow-hidden relative">
      <div className="relative w-full h-3 sm:h-4 overflow-hidden">
        {/* Divider bar: clips left-to-right once when scrolled into view */}
        <div
          className="w-full h-full transition-[clip-path] duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] flex"
          style={{
            clipPath: isInView
              ? "inset(0 0% 0 0)"
              : "inset(0 100% 0 0)",
          }}
        >
          <div className="w-1/3 h-full bg-[#d62828]" />
          <div className="w-1/3 h-full bg-[#2e9c3e]" />
          <div className="w-1/3 h-full bg-[#a4d233]" />
        </div>
        {/* Shimmer overlay: sweeps left-to-right once */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none transition-transform duration-[1.6s] ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            transform: isInView ? "translateX(300%)" : "translateX(-100%)",
            transitionDelay: isInView ? "0.4s" : "0s",
          }}
        />
      </div>
    </div>
  );
}


function MenuSection() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-brand-red" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">
              Menu
            </span>
            <span className="h-px w-12 bg-brand-red" />
          </div>
          <h2 className="font-display text-5xl sm:text-7xl text-brand-ink">
            Our Menu
          </h2>
        </motion.div>

        {/* Menu will be added here */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {menu.map((cat, idx) => (
            <MenuCard key={cat.title} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  category,
  index,
}: {
  category: (typeof menu)[number];
  index: number;
}) {
  return (
    <div
      className="group relative rounded-3xl bg-white/80 backdrop-blur-sm border border-brand-ink/5 p-6 sm:p-8 shadow-[0_10px_40px_-15px_rgba(31,26,23,0.15)] hover:shadow-[0_20px_60px_-15px_rgba(214,40,40,0.2)] transition-all duration-500 overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 h-1 w-24 bg-gradient-to-l from-brand-red via-brand-green to-transparent" />

      <div className="flex items-start gap-4 mb-5 pb-4 border-b border-dashed border-brand-ink/10">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-2xl sm:text-3xl text-brand-red leading-tight">
            {category.title}
          </h3>
          <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-brand-green mt-1">
            {category.items.length} items
          </p>
        </div>
      </div>

      <ul className="space-y-2.5">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="flex items-baseline gap-3 group/item"
          >
            <span className="font-sans text-sm sm:text-[15px] text-brand-ink/90 leading-snug">
              {item.name}
            </span>
            <span className="flex-1 border-b border-dotted border-brand-ink/20 translate-y-[-3px]" />
            <span className="font-heading text-sm sm:text-[15px] font-semibold text-brand-ink whitespace-nowrap">
              ₹{item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RateUs() {
  const url = "https://maps.app.goo.gl/54bAa9BL253dK6fv8";
  return (
    <section className="py-20 px-6">
      <motion.a
        {...fadeUp}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block max-w-3xl mx-auto"
      >
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-br from-[#c0392b] via-[#e74c3c] to-[#d35400] border border-white/15 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(192,57,43,0.45)] shadow-[0_15px_40px_rgba(192,57,43,0.3)] cursor-pointer relative overflow-hidden">
          <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            Loved your experience?
          </h2>
          <p className="mt-2 font-serif-italic text-xl sm:text-2xl text-white/90">
            Your review helps us grow.
          </p>
          <div className="mt-6 flex justify-center gap-1.5 text-4xl">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, type: "spring" }}
                whileHover={{ scale: 1.25, rotate: 12, transition: { type: "spring", stiffness: 300 } }}
                className="text-[#f39c12] cursor-pointer drop-shadow-[0_0_8px_rgba(243,156,18,0.5)]"
              >
                ★
              </motion.span>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-[#8b1a1a] font-heading font-bold text-base uppercase tracking-widest shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] group-hover:scale-105 active:scale-98 transition-all duration-300">
              <GoogleIcon />
              Rate us on Google
              <span className="transition-transform group-hover:translate-x-1 font-bold">→</span>
            </div>
          </div>
        </div>
      </motion.a>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function Gallery() {
  // Row 1 has 4 photos
  const row1Items = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
  ];
  // Row 2 has 3 photos, repeated once to make the row longer and loop smoothly
  const row2Items = [
    "/gallery-5.jpg",
    "/gallery-6.jpg",
    "/gallery-7.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
    "/gallery-7.jpg",
  ];

  // We duplicate each array to allow seamless scrolling marquee (from 0% to -50% translation)
  const row1 = [...row1Items, ...row1Items];
  const row2 = [...row2Items, ...row2Items];

  return (
    <section className="py-20 overflow-hidden">
      <motion.div {...fadeUp} className="text-center mb-12 px-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-px w-12 bg-brand-green" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">
            Moments
          </span>
          <span className="h-px w-12 bg-brand-green" />
        </div>
        <h2 className="font-display text-5xl sm:text-7xl text-brand-ink">Gallery</h2>
      </motion.div>

      <div className="space-y-6">
        <div className="flex gap-6 animate-marquee-left w-max">
          {row1.map((src, i) => (
            <GalleryImg key={`a-${i}`} src={src} />
          ))}
        </div>
        <div className="flex gap-6 animate-marquee-right w-max">
          {row2.map((src, i) => (
            <GalleryImg key={`b-${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryImg({ src }: { src: string }) {
  return (
    <div className="h-52 w-72 sm:h-64 sm:w-96 shrink-0 overflow-hidden rounded-3xl shadow-[0_15px_40px_-15px_rgba(31,26,23,0.35)] group">
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  );
}

const links = [
  {
    name: "Google Maps",
    url: "https://maps.app.goo.gl/54bAa9BL253dK6fv8",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
  },
  {
    name: "Google Reviews",
    url: "https://maps.app.goo.gl/54bAa9BL253dK6fv8",
    color: "#FBBC04",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
  {
    name: "Justdial",
    url: "https://www.justdial.com/Satara/Vithal-Kamat-Restaurant-Khambatki-Ghat/9999P2162-2162-181204180834-A3F4_BZDET",
    color: "#FFFFFF",
    icon: (
      <img
        src="/justdial-logo.png"
        alt="Justdial"
        className="w-11 h-auto object-contain"
      />
    ),
  },
  {
    name: "Zomato",
    url: "https://www.zomato.com/satara/vithal-kamats-3-satara-locality/order",
    color: "#E23744",
    icon: (
      <img
        src="/zomato-logo.png"
        alt="Zomato"
        className="w-12 h-auto object-contain"
      />
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100064069448203",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 5.99 4.39 10.95 10.13 11.85V15.47H7.08V12h3.05V9.36c0-3.01 1.79-4.68 4.54-4.68 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38C19.61 22.95 24 17.99 24 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/hotel_vitthalkamat?igsh=MWR5dHFheGpnbzRmdg==",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.66.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.66 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
      </svg>
    ),
  },
];

function ConnectSection() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-12 bg-brand-red" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">
              Reach Us
            </span>
            <span className="h-px w-12 bg-brand-red" />
          </div>
          <h2 className="font-display text-5xl sm:text-7xl text-brand-ink">
            Connect With Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {links.map((l, i) => (
            <motion.a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]"
            >
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg text-white"
                style={{ backgroundColor: l.color }}
              >
                {l.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-ink">
                {l.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">
                Visit
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-brand-ink/10 text-center">
          <p className="text-xs text-brand-ink font-medium tracking-wide">
            Powered by VirtualVue | +91 9130130556
          </p>
        </div>
      </div>
    </section>
  );
}

