// import global styles
import "@/styles/globals.scss";
// import layouts
import Layouts from "@/layouts";
// import swiper (slider) styles
import 'swiper/css';

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
