import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Hakkımızda sayfası",
};

function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Hakkimizda Layout</div>
      <div>{children}</div>
    </>
  );
}

export default HakkimizdaLayout;
