import React, { CSSProperties, ReactElement } from "react";
import { Children } from "../interface";

interface Props extends Children {
  style?: CSSProperties | undefined;
}

export default function Layout({ style, children }: Props): ReactElement {
  return (
    <>
      <div className="container" {...{ style }}>
        {children}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: auto;
        }
      `}</style>
    </>
  );
}
