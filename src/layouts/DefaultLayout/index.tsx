import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import Footer from "components/Footer";
import PageHeader from "components/PageHeader";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children?: ReactNode;
  home?: boolean;
  breadCrumbs?: boolean;
};

const DefaultLayout = ({
  children,
  home,
  breadCrumbs = false,
}: DefaultLayoutProps) => {
  return (
    <>
      <PageHeader />
      {!home && <div style={{ paddingTop: "90px" }} />}
      {breadCrumbs && (
        <Container>
          <div style={{ padding: "1rem 0 2rem" }}>
            <BreadCrumbs />
          </div>
        </Container>
      )}

      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
