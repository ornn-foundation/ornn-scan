import React, { ReactElement } from "react";

interface Props {
  title?: string;
  subTitle?: string;
}

export default function TickerLabel({ title, subTitle }: Props): ReactElement {
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
          font-size: 12px;
        }
      `}</style>
    </>
  );
}
