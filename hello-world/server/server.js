import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

// console.log(typeDefs);

const resolvers = {
  Query: {
    greeting: () => 'Hello World'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`Server running at ${url}`);
