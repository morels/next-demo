import { NextPage, NextPageContext } from "next";
import React from "react";

interface Props {
  userAgent?: string;
}

export default class Page extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    const { userAgent } = this.props;
    return (
      <main>
        <div>Welcome to Next.js!</div>
        <div style={{ textAlign: "center" }}>Your user agent: {userAgent}</div>
      </main>
    );
  }
}
