import Footer from "components/Footer";
import PageHeader from "components/PageHeader";
import { ReactNode } from "react";
import * as S from './styles'

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
