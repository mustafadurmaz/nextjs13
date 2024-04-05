import React from "react";

function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Hakkimizda Layout</div>
      <div>{children}</div>
    </>
  );
}

export default HakkimizdaLayout;
