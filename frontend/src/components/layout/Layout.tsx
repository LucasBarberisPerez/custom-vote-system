import "../../styles/global.scss";
import Header from "./header/Header";
import Main from "./main/Main";
//import Footer from "./footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    {/* <Footer/>*/}
    </>
  );
}
