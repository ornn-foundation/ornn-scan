import React, { ReactElement } from "react";

interface Props {
  title?: string;
  subTitle?: string;
}

export default function PriceLabel({ title, subTitle }: Props): ReactElement {
  const [ticker, setTicker] = React.useState({
    title: "",
    subTitle: "",
  });
  React.useEffect(() => {
    setTicker((v) => ({ ...v, title, subTitle }));
    return () => {};
  }, [title, subTitle]);
  return (
    <>
      <div className="ticker">
        <p>{ticker.subTitle}</p>
        <span>{ticker.title}</span>
      </div>
      <style jsx>{`
        .ticker {
          padding: 0 16px;
        }
        p,
        span {
          font-weight: 600;
        }
        p {
          font-size: 16px;
          color: var(--ornn-text);
        }
        span {
          font-size: 11px;
        }
      `}</style>
    </>
  );
}
