import React, { ReactElement } from "react";
import Head from "next/head";

interface Props {
  title?: string;
}

export default function TabHead({ title }: Props): ReactElement {
  return (
    <Head>
      <title>{title || "Create Next App"}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
