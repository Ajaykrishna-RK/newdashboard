import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

//router
import { BrowserRouter } from "react-router-dom";
//store

import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//reducer
import { store } from "./store";

import "./i18n";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="/">
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    </QueryClientProvider>
     
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

