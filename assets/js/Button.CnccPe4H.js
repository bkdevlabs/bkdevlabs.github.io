import { b as createAstro, c as createComponent, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, h as renderSlot, a as renderTemplate } from './astro/server.Cke6ujzB.js';
import 'clsx';

const $$Astro = createAstro("https://bkdevlabs.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { variant = "primary", href, type = "button", class: className, ...props } = Astro2.props;
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
  };
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const classes = `${baseClasses} ${variantClasses[variant]} ${className || ""}`;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(classes, "class")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/home/runner/work/bkdevlabs.github.io/bkdevlabs.github.io/src/components/Button.astro", void 0);

export { $$Button as $ };
