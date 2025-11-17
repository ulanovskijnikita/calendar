import type { Metadata } from "next";
import "./globals.css";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Calendar",
};

export default function RootLayout({ children }: PropsWithChildren) {

  return (

    <html lang="en">

      <body
        className={`antialiased`}
      >

        {children}
      </body>
    </html>
  )
}
