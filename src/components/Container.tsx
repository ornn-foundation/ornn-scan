import React, { CSSProperties, ReactElement } from "react";
import { Children } from "../interface";
import { Context } from "../lib/context";

interface Props extends Children {
  style?: CSSProperties | undefined;
}

function Container({ children, style }: Props): ReactElement {
  const { state } = React.useContext(Context);
  return (
    <>
      <div className="container" {...{ style }}>
        {children}
      </div>
      <style jsx>{`
        .container {
          flex: 1;
        }
      `}</style>
    </>
  );
}

function Content({ children, style }: Props): ReactElement {
  return (
    <>
      <div className="content" {...{ style }}>
        {children}
      </div>
      <style jsx>{`
        .content {
          width: 100%;
          max-width: 1400px;
          margin-right: auto;
          margin-left: auto;
          padding: 16px;
        }
      `}</style>
    </>
  );
}

Container.Content = Content;

export default Container;
