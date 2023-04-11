import React from "react";

function SadBanner({ children }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{children}</strong>.
      </p>
    </div>
  );
}

export default SadBanner;
