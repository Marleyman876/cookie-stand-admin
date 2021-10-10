import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { AuthProvider } from "../context/auth";
import { store } from "../reduxStore";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>

    // <Component {...pageProps} />
  );
}

export default MyApp;
