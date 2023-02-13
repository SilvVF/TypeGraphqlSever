import "reflect-metadata";
import  {Request, Response} from "express";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {PlayerResolver} from "./graphql/resolvers/PlayerResolver";
import initCycleTLS  from "cycletls";
import {PlayerService, PlayerServiceImpl} from "./graphql/services/PlayerService";


const express = require('express')

const app = express()
const port = 6969

export type MyContext = {
    req:  Request
    res: Response;

    playerService: PlayerService
};
async function main() {

    const client = await initCycleTLS()
    const playerService =  new PlayerServiceImpl(client)

    const schema = await buildSchema({
        resolvers: [PlayerResolver],
        validate: false
    });

    const server = new ApolloServer({
            schema: schema,
            context: ({req, res}) => ({
                req,
                res,
                playerService
            })
        });
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
