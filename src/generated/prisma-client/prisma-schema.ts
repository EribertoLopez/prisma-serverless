// Code generated by Prisma (prisma@1.31.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregatePasswordMeta {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createPasswordMeta(data: PasswordMetaCreateInput!): PasswordMeta!
  updatePasswordMeta(data: PasswordMetaUpdateInput!, where: PasswordMetaWhereUniqueInput!): PasswordMeta
  updateManyPasswordMetas(data: PasswordMetaUpdateManyMutationInput!, where: PasswordMetaWhereInput): BatchPayload!
  upsertPasswordMeta(where: PasswordMetaWhereUniqueInput!, create: PasswordMetaCreateInput!, update: PasswordMetaUpdateInput!): PasswordMeta!
  deletePasswordMeta(where: PasswordMetaWhereUniqueInput!): PasswordMeta
  deleteManyPasswordMetas(where: PasswordMetaWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PasswordMeta {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  resetToken: String!
}

type PasswordMetaConnection {
  pageInfo: PageInfo!
  edges: [PasswordMetaEdge]!
  aggregate: AggregatePasswordMeta!
}

input PasswordMetaCreateInput {
  id: ID
  resetToken: String!
}

input PasswordMetaCreateOneInput {
  create: PasswordMetaCreateInput
  connect: PasswordMetaWhereUniqueInput
}

type PasswordMetaEdge {
  node: PasswordMeta!
  cursor: String!
}

enum PasswordMetaOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  resetToken_ASC
  resetToken_DESC
}

type PasswordMetaPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  resetToken: String!
}

type PasswordMetaSubscriptionPayload {
  mutation: MutationType!
  node: PasswordMeta
  updatedFields: [String!]
  previousValues: PasswordMetaPreviousValues
}

input PasswordMetaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PasswordMetaWhereInput
  AND: [PasswordMetaSubscriptionWhereInput!]
  OR: [PasswordMetaSubscriptionWhereInput!]
  NOT: [PasswordMetaSubscriptionWhereInput!]
}

input PasswordMetaUpdateDataInput {
  resetToken: String
}

input PasswordMetaUpdateInput {
  resetToken: String
}

input PasswordMetaUpdateManyMutationInput {
  resetToken: String
}

input PasswordMetaUpdateOneInput {
  create: PasswordMetaCreateInput
  update: PasswordMetaUpdateDataInput
  upsert: PasswordMetaUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: PasswordMetaWhereUniqueInput
}

input PasswordMetaUpsertNestedInput {
  update: PasswordMetaUpdateDataInput!
  create: PasswordMetaCreateInput!
}

input PasswordMetaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  AND: [PasswordMetaWhereInput!]
  OR: [PasswordMetaWhereInput!]
  NOT: [PasswordMetaWhereInput!]
}

input PasswordMetaWhereUniqueInput {
  id: ID
}

type Query {
  passwordMeta(where: PasswordMetaWhereUniqueInput!): PasswordMeta
  passwordMetas(where: PasswordMetaWhereInput, orderBy: PasswordMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PasswordMeta]!
  passwordMetasConnection(where: PasswordMetaWhereInput, orderBy: PasswordMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PasswordMetaConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  passwordMeta(where: PasswordMetaSubscriptionWhereInput): PasswordMetaSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  role: UserRole!
  firstName: String
  lastName: String
  phone: String
  passwordMeta: PasswordMeta
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  role: UserRole
  firstName: String
  lastName: String
  phone: String
  passwordMeta: PasswordMetaCreateOneInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  phone_ASC
  phone_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  role: UserRole!
  firstName: String
  lastName: String
  phone: String
}

enum UserRole {
  USER
  ADMIN
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  role: UserRole
  firstName: String
  lastName: String
  phone: String
  passwordMeta: PasswordMetaUpdateOneInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  role: UserRole
  firstName: String
  lastName: String
  phone: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  passwordMeta: PasswordMetaWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`