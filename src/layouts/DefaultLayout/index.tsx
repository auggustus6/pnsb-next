import Footer from "components/Footer";
import PageHeader from "components/PageHeader";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children?: ReactNode;
  home?: boolean;
};

const DefaultLayout = ({ children,home }: DefaultLayoutProps) => {
  return (
    <>
      <PageHeader />
      {!home && <div style={{paddingTop: "90px"}} />}

      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
