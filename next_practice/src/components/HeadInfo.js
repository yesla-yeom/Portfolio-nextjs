import React from "react";
import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta keyword={keyword}></meta>
        <meta content={contents} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

HeadInfo.defaultProps = {
  title: "Yena's Portfoliooooo",
  keyword: "My Blog powered by Next js",
  contents: "practice Next js",
};

export default HeadInfo;
