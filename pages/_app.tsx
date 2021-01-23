import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import Container from "../components/atoms/Container";
import "../styles/index.css";

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <div className="h-full flex flex-col">
      <Header />
      <Container className="py-8 flex-grow">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </div>
    <div id="modal" />
  </Provider>
);

export default App;
