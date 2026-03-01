import { Montserrat, Poppins } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  // "optional": no font swap ever occurs → zero CLS from font loading.
  // The browser uses the font only if it loads within ~100ms (cached). On slow
  // connections the fallback is kept; on subsequent visits the font is cached
  // and renders immediately. This is the recommended setting for CLS = 0.
  display: "optional",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "optional",
});
