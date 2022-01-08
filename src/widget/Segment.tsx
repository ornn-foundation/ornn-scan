import React, { ReactElement } from "react";
import { Children } from "../interface";

interface Props extends Children {
  active?: string;
  event?(value?: string): void;
}

export default function Segment({
  event,
  active,
  children,
}: Props): ReactElement {
  const [itemActive, setItemActive] = React.useState(active);
  const [childrenWithProps, setChildrenWithProps] =
    React.useState<(string | JSX.Element)[]>(null);
  React.useEffect(() => {
    if (event) event(itemActive);
    setChildrenWithProps(
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<any>(child, {
            active: itemActive,
            setItemActive,
          });
        }
        return child;
      })
    );
    return () => {};
  }, [itemActive]);
  return (
    <>
      <div className="container">{childrenWithProps}</div>
      <style jsx>{`
        .container {
          width: fit-content;
          padding: 3px;
          background-color: var(--ornn-light);
          border-radius: 8px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          user-select: none;
          position: relative;
          border: 1px solid var(--ornn-light);
        }
      `}</style>
    </>
  );
}

interface ItemProps extends Children {
  label?: string;
  value?: string;
}

function Item({ label, value, ...result }: ItemProps): ReactElement {
  return (
    <>
      <button
        className={
          result["active"] === value ? "active btn-segment" : "btn-segment"
        }
        onClick={() => {
          result["setItemActive"](value);
        }}
      >
        {label}
      </button>
      <style jsx>{`
        .active:before {
          transform: translateX(calc(0% + 0px));
        }

        .active {
          background-color: var(--ornn-background) !important;
        }

        .btn-segment {
          padding: 3px 9px;
          border-radius: 6px;
          height: auto;
          transition: all 0.1s ease 0s;
          z-index: 2;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          color: var(--ornn-text);
          height: 30px;
          background-color: initial;
        }
      `}</style>
    </>
  );
}

Segment.Item = Item;
