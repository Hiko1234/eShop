// import layouts
import Header from "./header";
import Footer from "./footer/Footer";
// import head
import Head from "next/head";

const Layouts = ({ children, ...props }) => {
  return (
    <>
      <Head>
        <title>eShop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <Header />
        <main style={{flex: "1 1 auto"}} {...props}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;