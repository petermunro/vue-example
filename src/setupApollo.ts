import ApolloClient from "apollo-boost";

const token = "INSERT_YOUR_TOKEN_HERE";

export const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "https://api.github.com/graphql",
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
});
