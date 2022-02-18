import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean} from "graphql";

// Custom types for our app.
export const MessageType = new GraphQLObjectType({
    name: "Message",
    fields: () => ({
       successful: { type: GraphQLBoolean },
       message: { type: GraphQLString },
    })
})
