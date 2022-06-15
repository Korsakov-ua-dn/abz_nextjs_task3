import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body {
            font-family: "Asap", sans-serif;
          }
        `}
      </style>
    </>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));
