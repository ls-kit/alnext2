import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
