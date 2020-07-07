import React, { useEffect } from "react";
import styled from "styled-components";

export const AdSense = ({ format = "auto" }) => {
  useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  });

  return (
    <div>
      <Ins
        className="adsbygoogle"
        data-ad-client="ca-pub-7262234949336735"
        data-ad-slot=""
        data-ad-format={format}
      />
    </div>
  );
};

const Ins = styled.ins`
  display: block;
`;
