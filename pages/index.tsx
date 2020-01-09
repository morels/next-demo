import { NextPage, NextPageContext } from "next";

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => (
  <main>
    <div>Welcome to Next.js!</div>
    <div style={{ textAlign: "center" }}>Your user agent: {userAgent}</div>
  </main>
);

Page.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
