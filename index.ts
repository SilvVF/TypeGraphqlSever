
declare module 'express-session' {
    interface Session {
        userId: string
    }
}


import "reflect-metadata";
import  {Request, Response} from "express";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {PlayerResolver} from "./graphql/resolvers/PlayerResolver";
import initCycleTLS  from "cycletls";
import {PlayerRepo, PlayerRepoImpl} from "./graphql/data/PlayerRepo";
import session, {Session} from "express-session"
import express from "express";
import connectRedis from "connect-redis";



export type MyContext = {
    req:  express.Request
    res: express.Response
    session: Session
    playerRepo: PlayerRepo
};


async function main() {

    const app = express()
    const port = 6969

    const SESSION_SECRET = "sdkfjalskdjfkls"
    // ioredis
    const RedisStore = connectRedis(session)
    const Redis = require("ioredis")
    let redisClient = new Redis()

    const client = await initCycleTLS()
    const playerRepo =  new PlayerRepoImpl(client)

    app.use(
        session({
        name: "sessId",
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
        },
        store: new RedisStore({
            client: redisClient,
            disableTouch: true
        }),
    }))

    const schema = await buildSchema({
        resolvers: [PlayerResolver],
        validate: false
    });

    const server = new ApolloServer({
            schema: schema,
            context: ({req, res}): MyContext => ({
                req: req,
                res : res,
                session: req.session!,
                playerRepo
            })
        });
    await server.start()

    server.applyMiddleware({
        app,
        cors : {
            credentials: true,
            origin: "https://studio.apollographql.com",
        }
    });


    app.get('/', (req: Request, res: Response) => {
        res.send("received")
    })

    app.listen(port, () => {
        console.log(`started listening on port ${port}`)
    })
}

main().catch(e => console.log(e))
