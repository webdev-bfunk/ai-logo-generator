import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { Suspense } from 'react'
import { ClerkProvider } from "@clerk/nextjs";

const host_Grotesk = Host_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Logo Generator",
  description: "AI Logo Generator",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${host_Grotesk.variable} antialiased`}
        >
          <Suspense>
            <Provider>
              {children}
            </Provider>
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
