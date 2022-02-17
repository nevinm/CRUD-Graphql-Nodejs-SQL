import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "GraphqlCRUD",
    username: "root",
    password: "starfire",
    logging: true,
    synchronize: false, // update this to true if you update entities.
    entities: [Users]
  })

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
  }))

  app.listen(3001, () => {
    console.log("APP RUNNING ON 3001")
  })
}

main().catch((err) => {
  console.log("TCL errr -> ", err)
})
