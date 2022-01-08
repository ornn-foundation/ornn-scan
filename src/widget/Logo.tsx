import React, { ReactElement } from "react";

interface Props {
  color?: string;
  scale?: number;
  margin?: string;
  onClick?: () => void;
}

export default function Logo({
  margin,
  onClick,
  scale,
  color,
}: Props): ReactElement {
  return (
    <>
      <div
        className="link"
        style={{
          width: "fit-content",
          transform: `scale(${scale})`,
          cursor: "pointer",
        }}
      >
        <div className="logo">
          <div className="circle"></div>
          <div className="mask"></div>
        </div>
      </div>
      <style jsx>{`
        .logo {
          transition-duration: 0.3s;
          width: 50px;
          height: 50px;
          border-radius: 50px;
          position: relative;
          background: var(--ornn-primary);
          margin: ${margin || "0"};
        }
        /* .logo:hover {
          transition-duration: 0s;
          filter: brightness(92%);
        } */
        .circle {
          transition-duration: 0.3s;
          width: 18px;
          height: 18px;
          border-radius: 50px;
          border: 3.5px solid var(--ornn-background);
          position: absolute;
          bottom: 11px;
          right: 11px;
        }
        .mask {
          transition-duration: 0.3s;
          width: 5px;
          height: 5px;
          background-color: var(--ornn-background);
          border-radius: 50px;
          position: absolute;
          bottom: 7px;
          right: 3px;
        }
      `}</style>
    </>
  );
}
