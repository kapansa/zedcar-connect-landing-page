import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://zedcarconnect.com"),
  alternates: {
    canonical: "/",
  },
  title: "ZedCar Connect | A Car Market Place",
  description:
    "Introducing ZedCar Connect, the one-stop solution for all your car buying and selling needs.",
  openGraph: {
    url: "/",
    title: "ZedCar Connect | A Car Market Place",
    type: "article",
    description:
      "Introducing ZedCar Connect, the one-stop solution for all your car buying and selling needs.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
