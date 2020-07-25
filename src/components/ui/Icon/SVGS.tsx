import React from "react";
import styled from "styled-components";

export const SunSVG = () => {
  return (
    <SVG>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-sun"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#0a0a0a"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
      </svg>
    </SVG>
  );
};

export const MoonSVG = () => {
  return (
    <SVG>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-moon"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#FF5722"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
      </svg>
    </SVG>
  );
};

export const GithubSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-github"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
    </svg>
  );
};

const SVG = styled.i`
  svg {
    stroke: ${(props) => props.theme.colors.onBackground};
    height: 32px;
  }

  svg:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.size.small} {
    svg {
      height: 32px;
    }
  }
`;
