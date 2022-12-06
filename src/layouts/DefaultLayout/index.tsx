import Footer from "components/Footer";
import PageHeader from "components/PageHeader";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children?: ReactNode;
}

const DefaultLayout = ({children}:DefaultLayoutProps) => {
  return(
    <>
      <PageHeader />
        {children}
      <Footer />
    </>
  )
};

export default DefaultLayout
