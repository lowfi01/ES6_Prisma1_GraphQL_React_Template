const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    publishedPosts: [Post!]!
    post(postId: ID!): Post
    postsByUser(userId: ID!): [Post!]!
    fetchUsers: [User]!
    fetchJobs: [Job]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    createDraft(title: String!, userId: ID!): Post
    publish(postId: ID!): Post
    createJob(title: String!): Job
    hireUser(jobId: ID!, userId: ID!, title: String, email: String): Job
  }

  type User {
    id: ID!
    email: String
    name: String!
    posts: [Post!]
    jobs: [Job!]
  }

  type Post {
    id: ID!
    title: String!
    published: Boolean!
    author: User
  }

  type Job {
    id: ID!
    title: String!
    employee: User
  }
`;

module.exports = typeDefs;