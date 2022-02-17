import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

// Custom types for our app.
export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        username: { type: GraphQLString},
        password: { type: GraphQLString}
    })
})
