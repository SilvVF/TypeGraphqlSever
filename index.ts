import "reflect-metadata";
import {Request, Response} from "express";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {PlayerResolver} from "./graphql/resolvers/PlayerResolver";


const express = require('express')

const app = express()
const port = 6969

async function main() {

    const schema = await buildSchema({
        resolvers: [PlayerResolver],
    });

    const server = new ApolloServer({ schema });
    await server.start()
    server.applyMiddleware({ app });


    app.get('/', (req: Request, res: Response) => {
        res.send("received")
    })

    app.listen(port, () => {
        console.log(`started listening on port ${port}`)
    })
}

main()
