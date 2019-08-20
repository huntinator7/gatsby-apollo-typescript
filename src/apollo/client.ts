import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-fetch";
import { createHttpLink } from "apollo-link-http";

const cache = new InMemoryCache();

const link = createHttpLink({ uri: "http://10.0.1.133:7119/graphql", fetch });

export const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
});
