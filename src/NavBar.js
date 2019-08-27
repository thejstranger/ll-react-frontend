import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import Colors from "./Colors";

const color = Colors.primary;
const spin = keyframes`
to {
    transform: rotate(360deg);
}`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${color};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Labyrinth Lords</Link>
      <span
        css={css`
          font-size: 60px;
          animation: 1s ${spin} linear infinite;
          display: inline-block;

          &:hover {
            animation: 1s ${spin} linear infinite reverse;
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🎲
      </span>
    </header>
  );
};

export default NavBar;
