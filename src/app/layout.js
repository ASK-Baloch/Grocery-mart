import { Inter , Outfit , Roboto_Flex } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({ subsets: ["latin"] });

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
