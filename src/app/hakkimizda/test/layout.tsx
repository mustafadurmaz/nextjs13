import React from "react";

function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Test Layout</div>
      <div>{children}</div>
    </>
  );
}

export default TestLayout;
