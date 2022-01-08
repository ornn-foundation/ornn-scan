import React, { ReactElement } from "react";
import { Children, Style } from "../interface";

interface Props extends Children, Style {
  onClick?(): void;
}

export default function ButtonSetting({
  children,
  onClick,
  style,
}: Props): ReactElement {
  return (
    <>
      <button {...{ style }} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          transition-duration: 0.4s;
          -webkit-box-align: center;
          align-items: center;
          background-color: transparent;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          font-weight: 600;
          height: 100%;
          line-height: 12px;
          margin: 0px;
          padding: 5px;
          vertical-align: baseline;
          white-space: nowrap;
          color: var(--ornn-text);
        }
        button:hover {
          background-color: var(--ornn-light);
        }
        button:active {
          opacity: 0.5;
        }
      `}</style>
    </>
  );
}
