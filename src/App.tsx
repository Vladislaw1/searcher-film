import React from "react";
import { Container, Footer } from "./components";
import { Header } from "./components/Header";
import { ProgressContextProvider, QuestionContextProvider } from "./context";
import { QuestionPage } from "./page";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ProgressContextProvider>
        <QuestionContextProvider>
          <Container>
            <Header />
            <QuestionPage />
            <Footer />
          </Container>
        </QuestionContextProvider>
      </ProgressContextProvider>
    </Provider>
  );
}

export default App;
