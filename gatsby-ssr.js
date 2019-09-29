import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./src/apollo/client";
import "normalize.css";
import { ToastContainer } from "react-toastify";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <ToastContainer />
    {element}
  </ApolloProvider>
);
