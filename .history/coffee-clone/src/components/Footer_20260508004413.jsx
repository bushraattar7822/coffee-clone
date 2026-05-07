import { Link } from "react-router-dom";

const shopLinks = [
  ["Coffee", "/collections/shop-all"],
  ["Cold Brew Collection", "/collections/shop-all"],
  ["Specialty Instant Coffee", "/collections/shop-all"],
  ["Gifts & Merchandise", "/collections/shop-all"],
  ["Brew Gear", "/collections/shop-all"],
  ["Classes", "/pages/home-consumers"],
  ["My Account", "/account/login"],
];

const learnLinks = [
  ["Locations", "/pages/locations"],
  ["Wholesale", "/pages/wholesale"],
  ["Contact", "/pages/wholesale"],
  ["Blog", "/pages/wholesale"],
  ["Frequently Asked Questions", "/pages/wholesale"],
  ["Privacy Policy", "/pages/wholesale"],
  ["Accessibility Statement", "/pages/wholesale"],
  ["Download Our App", "https://tapk.it/joecoffee"],
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/joecoffeecompany",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
        <path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.7l-5.2-6.8L5.6 22H2.3l7.7-8.8L1.8 2h6.8l4.7 6.2L18.9 2Zm-1.2 17.9h1.8L7.6 4H5.7l12 15.9Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/joecoffeecompany",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
        <path d="M14 8.3V6.6c0-.8.5-1 1-1h2.5V2.1L14.1 2C10.7 2 9 4 9 6.2v2.1H6v3.9h3V22h4.1v-9.8h3.3l.6-3.9H14Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/joecoffeecompany",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@joecoffeecompany",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="currentColor">
        <path d="M16.2 2c.4 3 2.1 4.8 4.8 5v3.4c-1.6.2-3.1-.4-4.7-1.4v6.5c0 8.2-9 10.8-12.7 4.9-2.4-3.8-.9-10.5 6.8-10.8v3.6c-.5.1-1 .2-1.5.4-1.5.5-2.3 1.6-2.1 3.1.4 2.9 5.7 3.8 5.3-1.9V2h4.1Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/joe-coffee-company",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="currentColor">
        <path d="M4.8 3.5a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6ZM2.8 9.7h4v12.1h-4V9.7Zm6.3 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.7 2.6 4.7 6v6.4h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8h-4V9.7Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <section className="bg-white px-6 py-16 text-center font-['Nunito'] text-[#24282a]">
        <h2 className="text-[42px] font-black leading-tight">Stay in the loop</h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[16px] font-black leading-7">
          Be the first to know about fresh coffees, menu updates, and news from Joe.
        </p>

        <form className="mx-auto mt-8 max-w-[520px] text-left">
          <p className="mb-4 text-[13px] font-black">* indicates required</p>
          <label className="mb-2 block text-[15px] font-black">
            Email Address *
          </label>
          <div className="flex gap-3">
            <input
              type="email"
              className="h-[48px] flex-1 rounded-full border border-gray-300 px-5 text-[15px] font-bold outline-none transition focus:border-[#118acb]"
            />
            <button
              type="submit"
              className="h-[48px] rounded-full bg-[#24282a] px-8 text-[14px] font-black uppercase text-white transition hover:bg-black"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>

      <footer className="overflow-hidden bg-[#118acb] font-['Nunito'] text-white">
        <div className="grid grid-cols-1 gap-12 px-8 pb-10 pt-16 lg:grid-cols-[1.45fr_1fr_1fr] lg:px-20">
          <div>
            <h3 className="mb-3 text-[18px] font-black">
              Customer Service Hours
            </h3>
            <p className="text-[15px] font-bold leading-7 text-white/80">
              Monday-Friday, 9am - 5pm EST
            </p>
            <p className="text-[15px] font-bold leading-7 text-white/80">
              Please allow 24-48 hours for a response.
            </p>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Learn" links={learnLinks} />
        </div>

        <div className="px-8 pb-8 lg:px-20">
          <div className="mb-6 flex items-center gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="text-white/80 transition hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="text-[14px] font-bold text-white/75">
            © 2026,{" "}
            <Link to="/" className="hover:text-white hover:underline">
              Joe Coffee Company
            </Link>
            .{" "}
            <a
              href="https://www.shopify.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:underline"
            >
              Powered by Shopify
            </a>
          </p>

          <a
            href="https://shop.app"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5a31f4] px-5 py-2.5 text-[14px] font-black text-white transition hover:bg-[#4826cf]"
          >
            <span className="text-[16px] leading-none">♡</span>
            Follow on Shop
          </a>
        </div>

        <div className="mt-2 overflow-hidden">
          <img
            src="https://joecoffeecompany.com/cdn/shop/files/horizontal_KO.png?v=1750876109&width=2000"
            alt="Joe Coffee"
            className="ml-[-8px] w-[105vw] max-w-none select-none"
          />
        </div>
      </footer>
    </>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-[12px] font-black uppercase tracking-[0.12em]">
        {title}
      </h3>

      <div className="space-y-2">
        {links.map(([label, path]) =>
          path.startsWith("http") ? (
            <a
              key={label}
              href={path}
              target="_blank"
              rel="noreferrer"
              className="block text-[15px] font-bold text-white/80 transition hover:text-white hover:underline"
            >
              {label}
            </a>
          ) : (
            <Link
              key={label}
              to={path}
              className="block text-[15px] font-bold text-white/80 transition hover:text-white hover:underline"
            >
              {label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
