import "../styles/globals.css";
import { store } from "../store";
import { Provider } from "react-redux";
import { AuthContextProvider } from "../context/authContext";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
