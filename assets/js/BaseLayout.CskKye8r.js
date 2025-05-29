import { b as createAstro, c as createComponent, m as maybeRenderHead, g as addAttribute, a as renderTemplate, r as renderComponent, i as renderHead, h as renderSlot } from './astro/server.Cke6ujzB.js';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro("https://bkdevlabs.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentPath = Astro2.url.pathname;
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="hidden md:flex items-center space-x-8" aria-label="Main navigation"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`text-gray-700 hover:text-blue-600 font-medium transition-colors ${currentPath === item.href ? "text-blue-600" : ""}`, "class")}${addAttribute(currentPath === item.href ? "page" : void 0, "aria-current")}> ${item.label} </a>`)} </nav>`;
}, "/home/runner/work/bkdevlabs.github.io/bkdevlabs.github.io/src/components/Navigation.astro", void 0);

const $$Astro$1 = createAstro("https://bkdevlabs.com");
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const currentPath = Astro2.url.pathname;
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="md:hidden"> <button id="mobile-menu-button" aria-label="Toggle mobile menu" aria-expanded="false" class="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <div id="mobile-menu" class="hidden absolute top-16 left-0 right-0 bg-white shadow-lg" role="menu" aria-labelledby="mobile-menu-button"> <nav class="px-4 py-2 space-y-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`block px-3 py-2 rounded-md text-base font-medium transition-colors ${currentPath === item.href ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"}`, "class")}${addAttribute(currentPath === item.href ? "page" : void 0, "aria-current")}> ${item.label} </a>`)} </nav> </div> </div> `;
}, "/home/runner/work/bkdevlabs.github.io/bkdevlabs.github.io/src/components/MobileMenu.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white shadow-sm"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between h-16"> <!-- Logo --> <a href="/" class="flex items-center space-x-2" aria-label="BKDevLabs Home"> <svg viewBox="0 0 200 150" class="h-12 w-12 align-middle self-center" xmlns="http://www.w3.org/2000/svg"> <!-- Rounded rectangle frame --> <rect x="20" y="25" width="160" height="100" rx="15" ry="15" fill="none" stroke="#2d3748" stroke-width="6"></rect> <!-- Opening angle bracket < --> <path d="M 80 50 L 60 75 L 80 100" fill="none" stroke="#2d3748" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path> <!-- Forward slash / --> <line x1="95" y1="100" x2="105" y2="50" stroke="#2d3748" stroke-width="8" stroke-linecap="round"></line> <!-- Closing angle bracket > --> <path d="M 120 50 L 140 75 L 120 100" fill="none" stroke="#2d3748" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <span class="text-2xl font-bold text-gray-800">BK<span class="text-blue-600">DevLabs</span></span> </a> <!-- Desktop Navigation --> ${renderComponent($$result, "Navigation", $$Navigation, {})} <!-- Mobile Menu Button --> ${renderComponent($$result, "MobileMenu", $$MobileMenu, {})} </div> </div> </header>`;
}, "/home/runner/work/bkdevlabs.github.io/bkdevlabs.github.io/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white mt-16"> <div class="container mx-auto px-4 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- About --> <div> <h3 class="text-xl font-bold mb-4">BKDevLabs</h3> <p class="text-gray-400">
Empowering developers through tutorials, projects, and services.
</p> </div> <!-- Quick Links --> <div> <h3 class="text-lg font-semibold mb-4">Quick Links</h3> <ul class="space-y-2"> <li><a href="/tutorials" class="text-gray-400 hover:text-white transition-colors">Tutorials</a></li> <li><a href="/products" class="text-gray-400 hover:text-white transition-colors">Products</a></li> <li><a href="/services" class="text-gray-400 hover:text-white transition-colors">Services</a></li> <li><a href="/blog" class="text-gray-400 hover:text-white transition-colors">Blog</a></li> </ul> </div> <!-- Services --> <!--   <div>
        <h3 class="text-lg font-semibold mb-4">Services</h3>
        <ul class="space-y-2">
          <li class="text-gray-400">Web Development</li>
          <li class="text-gray-400">Technical Training</li>
          <li class="text-gray-400">Open Source Solutions</li>
          <li class="text-gray-400">Consulting</li>
        </ul>
      </div> --> <!-- Contact --> <div> <h3 class="text-lg font-semibold mb-4">Connect</h3> <ul class="space-y-2"> <li> <a href="https://github.com/bkdevlabs" class="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
GitHub
</a> </li> <li> <a href="https://twitter.com/bkdevlabs" class="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
Twitter
</a> </li> <li> <a href="mailto:contact@bkdevlabs.com" class="text-gray-400 hover:text-white transition-colors">
contact@bkdevlabs.com
</a> </li> </ul> </div> </div> <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"> <p>&copy; ${currentYear} BKDevLabs. All rights reserved.</p> </div> </div> </footer>`;
}, "/home/runner/work/bkdevlabs.github.io/bkdevlabs.github.io/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://bkdevlabs.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "BKDevLabs - Learn, Build, and Innovate with Web Development" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title} | BKDevLabs</title><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><!-- Preload fonts for better performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>${renderHead()}</head> <body> <a href="#main" class="skip-link">Skip to main content</a> ${renderComponent($$result, "Header", $$Header, {})} <main id="main" class="min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/bkdevlabs.github.io/bkdevlabs.github.io/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
